import { RenderGrandson } from "./render-grandson";

export const RenderChild = ({ numero }: any) => {
  console.log("renderChild component");
  console.log({ numero });

  return (
    <>
      <>child </>
      <br></br>
      <RenderGrandson />
    </>
  );
};
