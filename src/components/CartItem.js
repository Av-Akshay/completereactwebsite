import React from 'react';
import CartAmount from './CartAmount';
import FormatePrice from "../helpers/FormatePrice"
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/Cart_Context';

const CartItem = ({ id, name, image, color, price, Amount }) => {
    const { removeItem } = useCartContext();

    const Increment = () => {
        // Amount < stock ? setAmount(Amount + 1) : setAmount(stock)

        // if (Amount === stock) {
        //     alert(`only ${stock} item present in stock`)
        // }
    }
    const Decrement = () => {
        // Amount > 1 ? setAmount(Amount - 1) : setAmount(1)
    }
    return (
        <div className='cart_heading grid grid-five-column'>
            <div className="cart-image--name">
                <div>
                    <figure>
                        <img src={image} alt={id} />
                    </figure>
                </div>
                <div>
                    <p>{name}</p>
                    <div className='color-div'>
                        <p>color:</p>
                        <div className='color-style' style={{ background: color, color: color }}></div>
                    </div>
                </div>
            </div>

            {/* price */}
            <div className="cart-hide">
                <p> <FormatePrice price={price} /> </p>
            </div>

            {/* quantity */}
            <CartAmount
                Amount={Amount}
                Decrement={Decrement}
                Increment={Increment}
            />

            {/* subtotal */}
            <div className='cart-hide'>
                <p> <FormatePrice price={price * Amount} /></p>
            </div>

            {/* remove item */}
            <div>
                <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
            </div>

        </div>
    )
}

export default CartItem