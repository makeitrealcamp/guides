# Middlewares y manejo de errores

Los **middlewares** son funciones que se invocan en cada petición HTTP y permiten implementar funcionalidades transversales, es decir, que aplican a varias rutas como autenticación, logging, compresión y manejo de errores, entre otros.

En Express los **middlewares** son particularmente importantes y se utilizan para tareas como leer el cuerpo del mensaje, servir archivos estáticos \(como lo vimos en el capítulo de [rutas](rutas.md)\) y manejo de cookies, entre otros.

Veamos un primer ejemplo. Vamos a escribir un **middleware** que imprime "Nueva petición HTTP" cada vez que recibimos una petición:

```javascript
const logger = (req, res, next) => {
  console.log("Nueva petición HTTP");
  next(); // esto es necesario para que la petición continúe
}
```

Un **middleware** recibe 3 parámetros: el objeto `request`, el `response` y una función `next` que debemos invocar para que continúe la cadena de **middlewares**.

Para configurar un **middleware** se utiliza el método `use`:

```javascript
// asumiendo que app ya está definido
app.use(logger);
```

El orden en el que se configuren los **middlewares** es importante, se ejecutan en el orden en que se configuran.

## Middlewares incluídos en Express

A la fecha \(Diciembre 2017\) Express viene con 3 **middlewares** incluídos:

* [express.static](https://expressjs.com/en/4x/api.html#express.static) para servir archivos estáticos.
* [express.json](https://expressjs.com/en/4x/api.html#express.json) para leer peticiones JSON.
* [express.urlencoded](https://expressjs.com/en/4x/api.html#express.urlencoded) para leer peticiones URL-encoded.

De los dos últimos vamos a hablar en próximos capítulos.

También existen paquetes externos con **middlewares**, algunos son [soportados oficialmente por Express](https://github.com/senchalabs/connect#middleware).

## Manejo de errores

Para manejar errores que ocurran durante una petición puedes definir un **middleware** que reciba cuatro argumentos. Por ejemplo:

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal!');
});
```

Los **middlewares** de error se deben ubicar al final de otros **middlewares**. El formato que utilices es decisión tuya, puede ser una página HTML con el error, un mensaje simple como el ejemplo anterior, o un JSON.

