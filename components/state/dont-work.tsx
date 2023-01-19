import { useState } from "react";
import { Filas } from "../ui/divs";

export const StateDontWork = () => {
  const [count, setCount] = useState({ count: 0, id: 0 });
  const clickHandler = () => {
    count.count = count.count + 1;
    setCount(count);
    console.log({ count }, "no muestra cambios porque no dispara el re-render");
  };
  return (
    <Filas>
      <button onClick={clickHandler}>Sumar no re-render</button>
      <p>count: {count.count}</p>
      <p>------------------</p>
    </Filas>
  );
};
