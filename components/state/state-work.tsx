import { useState } from "react";
import { Filas } from "../ui/divs";

export const StateWork = () => {
  const [count, setCount] = useState({ count: 0, id: 0 });
  const [array, setArray] = useState([0]);
  const clickHandler = () => {
    setCount((preValue) => {
      return {
        ...preValue,
        count: preValue.count + 1,
      };
    });
    //muchas funciones con el valor que acabamos de modificar "en nuestra cabeza/logica"
    console.log(
      { count },
      "esto va  leer el estado anterior porque vive en el render previo"
    );
  };
  console.log(
    { count },
    "lee el nuevo dato. En el caso del array esto se lee porque esta en el mismo componente y renderiza todo"
  );
  const arrayHandler = () => {
    const catchLastValue = array[array.length - 1];
    const plusOneToLast = catchLastValue + 1;
    setArray((preArray) => {
      return [...preArray, plusOneToLast];
    });
  };

  return (
    <Filas>
      <button onClick={clickHandler}>Sumar</button>
      <p>count: {count.count}</p>
      <p>------------------</p>
      <p>array</p>
      <button onClick={arrayHandler}>Pushear array</button>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {array.map((item) => {
          return (
            <>
              <p>{item},</p>
            </>
          );
        })}
      </div>
      <p>------------------</p>
    </Filas>
  );
};
