import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { CodeBlock, atomOneDark, dracula } from "react-code-blocks";
import {
  BaseButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "../ui/buttons";
import { IconCircleWrapper } from "../ui/icon-wrapper";
import {
  FacebookIcon,
  Minus,
  Plus,
  StyledArrow,
  StyledDownload,
  StyledShare,
  StyledTinyShare,
} from "../ui/icons";
import { FacebookIconSVG } from "../ui/icons/svg/facebook-icon";
import {
  CardText,
  PrimarySubtitle,
  PrimaryText,
  PrimaryTitle,
  SecondarySubtitle,
  SecondaryText,
  SecondaryTitle,
  TinyCardTitle,
} from "../ui/text";
import {
  actualHtml,
  textUIExample,
  withEmotionHtml,
  withEmotionHtmlAndChanges,
} from "./codes";

import {
  AllExplicationContainer,
  ButtonsContainer,
  ComparationContainer,
  ComponentsExamplesContainer,
  ExampleBox,
  ExamplesContainer,
  FontsContainer,
  ImagenBox,
  OtherExamplesContainer,
  PreviusContainer,
  Root,
  SVGIconsContainer,
  TextContainer,
  TextOneBox,
  TextTwoBox,
  WidthExampleBox,
} from "./styled";

export const UiHome = () => {
  console.log("home, first render");

  const router = useRouter();
  const renderClickHandler = () => {
    // router.push("/render");
  };
  const stateClickHandler = () => {
    // router.push("/state");
  };
  const hooksClickHandler = () => {
    // router.push("/hooks");
  };
  const wrapperClickHandler = () => {
    console.log("click en icono");
  };
  const estilos = [
    "fuentes",
    "boxes",
    "botones",
    "iconos",
    "inputs",
    "modales",
  ];
  return (
    <Root>
      <PrimaryButton
        onClick={() => {
          router.push("/");
        }}
      >
        Volver al inicio
      </PrimaryButton>
      <AllExplicationContainer>
        <PreviusContainer>
          <p>
            La capa UI es una de las mas importantes para el comienzo de
            cualquier proyecto. En esta se definen los estilos de:
          </p>

          {estilos.map((estilo, i) => {
            return <p key={i}>-{estilo}</p>;
          })}
          <p>
            Todo el apartado visual que se prevea usar esta definido en esta
            capa por el diseñador del equipo. Por ejemplo los botones estan
            definidos y despues siempre seran los mismos a lo largo de la
            plataforma para mantener consistencia, en otros casos se puede
            sentar una base sobre la cual partir. Un modal por ejemplo puede
            tener siempre una sombra o un background color fijo (o por prop se
            puede imponer otro) pero al menos cierta configuracion siempre va a
            estar planteada
          </p>
        </PreviusContainer>
        <FontsContainer>
          <p> Ejemplo de textos estilados:</p>
          <PrimaryText>Texto primario</PrimaryText>
          <PrimaryText color="red">
            Texto primario con cambio de color por prop
          </PrimaryText>

          <SecondaryText>Texto secundario</SecondaryText>
          <PrimaryTitle>Titulo primario</PrimaryTitle>
          <SecondaryTitle>Titulo secundario</SecondaryTitle>
          <PrimarySubtitle>Subtitulo primario</PrimarySubtitle>
          <SecondarySubtitle>Subtitulo secundario</SecondarySubtitle>
          <TinyCardTitle>Otro tipo de titulo</TinyCardTitle>
          <CardText>Texto para cards</CardText>
          <br />
        </FontsContainer>
        <TextContainer>
          <PrimaryText>
            En fin, pueden hacerse las fuentes necesarias para el proyecto y van
            a ir manteniendose durante el proceso, a menos que el diseñador
            desee algun cambio de font-family, color u algun detalle, pero que
            va a alterarse en el 100% del proyecto
          </PrimaryText>

          <PrimaryText>
            Recomiendo 2 cosas para realizar esta capa ui. <br />
            <br />
            Establecer una libreria en donde van a basarse los componentes. Por
            que esto? En principio puede que modificar y hacer botones propios
            sea facil (y hasta recomendable) pero mas adelante van a haber
            ciertos componentes que requiran mas logica y mas css. Como por
            ejemplo el funcionamiento de un modal no es solo lo visual, tambien
            requiere de modificar su comportamiento dependiendo de donde hacen
            click (se tendria que preparar un custom hook que los controle). La
            que conozco que mejor se mantiene, mas material brinda y que tiene
            buena documentacion es Material UI (MUI). Integrarse y adaptarse a
            librerias que brinden componentes lleva tiempo porque algunas
            modificaciones requiren lectura en su documentacion porque son cosas
            muy internas, pero utilizadas unas pocas veces agiliza el proceso de
            armado de toda la visual <br />
            Por otra parte, para llevar a cabo lo anterior y mas porque es una
            herramienta muy poderosa, es usar emotion/styled-components. Esto
            por que? Utiliza conceptos de herencia para definir por ejemplo un
            titulo base y luego otros que lo llamen para darle unos retoques
            mas. Modulariza los css para que no repita className y permite pasar
            props para distintas modificaciones que se le quiera hacer. Tambien
            permite el cambio de iconos que esten en formato SVG (ver en el
            codigo como es esta parte), e incluso segun la doc puede hacerse
            SSR, en un proyecto vi que usaron emotion para SSR pero en otros
            lados dicen que no funciona asi que no se exactamente. En fin,
            permite estilizar las cosas para que queden mejor. (Si se usa por
            primera vez hay que descargar una extension en vscode que se llama
            styled para que las props de css se autocompleten).
          </PrimaryText>
          <PrimaryText>Ejemplos en codigo:</PrimaryText>
        </TextContainer>
      </AllExplicationContainer>

      <ExamplesContainer>
        <CodeBlock
          text={textUIExample()}
          language={"tsx"}
          showLineNumbers={false}
          theme={atomOneDark}
        />
        <ComparationContainer>
          <CodeBlock
            text={actualHtml()}
            language={"jsx"}
            showLineNumbers={false}
            theme={dracula}
          />
          <CodeBlock
            text={withEmotionHtml()}
            language={"jsx"}
            showLineNumbers={false}
            theme={atomOneDark}
          />
        </ComparationContainer>
        <CodeBlock
          text={withEmotionHtmlAndChanges()}
          language={"jsx"}
          showLineNumbers={false}
          theme={atomOneDark}
        />
      </ExamplesContainer>
      <ComponentsExamplesContainer>
        <ButtonsContainer>
          <br />
          <PrimaryButton onClick={renderClickHandler}>Primary</PrimaryButton>
          <SecondaryButton onClick={stateClickHandler}>
            Secondary
          </SecondaryButton>
          <TertiaryButton onClick={hooksClickHandler}>Tertiary</TertiaryButton>
          <Button color="success">Success default</Button>
        </ButtonsContainer>
        <SVGIconsContainer>
          <IconCircleWrapper onClick={wrapperClickHandler}>
            <StyledDownload />
          </IconCircleWrapper>
          <IconCircleWrapper onClick={wrapperClickHandler}>
            <StyledShare />
          </IconCircleWrapper>
          <IconCircleWrapper onClick={wrapperClickHandler}>
            <StyledTinyShare />
          </IconCircleWrapper>
          <IconCircleWrapper onClick={wrapperClickHandler}>
            <StyledArrow />
          </IconCircleWrapper>
          <IconCircleWrapper onClick={wrapperClickHandler}>
            <Plus />
          </IconCircleWrapper>
          <IconCircleWrapper onClick={wrapperClickHandler}>
            <Minus />
          </IconCircleWrapper>
          <IconCircleWrapper onClick={wrapperClickHandler}>
            <FacebookIcon />
          </IconCircleWrapper>
        </SVGIconsContainer>
        <OtherExamplesContainer>
          <ExampleBox>
            <ImagenBox>IMAGEN</ImagenBox>
            <TextOneBox>
              <PrimaryText>Soy el texto 1</PrimaryText>
            </TextOneBox>
            <TextTwoBox>
              <PrimaryText>Soy el texto 2</PrimaryText>
            </TextTwoBox>
          </ExampleBox>
          <WidthExampleBox>
            <ImagenBox>IMAGEN</ImagenBox>
            <TextOneBox>
              <PrimaryText>Soy el texto 1</PrimaryText>
            </TextOneBox>
            <TextTwoBox>
              <PrimaryText>Soy el texto 2</PrimaryText>
            </TextTwoBox>
          </WidthExampleBox>
        </OtherExamplesContainer>
      </ComponentsExamplesContainer>
    </Root>
  );
};
