import "./headerStyle.css";
import { Link } from "react-router-dom";
export const Header = ({ children }) => {
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
