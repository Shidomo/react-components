import "./buttonStyle.css";
export const Button = ({ btnText, btnType = "button" }) => {
  return <button type={btnType}> {btnText}</button>;
};
