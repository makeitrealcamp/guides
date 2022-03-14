El **Local Storage** es un espacio de almacenamiento en el navegador basado en llaves y valores (similar a un objeto de JavaScript con la diferencia que los valores son siempre strings).

Para acceder al **Local Storage** utilizamos el objeto `localStorage` o `window.localStorage`.

## Almacenando valores en el Local Storage

Para almacenar una llave y un valor en el Local Storage utiliza el método `setItem`. Por ejemplo, para guardar la llave `nombre` con valor `Pedro Perez` haríamos lo siguiente:

```js
localStorage.setItem("name", "Pedro Perez")
```

## Obteniendo valores del Local Storage

Para obtener un valor del Local Storage utiliza el método `getItem`:

```js
localStorage.getItem("name")
```

Si la llave existe se retornará el valor, de lo contrario retornará `null`.

## Eliminando llaves del Local Storage

Para eliminar una llave y su valor del Local Storage utiliza el método `removeItem`:

```js
localStorage.removeItem("name")
```

Si la llave existe será eliminada, de lo contrario este método no hace nada.

Para eliminar todas las llaves utiliza el método `clear`:

```js
localStorage.clear()
```

## Limitaciones

* Sólo puede almacenar strings como valores.
* La mayoría de navegadores permiten hasta ~5MB de almacenamiento por origen (algunos piden permiso al usuario si se supera este límite).
* Cualquier script en la página tiene acceso a la información.

Ten en cuenta que cada dominio tiene su propio Local Storage independiente, es decir que no podemos leer el LocalStorage de sitios o aplicaciones en otros dominios o subdominios.

## Otros mecanismos de almacenamiento

Además del Local Storage existen otros mecanismos de almacenamiento en el navegador:

* **Cookies:** similar al Local Storage pero las cookies se envían al servidor cada vez que se hace una petición HTTP y tienen una limitación mayor en cuanto a almacenamiento (~1MB). Las cookies, a diferencia del Local Storage, pueden tener un tiempo de expiración.
* **Session Storage:** similar al Local Storage pero con un alcance menor, las llaves del Session Storage expiran cuando se cierra el navegador (las llaves del Local Storage nunca expiran). Otra diferencia es que el navegador crea un Session Storage por cada pestaña que se abre, diferente al Local Storage que comparte la información entre pestañas siempre y cuando sea del mismo origen (mismo dominio y puerto).
* **[IndexedDB](https://developer.mozilla.org/es/docs/Web/API/IndexedDB_API):** este mecanismo es experimental pero la idea es ofrecer una base de datos NoSQL completa en el navegador.