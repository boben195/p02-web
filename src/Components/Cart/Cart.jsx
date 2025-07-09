import React, { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../ShopContext/ShopContext";
import { FiTrash2 } from "react-icons/fi";
import CartDetails from "./CartDetails";

const Cart = () => {
  const { cart, clearCart, total, quantity } = useContext(ShopContext);
  return (
    <div>
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-header">
            <h1>Shoping cart</h1>
            <h1>Items : {quantity}</h1>
            <FiTrash2 onClick={clearCart} className="delete-cart" />
          </div>
          <div className="cart-header">
            <span>Product description</span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          <div className="cart-detailes">
            {cart.length > 0 ? (
              cart.map((item) => <CartDetails item={item} key={item.id} />)
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        </div>
        <div className="cart-right">
          <h2>Cart Summary</h2>
          <div className="summary_item">
            <span>Items: </span>
            <span>{quantity}</span>
          </div>
          <div className="cart_summary">
            <div className="summary_item">
              <span>Subtotal</span>
              <span>${isNaN(total) ? 0 : total}</span>
            </div>
            <div className="summary_item">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary_item total_cost">
              <span>Total Cost</span>
              <span>${isNaN(total) ? 0 : total}</span>
            </div>
            <button className="checkout_btn">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
