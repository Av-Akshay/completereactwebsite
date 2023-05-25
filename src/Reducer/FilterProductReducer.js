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
            // let temSortProduct = [...action.payload];
            const { filter_products } = state;
            let temSortProduct = [...filter_products];

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
        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            }
        case "UPDATE_INPUTE_VALUE":
            let { All_products } = state;
            let newUpdateValue = [...All_products];
            const { text } = state.filters;
            if (text) {
                newUpdateValue = newUpdateValue.filter((curElem) => {
                    return curElem.name.toLowerCase().includes(text);
                })
                console.log(newUpdateValue);
            }
            console.log(newUpdateValue);

            return {
                ...state,
                filter_products: newUpdateValue,
            }

        default:
            return state;

    }
}

export default FilterProductReducer