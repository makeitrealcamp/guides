## Algoritmos de ordenamiento

En este capítulo hablaremos de varios algoritmos de ordenamiento y analizaremos su complejidad.

La entrada de todos estos algoritmos es una lista de números enteros. La lista podría estar ordenada, aunque generalmente no lo va a estar. Los números no van a ser secuenciales necesariamente, es decir, una lista podría ser `[32, 5, 27]`.

El resultado siempre es es una lista que contiene los mismos números de la lista de entrada pero ordenados de menor a mayor.

## Selection sort

Intuitivamente, una forma de ordenar una lista sería la siguiente:

1. Recorrer la lista y encontrar el menor.
2. Insertar el elemento en otra lista y eliminar el elemento de la lista original.
3. Volver al paso 1 hasta que la lista original esté vacía.

Este algoritmo que acabamos de describir se le conoce como **selection sort** y su complejidad es O(n^2). Este algoritmo tiene la ventaja de ser simple pero la desventaja de que siempre tenemos que recorrer la lista original así el menor esté en la primera posición que comparemos (porque no sabemos que va a ser el menor hasta que terminemos de recorrer toda la lista).

## Insertion sort

Este algoritmo recorre cada elemento de la lista y va creando una nueva lista ordenada **insertando** el elemento en la posición correcta.

A diferencia del **selection sort** es muy eficiente si la lista ya está ordenada (o casi ordenada) pero su complejidad sigue siendo O(n^2).

## Bubble sort

Este algoritmo recorre la lista varias veces comparando pares e intercambiándolos para que queden ordenados. El algoritmo termina cuando no es necesario hacer ningún intercambio.

## Merge sort

Este es uno de los algoritmos más eficientes con una complejidad de O(n log n). Es un algoritmo basado en recursión y en la idea de que es más fácil unir dos listas previamente ordenadas que tratar con una gran lista desordenada.

Como es un algoritmo recursivo debemos definir los casos triviales y los generales. El caso trivial ocurre cuando la lista es vacía o tiene un único elemento.

El caso general divide la lista en dos, llama recursivamente la función para cada una de las listas y después las une de forma ordenada.

```
MergeSort(lista)
  Si la lista es vacía o tiene un elemento
    retorne la lista
  De lo contrario
    divida la lista en dos (lista1 y lista2)
    lista1 = MergeSort(lista1)
    lista2 = MergeSort(lista2)
    mezcle lista1 y lista2
    retorne la lista mezclada
```

La lista se divide en la mitad. Si la longitud no es par, una de las listas va a tener un elemento de más.

La unión de las listas se hace comparando cada posición e insertando en una nueva lista primero el menor y luego el mayor de cada posición.

## Quick sort

Este algoritmo también es muy eficiente con complejidad O(n log n) y se basa en la idea de que es mejor ordenar dos listas independientes y después unirlas.

En el quick sort se selecciona un valor de la lista (de forma aleatoria o el de la mitad) llamado el **pivote**. Se empieza a recorrer el arreglo desde los extremos intercambiando los elementos para que todos los que sean menores al **pivote** queden a la izquierda de todos los elementos mayores al pivote.

Eso crea una división natural que se utiliza para ordenar las listas de forma recursiva y al final unirlas. La lista se divide en dos y se vuelve a aplicar quicksort a cada uno de las listas. Por último se unen las dos listas ordenadas.

```
QuickSort(lista)
  Si la lista es vacía o tiene un elemento
    retorne la lista
  De lo contrario
    seleccione el pivote (p.e. elemento de la mitad de la lista)
    recorra la lista desde los extremos intercambiando los elementos
    divida la lista en dos (lista1 y lista 2)
    lista1 = QuickSort(lista1)
    lista2 = Quicksort(lista2)
    una lista1 y lista2
    retorne la lista unida
```
