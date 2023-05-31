import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer"

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const getStoreData = () => {
        return JSON.parse(localStorage.getItem("myCart"))
    }

    const initialState = {
        cart: getStoreData(),
        total_item: "",
        total_Amount: "",
        shipping_fee: 50000,
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (id, Amount, color, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, Amount, color, product } })
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })

    }

    useEffect(() => {
        localStorage.setItem("myCart", JSON.stringify(state.cart));
    }, [state.cart])

    return <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
        {children}
    </CartContext.Provider>
};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext }