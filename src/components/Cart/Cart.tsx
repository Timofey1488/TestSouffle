import React, { useContext, useState } from "react";
import "./style.css";
import { CartContext } from "../Product/Product";
import CartItems from "../CartItem/CartItem";
import SuccessModal from "../Modal/Modal";
import { CartItem } from "../../models";

function Cart() {
  const { cart, getTotal, cartNull } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    setShowModal(true);
    cartNull();
  };
  return (
    <div className="cart-box">
      <h3>CART</h3>
      <div className="cart-items">
        {cart.map((item) => (
          <CartItems product={item} key={item.product.id} />
        ))}
      </div>
      <div className="cart-footer">
        <div className="cart-total">
          <span>Total</span>
          <span>{getTotal()}$</span>
        </div>
        <div className="cart-footer-button">
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
      <SuccessModal show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
}

export default Cart;
