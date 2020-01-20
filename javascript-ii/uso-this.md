# Uso del this (call, apply, bind)

`this` es una palabra clave en JavaScript que se utiliza para referirnos a las propiedades de un objeto. Por ejemplo:

```javascript
const person = {
  name: "Pedro",
  greet() {
    console.log(`Hola ${this.name}`)
  }
}
```

La única forma de referirnos a la propiedad `name` desde el método `greet` es utilizando la palabra clave `this`:

```javascript
person.greet() // "Hola Pedro"
```

## Diferentes contextos para `this`

El problema con `this` es que las funciones en JavaScript se pueden mover de un lado a otro: se pueden asignar a variables, pasar como argumento de otra función y retornar desde otra función. La pregunta es qué le pasa a `this` cuando ocurre todo este movimiento.

Por ejemplo, ¿qué pasa si asignamos el método `greet` del objeto `person` (ejemplo anterior) a una nueva variable `hello`?

```javascript
const hello = person.greet
hello() // "Hola undefined"
```

**En JavaScript, `this` cambia según el lugar desde el que se invoque:**

* Si se invoca sobre el método de un objeto, `this` se refiere a las propiedades del objeto (el caso normal).
* Si se invoca afuera de un objeto, `this` se refiere al contexto global (el objeto `window` en un navegador o `undefined` en Node.js).
* Si se invoca sobre una función constructora, `this` se refiere al nuevo objeto creado.

Hay otra forma de cambiar el contexto de `this` y es con los métodos `call` y `apply`.

## `call` y `apply`

Estos dos métodos nos permiten cambiar el contexto del `this` al invocar una función. Por ejemplo, imagina que tenemos una función llamada `greet` que utiliza `this` internamente, podemos utilizar `call` para cambiar el contexto de `this` al invocarla:

```javascript
const greet = function() {
  console.log(`Hola ${this.name}`)
}

const pedro = { name: "Pedro" }
greet.call(pedro) // "Hola Pedro"

const maria = { name: "Maria" }
greet.call(maria) // "Hola Maria"
```

La diferencia entre `call` y `apply` es la forma en que se pasan los argumentos de la función: `apply` recibe los argumentos como un arreglo, mientras que `call` los recibe como argumentos independientes. Por ejemplo:

```javascript
const sum = function(a, b) {
  console.log(`${this.name}, el resultado es ${a + b}`)
}

const pedro = { name: "Pedro" }
sum.call(pedro, 1, 2) // "Pedro, el resultado es 3"
sum.apply(pedro, [1, 2]) // "Pedro, el resultado es 3"
```

## `bind`

Con el método `bind` podemos garantizar que un método siempre se invoque en un contexto específico. Por ejemplo:

```javascript
let greet = function() {
  console.log(`Hola ${this.name}`)
}

const pedro = { name: "Pedro" }
greet = greet.bind(pedro); // sobrescribimos la variable

greet() // "Hola Pedro"
```

El método `bind` devuelve una nueva función que encapsula a la original para garantizar que siempre se ejecute con el contexto que queremos. En este ejemplo estamos sobrescribiendo la variable `greet` pero hubiésemos podido asignarla a una variable diferente.

## Funciones flecha

Las funciones flecha, a diferencia de las funciones normales, mantienen siempre el contexto de `this` enlazado al lugar donde son defininidas, independiente de cómo se llamen. Veamos un ejemplo.

Podemos modificar el método `greet` para que imprima el saludo después de 1 segundo utilizando la función `setTimeout`, que nos permite ejecutar una función después del tiempo que le digamos:

```javascript
const person = {
  name: "Pedro",
  greet() {
    setTimeout(function() {
      console.log(`Hola ${this.name}`)
    }, 1000)
  }
}
```

El problema es que si ahora ejecutamos el método `greet` obtendremos un resultado inesperado:

```javascript
person.greet();
// después de 1 segundo imprime "Hola undefined"
```

La razón es que internamente `setTimeout` invoca la función desde el contexto global y por lo tanto la referencia original de `this` se pierde.

Cuando no existían las funciones flecha, la única solución era asignar `this` a una variable con otro nombre:

```javascript
greet() {
  const self = this; // guardamos this en otra variable self
  setTimeout(function() {
    console.log(`Hola ${self.name}`) // utilizamos self en vez de this
  }, 1000)
}
```

Hoy podemos utilizar funciones flecha que mantienen el contexto de `this` enlazado al lugar donde se definió:

```javascript
greet() {
  setTimeout(() => { // función flecha
    console.log(`Hola ${this.name}`)
  }, 1000)
}
```

En este caso la función flecha se definió dentro del método `greet`, cuyo contexto es el objeto `person`.
