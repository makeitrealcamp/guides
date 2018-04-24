# Funciones

Eventualmente vas tener algunas líneas de código que necesitan ser ejecutadas varias veces y desde diferentes partes de tu programa. En vez de repetir el mismo código una y otra vez puedes crear una función \(también se les conoce como procedimientos o métodos\) e **invocarla** cada vez que necesites ejecutar ese trozo de código.

Crea un archivo llamado `functions.js` y escribe lo siguiente:

```javascript
function hello() {
  console.log("Hola Mundo");
}
```

Para definir una función usamos la palabra reservada `function`, le damos un nombre \(en este caso `hello`\), abrimos y cerramos paréntesis \(`()`\). Después abrimos corchetes \(`{`\), escribimos el cuerpo de la función \(el código que queremos ejecutar cuando sea invocada\), y por último cerramos los corchetes `}`.

Si ejecutamos este código no aparece nada en la pantalla:

```text
$ node functions.js
```

Una característica de las funciones es que no se ejecutan hasta que alguien las **invoque**. Modifiquemos nuestro programa para invocarla:

```javascript
function hello() {
  console.log("Hola Mundo");
}

hello(); // acá la estamos invocamos
```

En la última línea la estamos invocando. Si lo ejecutas ahora si debería aparecer "Hola mundo":

```text
$ node methods.js
Hola mundo
```

## Argumentos

Las funciones pueden recibir cero o más argumentos \(o parámetros\). Piensa en los argumentos como **variables** que puedes utilizar dentro de la función. Utilizando argumentos podemos hacer una función reutilizable que salude a cualquier persona:

```javascript
function hello(name) {
  console.log("Hola " + name);
}

hello("Germán");
hello("David");
```

Si lo ejecutamos deberías ver lo siguiente:

```text
$ node methods.js
Hola Germán
Hola David
```

Los argumentos se definen dentro de los paréntesis al declarar la función y se separan con coma.

## Retornando un valor

Opcionalmente puedes retornar un valor desde la función utilizando la palabra clave `return`. Podemos modificar la función `hello` para que en vez de imprimir con `console.log` retorne una cadena de texto:

```javascript
function hello(name) {
  return "Hola " + name;
}

var g1 = hello("Germán"); // podemos asignar el valor de retorno a una variable
console.log(g1);

// podemos llamar la función directamente en el parámetro de otra función.
console.log(hello("David"));
```

¿Notas la diferencia? En vez de hacer el `console.log` dentro de la función lo hacemos cuando la invocamos \(de lo contrario no aparecería nada en pantalla\).

En lo posible se recomienda retornar valores en vez de utilizar `console.log` dentro de las funciones. La razón es que retornar un valor hace la función más reutilizable. Ahora podemos utilizar esta función en otros contextos en donde no se utilice `console.log` para imprimir en la línea de comandos, como en una aplicación Web.

El `return` es la última línea que se ejecuta de una función, cualquier código que se encuentre después de esa línea será ignorado. Por ejemplo:

```javascript
function hello(name) {
  return "Hola " + name;
  console.log("Esto nunca se va a imprimir");
}

console.log(hello("Pedro"));
```

Si ejecutas este código deberás ver lo siguiente:

```text
$ node functions.js
Hola Pedro
```

La última línea de la función nunca va a ser ejecutada porque la función siempre retorna antes de llegar a ella.

## Las partes de una función

Recapitulemos lo que hemos visto hasta ahora. La sintaxis de una función es la siguiente:

```javascript
function <name>([arg1], [arg2], ...) {
  // cuerpo de la función
  return <valor de retorno>;
}
```

Lo que debes tener en cuenta:

* La función se crea con la palabra clave `function`.
* El nombre de la función tiene las mismas reglas de nombramiento que las variables: debe comenzar con `$`, `_` o una letra, y después puede contener letras, dígitos, `_` y `$`.
* La función puede tener cero o más argumentos dentro de los paréntesis que van después del nombre.
* Piensa en los argumentos como variables que puedes utilizar en la función.
* Los valores de esos argumentos se definen cuando invocan la función.
* Cada argumento debe tener un nombre de una variable válido. Recuerda que el nombre de una variable debe comenzar con `$`, `_` o una letra, y después puede contener letras, dígitos, `_` y `$`.
* Puedes retornar un valor desde la función utilizando la palabra clave `return`.
* El valor de retorno debe ser un tipo válido de JavaScript: un número, una cadena de texto, un booleano, un arreglo, etc.
* Puedes almacenar el valor de retorno de una función en una variable o puedes invocar la función como parámetro de otra función.

## Cajas negras

En muchas ocasiones es bueno pensar en funciones como cajas negras que reciben unos parámetros de entrada y genera un valor de salida \(el valor de retorno\).

## Ejemplo

Vamos a hacer una función que calcule el indice de masa corporal \(IMC\). El IMC es una medida que relaciona el peso de una persona con su altura. La formula para calcular el IMC es peso dividido altura al cuadrado:

```text
IMC = peso / (altura^2)
```

Traduzcamos eso a código JavaScript. Crea un archivo llamado `bmi.js` \(BMI por Body Mass Index\) y escribe lo siguiente:

```javascript
function bmi(weight, height) {
  return weight / height ** 2
}

console.log("Tu IMC es: " + bmi(80, 1.8));
```

Si ejecutas el archivo debería mostrar algo así:

```text
$ node bmi.js
Tu IMC es: 24.691358024691358
```

