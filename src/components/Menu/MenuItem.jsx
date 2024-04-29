import { useState } from "react";
import {
  handleIncrement,
  handleDecrement,
  handleDelete,
} from "../../hooks/countWork.js";

export const MenuItem = ({ pizza }) => {
  const [countPizza, setCountPizza] = useState(0);

  return (
    <li className="pizza">
      <img src={pizza.imageUrl} alt="anyPicture" className="pizza__image" />

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
                <button
                  className="button"
                  onClick={() => {
                    handleIncrement(countPizza, setCountPizza, pizza);
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="changeBtn">
                  <button
                    className="button"
                    onClick={() => {
                      handleIncrement(countPizza, setCountPizza, pizza);
                    }}
                  >
                    +
                  </button>
                  <span>{countPizza}</span>
                  <button
                    onClick={() => {
                      handleDecrement(countPizza, setCountPizza, pizza);
                    }}
                  >
                    -
                  </button>
                  <button onClick={() => handleDelete(setCountPizza)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
