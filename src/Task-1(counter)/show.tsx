import React from "react";

const Show = ({ count, onIncrement, onDecrement }) => {
  // task two(pusn,pop splice,length)
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  arr.push(100);
  arr.pop()
  console.log(arr);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <h4>learn array methods push pop splice length</h4>
      <h1>task</h1>
      <h3>push: addd elements to last in an array</h3>
      <h3>pop: Remove the Last Element in an array returns the removed element.</h3>
      <h3>splice: add or remove elements anywhere</h3>
    </div>
  );
};

export default Show;
