import React, { useContext } from "react";
import { ShopContext } from "../ShopContext/ShopContext";
import { FiTrash2 } from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import "./Cart.css";

const CartDetails = ({ item }) => {
  const { decrease, increase, removeFromCart } = useContext(ShopContext);

  const { id, title, image, price, amount } = item;
  return (
    <div>
      <div className="cart-item">
        <div className="product-details">
          <img src={image} alt="you buy - you pay" />
          <div className="product_info">
            <h3>{title}</h3>
            <div className="cart_item_remove">
              <FiTrash2 onClick={() => removeFromCart(id)} /> Remove
            </div>
          </div>
        </div>
        <div className="quantity">
          <button onClick={() => decrease(id)}>
            <IoMdRemove />
          </button>
          <span>{amount}</span>
          <button onClick={() => increase(id)}>
            <IoMdAdd />
          </button>
        </div>
        <div className="price">${price}</div>
        <div className="total">{`$ ${parseFloat(price * amount).toFixed(
          2
        )}`}</div>
      </div>
    </div>
  );
};

export default CartDetails;
