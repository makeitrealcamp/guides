# Algoritmos de búsqueda

Los algoritmos de búsqueda nos permiten encontrar un elemento dentro de una estructura de datos (p.e. una lista, un árbo, un grafo, etc.). En este capítulo vamos a hablar exclusivamente de búsqueda en listas.

## Listas

Existen dos algoritmos para buscar un elemento en una lista: la búsqueda lineal y la búsqueda binaria (que require que la lista esté ordenada).

En la sección [Descripción de un algoritmo](describiendo-algoritmos.md) hablamos de la búsqueda lineal, que quiza es uno de los algoritmos más simples: se recorre toda la lista hasta encontrar el elemento.

La búsqueda lineal es `O(n)`. Sin embargo, si la lista está ordenada podemos utilizar la búsqueda binaria, que es `O(log n)`.

### Búsqueda binaria

```
Entrada:
* lista: arreglo de elementos
* valor: el valor que estamos buscando

Salida: la posición en la que se encuentra el valor (o -1 si no lo encuentra)

Prerequisitos: la lista se encuentra ordenada
```

La búsqueda binaria sigue la estrategia de divide y vencerás. Aprovechando que la lista está ordenada iniciamos comparando el elemento que buscado con el valor que se encuentra en la mitad de la lista. Si el elemento es mayor (o menor) podemos descartar la otra mitad y volver a repetir el proceso en la mitad donde esperamos encontrar el elemento.

Este algoritmo se puede escribir de forma recursiva:

```
BinarySearch(lista, elem)
  Retorne BinarySearchRecursive(lista, elem, 0, lista.length)

BinarySearchRecursive(lista, elem, inicio, fin)
  Si inicio es mayor a fin
    Retorne -1

  mitad = mitad entre inicio y fin
  Si el valor en la posición mitad es igual a elem
    Retorne mitad
  Si el valor en la posición mitad es menor a elem
    Retorne BinarySearchRecursive(lista, elem, mitad + 1, fin)
  Si el valor en la posición mitad es mayor a elem
    Retorne BinarySearchRecursive(lista, elem, inicio, mitad - 1)  
```

La función recursiva necesita algunos argumentos adicionales así que utilizamos una función adicional `BinarySearchRecursive` y la invocamos desde la función principal `BinarySearch`.
