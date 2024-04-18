import "./headerStyle.css";
export const Header = ({ children }) => {
  return (
    <header className="header">
      <a className="logo">Pizza Day</a>
      {children}
    </header>
  );
};
