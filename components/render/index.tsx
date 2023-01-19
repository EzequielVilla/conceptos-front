import { useRouter } from "next/router";
import { useState } from "react";
import { Filas } from "../ui/divs";
import { VolverInicioButton } from "../ui/volver-inicio-button";
import { RenderChild } from "./render-child";

export const RenderHome = () => {
  console.log("renderHome component");

  const [count, setCount] = useState<number>(0);
  console.log({ count });

  const clickHandler = () => {
    setCount(count + 1);
  };
  return (
    <Filas>
      <VolverInicioButton />
      <p>
        En este caso, en el codigo, tenemos un componente padre que tiene un
        child y este ultimo otro child mas (un grandson del primero). Los 3 se
        renderizan{" "}
      </p>
      <p>soy render home</p>
      <p>{count}</p>
      <button onClick={clickHandler}>suma</button>
      <RenderChild numero={count} />
    </Filas>
  );
};
