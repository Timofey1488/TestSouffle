import React, { useState } from "react";
import Navbar from "./components/Header/Header";
import Product, { CartContext } from "./components/Product/Product";
import { products } from "./data/products";
import { IProduct, CartItem } from "./models";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: IProduct) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );
    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const newItem = { product, quantity: 1 };
      setCart([...cart, newItem]);
    }
  };
  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((product) => product.product.id !== id);
    setCart(updatedCart);
  };
  const getTotal = () => {
    return cart.reduce(
      (total, product) => total + product.product.price * product.quantity,
      0
    );
  };
  const cartNull = () => {
    return setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, getTotal, cartNull }}
    >
      <div className="App">
        <Navbar />
        <div className="wrapper">
          <div className="container-cards">
            {products.map((product: IProduct) => (
              <Product product={product} />
            ))}
          </div>
          <div className="sidebar-cart">
            <Cart />
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
