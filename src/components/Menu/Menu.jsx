import "./menuStyle.css";
import { MenuList } from "./MenuList.jsx";

export const Menu = ({ items }) => {
  return (
    <div>
      <h2>Menu</h2>
      <MenuList items={items} />
    </div>
  );
};
