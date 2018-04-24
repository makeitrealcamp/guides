# Vistas

Escribir todo el HTML dentro del código JavaScript es muy engorroso y lo que se recomienda es utilizar un motor de plantillas \(template engine\) que nos permita separar nuestro código HTML de nuestro código JavaScript.

Existen varios motores de plantillas como [Pug](https://pugjs.org/), [Mustache](https://github.com/janl/mustache.js) y [EJS](http://ejs.co/). Como ilustración vamos a usar [Pug](https://pugjs.org/) en este capítulo.

El primer paso es instalar el motor de plantillas utilizando **npm** o **yarn**. Por ejemplo, para instalar [Pug](https://pugjs.org/) con **yarn** ejecutaríamos el siguiente comando:

```text
$ yarn add pug --dev
```

El segundo paso es configurar el motor de plantillas y la carpeta donde se van a almacenar las vistas. Por ejemplo, para configurar [Pug](https://pugjs.org/) y la carpeta `views` agregaríamos las siguiente dos líneas en nuestra aplicación después de definir la variable `app`:

```javascript
app.set('view engine', 'pug');
app.set('views', 'views');
```

Para crear una vista debes crear un archivo con extensión `.pug` en la carpeta `views` \(o la que hayas configurado\).

[Pug](https://pugjs.org/) utiliza una sintaxis similar a HTML pero más compacta. Veamos un ejemplo. Crea un archivo llamado `index.pug` en la carpeta `views` con el siguiente contenido:

```text
html
  head
    title Vista con Pug
  body
    h1 Esta es mi primera vista con Pug
```

Para utilizar esta vista desde una ruta debemos usar el método `res.render`. Agrega la siguiente ruta al archivo `app.js`:

```javascript
app.get('/', (req, res) => {
  res.render('index');
});
```

Fíjate que no es necesario agregar la extensión del archivo, Express ya sabe cuál es.

Inicia el servidor e ingresa desde un navegador a [http://localhost:3000/](http://localhost:3000/). Deberías ver el texto "Esta es mi primera vista con Pug" y el título de la pestaña debería ser "Vista con Pug".

## Pasando información a la vista

También es posible pasar información desde la ruta a la vista. Por ejemplo, si queremos pasar el texto que va en el `title` y el `h1` desde la ruta podemos hacer lo siguiente:

```text
html
  head
    title= title
  body
    h1= message
```

Y pasarle esas variables `title` y `message` desde la ruta:

```javascript
app.get('/', (req, res) => {
  res.render('index', { title: "Variables en Pug", message: "Ya sé pasar info a la vista" });
});
```

Si reinicias el servidor y refrescas la página deberías ver el texto "Ya sé pasar info a la vista" y el título de la pestaña debería ser "Variables en Pug".

## Creando un layout

Esta información es específica de Pug. Para ver cómo se hace en otros motores de plantillas debes consultar su documentación.

Existen elementos que se repiten en todas las páginas como la estructura básica de HTML, el menú principal, etc. \(a esto se le conoce como un **layout**\). Con Pug puedes crear un archivo con estos elementos y reutilizarlo en tus vistas.

Por ejemplo, crea un archivo llamado `layout.pug` dentro de la carpeta `views` con el siguiente contenido:

```text
html
  head
    title Mi super página
  body
    block content
```

La línea `block content` se va a reemplazar con el código de cada vista. Ahora vamos a crear una vista llamada `index.pug` \(también en la carpeta `views`\) que va a "extender" el layout que acabamos de crear:

```text
extends "layout.pug"

block content
  h1 Hola Mundo
```

Todo lo que se encuentre debajo de `block content` se va a reemplazar en el layout donde esté definido el bloque con el mismo nombre.

Puedes tener varios bloques si es necesario.

