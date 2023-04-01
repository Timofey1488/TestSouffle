import React, { useContext, useState } from "react";
import "./style.css";
import { CartItem } from "../../models";
// @ts-ignore
import cicrcleimg from "./../../images/close-circle.svg";
import Product, { CartContext } from "../Product/Product";

export interface CartItemProps {
  product: CartItem;
}
function CartItems({ product }: CartItemProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { removeFromCart } = useContext(CartContext);
  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };
  return (
    <div className="cart-item">
      <div className="cart-content">
        <div className="header-item">
          <h4>{product.product.title}</h4>
        </div>
        <div className="footer-item">
          {product.product.price} $ x {product.quantity}
        </div>
      </div>
      <div className="delete-button">
        <button onClick={() => handleRemoveFromCart(product.product.id)}>
          <img src={cicrcleimg} alt="" />
        </button>
      </div>
    </div>
  );
}

// @ts-ignore
export default CartItems;
