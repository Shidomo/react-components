import { useState } from "react";

export const MenuItem = ({ pizza }) => {
  const [countPizza, setCountPizza] = useState(0);

  const handleActions = (count, setCount, object) => {
    const handleIncrement = () => {
      setCount((prevState) => prevState + 1);
      console.log(`Added ${count + 1}, ${object.name} to cart`);
    };

    const handleDecrement = () => {
      if (count > 0) {
        setCount((prevState) => prevState - 1);
        console.log(`Added ${count - 1}, ${object.name} to cart`);
      }
    };

    const handleDelete = () => {
      setCount(0);
      console.log(`Deleted all count`);
    };

    return {
      handleIncrement,
      handleDecrement,
      handleDelete,
    };
  };
  const countAction = handleActions(countPizza, setCountPizza, pizza);

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
                    countAction.handleIncrement();
                  }}
                >
                  Add to Cart
                </button>
              ) : (
                <div className="changeBtn">
                  <button
                    className="button"
                    onClick={() => {
                      countAction.handleIncrement();
                    }}
                  >
                    +
                  </button>
                  <span>{countPizza}</span>
                  <button
                    onClick={() => {
                      countAction.handleDecrement();
                    }}
                  >
                    -
                  </button>
                  <button onClick={() => countAction.handleDelete()}>
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
