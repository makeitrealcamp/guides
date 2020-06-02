# Scope, hoisting, closures

En este capitulo vamos a hablar de algunos conceptos importantes que te van a ayudar a ser un(a) mejor programador(a) en JavaScript.

## Scope

El scope define el alcance o la visibilidad de las variables en algún punto de la ejecución del código.

En los navegadores existe un **scope global**, que es el objeto `window`; en Node.js es el objeto `global`.

Con `var` la única forma de limitar el alcance de una variable era definiéndola dentro de una función:

```javascript
var a = 5 // variable global

function fn() {
  var b = 5 // visible sólo dentro de la función
}
fn()

console.log(a) // 5
console.log(b) // undefined o error (b no está definido)
```

`let` y `const` limitan el alcance por **bloque**, es decir, dentro de un condicional, ciclo, función, etc., que es como funcionan la mayoría de lenguajes de programación.

```javascript
if (true) {
  var a = 5
  let b = 5
  const c = 5
}

console.log(a) // 5
console.log(b) // undefined o error (b no está definido)
console.log(c) // undefined o error (c no está definido)
```

No olvides la palabra `var`, `let` o `const` al definir una variable o automáticamente se creará una **variable global**.

## Hoisting

Hoisting es el comportamiento por defecto de JavaScript en el que la declaración de variables y funciones se mueve automáticamente al principio del scope (ya sea el principio del archivo, la función o el bloque). Veamos un ejemplo:

```javascript
hello()

function hello() {
  console.log("Hola")
}
```

A pesar de que estamos invocando la función `hello` antes de definirla, esto funciona: la declaración de la función se mueve al principio del archivo antes de ejecutarlo.

La declaración de las variables también se mueve, pero no la inicialización. Considera el siguiente ejemplo:

```javascript
console.log(x);
let x = 5;
```

El resultado de este código es `undefined` porque, aunque la declaración de `x` se mueve al principio, la inicialización no. El anterior código es equivalente a lo siguiente:

```javascript
let x;
console.log(x);
x = 5;
```

De nuevo, **lo que se mueve es la declaración de la variable, no la inicialización**. Por esta razón, si asignamos una función a una variable, la función no se mueve al principio y no la vamos a poder invocar antes:

```javascript
hello(); // Error, hello no es una función!!!

const hello = function() {
  console.log("Hola");
}
```

Lo mismo ocurriría si cambiamos la función por una función flecha.

## Closures

En JavaScript las funciones pueden referenciar variables externas. Por otro lado, las funciones se pueden mover de un lado a otro: se pueden asignar a variables, pasar como argumento de otra función y retornar desde otra función.

La pregunta es ¿si movemos una función, qué pasa con las variables externas a las que tenía acceso antes que se moviera?

La respuesta es que, en JavaScript, cuando una función se mueve de un lado a otro, no sólo se mueve la función, también se mantiene la referencia a las variables externas a las que tenía acceso en un principio. A esto se le conoce como un **closure** (cerradura).

En JavaScript todas las funciones son clousures.

Vemaos un ejemplo.

```javascript
const hello = function() {
  const name = "Pedro"
  return function() {
    console.log(`Hello ${name}`) // mantiene la referencia a name
  }
}

const newHello = hello()
newHello() // "Hello Pedro"
```

La función que retorna `hello` utiliza una variable externa `name`. En la línea 8 estamos almacenando la función retornada en una variable `newHello`. Cuando invocamos la función se mantiene la referencia a la variable `name`.

## `"use strict"`

La directiva `"use strict"` fue introducida en ES5 para evitar lo que se consideran malas prácticas en JavaScript (p.e. utilizar variables no declaradas). En vez de ignorar la mala práctica se genera un error.

```javascript
"use strict"

x = 5 // error, x no está definida
```

La directiva `"use strict"` es ignorada por versiones anteriores de JavaScript.

Puedes ubicar `"use strict"` al principio de un archivo (alcance global) o de una función (alcance local).

```javascript
function estricta() {
  "use strict" // solo aplica a la función

  // ...
}
```

Algunas de las malas prácticas que `"use strict"` evita son:

* Utilizar variables no declaradas.
* Utilizar `eval` (`eval` permite evaluar código a partir de un string).
* Utilizar palabras reservadas en nombres de variables.
