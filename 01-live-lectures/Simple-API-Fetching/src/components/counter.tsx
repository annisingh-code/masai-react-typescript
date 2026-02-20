import { useState } from "react";

function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Counter</h1>
      <p>Current Count: {count}</p>
      <button
        className="border-2 border-gray-300 px-4 py-4 mt-2 rounded-full"
        onClick={() => setCount((prev) => prev + 1 + 1)}
      ></button>
    </div>
  );
}

export default Counter;
