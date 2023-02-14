# Realizando peticiones HTTP

Desde el navegador podemos realizar peticiones HTTP a servidores remotos con JavaScript. A esta técnica también se le conoce como AJAX (Asynchronous JavaScript and XML).

En este capítulo vamos a ver dos formas de realizar peticiones HTTP a servidores remotos: el Fetch API y una librería llamada [Axios](https://github.com/axios/axios).

**Nota 1:** si aún no has trabajado con programación asincrónica con JavaScript te recomendamos que veas primero [esta guía](../javascript-ii/programacion-asincronica.md) antes de continuar.

**Nota 2:** jQuery también incluye un API para realizar peticiones HTTP que puedes consultar en [esta guía](../jquery/realizando-peticiones-con-ajax.md).

## Fetch API

El Fetch API es el reemplazo de un objeto llamado `XMLHttpRequest (XHR)`, que era lo que se utilizaba antes para hacer peticiones remotas. `XMLHttpRequest` es engorroso de utilizar y XML, que es un formato de intercambio de información, ha caído en desuso en favor de [JSON](json).

Para utilizar el Fetch API no necesitas instalar ninguna librería. Sin embargo, algunos navegadores no lo soportan aún, particularmente Internet Explorer <= 13. Te recomendamos [consultar esta página](https://caniuse.com/#feat=fetch) para ver el soporte actual.

Para realizar una petición HTTP con el Fetch API se utiliza el método `fetch`, que en su versión más simple recibe una URL:

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
```

`fetch` retorna una promesa que se resuelve con la respuesta del servidor:

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function(response) {
    // response.status (el código de respuesta)
    // response.headers.get("Content-Type")
    // ..
  })
```

Para obtener el cuerpo de la respuesta debemos utilizar el método `json` del response y anidarlo en la cadena de promesas:

```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(function(response) { return response.json() })
  .then(function(data) {
    console.log(data)
  })
```

`fetch` recibe un segundo parámetro, un objeto que podemos utilizar para personalizar nuestra petición. Por ejemplo:

```javascript
fetch(url, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: '{ "name": "Pedro Perez" }'
  })
```

## Axios

Axios es una librería construída sobre `XMLHttpRequest (XHR)` pero con un API similar al de Fetch API (basado en promesas). Es ideal cuando necesitamos soportar navegadores antiguos que aún no incluyen Fetch API.

El primer paso para utilizar Axios es instalar la librería que lo puedes hacer incluyendo la siguiente línea:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
Para realizar peticiones HTTP con Axios utiliza el objeto `axios`, que expone métodos para los diferentes verbos HTTP como `GET`, `POST`, etc. Veamos un ejemplo:

```javascript
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function(data) {
    console.log(data)
  })
```

Los métodos que expone `axios` reciben un segundo parámetro, un objeto que puedes utilizar para personalizar la petición:

```javascript
axios.post('https://jsonplaceholder.typicode.com/todos/', {
  headers: {
    "Content-type": "application/json"
  },
  data: {
    title: "Prueba",
  }
})
```

Para ver la documentación completa de Axios te recomendamos consultar [el respositorio en Github](https://github.com/axios/axios) de la librería.
