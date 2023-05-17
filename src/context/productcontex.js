import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/productReducer";

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    sLoading: false,
    singleProduct: {}
};

const AppProvider = ({ children }) => {
    const API = 'https://api.pujakaitem.com/api/products';

    const getproducts = async (url) => {
        dispatch({ type: "SET_LOADING" });
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "MY_API_DATA", payload: products });
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    //  my 2nd api call for single product

    const getSingleProduct = async (url) => {
        dispatch({ type: "SINGLE_LOADING" });
        try {
            const res = await axios.get(url);
            const singleProduct = res?.data;
            console.log(singleProduct);
            dispatch({ type: "SINGLEPRODUCT_DATA", payload: singleProduct })
        } catch (error) {
            dispatch({ type: "ERROR" })
        }
    };



    useEffect(() => {
        getproducts(API);
    }, [])

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>
            {children}
        </AppContext.Provider>
    )

};
const UseProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, UseProductContext };