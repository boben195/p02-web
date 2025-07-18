import React, { useContext } from "react";
import { ShopContext } from "../../Components/ShopContext/ShopContext";
import { productData } from "../../data";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { addToCart } = useContext(ShopContext);
  const { id } = useParams();

  const product = productData.find((product) => {
    return product.id === parseInt(id);
  });
  return (
    <div>
      <div className="product_details">
        <div className="detailes_left">
          <img src={product.image} alt="what you buy" />
        </div>
        <div className="detailes_right">
          <h3>{product.title}</h3>
          <p className="product_price">${product.price}</p>
          <p className="product_description">{product.description}</p>
          <button onClick={() => addToCart(product, id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
