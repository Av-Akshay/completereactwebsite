import { createContext, useContext, useEffect, useReducer } from "react";
import { UseProductContext } from "./productcontex";
import reducer from "../Reducer/FilterProductReducer"

const FilterContex = createContext();
const initialState = {
    filter_products: [],
    All_products: [],
    grid_view: true,
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

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
    }, [products])

    return (
        <FilterContex.Provider value={{ ...state, setGridView, setListview }}>
            {children}
        </FilterContex.Provider>
    );
};

export const useFilterContex = () => {
    return useContext(FilterContex)
}