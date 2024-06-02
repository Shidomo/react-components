import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "../../redux/store";
import { createOrder } from "../../redux/slices/orderSlice";

const OrderDetails = () => {
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch<RootDispatch>();
  const navigate = useNavigate(); // Заменяем useHistory на useNavigate
  const order = useSelector<RootState, any>((state) => state.order.order);
  const { id } = useParams();

  useEffect(() => {
    dispatch(createOrder({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (order && order.data) {
      if (order.status === "success") {
        const orderId = order.data.id;
        navigate(`/order/${orderId}`);
      } else if (order.status === "fail") {
        alert("Something went wrong");
      }
    }
  }, [order, navigate]);

  return (
    <div>
      {order && order.data && order.data.id ? (
        <div>
          <p>ID: {order.data.id}</p>
          <p>Customer: {order.data.customer}</p>
          <p>Address: {order.data.address}</p>
          <p>Phone: {order.data.phone}</p>
          <p>Priority: {order.data.priority ? "Yes" : "No"}</p>
          <p>Status: {order.data.status}</p>

          <h2>Заказ</h2>
          <ul>
            {order.data.cart.map((item) => (
              <li key={item.pizzaId}>{item.name}</li>
            ))}
          </ul>
          <div>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: €{totalPrice}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OrderDetails;
