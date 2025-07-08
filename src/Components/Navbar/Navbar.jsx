import React from "react";
import "./Navbar.css";
import { BiCart, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <div className="logo">
            <h2>ShopX</h2>
          </div>
        </Link>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>Product</li>
            <li>Contact</li>
            <li>App</li>
          </ul>
        </div>
        <div className="nav_icon_wrapper">
          <Link to="/cart">
            <div className="nav_cart">
              <BiCart className="nav_icon" />
              <p>0</p>
            </div>
          </Link>
          <BiUser className="nav_icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
