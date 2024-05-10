import { MenuItem } from "./MenuItem.tsx";

export const MenuList = ({ items }) => {
  return (
    <ul>
      {items.map((item: any) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  );
};
