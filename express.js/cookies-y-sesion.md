# Cookies y sesión

**HTTP** es un protocolo sin estado. Cada petición es completamente independiente de otra y no hay forma de compartir información entre las peticiones.

Las **cookies** nos permiten almacenar información en el navegador del usuario. Piensa en las **cookies** como un objeto de JavaScript.

Una **sesión** Web es el tiempo que dura un visitante en nuestra aplicación antes de cerrar la pestaña, navegar a otra página, o estar inactivo por cierto tiempo.

## Cookies

Para escribir una **cookie** utiliza el método `res.cookie`:

```javascript
res.cookie('name', 'pedro', { domain: '.example.com', path: '/admin', secure: true });
res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
```

Para leer las **cookies** necesitas configurar un **middleware** llamado [cookie-parser](https://github.com/expressjs/cookie-parser).

El primer paso es instalarlo con npm o Yarn:

```text
$ npm install --save cookie-parser
```

El siguiente paso es configurar el **middleware**:

```javascript
var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();
app.use(cookieParser());
```

Con este **middleware** puedes utilizar el método `req.cookies` y `req.signedCookies` \(para leer cookies cifradas\).

## Sesiones

Una **sesión** inicia cuando el visitante ingresa por primera vez a un sitio o aplicación Web, o después de que ese mismo visitante ha finalizado una sesión previa.

Generalmente se define que la **sesión** termina después de 30 minutos de inactividad del visitante, pero dependiendo del sistema que utilicemos para almacenar la información de la sesión, es posible dejar abierta la sesión días o meses.

El objetivo de definir este concepto de **sesión** es poder almacenar información que sobrevive las peticiones HTTP de un visitante.

La **sesión** involucra una **cookie** con una fecha de expiración, generalmente de 30 minutos.

Cada vez que el visitante hace una petición HTTP la **cookie** se actualiza para extender la **sesión**.

Cuando han pasado más de 30 minutos de inactividad la **cookie** expira y la próxima vez que el visitante ingrese se va a crear una nueva **sesión**.

La información de la **sesión** es un objeto de JavaScript que se puede almacenar en el cliente (dentro de una cookie) o en el servidor (en una base de datos o la memoria).

### Almacenando la sesión en el navegador

Para almacenar la sesión de cada usuario en una cookie debes utilizar el **middleware** [cookie-session](https://github.com/expressjs/cookie-session).

El primer paso es instalarlo con npm o Yarn:

```text
$ npm install cookie-session
```

El segundo paso es configurarlo de la siguiente forma:

```javascript
var express = require('express');
var cookieSession = require('cookie-session')

app.use(cookieSession({
  secret: /* una cadena de texto aleatoria */,

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

...
```

Ahora puedes acceder a la sesión del usuario que hizo la petición con `req.session`. Por ejemplo:

```javascript
app.get('/', (req, res, next) => {
  req.session.views = (req.session.views || 0) + 1

  // Write response
  res.send(req.session.views + ' views');
});
```

## Almacenando la sesión en el servidor

Aunque almacenar las sesiones en una **cookies** es una buena solución, una limitación es que una **cookie** no puede ocupar más de 4KB de memoria.

Otra opción es almacenar la información de las sesiones en el servidor y guardar en la **cookie** un identificador para localizar la información de esa sesión en el servidor.

El **middleware** que se utiliza para almacenar la sesión en el servidor es [express-session](https://github.com/expressjs/session), que permite almacenar las sesiones en diferentes bases de datos como MongoDB, Redis, etc.

Vamos a omitir la explicación de este **middleware** en este capítulo porque en la mayoría de los casos [cookie-session](https://github.com/expressjs/cookie-session) es suficiente, pero puedes consultar [la documentación](https://github.com/expressjs/session) si deseas utilizar esta opción.
