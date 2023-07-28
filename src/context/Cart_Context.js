import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const getStoreData = () => {
    return JSON.parse(localStorage.getItem("myCart"));
  };

  const initialState = {
    cart: getStoreData(),
    total_item: "",
    total_Amount: "",
    shipping_fee: 5000,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //  add to cart///////////
  const addToCart = (id, Amount, color, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, Amount, color, product } });
  };

  //  remove item///////
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //   to clear the cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //  amount increment

  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  // amount decrement

  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_AMOUNT" });
    localStorage.setItem("myCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        increment,
        decrement,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
