# Programación funcional

La **programación funcional** es un **paradigma de la programación** en donde las funciones se convierten en las protaginistas del código que escribimos.

Un **paradigma de la programación** es una forma de pensar en programación. Otros **paradigmas de la programación** incluyen la **programación imperativa** \(de la que vamos a hablar en un momento\) y la **programación orientada por objetos**. Estos paradigmas no son excluyentes y se pueden mezclar.

Aunque JavaScript no es un lenguaje puramente funcional, sí es posible programar de forma funcional. En JavaScript las funciones tienen las siguientes características:

* Se pueden asignar a variables.
* Se pueden pasar como parámetro de otras funciones \(**callbacks**\).
* Se pueden retornar desde otras funciones.

## Funciones nombradas vs anónimas

En JavaScript las funciones pueden tener un nombre o ser anónimas:

```javascript
// esta es una función nombrada
function namedFn() {}

// esta es una función anónima que estamos almacenando en una variable
const anonymousFn = function() {}
```

Las funciones nombradas son aquellas que tienen un nombre entre la palabra `function` y los paréntesis (`()`). Las funciones nombradas se mueven al principio del [scope](scope-hoisting-closures#scope), a esto se le conoce como [hoisting](scope-hoisting-closures#hoisting).

Las funciones anónimas se utilizan cuando queremos asignarlas a variables y, en algunas ocasiones, para pasarlas como parámetros de otras funciones o retornarlas desde otra función.

## Funciones que reciben funciones

Un **lenguaje funcional**, a diferencia de un **lenguaje imperativo**, nos permite componer funciones para solucionar diferentes tipos de problemas. A estas funciones también se les conoce como **funciones de alto nivel** (high order functions).

Por ejemplo, imagina que tenemos el siguiente arreglo:

```javascript
const arr = [1, 2, 3];
```

Ahora queremos imprimir todos sus elementos. En **programación imperativa** lo haríamos de la siguiente forma:

```javascript
for (let i=0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

En programación funcional utilizaríamos una función llamada `forEach` que viene incluída por defecto en todos los arreglos de JavaScript:

```javascript
const sum = arr.forEach(elem => console.log(elem));
```

Más compacto ¿no?. Por debajo `forEach` utiliza `for` para hacer el recorrido de los elementos. No es que la **programación funcional** reemplace la **programación imperativa**, la **programación funcional** está un nivel por encima de la **programación imperativa**.

### Map

Otro método útil que traen todos los arreglos en JavaScript es `map`, que nos permite transformar cada uno de los elementos de un arreglo. Por ejemplo, imagina que queremos duplicar todos los valores de `arr`:

```javascript
const newArr = arr.map(elem => elem * 2);

// newArr sería [2, 4, 6]
```

Lo interesante de las funciones es que se pueden anidar para crear código muy sutil. Por ejemplo, el siguiente código duplicaría cada elemento del arreglo y después imprimiría cada elemento duplicado.

```javascript
arr
  .map(elem => elem * 2)
  .forEach(elem => console.log(elem));
```

Separé el código en varias líneas para que sea más fácil de leer. Esto es una buena práctica cuando se anidan funciones.

### Reduce

Otra operación muy útil con los arreglos es convertirlos en algo completamente diferente, por ejemplo sumar todos los elementos, o crear un objeto a partir de un arreglo. A esto se le conoce en programación como **reducirlos**.

En JavaScript todos los arreglos tienen un método `reduce` que se utiliza precisamente para esto. Por ejemplo, si queremos sumar todos los elementos en `arr` podemos hacer lo siguiente:

```javascript
const sum = arr.reduce((acc, elem) => acc + elem);
console.log(sum); // 6
```

`reduce` recibe un **callback** \(una función\) y, opcionalmente, un valor inicial. El **callback** recibe dos parámetros: un acumulador y un elemento. Lo que retorne el **callback** se va a utilizar como el acumulador del siguiente elemento. En nuestro caso vamos acumulando la suma.

También podemos utilizar `reduce` para operaciones un poco más complejas. Por ejemplo para contar cuantas veces se repite cada caracter en una cadena de texto:

```javascript
const input = "Make it real"
const response = input.split('').reduce((acc, now) => {
  acc[now] ? acc[now] ++ : acc[now] = 1;
  return acc;
}, {})

console.log(response) // { M: 1, a: 2, k: 1, e: 2, ' ': 2, i: 1, t: 1, r: 1, l: 1 }
```

El `split` hace que la cadena se convierta en un arreglo que podemos utilizar para contar las letras (utilizando el `reduce`). Al `reduce` le estamos pasando un objeto vacío como valor inicial (línea 5). En cada iteración del `reduce` verificamos si la letra existe como propiedad del objeto. Si existe, le sumamos 1 a esa propiedad, de lo contrario la creamos y le asignamos el valor 1. Por último retornamos el objeto actualizado.

## Funciones que retornan funciones

La capacidad de retornar una función de otra función es una característica fundamental de la **programación funcional** que nos permite crear soluciones reutilizables a problemas comunes.

Librerías como [Lodash](https://lodash.com/), [React](https://reactjs.org/) y [Redux](https://redux.js.org/), entre muchas otras, hacen amplio uso de esta capacidad.

Veamos cómo crear y utilizar una función que retorne otra función:

```javascript
function hello(name) {
  return function() {
    console.log(`Hola ${name}`)
  }
}

const helloMaria = hello("Maria")
helloMaria() // "Hola Maria"

// o más compacto
hello("Pedro")() // "Hola Pedro"
```

La función `hello` recibe un argumento (un nombre) y retorna una nueva función. En la línea 7 estamos almacenando la función retornada en una variable llamada `helloMaria` que después invocamos. También es posible evitarnos la asignación a una nueva variable e invocar la función retornada inmediatamente como lo hacemos en la línea 11.

En la práctica es poco probable que necesites crear una función que retorne otra función, es más común que las **utilices** en librerías o incluso en el mismo lenguaje.

Por ejemplo, el método `bind` (explicado en la guía [Uso del this](uso-this)) retorna otra función que garantiza que la función original siempre se ejecute en el contexto adecuado.

Otro ejemplo es el método `before` de [Lodash](https://lodash.com/) que garantiza que una función no se llame más de 1 vez:

```javascript
// asumiendo que Lodash está incluido
const calculate = _.once(function() {
  // realiza un calculo complejo y retorna un resultado
})

calculate()
calculate() // no ejecuta la función nuevamente, retorna el resultado anterior
```

Aunque la función `once` ya está implementado en [Lodash](https://lodash.com/) podríamos implementarla nosotros mismos:

```javascript
function once(fn) {
  let called = false
  let result

  return function() {
    if (!called) {
      called = true
      result = fn()
    }
    return result
  }
}
```

Primero definimos dos variables: `called` que nos va a decir si la función ya se invocó y `result` en donde vamos a almacenar el resultado de la función. Después retornamos una nueva función que hace todo el trabajo pesado: si la función no ha sido invocada la invoca, cambia `called` a `true` y almacena el resultado en `result`. Por último, en la línea 10, retornamos el resultado.

## Funciones puras

Las **funciones puras** son funciones que cumplen con las dos siguientes condiciones:

* Retornan el mismo valor si se les pasan los mismos argumentos.
* No tienen efectos secundarios (como imprimir en la console, escribir a la red o al disco, etc.).

En la práctica no es posible crear una aplicación a partir de funciones puras únicamente, pero es bueno saber qué es y qué no es una **función pura**.

El principal beneficio de las funciones puras es que nos permiten escribir pruebas unitarias más fácilmente.

## Inmutabilidad

Otro principio importante en la programación funcional es el de **inmutabilidad**, que dice que las variables, objetos y arreglos no se deberían modificar una vez han sido creados. Eso implica utilizar siempre `const` en el caso de variables y crear un nuevo arreglo u objeto cuando se necesite modificarlos.

En JavaScript todos los *strings* son **inmutables** (no pueden ser modificados). Todos los métodos sobre los *strings* devuelven nuevos *strings*. Por ejemplo:

```javascript
const str = "Este string es inmutable"
const str2 = str.slice(5, 11)
const str3 = str2.toUpperCase()

console.log(str) // "Este string es inmutable"
console.log(str2) // "string"
console.log(str3) // "STRING"
```

Lo más importante de este ejemplo es que `str` nunca cambia, los métodos `slice` y `toUpperCase` retornan nuevos *strings*.

Los arreglos y objetos, por otro lado, son **mutables** (se pueden modificar).

Los arreglos tienen algunos métodos que **mutan** (modifican) el arreglo (p.e. `push`, `shift` y `splice`) y otros que retornan un nuevo arreglo (p.e. `concat`, `map` y `filter`).

Para modificar un arreglo de forma **inmutable** se recomienda crear un nuevo objeto:

```javascript
const obj = { a: 1, b: 2, c: 3 }
const newObj = { ...obj, c: 4, d: 5}
// newObj queda { a: 1, b: 2, c: 4, d: 5}
```

La ventaja principal de la **inmutabilidad** es que permite crear programas que son más fácil de entender y mantener. En programas pequeños esto no es muy relevante, pero a medida que los programas crecen se vuelve más importante.
