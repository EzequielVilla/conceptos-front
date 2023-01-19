import { useRouter } from "next/router";

export const VolverInicioButton = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("/");
  };
  return <button onClick={clickHandler}>Volver al inicio</button>;
};
