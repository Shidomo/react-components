import "./buttonStyle.css";
export const Button = ({ text, type = "button" }) => {
  return <button type={type}> {text}</button>;
};
