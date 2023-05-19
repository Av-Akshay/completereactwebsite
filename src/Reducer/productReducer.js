const productReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case "MY_API_DATA":
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === true;
            });
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData,
            };
        case "SINGLE_LOADING":
            return {
                ...state,
                sLoading: true,
            };
        case "SINGLEPRODUCT_DATA":
            return {
                ...state,
                sLoading: false,
                singleProduct: action.payload,
            };
        case "ERROR":
            return {
                ...state,
                sLoading: false,
                isError: true,
            }
        default:
            return state;
    }


};

export default productReducer