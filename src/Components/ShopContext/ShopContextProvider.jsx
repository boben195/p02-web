import React, { useState } from "react";
import { ShopContext } from "./ShopContext";
import { productData } from "../../data";

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);

  return (
    <ShopContext.Provider value={products}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
