import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [auth, setAuth] = useState(false);
  const navigate = useNavigate();

  const handleSetAuth = () => {
    setAuth((prevState) => !prevState);
    navigate("/menu");
  };

  return (
    <form>
      <label htmlFor="loginInput">Login</label>
      <input type="text" id="loginInput" />
      <label htmlFor="passwordInput">Password</label>
      <input type="password" id="passwordInput" />
      <button onClick={handleSetAuth}>Войти</button>
    </form>
  );
};
