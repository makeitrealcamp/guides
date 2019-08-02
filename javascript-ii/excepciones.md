# Excepciones

Las excepciones interrumpen el flujo normal del programa, por ejemplo cuando aparece un error de sintaxis o se trata de acceder a una propiedad de una variable no definida. En este capítulo vamos a ver cómo manejar y lanzar excepciones.

## Manejando excepciones

Para capturar y manejar una excepción utilizamos una sintaxis propia de JavaScript:

```javascript
try {
  // código que queremos ejecutar
} catch (e) {
  // código que se ejecuta si ocurre una excepción en el try
}
```

Dentro del bloque `try` va el código normal que queremos ejecutar. Si ocurre alguna excepción en este bloque se interrumpe por completo el flujo del programa y se ejecuta el código que está dentro del bloque `catch`.

El parámetro que recibe el `catch` contiene información sobre la excepción que ocurrió. Las excepciones de JavaScript siempre vienen en un objeto `Error` que tiene dos propiedades: `name` y `message`. `name` contiene el nombre de la excepción mientras que `message` contiene el mensaje de la excepción.

```javascript
try {
  sdfsdf; // error de sintaxis
} catch (e) {
  console.log(e.name); // ReferenceError
  console.log(e.message); // sdfsdf is not defined
}
```

### `finally`

La sentencia `finally` nos permite manejar ejecutar código que siempre se va a ejecutar sin importar si ocurrió o no una excepción. La sintaxis es la siguiente:

```javascript
try {
  // ...
} catch (e) {
  // ...
} finally {
  // este código siempre se va a ejecutar
}
```

### Propagación y excepciones no manejadas

Cuando ocurre una excepción en una función y no se maneja, la excepción se propaga a la función que la invocó. Si esa función tampoco la maneja se sigue propagando hasta que alguna la maneje o se interrumpa completamente el programa con un mensaje de error en la consola.

Por ejemplo, imagina que tenemos una función `a` que llama una función `b`, que a su vez llama una función `c`. La función `c` genera una excepción:

```javascript
a();

function a() { b(); }

function b() { c(); }

function c() {
  sjsjs; // genera una excepción
}
```

Si ejecutamos este programa se muestra un mensaje de error en la consola similar al siguiente:

```
/Users/germanescobar/Projects/index.js:8
  sjsjs; // genera una excepción
  ^

ReferenceError: sjsjs is not defined
    at c (/Users/germanescobar/Projects/index.js:8:3)
    at b (/Users/germanescobar/Projects/index.js:5:16)
    at a (/Users/germanescobar/Projects/index.js:3:16)
    at Object.<anonymous> (/Users/germanescobar/Projects/index.js:1:1)
    at Module._compile (internal/modules/cjs/loader.js:805:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:816:10)
    at Module.load (internal/modules/cjs/loader.js:672:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:612:12)
    at Function.Module._load (internal/modules/cjs/loader.js:604:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:868:12)
```

A esto se le conoce como una **excepción no manejada** (uncaught exception en inglés). En ningún lado se manejó la excepción y por lo tanto el programa se interrumpió y terminó.

### El objeto Error

JavaScript incluye un objeto que provee información del error cuando ocurre una excepción. Las propiedades principales de ese objeto son `name` y `message`.

`name` puede tener alguno de los siguientes seis valores:

* `EvalError`: un error ocurrió en la función `eval`.
* `RangeError`: cuando un número está fuera del rango válido (es muy grande).
* `ReferenceError`: cuando se utiliza una variable que no se ha declarado.
* `SyntaxError`: error de sintaxis.
* `TypeError`
* `URIError`

## Lanzando excepciones

También podemos lanzar nuestras propias excepciones desde cualquier parte del código utilizando la palabra clave `throw` seguida de un string, un número, un booleano o un objeto:

```javascript
throw "there is a problem";
throw new Error("there is a problem");
```

Lanzar excepciones es útil cuando ocurren problemas inesperados como errores de validación, estados no válidos de la aplicación, etc.
