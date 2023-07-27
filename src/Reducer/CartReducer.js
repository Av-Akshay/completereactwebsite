const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, Amount, color, product } = action.payload;

    let commonId = state.cart.filter((curElem) => {
      return curElem.id === id + color;
    });
    if (commonId.length === 0) {
      let cartProduct = {
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
        cart: [...state.cart, cartProduct],
      };
    } else {
      return {
        ...state,
        cart: state.cart.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.Amount + Amount;
            if (newAmount >= curElem.max) {
              alert(`Only ${curElem.max} Items Are Available`);
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              Amount: newAmount,
            };
          } else {
            return curElem;
          }
        }),
      };
    }
  }

  if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter((curElm) => {
      return curElm.id !== action.payload;
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "INCREMENT") {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (item.id === action.payload) {
          let newAmount = item.Amount + 1;
          if (newAmount > item.max) {
            newAmount = item.max;
            alert(`Only ${item.max} Item Are Present.`);
          }
          return {
            ...item,
            Amount: newAmount,
          };
        } else {
          return item;
        }
      }),
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      cart: state.cart.map((item) => {
        if (item.id === action.payload) {
          let newAmount = item.Amount - 1;
          if (newAmount < 1) {
            newAmount = 1;
            alert("There Must Be At Least One Item.");
          }
          return {
            ...item,
            Amount: newAmount,
          };
        } else {
          return item;
        }
      }),
    };
  }
  if (action.type === "CART_TOTAL_ITEM") {
    return {
      ...state,
      total_item: state.cart.reduce((initialVal, curElem) => {
        let { Amount } = curElem;
        initialVal = initialVal + Amount;
        return initialVal;
      }, 0),
    };
  }

  return state;
};

export default CartReducer;
