const CartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, Amount, color, product } = action.payload;

        let cartProduct;
        cartProduct = {
            id: id + color,
            name: product.name,
            color,
            Amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
        };

        return {
            ...state,
            cart: [...state.cart, cartProduct]
        }
    };
    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((curElm) => {
            return curElm.id !== action.payload
        })
        return {
            ...state,
            cart: updatedCart,
        }
    }


    return state
}

export default CartReducer