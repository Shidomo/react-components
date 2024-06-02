import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  decrementFromCart,
} from "../../redux/slices/cartSlice";

interface Pizza {
  id: string;
  name: string;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
  unitPrice: number;
}

interface IProps {
  pizza: Pizza;
}

export const MenuItem: FC<IProps> = ({ pizza }) => {
  const [countPizza, setCountPizza] = useState<number>(0);
  const dispatch = useDispatch();

  const handleIncrement = (): void => {
    setCountPizza((prevState: number) => prevState + 1);
    dispatch(addToCart({ ...pizza, qty: 1 }));
  };

  const handleDecrement = (): void => {
    if (countPizza > 0) {
      setCountPizza((prevState: number) => prevState - 1);
      dispatch(decrementFromCart(pizza.id));
    }
  };

  const handleDelete = (): void => {
    setCountPizza(0);
    dispatch(deleteFromCart(pizza.id));
  };
  console.log({ ...pizza });

  return (
    <li className="pizza">
      <img src={pizza.imageUrl} alt={pizza.name} className="pizza__image" />
      <div className="pizza__info">
        <p className="pizza__name">{pizza.name}</p>
        <p className="pizza__ingredients">{pizza.ingredients.join(", ")}</p>
        <div className="pizza__actions">
          {pizza.soldOut ? (
            <p className="pizza__price">Sold out</p>
          ) : (
            <div>
              <p className="pizza__price">€{pizza.unitPrice}</p>
              {countPizza === 0 ? (
                <button className="button" onClick={handleIncrement}>
                  Add to Cart
                </button>
              ) : (
                <div className="changeBtn">
                  <button className="button" onClick={handleIncrement}>
                    +
                  </button>
                  <span>{countPizza}</span>
                  <button onClick={handleDecrement}>-</button>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
