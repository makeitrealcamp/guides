# Recursión

La recursión nos permite solucionar problemas que se pueden dividir en casos cada vez más simples.

Por ejemplo, el factorial de un número es la multiplicación de los números (positivos) menores a ese número. La notación que se utiliza para representar el factorial es el número seguido de un signo de exclamación (`!`). Por ejemplo `5!` es igual a `120`:

```
5! = 5 * 4 * 3 * 2 * 1 = 120
```

Sin embargo, `5!` también se podría expresar como:

```
5! = 5 * 4!
```

Esto es recursión: solucionamos primero `4!` y después lo multiplicamos por `5`. Pero para solucionar `4!` podemos solucionar primero `3!` y multiplicarlo por `4`. Y para solucionar `3!` podemos solucionar `2!` y multiplicarlo por `3`. Y lo mismo con `2!`: solucionamos `1!` y lo multiplicamos por `2`. El caso base es `1!` que es `1`.

La clave de la recursión es que una función se puede llamar a sí misma como en el siguiente ejemplo que nunca terminaría:

```javascript
function hola() {
  hola();
}
hola();
```

Cualquier ciclo se puede reescribir de forma recursiva y viceversa. Por ejemplo, podemos imprimir los números del 1 al 10 de forma recursiva:

```javascript
function printNumber(x) {
  console.log(x); // imprime el número
  if (x < 10) { printNumber(x + 1); }
}
printNumber(1); // inicia la recursión
```

La última línea llama el método `printNumber` pasándole como parámetro el número `1`. Luego, en la línea 2 imprimimos el número y por último la función se llama a si misma si el número es menor a `10`.

El ejemplo anterior sería mucho más fácil con un ciclo normal:

```javascript
for (var i=1; i <= 10; i++) {
  console.log(x);
}
```

Algunos problemas se adaptan mejor a ser solucionados por recursión y otros por iteración.

Lo que debes tener en cuenta al crear una función recursiva es lo siguiente:

1. Definir los casos triviales, es decir, los casos en los que **no** se debe volver a invocar la función.
2. Definir los casos generales, es decir, los casos en los que **sí** se debe volver a invocar la función.
3. Verificar que los valores que se pasan como argumentos de la función cambien cada vez que se invoca (se deberían acercar a los casos triviales).
