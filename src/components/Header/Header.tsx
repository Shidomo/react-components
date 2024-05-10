import "./headerStyle.css";
import { Link } from "react-router-dom";
import { FC, ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode;
}

export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Pizza Day
      </Link>
      <Link to="/menu" className="logo">
        Menu
      </Link>
      <Link to="/login" className="logo">
        Login
      </Link>
      {children}
    </header>
  );
};
