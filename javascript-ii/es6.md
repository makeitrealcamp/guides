# ES6

ECMAScript es el estándar sobre el que se basa JavaScript. Desde el 2015 se empezaron a realizar lanzamientos anuales con nuevas características para el lenguaje.

ECMAScript 2015 \(ES6\) fue lanzado en 2015, ECMAScript 2016 \(ES7\) en el 2016, y así sucesivamente. Es desafortunado que tengamos dos nombramientos pero, ni modo, así es la vida. También vas a escuchar de **ESNEXT**, que son todos los cambios que se vienen en los próximos años para JavaScript, y que Node.js y algunos navegadores ya empiezan a soportar.

## Soporte

Node.js soporta ES6 e incluso nuevas características de ES7 y ESNEXT en las versiones más recientes.

Aunque algunos navegadores como Chrome y Firefox soportan ES6 desde hace algún tiempo, nuestra recomendación es que utilices [Babel](https://babeljs.io/) para transformar tu código para el front a **ES5**, que tiene mayor adopción.

## Nuevas formas de definir variables

Además de `var`, ahora existen dos formas más de definir variables en JavaScript: `let` y `const`.

`const` sólo permite asignar el valor de una variable una única vez. Si intentas reasignarla se genera un error. Por ejemplo:

```javascript
const x = 5;
x = 6; // se genera un error
```

`let` es similar a `var` pero con dos diferencias. La primera es que la única forma de limitar el alcance de una variable declarada con `var` es dentro de una función. En cambio, una variable declarada con `let` tiene un alcance de bloque \(p.e. un `if`, un `for` o una función\).

Un bloque está delimitado por corchetes \(`{` y `}`\).

Veamos un ejemplo:

```javascript
if (true) {
  var x = 5
  let y = 6;
}

console.log(x); // 5
console.log(y); // undefined
```

Aunque la variable `x`, declarada con `var`, fue creada dentro del `if`, sigue existiendo fuera del `if`. En cambio, la variable `y`, declarada con `let`, sólo existe dentro del `if` \(dentro del bloque\).

Veamos otro ejemplo. Con `var` tenemos el siguiente problema cuando utilizamos un `for`:

```javascript
for (var i = 0; i < 10; i++) {
    process(items[i]);
}

// i sigue existiendo acá
console.log(i); // 10
```

En cambio, con `let` ya no tenemos ese problema:

```javascript
for (let i = 0; i < 10; i++) {
    process(items[i]);
}

console.log(i); // error, la variable no existe
```

La segunda diferencia entre `var` y `let` es que si intentas volver a definir una variable con `let` ocurre un error:

```javascript
var x = 5;
var x = 6; // no sale error

let y = 5;
let y = 6; // error!
```

En general trata de declarar las variables con `const` en tus programas. Si no es posible, utiliza `let`.

Una aclaración es que si defines un arreglo \(o un objeto\) con `const` puedes modificarlo, lo que no se puede hacer es reasignar la variable con otro valor:

```javascript
const arr = [];
arr.push(1); // no hay problema

arr = 5; // error! const no permite reasignación
```

## Funciones flecha

Ahora existe una nueva forma de definir funciones utilizando la notación `=>`. Veamos un ejemplo:

```javascript
const hola = () => {
  return "Hola!";
}
```

Si el cuerpo sólo tiene una línea, se puede escribir de forma más compacta aún:

```javascript
const hola = () => "Hola";
```

Fíjate que ni siquiera fue necesario escribir el `return`!

Si la función recibe un único parámetro se pueden omitir los paréntesis:

```javascript
const hola = name => "Hola " + name;
```

## Parámetros por defecto

Ahora es posible asignar valores por defecto a los parámetros de una función:

```javascript
var hola = (name = "Pedro") => "Hola " + name;

console.log(hola()); // Hola Pedro
```

Incluso es posible usar funciones y parámetros anteriores:

```javascript
var getName = () => "Pedro";
var hola = (name=getName(), message="Hola " + name) => message;

console.log(hola()); // Hola Pedro
```

Este fue un ejemplo forzado para mostrar que es posible usar funciones como valor por defecto de un parámetro y que, además, es posible utilizar, como valor de un parámetro, el valor de otro parámetro anterior.

## Plantillas literales

Existe una nueva forma de definir cadenas de texto que nos permite crear cadenas de varias líneas, insertar expresiones de JavaScript y más. Las plantillas literales se crean con tildes invertidas\(````````\):

```javascript
`una cadena`

`una cadena
 de varias líneas`

`una cadena con expresión ${1 + 1} de JavaScript`
```

## Destructuración

Destructuración es un atajo para asignar variables rápidamente a partir de un arreglo o un objeto. Veamos un ejemplo:

```javascript
const arr = [1, 2];
const [a, b] = arr; // acá ocurre la destructuración

console.log(a); // 1
console.log(b); // 2
```

Podemos hacer algo parecido a partir de un objeto:

```javascript
const obj = { a: 1, b: 2 };
const { a, b } = obj; // acá ocurre la destructuración

console.log(a); // 1
console.log(b); // 2
```

También puedes usar destructuración en los parámetros de una función:

```javascript
const g = ({name: x}) => {
  console.log(x);
}

g({name: 5});
```

## Métodos concisos

ES6 mejora la sintaxis para asignar métodos a objetos literales. Antes la forma en que se definían los métodos de un objeto era de la siguiente forma:

```javascript
var person = {
  name: "Pedro",

  sayName: function() {
    console.log(this.name);
  }
}
```

En ES6 puedes eliminar los dos puntos y la palabra `function` de la siguiente forma:

```javascript
const person = {
  name: "Pedro",

  sayName() {
    console.log(this.name);
  }
}
```

## Incialización de objetos

EN ES6 se introdujo una forma más compacta para inicializar objetos literales:

```javascript
const name = "Pedro";
const age = 20;

// Antes
var obj = { name: name, age: age };

// Ahora se puede escribir de forma más compacta
const obj = { name, age };
```

## Clases

A diferencia de otros lenguajes orientados por objetos que utilizan clases para definir la jerarquía de objetos, JavaScript utiliza prototipos. Aunque muchos desarrolladores sienten que JavaScript no necesita clases, la gran cantidad de librerías que simulaban clases en JavaScript llevaron a que se incluyeran directamente en el lenguaje.

Veamos un ejemplo:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name)
  }
}
```

Para crear una instancia de esta clase utilizamos la palabra clave new:

```javascript
const person = new Person("Pedro");
person.sayName(); // imprime "Pedro"
```

Las clases en JavaScript no son más que una sintaxis alternativa a los prototipos. El ejemplo anterior se convierte en algo parecido a lo siguiente:

```javascript
const Person = function(name) {
  this.name = name;
};

Person.prototype.sayName = function() {
  console.log(this.name);
}
```

### Herencia

Con las clases podemos implementar herencia utilizando la palabra `extends` \(al igual que otros lenguajes que utilizan clases\):

```javascript
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width: width;
  }

  getArea() {
    return this.length * this.width;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}
```

En este ejemplo estamos definiendo una clase `Square` que extiende \(o hereda\) de otra clase llamada `Rectangle`. Fíjate que en el constructor de `Square` estamos utilizando la palabra clave `super` para llamar el constructor de `Rectangle`.

## Módulos

Los módulos permiten organizar mejor el código y evitar colisiones de nombres.

**Nota:** En este momento \(Diciembre 2017\) Node.js aún no soporta módulos de ES6 \(mucho menos los navegadores\) y necesitarías transpilar tu código con Babel si quieres utilizar esta funcionalidad. \(Desde la 8.5.0 de Node.js puedes utilizar módulos renombrando los archivos con la extensión `.mjs` y agregando la opción `--experimental-modules`\).

### Definiendo un módulo

Cada archivo de JavaScript ahora es un módulo. Por defecto, las variables que definas en ese archivo van a ser visibles únicamente en ese archivo. Para exportar una variable y que sea visible en otros módulos debes usar la palabra clave `export`. Por ejemplo, en un archivo llamado `module1.js`:

```javascript
// esta variable es visible sólo en este archivo
const a = 5;

// esta variable es visible en otros módulos
export const b = 7;
```

Además de variables, puedes exportar clases y funciones.

### Importando un módulo

Para importar un módulo en otro archivo utiliza la palabra clave `import`. Por ejemplo, en un archivo `module2.js` podrías importar todas las variables, clases y funciones que hallamos exportado en `module1.js`:

```javascript
import * as m1 from "./module1.js";

console.log(m1.b); // 7
```

En este ejemplo, estamos almacenando todas los nombres \(variables, clases, funciones, etc.\) que se hayan definido en el archivo `mmodule1.js` dentro de un objeto almacenado en la variable `m1`.

### Exportando valores por defecto

Es muy común exportar un único nombre desde un archivo y eso nos permite tomar algunos atajos. Para exportar ese único nombre utiliza la palabra clave `default` después de `export`. Por ejemplo, en `module1.js`:

```javascript
export default const b = 7;
```

Y para utilizar este valor por defecto en `module2.js`:

```javascript
import b from "./module1.js" // realmente le puedes poner el nombre que quieras a la variable

console.log(b); // 7
```

