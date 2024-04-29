export const handleActions = (count, setCount, object) => {
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
