import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getAllPizzas } from "../../redux/slices/cartSlice.ts";
import { RootDispatch, RootState } from "../../redux/store.ts";

export const NewMane = () => {
  const dispatch = useDispatch<RootDispatch>();
  const pizzas = useSelector<RootState, any[]>((store) => store.cart.pizzas);

  useEffect(() => {
    dispatch<any>(getAllPizzas());
  }, [dispatch]);

  const handleAddToCart = (pizza) => {
    dispatch(addToCart(pizza));
  };

  return (
    <div>
      <h2>Menu: </h2>
      <div>
        {!!pizzas.length &&
          pizzas.map((pizza) => {
            return (
              <div key={pizza.id} className="pizza-container">
                <h3>{pizza.name}</h3>
                <p>{pizza.unitPrice}</p>
                <button
                  onClick={() => {
                    handleAddToCart(pizza);
                  }}
                >
                  Add to cart
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
