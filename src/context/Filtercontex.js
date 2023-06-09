import { createContext, useContext, useEffect, useReducer } from "react";
import { UseProductContext } from "./productcontex";
import reducer from "../Reducer/FilterProductReducer"

const FilterContex = createContext();
const initialState = {
    filter_products: [],
    All_products: [],
    grid_view: true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "All",
        company: "All",
        colors: "All",
        maxPrice: 0,
        price: 0,
        minPrice: 0,
    }
}



export const FilterProvider = ({ children }) => {
    const { products } = UseProductContext();
    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridView = () => {
        dispatch({ type: "GRID_VIEW" })
    }

    const setListview = () => {
        dispatch({ type: "LIST_VIEW" })
    }

    // Sorting funstion---

    const Sorting = () => {
        dispatch({ type: "SORTING_THE_VALUE" })

    }

    // update the filter value...

    const updateFilterValue = (event) => {
        let { name, value } = event.target;

        return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } })

    }

    // to clear all the filters.........
    const clearAllFilter = () => {
        return dispatch({ type: "CLEAR_ALL_FILTER", payload: products })
    }

    // to sort the product....

    useEffect(() => {
        dispatch({ type: "UPDATE_INPUTE_VALUE" });
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [products, state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });

    }, [products])



    return (
        <FilterContex.Provider value={{ ...state, setGridView, setListview, Sorting, updateFilterValue, clearAllFilter }}>
            {children}
        </FilterContex.Provider>
    );
};

export const useFilterContex = () => {
    return useContext(FilterContex)
}