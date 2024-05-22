import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input {...register("firstName")} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>

      <div>
        <label>Last Name</label>
        <input {...register("lastName")} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>

      <div>
        <label>Address</label>
        <input {...register("address")} />
        {errors.address && <span>{errors.address.message}</span>}
      </div>

      <div>
        <label>Phone Number</label>
        <input {...register("phone")} />
        {errors.phone && <span>{errors.phone.message}</span>}
      </div>

      <div>
        <label>
          <input type="checkbox" {...register("priority")} />
          Want to give order priority?
        </label>
      </div>
      <button type="submit">Order now for</button>
    </form>
  );
};
