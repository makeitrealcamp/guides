# React Hooks

Los **hooks** nos permiten utilizar el estado y otras características de React sin necesidad de convertir nuestros componentes a clases.

Algunas de las funcionalidades que podemos utilizar son: manejo del estado con `useState`, manejo de efectos secundarios como peticiones `HTTP` con `useEffect`, crear referencias con `useRef`, entre otras.

## useState

`useState` es el **hook** que nos permite crear un estado para nuestros componentes función. Recibe como argumento el valor inicial del estado. Retorna un arreglo, donde la primera posición es el valor del estado, y la segunda posición es una función que modifica el estado.

```javascript
import React, { useState } from 'react';

const Counter = () => {
  // Usando desctructuring podemos nombrar las posiciones del arreglo
  // [0] es el valor actual del estado
  // [1] es la función encargada de reasignar el valor del estado
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <button
        className="button"
        onClick={() => setCount(count + 1)}
      >
        Click Me
      </button>
      <span className="content">Clicked {count} times</span>
    </div>
  );
}
```

En este caso el valor inicial del estado es `0`. En la asignación del estado estamos haciendo un `destructuring` del estado, la primera posición la llamamos `count` y la segunda posición `setCount`.

## useEffect

`useEffect` es  el **hook** que nos permite manejar efectos secundarios.

`useEffect` recibe 2 argumentos, el primero es una función que se ejecutara después de que el componente se rendericé; el segundo argumento es un arreglo, este se conoce como las **dependencias** de nuestro hook, cuando el valor de alguna de las variables que nosotros agreguemos al arreglo de dependencias cambia, la función que pasamos como primer argumento es invocada nuevamente.

```javascript
import React, { useState, useEffect } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);

  // Este useEffect no tiene dependecias
  // Solo invoca las función después del primer renderizado.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);

  return (
    posts.length > 0 && posts.map(({ id, title, body }) => (
      <div className="post" key={id}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    ))
  );
}
```

* En este caso estamos haciendo una petición HTTP, cuando la respuesta es exitosa almacenamos la respuesta en el estado.
* Podemos definir un arreglo vacío, en este caso la función solo es invocada la primera vez que se renderiza el componente.
* Si pasamos un segundo argumento al `useEffect`, la función se invoca cada vez que el componente se actualiza. Ojo, puedes causar un ciclo infinito. Es recomendable pasar siempre al menos un arreglo vacío.

## Creando nuestro propio hook

Es posible crear nuestros propios **hooks** utilizando los **hooks** básicos proporcionados por React. Para esto debemos crear una función, por convención su nombre debe empezar con `use` y retornar los valores que queremos compartir. De esta manera podemos reutilizar funcionalida.

```javascript
const useCount = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  return [count, setCount];
}

const CounterBy10 = () => {
  const [count, setCount] = useCount(100);

  return (
    <div>
      <button
        type="button"
        onClick={() => setCount(count + 10)}
      >
        Counter 1
      </button>
      <span>{count}</span>
    </div>
  );
}

const CounterBy20 = () => {
  const [count, setCount] = useCount(200);

  return (
    <div>
      <button
        type="button"
        onClick={() => setCount(count + 20)}
      >
        Counter2
      </button>
      <span>{count}</span>
    </div>
  );
}

const App = () => (
  <>
    <CounterBy10 />
    <CounterBy20 />
  </>
);
```

## Reglas de los hooks

1. solo debes invocar un **hook** desde el nivel más alto de una función. Esto quiere decir que un hook nunca debe de ser invocado dentro de un conditional, un ciclo, o una función anidada.

```javascript
const App = () => {
  // bien
  const [name, setName] = useState('');

  // mal
  if (name !== 'Pedro') {
    const [lastName, setLastName] = useState('Pérez');
  }
}
```

2. Los **hooks** no se deben invocar desde funciones de JavaScript. Esto quiere decir que solo debemos invocar los hooks desde componentes de React o **hooks** propios.

```javascript
// bien
const Component = () => {
  const [user, setUser] = useState(null);
}

// también bien
const useCustomHook = () => {
  const [count, setCount] = useState(0);

  return [count, setCount]
}

//mal
const sum = (num1, num2) => {
  const [value, setValue] = useState(0);

  return num1 + num2;
}
```

Para una guía completa de los hooks visita la [Referencia de la API de los Hooks](https://es.reactjs.org/docs/hooks-reference.html).
