import { useEffect, useState } from "react";

export const Ejemplos = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <p>{count}</p>
      <button>suma</button>
    </>
  );
};
