import "./inputStyle.css";
import { FC, ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  type?: "text" | "number" | "password" | "email" | "checkbox";
  placeholder?: string;
  name?: string;
  register?: UseFormRegister<any>;
}

export const Input: FC<Props> = ({
  type = "text",
  placeholder = "",
  name,
  register,
}) => {
  if (!register || !name) {
    return <input type={type} placeholder={placeholder} />;
  }
  return <input type={type} placeholder={placeholder} {...register(name)} />;
};
