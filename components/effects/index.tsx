import { useRouter } from "next/router";
import { CodeBlock, dracula } from "react-code-blocks";
import { VolverInicioButton } from "../ui/volver-inicio-button";
import {
  changeEffectToMemo,
  dataFetchingBad,
  dataFetchingGood,
  dataFetchingWithCustomHook,
  initializeComponentBad,
  initializeComponentGoodOne,
  initializeComponentGoodTwo,
  moveFunctionsInsideEffectsCode,
  timeFunction,
  wrapEffectsInFunction,
} from "./codes";

export const EffectsHome = () => {
  console.log("EffectsHome component");
  const codeFunctionsInsideEffects = moveFunctionsInsideEffectsCode();
  const codeWrapEffectsInFunction = wrapEffectsInFunction();
  const router = useRouter();
  return (
    <div style={{ width: "800px" }}>
      <VolverInicioButton />
      <p>
        Muchas de las cosas se toman en cuenta del blog de Dan Abramov, uno de
        los desarrolladores que estuvo a cargo de la creacion de react. Link -
        {">"}
        <a
          href="https://overreacted.io/a-complete-guide-to-useeffect"
          rel="noopener"
          style={{ color: "blue" }}
        >
          ir al blog que habla de effects!
        </a>
      </p>
      <p>-----------</p>
      <p>
        Cada render tiene su propio state, effect, handler{" "}
        <a
          href="https://codesandbox.io/s/w2wxl3yo0l"
          rel="noopener"
          style={{ color: "blue" }}
        >
          Ir a pagina de prueba
        </a>{" "}
      </p>
      <>-----------</>
      <h1>Synchronization, Not Lifecycle</h1>
      <p>
        {" "}
        - React sincroniza con el DOM con respecto a los state y props actuales
        , no distingue entre un mount o un update. Por lo general se piensa como
        un mount/unmount/update. Por ejemplo en el blog se menciona que es nadar
        contra la marea el escribir un effect que funcione de distinta forma
        dependiendo si es la primera vez o no que se monta el componente.
      </p>
      <p>
        - El autor aconseja mover todas las funciones que dependan de useEffect
        dentro del useEffect mismo.
      </p>
      <CodeBlock
        text={codeFunctionsInsideEffects}
        language={"tsx"}
        showLineNumbers={true}
        theme={dracula}
      />
      <p>
        - Si lo que se quiere del codigo anterior es mutar la query, entonces al
        array de dependencia habria que agregarle query. Al mover todas las
        funciones que dependan del effect es mas facil ver cuales son las
        dependencias necesarias. <br />
        <br />
        Tambien lo que se presenta es, que pasa si dos funciones comparten la
        logica de un useEffect?. Lo que propone inicialmente el articulo es dos
        useEffect que dentro llamen a esa funcion, pero las dependencias no
        serian las correctas (porque no tiene). Lo que sugiere para arreglar
        este problema seria agregar esa funcion a las dependencias, pero cambian
        muy seguido. Finalmente, como solucion recomienda envolver los effects
        en una funcion y ahi llamar a la otra externa, quedando de la siguiente
        forma:
      </p>
      <CodeBlock
        text={codeWrapEffectsInFunction}
        language={"tsx"}
        showLineNumbers={true}
        theme={dracula}
      />
      <p>
        Y otra de las fuentes es la nueva documentacion de react (bastante
        amplia y con componentes en lugar de clases)
      </p>
      <a
        href="https://beta.reactjs.org/learn/synchronizing-with-effects"
        rel="noopener"
        style={{ color: "blue" }}
      >
        Nueva doc!
      </a>
      <p>
        Uno de los datos que brinda la documentacion es que el hook useEffect se
        activa despues del render. Por ejemplo si alguien quisiera seleccionar
        algo del DOM mediante usando una ref (referencia) le va a tirar error
        porque todavia no existe. Peeeero si se envuelve dentro de un useEffect,
        que se ejecuta luego de que se pinte el DOM, entonces ese elemento si
        existe y ahi se le pueden aplicar los cambios que se requieran. Por eso
        mismo usar un useEffect sin dependencias, seteando un valor crea un
        bucle infinito:
      </p>
      <ol>
        <li>Renderiza</li>
        <li>Sucede el useEffect</li>
        <li>Cambia el state</li>
        <li>
          El cambio de state provoca un re-render, con lo que volveriamos al
          paso 1{" "}
        </li>
      </ol>
      <p>
        Por otra parte tambien se puede evitar el uso del useEffect con
        distintas estrategias. Antes que nada aclara que no se necesita un
        Effect para manejar los eventos del usuario o para transformar data para
        el render, como aplicar un filtro. Dejo el ejemplo que esta en la doc:
      </p>
      <CodeBlock
        text={changeEffectToMemo()}
        language={"tsx"}
        showLineNumbers={false}
        theme={dracula}
      />
      <p>
        En este caso se recomienda usar el useMemo si la operacion
        getFilteredTodos es muy lenta porque tiene mucho que procesar para que
        cada render no repita la funcion. En caso de dudas se puede calcular el
        tiempo que lleva completar la funcion.
      </p>
      <CodeBlock
        text={timeFunction()}
        language={"tsx"}
        showLineNumbers={false}
        theme={dracula}
      />
      <h3>Al inicializar la app</h3>
      <div
        style={{
          width: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <CodeBlock
          text={initializeComponentBad()}
          language={"tsx"}
          showLineNumbers={false}
          theme={dracula}
        />
        <CodeBlock
          text={initializeComponentGoodOne()}
          language={"tsx"}
          showLineNumbers={false}
          theme={dracula}
        />
        <p>
          Este segundo caso lo presenta de esa forma porque en la ultima version
          de react se implemento un debounce en el useEffect para que se dispare
          2 veces en desarrollo para que al dev se le notifique de alguna forma
          que el cleanup no esta funcionando correctamente.{" "}
          <a
            href="//https://beta.reactjs.org/learn/synchronizing-with-effects#putting-it-all-together"
            rel="noopener"
            style={{ color: "blue" }}
          >
            ejemplo de escribir hola, con y sin cleanup (hay que tocar el codigo
            que nos dejan de muestra)
          </a>
        </p>
        <CodeBlock
          text={initializeComponentGoodTwo()}
          language={"tsx"}
          showLineNumbers={false}
          theme={dracula}
        />
        <p>
          En este ultimo caso el codigo al top level es decir por encima de
          donde se comienza la declaracion del componente, solo corre una vez,
          aunque recomienda no usarlo con abuso. Principalmente porque a veces
          el codigo se quiere mover de un lado a otro y aquello que esta
          declarado arriba suele olvidarse/perderse.
        </p>
      </div>
      <div
        style={{
          width: "800px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h3>Data Fetching</h3>
        <CodeBlock
          text={dataFetchingBad()}
          language={"tsx"}
          showLineNumbers={false}
          theme={dracula}
        />
        <p>
          Si en el input (donde se pone la query que no esta en el ejemplo) se
          escribe muy rapido la palabra hola, lo que va a hacer el useEffect es
          que a cada cambio de letra se haga un fetch y suceda algo llamado{" "}
          <a
            href="https://beta.reactjs.org/learn/synchronizing-with-effects#fetching-data"
            rel="noopener"
            style={{ color: "blue" }}
          >
            {" "}
            race condition
          </a>
          , es decir, se va a hacer fetch de h, ho , hol, hola, para
          solucionarlo se agrega la cleanup function en el Effect.
        </p>
        <CodeBlock
          text={dataFetchingGood()}
          language={"tsx"}
          showLineNumbers={false}
          theme={dracula}
        />
        <p>
          De la forma vista arriba todas las respuestas van a ser ignoradas
          excepto la ultima. Lo que recomienda es usar un framework de fetching
          (que se va a mencionar mas abajo) o, si se quiere, para mantener
          limpio el codigo y que en todo caso se pueda acceder a lo mismo desde
          otro componente, mover todo a un custom hook de la siguiente forma{" "}
        </p>
        <CodeBlock
          text={dataFetchingWithCustomHook()}
          language={"tsx"}
          showLineNumbers={false}
          theme={dracula}
        />
      </div>

      <p>
        Conferencia{" "}
        <a
          href="https://www.youtube.com/watch?v=HPoC-k7Rxwo"
          rel="noopener"
          style={{ color: "blue" }}
        >
          Link
        </a>
        <br />
      </p>
      <ul>
        <li> No es un state setter</li>
        <li>
          {" "}
          Se usa para sincronizacion con un sistema externo, como (network,
          suscripcion y DOM). Si lo que se quiere es usar este hook para el data
          flow entonces va a haber problemas
        </li>
        <li>
          Las acciones de efecto se manejan en los event handlers, como
          submitHandler, onChangeHandler, onClickHandler
        </li>
        <li>No se recomienda para hacer data fetch</li>
      </ul>
      <br />
      <p>
        Entonces con lo ultimo se plantea un problema, donde se hacen los
        llamados a la api si no es en un useEffect? Este ultimo tiempo
        estuvieron recomendando utilizar useQuery o useSWR (que es una
        herramienta de vercel que se puede utilizar en un proyecto ajeno a next)
        <br /> Hago una breve introduccion a swr porque lo use en varios
        proyectos comparado con useQuery
      </p>
      <button onClick={() => router.push("swr")}>Ir a swr</button>
    </div>
  );
};
