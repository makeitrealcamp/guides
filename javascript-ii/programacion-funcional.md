# Programación funcional

La **programación funcional** es un **paradigma de la programación** en donde las funciones se convierten en las protaginistas del código que escribimos.

Un **paradigma de la programación** es una forma de pensar en programación. Otros **paradigmas de la programación** incluyen la **programación imperativa** \(de la que vamos a hablar en un momento\) y la **programación orientada por objetos**. Estos paradigmas no son excluyentes y se pueden mezclar.

Aunque JavaScript no es un lenguaje puramente funcional, sí es posible programar de forma funcional. En JavaScript las funciones tienen las siguientes características:

* Se pueden asignar a variables.
* Se pueden pasar como parámetro de otras funciones \(a esto se le cononce como **callbacks**\).
* Se pueden retornar desde otras funciones.

## Funciones que reciben funciones

Un **lenguaje funcional**, a diferencia de un **lenguaje imperativo**, nos permite componer funciones para solucionar diferentes tipos de problemas. Por ejemplo, imagina que tenemos el siguiente arreglo:

```javascript
const arr = [1, 2, 3];
```

Ahora queremos imprimir todos sus elementos. En **programación imperativa** lo haríamos de la siguiente forma:

```javascript
for (let i=0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

En programación funcional utilizaríamos una función llamada `forEach` que viene incluída por defecto en todos los arreglos:

```javascript
const sum = arr.forEach(elem => console.log(elem));
```

Más compacto ¿no?. Por debajo `forEach` utiliza `for` para hacer el recorrido de los elementos. No es que la **programación funcional** reemplace la **programación imperativa**, la **programación funcional** está un nivel por encima de la **programación imperativa**.

### Map

Otro método útil que traen todos los arreglos es `map` que nos permite transformar cada uno de los elementos de un arreglo. Por ejemplo, imagina que queremos duplicar todos los valores de `arr`:

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

También podemos utilizar `reduce` para operaciones un poco más complejas, al saber que podemos ir acumulando valores con el valor inicial podríamos utilizarlo para contar cuantas veces se repite una letra, espacio o carácter especial en una cadena de texto.

```javascript
const input = "Make it real"
const response = input.split('').reduce((prev, now) => {
  prev[now] ? prev[now] ++ : prev[now] = 1;
  return prev;
}, {})

console.log(response) // { M: 1, a: 2, k: 1, e: 2, ' ': 2, i: 1, t: 1, r: 1, l: 1 }
```

En este caso estamos separado la cadena de texto con `split('')` haciendo que esta se convierta en un arreglo, el cual podemos utilizar para reducirlo y contar las letras. Al reducirlo estamos definiendo como valor anterior `{}` \(un objeto vacío\) el cual definimos al crear la función; cada vez que lo estamos reduciendo validamos si la letra esta creada en el valor anterior \(en este caso el objeto\); si existe, le sumamos 1 \(`++`\) a la propiedad del objeto, de lo contrario la creamos y le asignamos el valor 1. Cada vez que se está reduciendo retornamos el valor anterior para que el nuevo valor tenga un punto de referencia.

## Funciones que retornan funciones

