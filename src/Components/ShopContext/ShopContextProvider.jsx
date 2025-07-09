import React, { useEffect, useState } from "react";
import { ShopContext } from "./ShopContext";
import { productData } from "../../data";

const ShopContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productData);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  //func for calculate total price//
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
  //func for calculate total price//

  //func for calc quantity of items in’d box//
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acc, curItem) => {
        return acc + curItem.amount;
      }, 0);
      setQuantity(amount);
    }
  }, [cart]);
  //func for calc quantity of items in’d box//

  //func to add cart to the box//
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  //func to add cart to the box//

  //func for delete items from cart//
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  //func for delete items from cart//

  //func to clear entire cart //
  const clearCart = () => {
    setCart([]);
  };
  //func to clear entire cart //

  //func to increase quantity of items in the cart//
  const increase = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  //func to increase quantity of items in the cart//

  //func to decrease quantity of items in the cart//
  const decrease = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      if (cartItem.amount < 2) {
        removeFromCart(id);
      }
    }
  };
  //func to decrease quantity of items in the cart//

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        quantity,
        total,
        addToCart,
        removeFromCart,
        clearCart,
        increase,
        decrease,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
