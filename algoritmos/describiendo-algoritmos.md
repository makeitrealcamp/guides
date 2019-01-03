# Descripción de un algoritmo

Un algoritmo se puede escribir en palabras, en pseudocódigo o en un lenguaje de programación. Muchas veces se escribe de las tres formas. Por ejemplo:

```
La búsqueda lineal nos permite encontrar un elemento en una lista.

Recorremos la lista empezando por la primera posición. Para cada posición comparamos el valor con el elemento que estamos buscando. Si el valor coincide imprimimos la posición y finalizamos el programa. De lo contrario, continuamos con la siguiente posición hasta que terminemos de recorrer la lista.
```

Pseudocódigo es más formal que en palabras pero no tan exacto como un lenguaje de programación:

```
Entrada:
* lista: arreglo de elementos
* valor: el valor que estamos buscando

Salida: la posición en la que se encuentra el valor (o vacío si no la encuentra)

por cada posición de la lista
  si valor de la posición == valor de búsqueda
     imprima la posición
     finalice el programa
```

No hay una regla exacta de cómo escribir pseudocódigo así que acá hay mucha flexibilidad.

Por último podemos escribir el algoritmo en algún lenguaje de programación como JavaScript:

```javascript
function buscar(lista, valor) {
  for (var i=0; i < lista.length; i++) {
    if (lista[i] === valor) {
      return i;
    }
  }

  return -1;
}
```

Los algoritmos no siempre se deben implementar como funciones, pero una función nos permite definir claramente qué se va a recibir y qué se va a retornar, y nos da la flexibilidad de usarla en diferentes contextos.

Al describir un algoritmo se debe definir:

* Los datos de entrada y las restricciones que puedan existir sobre esos datos de entrada.
* El resultado esperado.
* Las instrucciones paso a paso para lograr el resultado esperado.
