import "./menuStyle.css";
import { MenuList } from "./MenuList.tsx";
import { FC, useEffect, useState, useContext } from "react";
import { UserContext } from "../../Context/UserContext/UserContext.tsx";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "../../redux/store.ts";
import {
  getMenuItemsStart,
  getMenuItemsSuccess,
  getMenuItemsFailure,
} from "../../redux/slices/menuSlice"; // Исправлен импорт экшенов для меню

export const Menu: FC = () => {
  const userContext = useContext(UserContext);
  const { userName } = userContext;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch<RootDispatch>();
  const menuItems = useSelector<RootState>((state) => state.menu.items);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getMenuItemsStart());

      try {
        const response = await fetch(
          "https://react-fast-pizza-api.onrender.com/api/menu",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch menu data.");
        }
        const json = await response.json();
        dispatch(getMenuItemsSuccess(json.data));
      } catch (error) {
        dispatch(getMenuItemsFailure(error.message));
        setError("Failed to load menu items.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userName) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="pizza-container">
      <h2>Menu</h2>
      <MenuList items={menuItems} />
    </div>
  );
};
