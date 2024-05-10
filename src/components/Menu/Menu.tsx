import "./menuStyle.css";
import { MenuList } from "./MenuList.tsx";
import React, { FC, useEffect, useState } from "react";

export const Menu: FC = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch menu data.");
        }
        const json = await response.json();
        setMenuItems(json.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="pizza-container">
      <h2>Menu</h2>
      <MenuList items={menuItems} />
    </div>
  );
};