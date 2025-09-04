"use client";
import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
  return (
    <main>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </main>
  );
}