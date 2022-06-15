# Componentes

En React se introduce el concepto de **componentes** para crear la interfaz gráfica de nuestra aplicación.

El objetivo es que cada componente sea independiente y encapsule su markup \(JSX\), sus estilos \(CSS\) y su estado \(JavaScript\). De esa forma los componentes pueden ser reutilizables y la interfaz gráfica más fácil de mantener y evolucionar.

## Definiendo un componente

Existen dos formas de definir componentes en React: con funciones o con clases. Sin embargo, cada vez se utilizan más los componentes función que los componentes de clase, así que utilizaremos por defecto componentes de función y dedicaremos una guía completa a componentes de clase.

La forma de definir una componente función es la siguiente:

```javascript
function Title() {
  return <h1>Hola Mundo</h1>;
};
```

**Nota:** También podemos utilizar una función flecha para definir un componente.

Para retornar **JSX** en múltiples líneas podemos encerrar todo entre paréntesis:

```javascript
function Title() {
  return (
    <header className="main">
      <h1>Hola Mundo</h1>
    </header>
  );
}
```

## Utilizando un componente

Para utilizar un componente debes importarlo y después incluirlo en tu **JSX** como se muestra en el siguiente ejemplo:

```javascript
import React from "react";
import Title from "./Title"; // importarlo

function App() {
  // incluirlo
  return <Title />;
}
```

## Comunicación entre componentes

Todo componente recibe un objeto llamado `props` con los atributos que se le pasan a través de **JSX**. Por ejemplo, podemos pasar un atributo `name` al componente `Welcome` \(que en un momento vamos a definir\):

```javascript
<Welcome name="Pedro" />
<Welcome name="Juan" />
```

En los componentes función los `props` se reciben como un parámetro de la función:

```javascript
function Welcome(props) {
  return <h1>{props.name}</h1>;
};
```

Generalmente se utiliza destructuración para recibir los `props`:

```javascript
function Welcome({ name }) {
  return <h1>{name}</h1>;
}
```

## El estado de un componente

Opcionalmente, un componente puede tener uno o más estados para almacenar información (temporal). Por ejemplo, dentro de un estado podemos almacenar un contador que vamos a incrementar cada vez que oprimamos un botón.

El estado se crea a través de la función `useState`, que retorna un arreglo con dos elementos: el estado y una función para modificar ese estado.

**Nota:** a `useState` se le conoce como un **hook** en React, hablaremos de **hooks** en una guía más adelante.

```javascript
import React, { useState } from "react";

function Welcome() {
  const [title, setTitle] = useState("Hola Mundo")

  return <h1>{title}</h1>;
}
```

En este ejemplo estamos definiendo un componente llamado `Welcome` que inicializa el estado con el string `"Hola Mundo"`. El estado también puede ser un número, un booleano, un arreglo o un objeto.

El estado nunca se modifica directamente, siempre se debe modificar con la función que encontramos en el segundo elemento del arreglo (`setTitle` en nuestro caso). Cada vez que se cambia el estado, React vuelve a renderizar \(pintar\) el componente en la vista.

```javascript
// correcto
setTitle("Hello World");

// incorrecto (el componente no se actualiza)
title = "Hello World";
```

Por ejemplo, podemos cambiar nuestro ejemplo anterior para que cuando hagan click sobre el `h1` cambie el texto. Para eso vamos a definir una función `updateText` que vamos a invocar cuando hagan `click` sobre el `h1`:

```javascript
function Welcome() {
  const [title, setTitle] = useState("Hola Mundo")

  function updateText() {
    setTitle("Hello World")
  }

  return <h1 onClick={updateText}>{title}</h1>;
}
```

Veamos el mismo ejemplo en Codepen, haz click sobre el `h1`:

{% embed url="https://codepen.io/germanescobar/pen/xpZzrx" %}