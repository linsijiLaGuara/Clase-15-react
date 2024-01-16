import React, { useState } from "react";

export const CouterAPP = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const suma = () => setCounter(counter + 1);
  const restar = () => setCounter(counter - 1);
  const reiniciar = () => setCounter(0);
  return (
    <>
      <h1> Couter app</h1>
      <h2>{counter}</h2>
      <button onClick={suma}>+1</button>
      <button onClick={restar}>-1</button>
      <button onClick={reiniciar}>0</button>
    </>
  );
};
