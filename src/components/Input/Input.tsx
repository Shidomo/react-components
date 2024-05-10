import "./inputStyle.css";
import { FC } from "react";

interface Props {
  type?: "text" | "number" | "password" | "email";
  placeholder?: string;
}

export const Input: FC<Props> = ({ type = "text", placeholder = "" }) => {
  return <input type={type} placeholder={placeholder} />;
};
