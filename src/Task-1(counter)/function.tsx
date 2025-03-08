import React, { useState } from "react";
import Show from "./show";
const Task1 = () => {
  const [count, setCount] = useState(0);

  function onIncrement() {
    setCount((prev) => prev + 1);
  }
  function onDecrement() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }
  return (
    <div>
      <Show count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
    </div>
  );
};

export default Task1;
