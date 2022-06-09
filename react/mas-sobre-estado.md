# Más sobre estado

En un componente funcional se puede crear un estado utilizando `useState`. Esta función retorna un arreglo con dos elementos:

* El estado
* Una función para modificar el estado

```javascript
import React, { useState } from "react";

function Welcome() {
  const [counter, setCounter] = useState("Hola Mundo") // define el estado con un valor inicial

  return <h1>{counter}</h1>;
}
```

El estado es **de sólo lectura**, no debes modificar directamente como en el siguiente ejemplo:

```javascript
// mal - no hagas esto
counter = 2;
```

Para modificar el estado utiliza la función que retorna el `useState`, en nuestro ejemplo sería `setCounter`. 

```javascript
setCounter(2);
```

Cuando la modificación de un estado depende del estado anterior se debe hacer de la siguiente forma para evitar problemas de asincronía:

```javascript
setCounter(prevCounter => prevCounter++);
```

En vez de pasarle un valor al `setCounter` le estamos pasando una función que recibe el estado y retorna un nuevo estado.

## Arreglos y objetos

Cuando el estado es un arreglo o un objeto hay que tener cuidado porque cada vez que se modifica ese estado se crea un nuevo arreglo u objeto. A esto se le conoce como [inmutabilidad](https://es.wikipedia.org/wiki/Objeto_inmutable). La idea es que los cambios al estado sean explícitos y predecibles, y las aplicaciones más fáciles de mantener en el tiempo.

Acostumbrarse a escribir código inmutable toma algún tiempo pero es una buena práctica. En esta guía vamos a ver algunas técnicas para manipular arreglos y objetos de forma inmutable.

## Arreglos

En vez de modificar el arreglo original para insertar, actualizar y eliminar elementos, lo que vamos a hacer es construir un **nuevo** arreglo con el cambio. Veamos cómo hacerlo.

Para los siguientes ejemplos vamos a suponer que tenemos un componente con el siguiente estado:

```javascript
const [arr, setArr] = useState([1, 2, 3]);
```

### Insertando elementos

Para insertar un elemento a un arreglo utiliza el método `concat` que retorna un nuevo arreglo con el nuevo elemento:

```javascript
// bien
setArr(arr => arr.concat(4)); // crea un nuevo arreglo

// mal
setArr(arr => arr.push(4)); // modifica el arreglo original
```

### Cambiando un elemento

Existen varias formas de cambiar un elemento de forma inmutable. La primera es con el método `map`:

```javascript
// duplicar todos los elementos
setArr(arr => arr.map(n => n * 2));

// duplicar sólo el elemento en la posición 1
const idx = 1;
setArr(arr => arr.map((n, i) => i === idx ? n * 2 : n));
```

La segunda es utilizando el método `slice` y `concat`. Por ejemplo si queremos cambiar la segunda posición por un `5`:

```javascript
const idx = 1;
setArr(arr => {
  return arr.slice(0, idx)
              .concat(5)
              .concat(arr.slice(idx + 1));
})
```

La tercera es con el nuevo operador `...` \(spread\) de JavaScript:

```javascript
const idx = 1;
setArr(arr => {
  return [...arr.slice(0, idx), 5, ...arr.slice(idx + 1)];
});
```

### Removiendo un elemento

Puedes remover un elemento de forma inmutable de varias formas. La primera es con el método `filter`:

```javascript
const idx = 1;
setArr(arr => arr.filter(e, i) => i !== idx);
```

La segunda es utilizando el método `slice` y `concat`:

```javascript
const idx = 1;
setArr(arr => arr.slice(0, idx).concat(arr.slice(idx + 1)))
```

La tercera es con el nuevo operador `...` \(spread\):

```javascript
const idx = 1;
setArr(arr => {
  return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
})
```

## Objetos

Con los objetos pasa algo similar que con los arreglos. En vez de modificarlos directamente vamos a crear un nuevo objeto cada vez que necesitamos hacer una modificación.

Para los siguientes ejemplos vamos a suponer que tenemos un componente con el siguiente estado:

```javascript
const [obj, setObj] = useState({ a: 1, b: 2, c: 3 });
```

### Agregando y modificando propiedades

Para agregar o modificar propiedades en los objetos utiliza el operador `...` \(spread\) de JavaScript:

```javascript
// agregar una propiedad
setObj(obj => { ...obj, d: 4 });

// modificar una propiedad
setObj(obj => { ..., c: 5 });
```


