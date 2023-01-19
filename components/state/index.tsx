import { VolverInicioButton } from "../ui/volver-inicio-button";
import { StateDontWork } from "./dont-work";
import { MultipleState } from "./multiple-state";
import { StateWork } from "./state-work";

export const StateHome = () => {
  console.log("activar en rendering Paint flashing");
  return (
    <div style={{ width: "800px" }}>
      <VolverInicioButton />
      <div style={{ display: "flex", gap: "50px" }}>
        <div style={{ border: "2px solid black", padding: "10px" }}>
          <p>Recordatorio: activar en rendering Paint flashing</p>
          <p>
            Lo que demostramos en este apartado es como funcionan los renders en
            distintas situaciones con un state.
          </p>
          <p>
            El primer caso es uno correcto donde se demuestra que dentro del
            clickHandler se hace un setState y se lee el dato que esta en el
            state. Pero fuera, en la raiz del componente, hay otro log que lee
            el estado y es distinto al del handler. Lo que se que se quiere
            mostrar al fin y al cabo es que si se hace un set e instantaneamente
            usar la informacion del state se cae en un bug.
          </p>
          <p>El segundo caso se pushea un valor nuevo a un array</p>
          <p>
            En el tercer caso se usa mal la formula de setState y no dispara
            ningun re-render
          </p>
          <p>
            El cuarto y ultimo caso es un componente que contiene 3 state
            distintos y el render solo afecta en donde nosotros hacemos click
          </p>
        </div>
        <div style={{ border: "2px solid black", padding: "10px" }}>
          <StateWork></StateWork>
          <StateDontWork></StateDontWork>
          <MultipleState></MultipleState>
        </div>
      </div>
    </div>
  );
};
