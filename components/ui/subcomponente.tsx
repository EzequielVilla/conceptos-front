import { ReactNode } from "react";

interface Data {
  title: string;
  body: ReactNode;
}

interface Prop {
  contenido: Data[];
}

export const Subcomponente = ({ contenido }: Prop) => {
  return (
    <>
      {contenido.map((item) => {
        const { body, title } = item;
        return <>{body}</>;
      })}
    </>
  );
};
