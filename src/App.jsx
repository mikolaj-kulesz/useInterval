import { useState } from "react";
import useInterval from "./hooks/useInterval";

export default function App() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useInterval(
    () => {
      setCount((currentState) => {
        return currentState + 1;
      });
    },

    1000
  );

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Interval</button>
      <button onClick={reset}>Reset Interval</button>
    </div>
  );
}
