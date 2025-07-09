import React, { useContext, useState } from "react";
import "./ProductList.css";
import { ShopContext } from "../ShopContext/ShopContext";

const ProductList = () => {
  const products = useContext(ShopContext);
  return (
    <div>
      <div className="product_list">
        <h2>Our Elegant COllections</h2>
        <div className="product-grid">
          {products.map((product) => {
            const { id, image, title, price } = product;
            return (
              <div className="product-card" key={id}>
                <img src={image} alt="some cool headphones" />
                <div className="product-info">
                  <h4>{title}</h4>
                  <p>${price}</p>
                </div>
                <button>Add to cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
