import "./buttonStyle.css";
import { FC } from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps> = ({ text, type = "button" }) => {
  return <button type={type}> {text}</button>;
};
