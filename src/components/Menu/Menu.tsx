import "./menuStyle.css";
import { MenuList } from "./MenuList.tsx";
import { FC, useEffect, useState } from "react";

export const Menu: FC = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect((): void => {
    const fetchData = async () => {
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
