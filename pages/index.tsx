import { useRouter } from "next/router";

export default function Home() {
  console.log("home, first render");

  const router = useRouter();
  const renderClickHandler = () => {
    router.push("/render");
  };
  const stateClickHandler = () => {
    router.push("/state");
  };
  const hooksClickHandler = () => {
    router.push("/hooks");
  };
  const effectsClickHandler = () => {
    router.push("/effects");
  };
  const swrClickHandler = () => {
    router.push("/swr");
  };
  const styledClickHandler = () => {
    router.push("/styles");
  };
  return (
    <>
      <button onClick={renderClickHandler}>render</button>
      <button onClick={stateClickHandler}>state and render</button>
      <button onClick={hooksClickHandler}>hooks</button>
      <button onClick={effectsClickHandler}>effects</button>
      <button onClick={swrClickHandler}>SWR</button>
      <button onClick={styledClickHandler}>Styles</button>
    </>
  );
}
