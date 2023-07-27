import React from "react";
import CartAmount from "./CartAmount";
import FormatePrice from "../helpers/FormatePrice";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/Cart_Context";

const CartItem = ({ id, name, image, color, price, Amount }) => {
  const { removeItem } = useCartContext();

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
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
      <CartAmount id={id} Amount={Amount} />

      {/* subtotal */}
      <div className="cart-hide">
        <p>
          {" "}
          <FormatePrice price={price * Amount} />
        </p>
      </div>

      {/* remove item */}
      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
