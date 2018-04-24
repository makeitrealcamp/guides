# Variables

Las variables son uno de los conceptos básicos de la programación y nos permiten almacenar información temporal que podemos usar más adelante en nuestros programas.

Crea un archivo llamado `variables.js` y agrega lo siguiente:

```javascript
var name = "Germán"; // cámbialo por tu nombre
console.log("Hola " + name);
```

En este ejemplo estamos definiendo una variable con nombre `name` y le asignamos el valor "Germán" \(o el valor que le hayas asignado\). En la siguiente línea estamos utilizando concatenación de cadenas para mostrar la cadena de texto "Hola " seguido del valor que tenga en ese momento la variable `name`.

Las variables se crean con la palabra clave `var` seguido del nombre de la variable. Opcionalmente, le puedes asignar un valor a la variable utilizando el caracter igual y el valor que le quieras dar. El punto y coma \(`;`\) al final es opcional pero se considera una buena práctica tenerlo.

El nombre de una variable debe comenzar con `$`, `_` o una letra, y después puede contener letras, dígitos, `_` y `$`. Ejemplos de nombres válidos de variables incluyen `name`, `$element` y `_trains`.

Por otro lado, ejemplos de nombres no válidos incluyen `443german`, porque no puede empezar con un número, y `element&123`, porque el caracter `&` no es válido en el nombre.

Las palabras reservadas de JavaScript no se pueden usar como nombres de variables.

Como buena práctica se recomienda empezar las variables con una letra en minúscula y, si el nombre se compone de varias palabras, capitalizar cada palabra después de la primera \(más conocido como camel case\). Por ejemplo `videoTranscoder` o `firstName`.

Los nombres de las variables diferencian mayúsculas y minúsculas \(p.e. `firstname` es diferente a `firstName`\).

## La utilidad de las variables

Crea un archivo llamado `square.js` y escribe el siguiente código:

```javascript
console.log("El perímetro de un cuadrado de lado 5 es " + (5 * 4));
console.log("El área de un cuadrado de lado 5 es " + (5 * 5));
```

Al ejecutarlo debería aparecer lo siguiente:

```text
$ node square.js
El perímetro de un cuadrado de lado 5 es 20
El área de un cuadrado de lado 5 es 25
```

El problema con este código es que si quisiéramos calcular el perímetro y el área de un cuadrado de lado 10, o 20, tendríamos que modificar ese valor en varias partes del código. Podemos mejorarlo utilizando una variable:

```javascript
var side = 5;

console.log("El perímetro de un cuadrado de lado " + side + " es " + (side * 4));
console.log("El área de un cuadrado de lado " + side + " es " + (side * side));
```

Si ejecutas el código te debería dar el mismo resultado. La ventaja es que si quieres calcular el perímetro y el área de un cuadrado con otro tamaño solo debes cambiar el valor de la variable. Intenta con 18 \(te debería dar 72 de perímetro y 324 de área\) y después con 39.

## Reasignando el valor de las variables

Puedes reasignar el valor de una variable las veces que lo desees. La forma de hacerlo es similar a la forma en que se declara la una variable con un valor inicial, pero omitiendo la palabra `var`. Por ejemplo:

```javascript
// asumiendo que name fue ya declarada
name = "Nuevo valor";
```

Inténtalo. Abre la consola de Node.js e ingresa lo siguiente:

```text
$ node
> var name = "Pedro" // declaramos name y le asignamos el valor "Pedro"
undefined
> name               // verificamos el valor actual
"Pedro"
> name = 123         // reasignamos el valor de name con el número 123
123
> name               // verificamos cuál es el valor actual de name
123
```

Fíjate que, como en este ejemplo, el nuevo valor que se le asigne a la variable no tiene que ser del mismo tipo del valor anterior.

También es posible reasignar el valor de una variable utilizando su valor anterior. Por ejemplo, intenta lo siguiente:

```text
$ node
> var count = 1      // declaramos la variable con un valor inicial
undefined
> count              // verificamos cuál es el valor actual de count
1
> count = count + 1  // incrementamos en uno el valor actual de count
2
> count              // verificamos el valor actual de count
2
```

De hecho, incrementar el valor de una variable es tan común que existe un atajo para eso. Asumiendo que sigues en la consola de Node.js intenta lo siguiente:

```text
> count ++
3
> count ++
4
```

## Variables sin valor

En programación es muy común declarar una variable sin un valor, quizá porque más adelante vamos a pedirle el valor al usuario, o simplemente porque el valor se lo vamos a asignar después.

Una variable declarada sin un valor va a tener el valor de `undefined`.

Abre la consola de Node.js intenta lo siguiente:

```text
$ node
> var name
undefined
> name
undefined
```

## ¿Dónde y cuánto vive una variable?

Las variables se almacenan en en una memoria especial del computador llamada **memoria RAM** y viven durante la ejecución del programa, es decir, desde el momento en que las defines hasta que tu programa termina de ejecutarse. Si abres la consola de Node.js y defines una variable, esta vive hasta que cierres esa sesión.

La **memoria RAM** es una memoría de rápido acceso que está disponible mientras tu computador está encendido. El sistema operativo se encarga de administrar la memoria RAM y asignarle una porción a cada programa que se está ejecutando. Cuando el programa termina, el sistema operativo reclama esa memoria y "destruye" todas las variables que ese programa haya creado.

**Nota:** Más adelante, cuando veamos funciones, aprenderemos que las variables tienen un **alcance** y no todas las variables sobreviven hasta que termina el programa.

