# Condicionales

Hasta ahora hemos visto código que se ejecuta línea a línea, una detrás de otra. Pero a veces se hace necesario romper esa secuencia y crear ramas que nos permitan tomar diferentes caminos en el código dependiendo de ciertas condiciones.

Por ejemplo, imagina cómo podríamos hacer un programa que nos diga si un número es mayor o menor a diez. Si es mayor a 10 debería imprimir una cosa, pero si es menor debería imprimir otra.

A este concepto se le conoce como condicionales y su sintaxis es la siguiente:

```javascript
if (<condición>) {
  // código que se ejecuta si se cumple la condición
}
```

La condición puede ser cualquier expresión que evalúa a verdadero \(`true`\) o falso \(`false`\). Crea un archivo llamado `conditionals.js` y agrega el siguiente contenido:

```javascript
if (true) {
  console.log("Hola Mundo");
}
```

**Nota**: Las líneas que terminan con un corchete \(`{` o `}`\) no se les agrega punto y coma \(;\).

Ejecúta el archivo desde la consola, deberías ver lo siguiente:

```text
$ node conditionals.js
Hola Mundo
```

No importa cuántas veces ejecutes este archivo, el resultado siempre será el mismo.

Ahora probemos con falso \(`false`\) en vez de verdadero \(`true`\):

```javascript
if (false) {
  console.log("Hola Mundo");
}
```

Ejecútalo. Esta vez **nunca** debería imprimir "Hola mundo", no importa cuantas veces lo ejecutes.

En vez de utilizar `true` o `false` como condición, podemos utilizar una expresión **que evalúe a **`true`** o **`false`.

```javascript
if (1 == 1) {
  console.log("Hola Mundo");
}
```

El resultado al ejecutarlo debería ser:

```javascript
$ node conditionals.js
Hola mundo
```

Prueba ahora con `1 == 2`, `1 < 6` y `8 < 6` en la condición y fíjate que tenga sentido.

Ahora que ya sabes cómo funciona los condicionales \(muchos los llamamos los ifs\) crea un programa en un archivo llamado `number.js` que imprima "El número es menor a 10" solo si el número que está almacenado en la variable `num` es menor a 10:

```javascript
var num = 8;

if (num < 10) {
  console.log("El número es menor a 10");
}
```

Si lo ejecutas te debería aparecer lo siguiente:

```text
$ node number.js
El número es menor a 10
```

Ahora vamos a modificar el programa para que, además de imprimir "El número es menor a 10" si el número es menor a 10, también imprima "El número es igual o mayor a 10" si el número es igual o mayor a 10. Podemos utilizar otro condicional debajo del que ya teníamos:

```javascript
var num = 8;

if (num < 10) {
  console.log("El número es menor a 10");
}

if (num >= 10) {
  console.log("El número es igual o mayor a 10");
}
```

Ejecuta el programa e ingresa un número menor a 10, después un número mayor a 10, y por último 10. Verifica que el resultado sea el esperado.

## De lo contrario \(else\)

Lo único que necesitas para hacer condicionales es el `if`. Pero existen dos atajos que te van a permitir escribir código más corto.

El primer atajo es el `else`, que significa "de lo contrario" en Inglés. El `else` nos permite definir el código que se debe ejecutar si el `if` no se cumple, es decir si la condición evalúa a falso. La sintaxis es la siguiente:

```javascript
if (<condición>) {
  // código que se ejecuta si se cumple la condición
} else {
  // código que se ejecuta si NO se cumple la condición
}
```

Podemos modificar el programa anterior, que nos dice si el número almacenado en la variable `num` es menor a 10, o si es mayor o igual, con un `else`.

```javascript
var num = 8;

if (num < 10) {
  console.log("El número es menor a 10");
} else {
  console.log("El número es igual o mayor a 10");
}
```

Más corto y si lo ejecutas debería funcionar igual.

## Condiciones anidadas

Ahora imagina que queremos modificar este programa para que en vez de imprimir "El número es igual o mayor a 10", imprima "El número es igual a 10" o "El número es mayor a 10" dependiendo si el número es igual 10 o mayor a 10 respectivamente.

En JavaScript \(y en la mayoría de lenguajes de programación\) es posible anidar condicionales, así que una posible solución sería la siguiente:

```javascript
var num = 8;

if (num < 10) {
  console.log("El número es menor a 10");
} else {
  if (num > 10) {
    console.log("El número es mayor a 10");  
  } else {
    console.log("El número es igual a 10");
  }
}
```

Prúebalo con un número menor a 10, otro mayor a 10 y con 10. Te debería aparecer "El número es menor a 10", "El número es mayor a 10" y "El número es igual a 10" respectivamente.

## De lo contrario, si \(else if\)

En general, es preferible no tener que anidar condicionales porque son difíciles de leer y entender. Otro atajo que nos ofrece JavaScript para los condicionales es el `else if`, que significa "De lo contrario, si ..." en Inglés. La sintaxis es la siguiente:

```javascript
if (<primera condición>) {
  // código que se ejecuta si <primera condición> se cumple
} else if (<segunda condición>) {
  // código si <primera condición> NO se cumple, pero <segunda condición> se cumple
} else if (<tercera condición>) {
  // código si <primera condición> y <segunda condición> NO se cumplen, pero <tercera condición> sí se cumple
} else {
  // código si ninguna de las condiciones se cumple
}
```

Puedes definir tantos `else if` como desees. El `else` es opcional.

Modifiquemos nuestro ejemplo anterior y en vez de utilizar condiciones anidadas, utilicemos `else if`:

```javascript
var num = 8;

if (num < 10) {
  console.log("El número es menor a 10");
} else if (num > 10) {
  console.log("El número es mayor a 10");  
} else {
  console.log("El número es igual a 10");
}
```

Lo más importante de entender en este código es que el programa sólo va a entrar a **una** de estas ramas. Por ningún motivo va a entrar a dos de ellas. Si la condición del primer `if` se cumple, el programa ejecuta el código que esté en ese bloque y después **salta** hasta después del `else` para continuar con el resto del programa o terminar.

Si la condición del primer `if` no se cumple, pero la del `else if` sí se cumple, el programa ejecuta el código de ese bloque y **salta** hasta después del `else` para continuar con el resto del programa o terminar.

## Condiciones compuestas

Imagina que queremos escribir un programa que imprima "El número está entre 10 y 20" si el valor de una variable está efectivamente entre 10 y 20. ¿Cómo te imaginas que lo podríamos solucionar?

Una opción es usar condiciones anidadas, de esta forma:

```javascript
var num = 15;

if (num >= 10) {
  if (num <= 20) {
    console.log("El número está entre 10 y 20");
  }
}
```

Sin embargo, cómo decíamos antes, leer condiciones anidadas es difícil y, en lo posible, es mejor evitarlas. En cambio, podemos utilizar los operadores lógicos **y** \(`&&`\) y **ó** \(`||`\) para crear condiciones compuestas. El ejemplo anterior lo podemos mejorar con **y**:

```javascript
var num = 15;

if (num >= 10 && num <= 20) {
  console.log("El número está entre 10 y 20");
}
```

Lo que estamos diciendo con este código es: si el número es **mayor o igual a 10 y menor o igual 20** entonces imprima "El número está entre 10 y 20". Fíjate que a cada lado del `&&` hay una expresión que evalúa a verdadero o falso: `num >= 10` y `num <= 20`.

Imagina ahora que necesitamos escribir un programa que imprima "Excelente elección" cuando el valor de una variable sea "rojo" **o** "negro" únicamente:

```javascript
var color = "negro";

if (color === "rojo" || color === "negro") {
  console.log("Excelente elección");
}
```

## Operador condicional \(ternario\)

Los operadores ternarios se utilizan con frecuencia como atajos para los condicionales `if`. Este está compuesto de la siguiente forma `<condición> ? <expr1> : <expr2>`. Ahora desglosémoslo paso a paso para entender un poco mejor como funciona.

Lo primero que se está haciendo y lo que esta antes de `?` es la condición que queremos validar; si esto es verdadero se ejecutara la `expr1` de lo contrario se ejecutara la `expr2`.

```javascript
var num = 10;

num >= 15 ? console.log('Es mayor o igual que 15') : console.log('Es menor que 15');
```

## Pensando como un programador

Vamos a jugar un juego llamado **Verdadero o Falso**. Yo digo una afirmación y tu debes reponder si es verdadera o falsa. Trata de no mirar las respuestas debajo. Después comparas:

1. La Tierra gira alrededor del sol. \(¿Verdadero o falso?\)
2. Paris es la capital de Estados Unidos.
3. La Tierra gira alrededor del sol **y** los leones son animales.
4. Paris es la capital de Estados Unidos **y** los leones son animales.
5. La Tierra gira alrededor de Marte **y** los perros hablan Español.
6. Los leones son animales **o** la Tierra gira alrededor del sol.
7. Paris es la capital de Estados Unidos **o** los leones son animales.
8. El planeta tierra gira alrededor de Marte **o** los perros hablan Español.

Las respuestas son las siguientes:

1. Verdadero.
2. Falso.
3. Verdadero.
4. Falso.
5. Falso.
6. Verdadero.
7. Verdadero.
8. Falso.

Cuando utilizamos **y** las dos expresiones deben ser verdaderas para que el resultado sea verdadero. Cuando utilizamos **o** cualquiera de las dos expresiones puede ser verdadera para que el resultado sea verdadero.

## Evaluando expresiones booleanas

Volvamos a jugar el juego, pero en vez de utilizar frases, utilicemos expresiones booleanas. Debes decidir si cada una de las siguientes expresiones es verdadera o falsa \(`true` o `false`\):

1. `true`
2. `false`
3. `1 < 1`
4. `2 != 3`
5. `1 < 1 && 2 != 3`

Copia y pega cada expresión en la consola de Node.js para conocer las respuestas.

Analicemos la última expresión: `1 < 1 && 2 != 3`. ¿Cómo podemos saber si es verdadera o falsa?

El primer paso es reemplazar cada lado de la expresión. `1 < 1` es `false` y `2 != 3` es `true`. Quedaría:

`false && true`

Recuerda que para que una expresión con **y** \(`&&`\) sea verdadera, cada lado **tiene** que ser verdadero. Sin embargo, podemos hacer una tabla con todas las combinaciones entre verdadero y falso que podamos usar como referencia más adelante:

| Expresión | Resultado |
| --- | --- |
| `true && true` | `true` |
| `true && false` | `false` |
| `false && true` | `false` |
| `false && false` | `false` |

Fíjate que el resultado solo es `true` cuando los dos lados del `&&` son `true`.

Hagamos lo mismo para el **ó** \(`||`\):

| Expresión | Resultado |
| --- | --- |
| `true || true` | `true` |
| `true || false` | `true` |
| `false || true` | `true` |
| `false || false` | `false` |

Con el **ó** cualquiera de los lados puede ser `true` para que el resultado sea `true`.

A estas tablas se les conoce como **Tablas de Verdad**.

Hagamos algunos ejercicios. Decide si las siguientes expresiones evalúan a `true` o `false`. Primero reemplaza cada lado del `&&` o el `||` y luego utiliza las tablas de verdad:

* `"hola" == "hola" && 1 < 2`
* `true && 5 != 5`
* `1 == 1 || 2 != 1`

Revisa tu respuesta evaluando cada expresión en la consola de Node.js.

Podemos negar cualquier expresión booleana anteponiendo un signo de exclamación \(`!`\). Por ejemplo:

* `!true` es `false`
* `!false` es `true`

De hecho, esa es la tabla de verdad de la negación. Intenta los siguientes ejercicios. Primero reemplaza lo que está entre paréntesis y luego aplica la tabla de verdad de la negación:

* `!(1 === 1)`
* `!(2 <= 3)`
* `!(true && 5 !== 5)`
* `!(1 < 1 && 2 !== 3)`

El proceso para solucionar cualquier expresión booleana, sin importar qué tan compleja sea, es el siguiente:

1. Evalúa los operadores de igualdad \(`<`, `>`, `===`, `!==` etc\).
2. Evalúa los `&&` y `||` que esten dentro de paréntesis.
3. Evalúa las negaciones \(`!`\).
4. Evalúa cualquier `&&` y `||` que falte.

Hagamoslo juntos. Intentemos evaluar la siguiente expresión booleana:

```text
3 != 4 && !("pedro" === "juan" || 26 > 10)
```

1. Evaluar los operadores de igualdad:

   ```text
   true && !(false || true)
   ```

2. Evaluar los `&&` y `||` que estén dentro de paréntesis:

   ```text
   true && !true
   ```

3. Evaluar las negaciones:

   ```text
   true && false
   ```

4. Evaluar cualquier `&&` y `||` que falte:

   ```text
   false
   ```

Inténtalo tu. Decide si las siguientes expresiones evalúan a `true` o `false`:

* `!(5 === 5) && 8 !== 8`
* `("gut" === "ikk" && 26 > 30) || ("gut" === "gut" && 26 > 10)`
* `!("testing" == "testing" && !(5 > 8))`

