import { useState } from "react";

type CounterProps = {
  initial?: number;
};

export function Counter({ initial = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initial);

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>
      <h2>Счётчик: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: 10 }}>
        -
      </button>
    </div>
  );
}
