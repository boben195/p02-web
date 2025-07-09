import React, { useContext, useState } from "react";
import "./ProductList.css";
import { ShopContext } from "../ShopContext/ShopContext";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, addToCart } = useContext(ShopContext);
  return (
    <div>
      <div className="product_list">
        <h2>Our Elegant COllections</h2>
        <div className="product-grid">
          {products.map((product) => {
            const { id, image, title, price } = product;
            return (
              <div className="product-card" key={id}>
                <Link to={`/product/${product.id}`} key={product.id}>
                  <img
                    src={image}
                    alt="some cool headphones"
                    className="product-image"
                  />
                  <div className="product-info">
                    <h4>{title}</h4>
                    <p>${price}</p>
                  </div>
                </Link>
                <button
                  onClick={() => addToCart(product, id)}
                  className="add-to-cart"
                >
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
