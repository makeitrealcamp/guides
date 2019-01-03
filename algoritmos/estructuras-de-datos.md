# Estructuras de datos

Las estructuras de datos nos permite almacenar y manipular información compleja compuesta de datos básicos (números, booleanos, caracteres, etc.) y otras estructuras de datos en nuestros programas y algoritmos.

## Arreglos

Seguramente ya conoces los arreglos pero es importante saber que existen dos tipos de arreglos: estáticos y dinámicos.

Los arreglos estáticos tienen una longitud fija mientras que los dinámicos tienen una longitud variable. En C, C++ y Java, entre otros, los arreglos son estáticos mientras que en JavaScript, Ruby y Python, entre otros, son dinámicos.

Los arreglos dinámicos son mucho más flexibles pero pueden llegar a ser lentos u ocupar más espacio en memoria (recuerda que JavaScript y Ruby están escritos en lenguajes de más bajo nivel como C o C++ que no soportan arreglos dinámicos).

[Este enlace](https://www.quora.com/What-is-the-underlying-data-structure-of-a-javascript-Array) explica cómo están implementados los arreglos de JavaScript.

## Diccionarios

Los diccionarios están compuestos de llaves y valores. La principal característica de un diccionario es que la búsqueda de un elemento por llave es constante `O(1)`.

## Listas encadenadas

Las listas encadenadas son similares a los arreglos, en el sentido que son una lista de elementos, pero la implementación es diferente.

Una lista encadenada está compuesta de nodos. Cada nodo tiene un valor y una referencia al siguiente nodo como se muestra en la siguiente imagen:



La ventaja principal de una lista encadenada (sobre un arreglo) es que insertar elementos en la mitad de la lista es muy fácil (sólo se deben cambiar las referencias de los nodos). Sin embargo, la desventaja es que no se puede acceder a una posición aleatoria (toca recorrer la lista hasta llegar a la posición).

La lista también puede estar doblemente encadenada, es decir, cada nodo tiene una referencia al siguiente y al anterior.

Las operaciones principales de una lista encadenada son:

* Insertar un valor en un posición (por defecto al final).
* Obtener un valor por posición.
* Recorrer las posiciones.
* Eliminar una posición.

```javascript
const list = new LinkedList();
list.add('a');
list.add('b');
list.add('d');
list.addAt(2, 'c');

list.valueAt(0); // 'a'

list.forEach((val, i) => {
  console.log(`Value at position ${i}: ${val}`);
});

list.removeAt(0);
```

`add` es `O(n)` aunque se puede mantener una referencia interna al último nodo de la lista y se convertiría en `O(1)`.

`addAt`, `valueAt` y `removeAt` son `O(n)` porque toca recorrer la lista hasta llegar a la posición deseada.

En la vida real las listas encadenadas no son muy comunes (los arreglos funcionan bien en la mayoría de los casos) pero igual es importante saber que existen y es un buen ejercicio hacer la implementación.

## Árboles

Los árboles están compuestos de nodos como las listas encadenadas. Sin embargo, un árbol tiene un nodo raíz con referencia a cero o más nodos hijos. Estos nodos, a su vez, tienen referencias a otros nodos hijos, y así sucesivamente.

Cuando un nodo no tiene referencia a otros nodos se le conoce como un nodo hoja.

Un árbol en el que cada nodo puede tener máximo dos hijos se le conoce como un **àrbol binario**.

En la vida real los árboles se utilizan para optimizar búsquedas.

## Grafos

Los grafos son nodos interconectados entre sí.

Los gráfos pueden ser cíclicos o acíclicos.

Los grafos pueden ser direccionados o no direccionados.

## Colas (queues)

Una cola es una estructura que permite agregar elementos al final de la lista y obtener el primero de la lista (como una fila de pago en un supermercado). A esto se le conoce como PEPS (primero en entrar, primero en salir).

Las operaciones principales de una cola son:

* Agregar un valor.
* Obtener el primer valor.
* Obtener el tamaño.

Las colas se usan en programación principalmente para almacenar información que va a ser procesada en el futuro.

Las colas se pueden implementar sobre un arreglo limitando las operaciones para que se comporte como una cola (p.e. no se debe poder obtener un elemento por posición ni insertar en cualquier posición).

## Pilas (stacks)

Una pila es una estructua que permite agregar elementos al principio de una lista y obtener el primero de esa lista (como una pila de libros en la que solo puedes tomar el libro de la parte superior, y en la que solo puedes ubicar libros encima de los demás). A esto se le conoce como UEPS (último en entrar, primero en salir).

Las operaciones principales de una pila son:

* Agregar un valor.
* Obtener el último valor agregado.
* Obtener el tamaño.

Las pilas se pueden implementar utilizando un arreglo y limitando las operaciones para que se comporte como una pila (p.e. no se debe poder obtener un elemento por posición ni insertar en cualquier posición).

## Conjuntos (sets)

Un conjunto es una lista de elementos que **no** permite valores duplicados. La mayoría de lenguajes de programación incluyen esta estructura de datos (p.e. JavaScript tiene el objeto [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)).

Las operaciones principales de un conjunto son:

* Agregar un valor
* Obtener el tamaño del conjunto.
* Verificar si existe un valor.
* Eliminar un valor.

En JavaScript podemos utilizar [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) de la siguiente forma.

```javascript
const mySet = new Set();
mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]

mySet.size; // 2

mySet.has(1); // true

mySet.delete(5); // removes 5 from the set
```
