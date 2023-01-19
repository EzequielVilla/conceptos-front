# Renderizado

## Como pasa

- Hay una reconciliacion entre el DOM y el virtualDOM que genera react.
- El virtualDOM crea con react.createElement(), haciendo asi un objeto de la clase ->

```js
{
  type: 'marquee',
  props: {
    bgcolor: '#ffa7c4',
    children: 'hi',
  },
  key: null,
  ref: null,
  $$typeof: Symbol.for('react.element'),
}
// El typeof es por una cuestion de seguridad para que no se le inserte un elemento en un string por ejemplo.
```

## Cuando pasa

- En el startup.

## Re-render

- Cuando las props o states cambian.
  - Si es el state el y todos los componentes hijos tambien se re-renderizan.

# State

## Que es

- Dato o informacion del componente. Cuando este cambia dispara el re-render.
- Siempre es preferible un stateless

## Como modificarlo (use state para strings y arrays)

No funciona

```js
const [messageObj, setMessageObj] = useState({ message: "" });
const onChange = (e) => {
  messageObj.message = e.target.value;
  setMessageObj(messageObj);
};
```

Funciona

```js
const [messageObj, setMessageObj] = useState({ message: "" });
const onChange = (e) => {
  const newMessageObj = { message: e.target.value };
  setMessageObj(newMessageObj);
};
```

En caso de tener mas propiedades hay que capturar el valor anterior haciendo un callback dentro del <set> y hacer un spread para no perder la informacion.

```js
const [messageObj, setMessageObj] = useState({ message: "", id });
const onChange = (e) => {
  const newMessage = e.target.value;
  setMessageObj((preValue) => {
    return { ...preValue, message: newMessage };
  });
};
```

Info con los ejemplos anteriores en : https://medium.com/edonec/state-in-react-an-overview-a182675cee2c

# [x ]Hooks

## Que son

- Podria decirse que los hooks son funciones que encapsulan la logica que puede llegar a repetirse en varias partes del codigo, como por ejemplo el useState no se modifica constantemente su comportamiento, ya esta predefinido. Idem con useEffect o cualquiera de los que ya estan listos en react.

- Tienen que empezar con la palabra clave `use`
- Llaman a otros hooks

## Como y por que de un custom hook

- Idem a lo explicado anteriormente, se identifica con la palabra `use` y pueden llamar a otros hooks.

## [x] useEffect

### Subscribe ?

### Que es

### Como y cuando usarlo

# Estilos

## MUI

## Emotion

## SVG

# Otros

## api calls

## SWR [x] (que es como reactQuery) (usado en hooks con useEffect)
