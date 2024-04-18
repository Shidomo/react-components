import "./inputStyle.css";

export const Input = ({ inputType = "text", inputPlaceholder = "" }) => {
  return <input type={inputType} placeholder={inputPlaceholder} />;
};
