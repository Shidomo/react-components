import "./inputStyle.css";

export const Input = ({ type = "text", placeholder = "" }) => {
  return <input type={type} placeholder={placeholder} />;
};
