export const handleIncrement = (count, setCount, object) => {
  setCount((prevState) => prevState + 1);
  console.log(`Added ${count + 1}, ${object.name} to cart`);
};

export const handleDecrement = (count, setCount, object) => {
  if (count > 0) {
    setCount((prevState) => prevState - 1);
    console.log(`add ${count - 1}, ${object.name} to cart`);
  }
};

export const handleDelete = (setCount) => {
  setCount(0);
  console.log(`delete all count`);
};
