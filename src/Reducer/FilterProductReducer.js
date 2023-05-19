const FilterProductReducer = (state, action) => {
    console.log(action.payload)
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
        default:
            return state;

    }
}

export default FilterProductReducer