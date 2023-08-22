import React from "react";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";

import { removeItem } from "../../reduxToolKit/slices";
import { increment, decrement } from "../../reduxToolKit/slices";
import FormatePrice from "../../helpers/FormatePrice";
import CartAmount from "./CartAmount";

const CartItem = ({ id, productName, image, color, price, Amount }) => {
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    dispatch(increment(id));
  };
  const decrementQuantity = () => {
    dispatch(decrement(id));
  };
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div className="cart-product--details">
          <p>{productName}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ background: color, color: color }}
            ></div>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="cart-hide">
        <p>
          {" "}
          <FormatePrice price={price} />{" "}
        </p>
      </div>

      {/* quantity */}
      <CartAmount
        Amount={Amount}
        increment={incrementQuantity}
        decrement={decrementQuantity}
      />

      {/* subtotal */}
      <div className="cart-hide">
        <p>
          <FormatePrice price={price * Amount} />
        </p>
      </div>

      {/* remove item */}
      <div>
        <FaTrash
          className="remove_icon"
          onClick={() => dispatch(removeItem(id))}
        />
      </div>
    </div>
  );
};

export default CartItem;
