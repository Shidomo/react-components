import { useState, useContext, FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext/UserContext.tsx";

export const Login: FC = () => {
  const userContext = useContext(UserContext);
  const { userName, setUserName } = userContext;
  const [inputValue, setInputValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [auth, setAuth] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSetAuth = (e) => {
    e.preventDefault();
    setAuth((prevState) => !prevState);
    setUserName(inputValue);
  };

  useEffect(() => {
    if (userName) {
      navigate("/menu");
    }
  }, [userName]);

  return (
    <form>
      <label htmlFor="loginInput">Login</label>
      <input
        type="text"
        id="loginInput"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <label htmlFor="passwordInput">Password</label>
      <input
        type="password"
        id="passwordInput"
        onChange={(e) => setPasswordValue(e.target.value)}
      />
      <button onClick={handleSetAuth}>Войти</button>
    </form>
  );
};
