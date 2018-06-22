# JSX

{% youtube %} https://youtube.com/watch?v=IBwhZCLNWOA {% endyoutube %}

 **JSX** \(JavaScript XML\) es la sintaxis que se utiliza para construir el markup de los componentes de React. Veamos un ejemplo tomado del código que genera [create-react-app](https://github.com/facebookincubator/create-react-app):

```markup
<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">Welcome to React</h1>
  </header>
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>
```

**JSX** es similar a HTML pero con algunas diferencias importantes:

1. Se utiliza `className` en vez de `class` para definir las clases de un elemento.

   ```markup
    // mal
    <div class="active"></div>

    // bien
    <div className="active"></div>
   ```

2. Todas las etiquetas deben estar cerradas con `/>` o una etiqueta de cierre.

   ```markup
    // mal
    <img src="...">
    <input type="text">

    // bien
    <img src="..." />
    <input type="text"></input>
   ```

## JSX se transforma en JavaScript

Por debajo **JSX** se transforma en código JavaScript. Por ejemplo, el siguiente código **JSX**

```markup
<div class="active">Hola Mundo</div>
```

se transforma en el siguiente código JavaScript:

```javascript
React.createElement('div', { className: 'active'},  'Hola mundo');
```

Puedes utilizar el [REPL de Babel](http://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=DwEwlgbgBAxgNgQwM5ILwCIEwC6QKboB8AEgPaJQCyArgHYinAD04EhQA&debug=false&circleciRepo=&evaluate=true&lineWrap=false&presets=latest%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0) para ver en qué se convierte el código JSX que escribes.

La ventaja de **JSX** es que, como es JavaScript, podemos:

1. Ver algunos errores en tiempo de compilación.
2. Asignar **JSX** a variables. Por ejemplo:

   ```javascript
    const elem = <p>Hola</p>;
   ```

3. Retornar **JSX** desde métodos. Por ejemplo:

   ```javascript
    renderText() {
      if (someCondition) {
        return <p>Hola</p>;
      } else {
        return <p>Mundo</p>;
      }
    }
   ```

Una restricción de **JSX** es que siempre debes tener un elemento raíz:

```javascript
// mal
const elem = <p>Hola</p><p>Mundo</p>;

// bien
const elem = <div>
    <p>Hola</p>
    <p>Mundo</p>
  </div>;
```

Para no perder la indentación en el último ejemplo podemos utilizar paréntesis para escribir el **JSX** en una nueva línea:

```javascript
const elem = (
  <div>
    <p>Hola</p>
    <p>Mundo</p>
  </div>
);
```

Este es un patrón muy común en las aplicaciones de React.

## Mezclando código JavaScript

Para mezclar código JavaScript en **JSX** utiliza corchetes \(`{}`\):

```javascript
const style = "active";
const title = "Hola Mundo";

<div className={style}>{title}</div>;
```

Una restricción de **JSX** es que no puedes utilizar `if`, `else`, `while` o `for`.

Para agregar condicionales utiliza el operador ternario:

```markup
<div>
  {condition ? <h1></h1> : null}
</div>
```

Para mostrar elementos de un arreglo o un objeto utiliza `map`:

```javascript
const names = ["Pedro", "Juan", "Germán"];

const jsx = (
  <ul>
    {names.map((name) =>
      <li>{name}</li>
    )}
  </ul>
);
```

## Estilos inline

Es posible definir y utilizar estilos inline en **JSX**:

```javascript
let styles = {
  borderColor: "#999"
};

const jsx = (
  <div style={styles}>
    Hola mundo
  </div>
);
```

## Eventos del DOM

En **JSX** se utilizan los eventos estándar del DOM como `onclick`, `onchange`, `onkeydown`, etc. pero utilizando camelCase: `onClick`, `onChange`, `onKeyDown`, etc. Por ejemplo:

```markup
<button onClick={alert("Hola!")}></button>
```

Fíjate que utilizamos corchetes \(`{}`\) para escribir nuestro código JavaScript. También podríamos pasar una función que es invocada cuando se genere el evento:

```javascript
const saluda = () => alert("Hola!");

<button onClick={saluda}></button>
```

Fíjate que no estamos invocando la función `saluda`, sólo la estamos pasando para que React la invoque cuando ocurra el evento.
