export const MenuItem = ({ pizza }) => {
  const handleClick = () => {
    console.log(`Added ${pizza.name} to cart`);
  };

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
              <button className="button" onClick={handleClick}>
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};
