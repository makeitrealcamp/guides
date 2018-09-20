# Rutas

Las rutas determinan la forma en que la aplicación va a responder cuando se reciba una petición HTTP. Cada ruta se compone de un `método HTTP`, un path y una función que se va a encargar de responder cuando la petición coincida con el método y el path.

Por ejemplo, la siguiente ruta responde con el texto "Hola Mundo" cuando se recibe una petición GET a la raíz de la aplicación:

```javascript
app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>')
})
```

La primera ruta que coincide con la petición es la que se ejecuta.

El siguiente ejemplo coincidiría con las peticiones `POST` y el path `/users`:

```javascript
app.post('/users', (req, res) => {
  res.send("Recibimos un POST a /users");
})
```

La función que se pasa como **callback** de cada ruta recibe dos objetos, generalmente nombrados `req` y `res`.

El primer argumento \(`req`\) representa la petición HTTP y tiene propiedades para acceder el cuerpo del mensaje, los encabezados, el query string, etc. La lista completa de propiedades la encuentras en [este enlace](https://expressjs.com/en/4x/api.html#req).

El segundo argumento \(`res`\) representa el mensaje de respuesta que Express le va a enviar al cliente. A continuación vamos a ver cómo utilizar este objeto para escribir el cuerpo, los encabezados y el código de respuesta, pero la lista completa de propiedades y métodos la encuentas en [este enlace](https://expressjs.com/en/4x/api.html#res).

## Escribiendo el cuerpo, código de respuesta y los encabezados

Para escribir el cuerpo de la respuesta utiliza el método `res.send`:

```javascript
res.send("Este es el cuerpo del mensaje");
```

Por defecto, Express devuelve el código de respuesta `200 OK`. Si necesitas cambiarlo puedes usar `res.status` de la siguiente forma:

```javascript
res.status(404);
```

También puedes anidar el llamado con `send`:

```javascript
res.status(404).send("No se encontró el recurso solicitado");

// otra opción
res.sendStatus(200); // equivalente a res.status(200).send('OK')
res.sendStatus(403); // equivalente a res.status(403).send('Forbidden')
res.sendStatus(404); // equivalente a res.status(404).send('Not Found')
res.sendStatus(500); // equivalente a res.status(500).send('Internal Server Error')
```

Para escribir encabezados utiliza `res.set`:

```javascript
res.set('Content-Type', 'text/plain');

res.set({
  'Content-Type': 'text/plain',
  'Content-Length': '123',
  'ETag': '12345'
});
```

## Query string

El **query string** es lo que va después del signo de interrogación \(`?`\) en un URL. **Express** automáticamente almacena las propiedades en el objeto `req.query`. Por ejemplo, para obtener el valor de la propiedad `name` utilizaríamos `req.query.name` como se muestra en el siguiente ejemplo:

```javascript
app.get('/', (req, res) => {
  res.send("Hola " + req.query.name);
});
```

Con esta ruta, si ingresas a `http://localhost:3000/?name=Pedro` vas a ver el texto "Hola Pedro".

## Parámetros de ruta

Los parámetros de ruta son segmentos en la URL que se usan para capturar valores del usuario. Los valores capturados son almacenados en el objeto `req.params`. En el siguiente ejemplo estamos definiendo un parámetro llamado `name` que obtenemos con `req.params.name`:

```javascript
app.get('/user/:name', (req, res) => {
  res.send('Hola ' + req.params.name);
})
```

Con esta ruta, si ingresas a `http://localhost:3000/user/Pedro` vas a ver el texto "Hola Pedro".

## Sirviendo archivos estáticos

Con Express puedes servir archivos estáticos como imágenes, CSS, JavaScript, etc. Simplemente debes almacenarlos en una carpeta dentro de tu aplicación \(p.e. `public`\) y agregar la siguiente línea a tu aplicación en `app.js`:

```javascript
app.use(express.static('public'));
```

Esa línea la puedes agregar en cualquier parte después de definir la variable `app` y antes de llamar `app.listen`. Sin embargo, se recomienda ubicarla antes de definir las rutas:

```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));

// acá irían las rutas

app.listen(3000, () => console.log('Listening on port 3000!'));
```

Para acceder a los archivos estaticos omite el nombre de la carpeta:

```text
http://localhost:3000/images/kitten.jpg
http://localhost:3000/css/style.css
http://localhost:3000/js/app.js
```

Si quieres que los archivos estáticos tengan un prefijo \(p.e. `/static`\) puedes modificar la línea de la siguiente forma:

```javascript
app.use('/static', express.static('public'))
```

Ahora puedes acceder a los archivos estáticos utilizando el prefijo `/static`. Por ejemplo:

```text
http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
```

En vez de definir la carpeta de forma relativa, una mejor práctica es utilizar la ruta absoluta por si alguien ejecuta la aplicación desde otra carpeta. Modifica la línea de la siguiente forma:

```javascript
app.use(express.static(path.join(__dirname, 'public')));
```
