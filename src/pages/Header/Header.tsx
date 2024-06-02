import "./headerStyle.css";
import { Link } from "react-router-dom";
import { FC, ReactNode, useContext } from "react";
import { UserContext } from "../../Context/UserContext/UserContext.tsx";

interface HeaderProps {
  children?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  const userContext = useContext(UserContext);
  const { userName } = userContext;

  return (
    <header className="header">
      <Link to="/" className="logo">
        Pizza Day
      </Link>
      <Link to="/menu" className="logo">
        Menu
      </Link>
      {userName ? (
        <div> Welcome,{userName}</div>
      ) : (
        <Link to="/login" className="logo">
          Login
        </Link>
      )}
      <Link to="/order/new">New Order</Link>
      <Link to="/counter">Counter</Link>
      {children}
    </header>
  );
};
