import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Cart: FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <div className="cart-container">
      <h2>Your Order</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.qty} x €{item.unitPrice}
            </li>
          ))}
        </ul>
      )}
      <div>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: €{totalPrice}</p>
      </div>
    </div>
  );
};
