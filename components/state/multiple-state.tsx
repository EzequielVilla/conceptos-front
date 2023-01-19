import { useState } from "react";
import { Filas } from "../ui/divs";

export const MultipleState = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);
  const [countThree, setCountThree] = useState(0);

  return (
    <Filas>
      <>
        <button
          onClick={() => {
            setCountOne(countOne + 1);
          }}
        >
          count1
        </button>
        <p>{countOne}</p>
      </>
      <>
        <button
          onClick={() => {
            setCountTwo(countTwo + 1);
          }}
        >
          count2
        </button>
        <p>{countTwo}</p>
      </>
      <>
        <button
          onClick={() => {
            setCountThree(countThree + 1);
          }}
        >
          count3
        </button>
        <p>{countThree}</p>
      </>
    </Filas>
  );
};
