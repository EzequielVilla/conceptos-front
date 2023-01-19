import { useRouter } from "next/router";
import { CodeBlock, dracula } from "react-code-blocks";
import { VolverInicioButton } from "../ui/volver-inicio-button";
import { hookExampleOne, hookExampleThree, hookExampleTwo } from "./codes";

export const HooksHome = () => {
  console.log("HooksHome component");

  const codeExampleOne = hookExampleOne();
  const codeExampleTwo = hookExampleTwo();
  const codeExampleThree = hookExampleThree();

  return (
    <div style={{ width: "800px" }}>
      <VolverInicioButton />
      <p>
        Basicamente consiste en abstraer la logica que que vemos que se repite o
        que sabemos que vamos a reutilizar, en una funcion aparte. Lo
        recomendable es crear una carpeta hooks y guardar todo lo referente ahi.
        Para diferencias (y que react las interprete como tal, es decir, como
        custom-hooks) hay que comenzar la funcion con la palabra reservada use
      </p>
      <p>
        En este primer caso se abstrae la logica que se repitiria en aprox 3
        componentes:
      </p>
      <CodeBlock
        text={codeExampleOne}
        language={"tsx"}
        showLineNumbers={true}
        theme={dracula}
      />
      <br />
      <br />
      <p>
        Otro ejemplo en caso de querer cambiar el titulo de la pagina en la que
        estamos:
      </p>
      <CodeBlock
        text={codeExampleTwo}
        language={"tsx"}
        showLineNumbers={true}
        theme={dracula}
      />
      <br />
      <br />

      <p>Ejemplo de como calcular el ancho de la pagina del usuario.</p>
      <CodeBlock
        text={codeExampleThree}
        language={"tsx"}
        showLineNumbers={true}
        theme={dracula}
      />

      <p>
        Otro ejemplo (que no tengo el codigo) es cuando se crea un modal a mano
        y quiere evaluarse el comportamiento de si el usuario hizo click fuera
        del modal.
      </p>
    </div>
  );
};
