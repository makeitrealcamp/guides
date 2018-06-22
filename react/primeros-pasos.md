# Primeros pasos

{% youtube %} https://youtube.com/watch?v=_0FHpdMwZFM {% endyoutube %}

Aunque existen varias formas de empezar con React, quizá la forma más fácil es con [create-react-app](https://github.com/facebookincubator/create-react-app), una aplicación de consola que nos va a permitir crear una aplicación en React rápidamente.

El primer paso es instalar [create-react-app](https://github.com/facebookincubator/create-react-app) con npm o Yarn:

```text
$ npm install -g create-react-app
```

Para crear una aplicación utiliza el comando `create-react-app` seguido del nombre que le quieras dar a tu aplicación. Por ejemplo:

```text
$ create-react-app my-app
```

Cuando ejecutas ese comando [create-react-app](https://github.com/facebookincubator/create-react-app) va a crear una carpeta llama `my-app` con una serie de archivos y subcarpetas para que puedas empezar a trabajar en tu proyecto.

Ingresa a la carpeta `my-app` y ejecuta el proyecto con los siguientes comandos:

```text
$ cd my-app
$ npm start
```

El último comando ejecuta el servidor de desarrollo y abre un navegador con una pantalla de bienvenida.

Felicitaciones, has creado tu primera aplicación con React!

## ¿Qué incluye create-react-app?

Un proyecto creado con [create-react-app](https://github.com/facebookincubator/create-react-app) incluye, además de React, otras librerías como:

* [Webpack](https://webpack.js.org/) que se encarga de procesar y empaquetar nuestro código JavaScript \(con sus dependencias\), archivos CSS y otros archivos estáticos como imágenes y fuentes.
* [Babel](https://babeljs.io/) que nos permite usar nuevas características de ECMAScript y JSX \(JavaScript XML\).
* [PostCSS](http://postcss.org/) que es una librería para el procesamiento de CSS.
* [Jest](https://facebook.github.io/jest/) que es una librería para testing.
* ... entre otras.

Uno podría configurar un proyecto de React manualmente e incluir cada una de estas librerías, pero es bastante engorroso, [create-react-app](https://github.com/facebookincubator/create-react-app) nos hace la vida más fácil.

## Estructura del proyecto

[create-react-app](https://github.com/facebookincubator/create-react-app) crea la siguiente estructura de archivos y carpetas:

```text
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

Los dos archivos más importantes son:

* `public/index.html` - la plantilla de la aplicación
* `src/index.js` - el punto de entrada de JavaScript

Puedes eliminar o renombrar otros archivos según tus necesidades.

Dentro de `src` se incluyen todos los archivos JavaScript y CSS de tu aplicación. También es recomendable incluir otros archivos estáticos como imágenes y fuentes en esta carpeta. Puedes crear subcarpetas para organizar mejor los archivos.

En `public` van todos los archivos estáticos que necesites incluir en la plantilla `public/index.html`.

Puedes crear otras carpetas además de `src` y `public`. Estas carpetas no van a ser incluídas en el paquete de distribución.

## Scripts

En la carpeta del proyecto puedes ejecutar los siguientes comandos:

* `npm start` - inicia el servidor de desarrollo y abre un navegador con la aplicación.
* `npm test` - ejecuta las pruebas.
* `npm run build` - empaqueta la aplicación para producción en la carpeta `build`.
* `npm run eject` - permite cambiar manualmente las librerías y configuración que utiliza [create-react-app](https://github.com/facebookincubator/create-react-app) por defecto. Ten cuidado con este comando, una vez lo ejecutas **no hay marcha atrás**.

## Hot reloading

Una de las funcionalidades más importantes de los proyectos creados con [create-react-app](https://github.com/facebookincubator/create-react-app) es la capacidad de hacer cambios en caliente sin necesidad de reiniciar el servidor. Si haces un cambio en algún archivo en `src` o `public` el navegador se refresca automáticamente.
