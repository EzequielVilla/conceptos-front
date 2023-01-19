import { useRouter } from "next/router";
import { VolverInicioButton } from "../ui/volver-inicio-button";
import { CodeBlock, dracula } from "react-code-blocks";
import { swrFirstExample } from "./codes";

export const SwrHome = () => {
  const router = useRouter();
  const swrExample = swrFirstExample();
  return (
    <div style={{ width: "800px" }}>
      <VolverInicioButton />
      <button onClick={() => router.push("effects")}>Effects</button>
      <p>
        Como su{" "}
        <a
          href="https://swr.vercel.app/"
          rel="noopener"
          style={{ color: "blue" }}
        >
          documentacion
        </a>{" "}
        lo indica utiliza una estrategia de: <br />
        <p>
          Primero devuelve la data que tiene en el cache, entonces hace el
          request y vuelve con la data re validada, teniendo como basico el
          siguiente esquema:
        </p>
        <CodeBlock
          text={`const { data, error } = useSWR(key, fetcher)`}
          language={"tsx"}
          showLineNumbers={false}
          theme={dracula}
        />
        El fetcher es una funcion async, codeada en el proyecto que puede usar
        fetch/axios/graphQL, que acepta la key como la direccion a la que tiene
        que apuntar para obtener la data. La key tambien sirve como
        identificacion para por ejemplo mutar varios items.
      </p>
      <p>Un ejemplo de swr en codigo seria:</p>
      <CodeBlock
        text={swrExample}
        language={"tsx"}
        showLineNumbers={false}
        theme={dracula}
      />
      <p>
        Donde useSWR se lo envuelve en un custom hook para que pueda ser
        reutilizado en distintas partes del proyecto
      </p>
      <a
        href="https://e-commerce-m10.vercel.app/"
        rel="noopener"
        style={{ color: "blue" }}
      >
        Demo en un e-commerce{" "}
      </a>
      <p>
        Distintos usos pueden verse en la documentacion antes mencionada, como
        useSWRImmutable, o un tercer parametro de objetos dentro de useSWR con
        distintas opciones, como revalidar cada x tiempo. Otro uso importante es
        el mutate, que hace un update rapido en la data local y hace la
        revalidacion (fetch) o incluso puede mutar muchas rutas porque busca
        globalmente las keys (si se traba con ids por ejemplo y algo tiene que
        cambiar en todos los que uno indique). Distintas revalidaciones y
        prefetching son otras funcionalidades.
      </p>
    </div>
  );
};
