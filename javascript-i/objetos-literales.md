# Objetos literales

Los objetos en JavaScript nos ayudan agrupar información. Un objeto no es más que un conjunto de propiedades en donde cada propiedad está compuesta de una llave y un valor. Veamos un ejemplo:

```javascript
var persona = {
  nombre: "Germán",
  apellido: "Escobar",
  edad: 35,
  estatura: 1.8
}
```

Con este código estamos creando un objeto y lo estamos almacenando en la variable `persona`. Un objeto se define utilizando corchetes `{}`. Las propiedades se separan con coma \(`,`\) y las llaves y valores se separan con dos puntos \(`:`\).

En este objeto estamos almacenando la información de una persona, pero en un objeto podemos almacenar cualquier tipo de información que requiera esa asociación llave-valor.

El valor de una propiedad puede ser cualquier tipo de datos en JavaScript: números, cadenas de texto, booleanos, arreglos e incluso funciones y otros objetos.

## Obteniendo valores de un objeto

Para obtener el nombre de la persona en el objeto que definimos previamente lo haríamos utilizando `persona.nombre`. Por ejemplo:

```javascript
console.log(persona.nombre);
```

Para obtener el valor de una llave en un objeto utilizamos la notación punto \(`.`\): el nombre de la variable, seguido de punto, seguido del nombre de la llave:

```javascript
console.log(persona.nombre); // imprime Germán
console.log(persona.apellido); // imprime Escobar
console.log(persona.edad); // imprime 35
console.log(persona.estatura); // imprime 1.8
```

Existe otra forma equivalente de obtener el valor de una llave utilizando corchetes cuadrados \(`[]`\):

```javascript
persona["nombre"]
```

Esta notación es útil para obtener los valores de forma dinámica. Por ejemplo:

```javascript
var llave = "nombre";
console.log(persona[llave]);
```

Primero definimos una variable `llave`, a la que le asignamos el valor `"nombre"` y utilizamos esa variable para obtener el valor. Esto va a ser útil más adelante cuando estemos recorriendo las propiedades de un objeto.

Como ejercicio intenta cambiar el valor de la variable por cualquier otra llave del objeto y verifica el resultado. ¿Qué pasa si utilizamos una llave que no existe? ¡Inténtalo!

## Agregando nuevas propiedades al objeto

Es posible agregar más propiedades a un objeto después de que ha sido creado. Por ejemplo, podríamos agregar una propiedad con llave `peso` y valor `70` de la siguiente forma:

```javascript
persona.peso = 70;
```

## Modificando propiedades del objeto

Es también posible modificar los valores de las propiedades de un objeto. Por ejemplo, si queremos cambiar el valor de la llave `peso` lo podemos hacer de la siguiente forma:

```javascript
persona.peso = 65;
```

## Eliminando propiedades de un objeto

Para eliminar una propiedad de un objeto utiliza el operador `delete`:

```javascript
delete person.peso;
```

## Recorriendo las propiedades de un objeto

Existen varias formas de recorrer las propiedades de un objeto en JavaScript. Veamos las dos principales:

```javascript
for (var llave in persona) {
  if (persona.hasOwnProperty(llave)) {
    console.log(persona[llave])
  }
}
```

La razón por la que tenemos que agregar la condición es que los objetos pueden heredar propiedades de otros objetos, pero esa explicación está fuera del alcance de este libro. Por ahora asegúrate de agregar el condicional si vas a utilizar esa forma de iterar.

La otra forma de recorrer las propiedades de un objeto es utilizando `Object.keys`:

```javascript
var llaves = Object.keys(persona);
for (var i=0; i < llaves.length; i++) {
  var llave = llaves[i];
  console.log(persona[llave]);
}
```

`Object.keys` retorna un arreglo con las llaves del objeto que almacenamos en la variable `llaves`. Después iteramos por todas las llaves y utilizamos cada llave para obtener, de forma dinámica, el valor de esa llave en el objeto.

## Mezclando arreglos y objetos

Es posible mezclar arreglos y objetos para crear estructuras complejas. Crea un archivo llamado `products.js` y transcribe lo siguiente:

```javascript
var products = [
  { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
  { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
  { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
];
```

En este ejemplo hemos creado un arreglo de objetos. Cada objeto representa un producto y una de sus llaves \(`categories`\) contiene a su vez un arreglo. Modifiquemos el programa para imprimir los productos en la consola:

```javascript
var products = [
  { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
  { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
  { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
];

for (var i=0; i < products.length; i++) {
  var product = products[i];
  console.log(product.name);
  console.log("  Id: " + product.id);
  console.log("  Precio: " + product.price);
  console.log("  Categorías: " + product.categories.join(", "));
}
```

Lo primero que estamos haciendo es iterando por el arreglo de productos. Por cada uno de los productos \(recuerda que cada producto es un objeto\) vamos a mostrar el nombre \(la llave `nombre`\), después el identificador \(la llave `id`\), el precio \(la llave `price`\) y las categorías \(la llave `categories`\). Como las categorías están en un arreglo debemos utilizar el método `join` para convertirlas en una cadena.

