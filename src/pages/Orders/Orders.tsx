import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Form } from "../../components/Form/Form.tsx";
import { Input } from "../../components/Input/Input.tsx";
import { Cart } from "../../components/Cart/Cart.tsx";
import { createOrder } from "../../redux/slices/orderSlice.ts";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "../../redux/store.ts";

interface IFormInput {
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
  priority: boolean;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  address: Yup.string().required("Address is required"),
  phone: Yup.string()
    .required("Phone Number is required")
    .matches(/^[0-9]+$/, "Invalid phone number"),
  priority: Yup.boolean(),
});

export const Orders = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch<RootDispatch>();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: IFormInput) => {
    const orderData = {
      address: data.address,
      customer: `${data.firstName} ${data.lastName}`,
      phone: data.phone,
      priority: data.priority,
      position: "",
      cart: cartItems.map((item) => ({
        name: item.name,
        pizzaId: item.id,
        quantity: item.qty,
        totalPrice: item.qty * item.unitPrice,
        unitPrice: item.unitPrice,
      })),
    };

    const result = await dispatch(createOrder(orderData));
    if (result.meta.requestStatus === "fulfilled") {
      const { id } = result.payload;
      navigate(`/order/${id}`);
    } else {
      alert("Something went wrong");
    }

    reset(); // Сбросить значения формы после отправки
  };

  return (
    <>
      <div>
        <Cart />
      </div>
      <Form formClass="order-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            register={register}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}
        </div>

        <div>
          <label>Last Name</label>
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            register={register}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>

        <div>
          <label>Address</label>
          <Input
            type="text"
            placeholder="Address"
            name="address"
            register={register}
          />
          {errors.address && <span>{errors.address.message}</span>}
        </div>

        <div>
          <label>Phone Number</label>
          <Input
            type="text"
            placeholder="Phone Number"
            name="phone"
            register={register}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>

        <div>
          <label>
            <Input type="checkbox" name="priority" register={register} />
            Want to give order priority?
          </label>
        </div>
        <button type="submit">Order now</button>
      </Form>
    </>
  );
};
