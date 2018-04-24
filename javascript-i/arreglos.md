# Arreglos

Hasta ahora hemos trabajado con cadenas de texto, números y booleanos. En este capítulo vamos a hablar de un nuevo tipo de datos: los arreglos.

Un arreglo es una lista ordenada de elementos de cualquier tipo. Para crear tu primer arreglo abre la consola de Node.js y escribe lo siguiente:

```javascript
var array = [1, "Pedro", true, false, "Juan"]
```

La sintaxis de un arreglo es muy simple. Los elementos del arreglo se envuelven entre corchetes y se separan con coma. Fíjate que el arreglo que creamos contiene números, cadenas de texto y booleanos. Cada elemento del arreglo puede ser de cualquier tipo \(incluso otros arreglos!\).

## Obteniendo elementos del arreglo

Para obtener la primera posición del arreglo que acabamos de crear utilizas `array[0]`:

```text
$ node
> array = [1, "Pedro", true, false, "Juan"]
[1, "Pedro", true, false, "Juan"]
> array[0]
1
```

La sintaxis para obtener un elemento del arreglo es `[n]` donde `n` es la posición empezando en 0. Imprime ls demás elementos del arreglo:

```text
> array[1]
"Pedro"
> array[2]
true
> array[3]
false
> array[4]
"Juan"
```

Puedes obtener el ultimo elemento del arreglo obteniendo la longitud de este y restandole 1, lo cual seria \[array.length - 1\]. Hay que tener en cuenta que la longitud del arreglo no comienza desde 0 sino desde 1.

```text
> array[array.length - 1]
"Juan"
```

## Recorriendo un arreglo

En el ejemplo anterior pudimos imprimir cada una de las posiciones porque era un arreglo de pocos elementos. Sin embargo esto no siempre es práctico. Primero, el arreglo puede ser muy grande o puede que no sepamos el tamaño del arreglo. Crea un archivo llamado `arrays.js` y escribe el siguiente código:

```ruby
var array = [1, "Pedro", true, false, "Juan"];

for (var i = 0; i < array.length; i ++) {
  console.log(array[i]);
}
```

## Reemplazando un elemento

Es posible reemplazar el valor de cualquier elemento del arreglo. Por ejemplo:

```javascript
var array = [1, "Pedro", true, false, "Juan"];
array[1] = "Germán"; // reemplazamos el elemento en la posición 1

// [1, "Germán", true, false, "Juan"]
```

En este ejemplo estamos reemplazando la posición 1 del arreglo \(que realmente es la segunda porque recuerda que empieza en 0\) con el valor "Germán". La línea más importante es la siguiente:

```javascript
array[1] = "Germán";
```

Como ejercicio intenta reemplazar el último elemento \("Juan"\) por otro valor.

## Insertando nuevos elementos

Es posible insertar nuevos elementos en un arreglo \(puede estar vacío o tener elementos\). Por ejemplo:

```javascript
var array = ["Pedro"];
array.push("Germán"); // ["Pedro", "Germán"]
array.push("Diana"); // ["Pedro", "Germán", "Diana"]
```

El método `push` te permite agregar un elemento al final de la lista. ¿Qué pasa si queremos agregar un elemento en otra posición? Para eso sirve el método `splice`:

```javascript
var array = ["Pedro", "Germán", "Diana"];
array.splice(0, 0, "Juan") // ["Juan", "Pedro", "Germán", "Diana"]
```

El método `splice` se utiliza tanto para insertar como eliminar elementos. Para insertar debes pasarle 3 o más argumentos. El primer argumento es la posición en la que quieres insertar el elemento. La segunda posición debe estar en `0`. Los demás argumentos son los elementos que deseas insertar en el arreglo. Fíjate que en el ejemplo todos los elementos desde esa posición se mueven a la derecha.

## Eliminando elementos

Para eliminar elementos de un arreglo utilizas el método `splice`. Por ejemplo:

```javascript
var array = ["Pedro", "Germán", "Diana"];
array.splice(1, 1); // ["Pedro", "Diana"]
```

El método `splice` recibe uno o dos argumentos cuando quieres eliminar elementos: el índice del elemento que quieres eliminar y la cantidad de elementos a eliminar. Si omites el segundo argumento se eliminarán todos los elementos después del índice que hayas especificado en el primer argumento. Por ejemplo:

```javascript
var array = ["Pedro", "Germán", "Diana"];
array.splice(0); // []
```

