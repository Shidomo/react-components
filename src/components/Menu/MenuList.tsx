import React from "react";
import { MenuItem } from "./MenuItem.tsx";

export const MenuList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <MenuItem key={item.id} pizza={item} />
      ))}
    </ul>
  );
};
