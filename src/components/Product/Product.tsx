import "./styleProduct.css";
import "./../../styles/index.css";
import React, { useContext, useState } from "react";
import { IProduct, CartItem } from "../../models";

export interface ProductProps {
  product: IProduct;
}
export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
  getTotal: () => number;
}

export const CartContext = React.createContext<CartContextType>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  getTotal: () => 0,
});
function Product({ product }: ProductProps) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (product: IProduct) => {
    addToCart(product);
  };

  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={product.image} alt="" />
        </div>
        <div className="card-main">
          <div className="card-header">{product.title}</div>
          <div className="card-description">{product.description}</div>
          <div className="card-footer">
            <span className="card-price">
              Price: <b>{product.price}$</b>
            </span>
            <button
              className="card-button"
              onClick={() => handleAddToCart(product)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
