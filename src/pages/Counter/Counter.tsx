import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store.ts";
import {
  decrement,
  increment,
  incrementByValue,
  reset,
} from "../../redux/slices/counterSlice.ts";
import { login, logout } from "../../redux/slices/authSlice.ts";
import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState<string>("");

  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.value);
  const isaAuth = useSelector((state: RootState) => state.auth);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  const handleIncrementByValue = () => {
    dispatch(incrementByValue(value));
    setValue("");
  };

  return (
    <div>
      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleIncrementByValue}>
          Increment button by value
        </button>
      </div>
      <div>
        {isaAuth ? (
          <button onClick={() => dispatch(logout())}>Logout</button>
        ) : (
          <button onClick={() => dispatch(login())}>login</button>
        )}
      </div>
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
