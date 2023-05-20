const FilterProductReducer = (state, action) => {
    switch (action.type) {

        case "LOAD_FILTER_PRODUCT":
            return {
                ...state,
                filter_products: [...action.payload],
                All_products: [...action.payload]
            };
        case "GRID_VIEW":
            return {
                ...state,
                grid_view: false
            }
        case "LIST_VIEW":
            return {
                ...state,
                grid_view: true
            }
        case "SORTING_THE_VALUE":
            let userSortVlaue = document.getElementById("sort");
            let sort_value = userSortVlaue.options[userSortVlaue.selectedIndex].value;
            return {
                ...state,
                sorting_value: sort_value,
            }
        case "SORTING_PRODUCTS":

            let newSortData;
            let temSortProduct = [...action.payload];

            const sortingProducts = (a, b) => {
                if (state.sorting_value === "lowest") {
                    return a.price - b.price;
                };

                if (state.sorting_value === "highest") {
                    return b.price - a.price;
                };


                if (state.sorting_value === "a-z") {
                    return a.name.localeCompare(b.name);
                };

                if (state.sorting_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }
            newSortData = temSortProduct.sort(sortingProducts);
            return {
                ...state,
                filter_products: newSortData,
            }

        default:
            return state;

    }
}

export default FilterProductReducer