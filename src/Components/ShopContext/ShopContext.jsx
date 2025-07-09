import React, { createContext, useState } from "react";

export const ShopContext = createContext();

import { productData } from "../../data";

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);
  return (
    <ShopContext.Provider value={products}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
