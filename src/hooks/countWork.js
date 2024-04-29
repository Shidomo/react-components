export const handleIncrement = (countPizza, setCountPizza, pizza) => {
  setCountPizza((prevState) => prevState + 1);
  console.log(`Added ${countPizza + 1}, ${pizza.name} to cart`);
};

export const handleDecrement = (countPizza, setCountPizza, pizza) => {
  if (countPizza > 0) {
    setCountPizza((prevState) => prevState - 1);
    console.log(`add ${countPizza - 1}, ${pizza.name} to cart`);
  }
};

export const handleDelete = (setCountPizza) => {
  setCountPizza(0);
  console.log(`delete all count`);
};
