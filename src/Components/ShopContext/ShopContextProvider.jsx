import React, { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";
import { productData } from "../../data";

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  //fanc for calculate total price//
  useEffect(() => {
    const total = cart.reduce((acc, curItem) => {
      const priceAsNumber = parseFloat(curItem.price);
      if (isNaN(priceAsNumber)) {
        return acc;
      }

      return acc + priceAsNumber * curItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);
  //fanc for calculate total price//

  //fanc for calc quantity of items in’d box//
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, curItem) => {
        return acc + curItem.amount;
      }, 0);
      setQuantity(amount);
    }
  }, [cart]);
  //fanc for calc quantity of items in’d box//

  //fanc to add cart to the box//
  //fanc to add cart to the box//

  return (
    <ShopContext.Provider value={(products, cart, quantity, total)}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
