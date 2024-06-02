import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "../../redux/store.ts";
import { createOrder } from "../../redux/slices/orderSlice.ts";
import { useEffect } from "react";

const OrderButton = () => {
  const dispatch = useDispatch<RootDispatch>();
  const data = useSelector<RootState>((state) => state.order.order);

  return <div></div>;
};

export default OrderButton;
