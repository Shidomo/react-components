import "./menuStyle.css";
import { MenuList } from "./MenuList.jsx";
import { useEffect, useState } from "react";

export const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    <div>
      <h2>Menu</h2>
      <MenuList items={menuItems} />
    </div>
  );
};
