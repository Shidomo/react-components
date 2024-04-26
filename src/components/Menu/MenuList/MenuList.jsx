import { MenuItem } from "./MenuItem/MenuItem.jsx";

export const MenuList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  );
};
