# Despliegue con Heroku

[Heroku](https://heroku.com/) es un servicio que nos permite publicar nuestras aplicaciones en Internet sin necesidad de preocuparnos por configurar servidores, instalar Ruby on Rails, configurar la base de datos, etc.

[Heroku](https://heroku.com/) tiene un plan gratuito que, aunque tiene algunas limitaciones, es más que suficiente para empezar. También existen planes pagos para aplicaciones en producción que necesiten más procesamiento y/o memoria; puedes consultar los precios en [esta página](https://www.heroku.com/pricing).

Si aún no tienes una cuenta en [Heroku](https://heroku.com/), ingresa a la [página principal](https://heroku.com/) y crea una.

## Heroku CLI

Una vez que tengas una cuenta en [Heroku](https://heroku.com/) debes descargar el [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), una aplicación para la línea de comandos que te permitirá interactuar con [Heroku](https://heroku.com/). En [este enlace](https://devcenter.heroku.com/articles/heroku-cli) encontrarás las instrucciones para descargarla e instalarla.

Una vez que la hayas instalado verifica la instalación ejecutando el siguiente comando:

```
$ heroku --version
```

Deberías ver `heroku/x.y.z` en el resultado.

Por último ejecuta el siguiente comando para autenticarte:

```
$ heroku login
```

Ingresa el email y contraseña que utilizaste para crear tu cuenta en Heroku.

## Creando la aplicación

Vamos a crear una aplicación desde cero que desplegaremos en Heroku. El primer paso es crear una carpeta vacía:

```
$ mkdir superapp
$ cd superapp
```

El siguiente paso es agregar Express.js:

```
$ yarn add express
```

Ahora crea un archivo `index.js` con el siguiente contenido:

```javascript
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('<h1>Mi primera aplicación en Heroku</h1>');
});

app.listen(PORT, () => console.log(`Listening on port ${ PORT }!`));
```

Crea un archivo llamado `Procfile` con el siguiente contenido:

```
web: node index.js
```

Crea un archivo llamado `.gitignore` con el siguiente contenido:

```
node_modules
```

Por último crea el repositorio y haz commit ejecutando los siguientes comandos:

```
$ git init
$ git add .
$ git commit -m 'Prepare app for Heroku deployment'
```

## Desplegando la aplicación

Para desplegar la aplicación primero debes crear la aplicación en Heroku ejecutando el siguiente comando:

```
$ heroku create
```

Y desplegarla con el siguiente comando:

```
$ git push heroku master
```

Este proceso toma algún tiempo, pero lo importante es que al final salga algo parecido a lo siguiente:

```
remote: Verifying deploy... done.
To https://git.heroku.com/un-nombre-extrano.git
 * [new branch]      master -> master
```

Por último ejecuta el siguiente comando para visitar tu aplicación:

```
$ heroku open
```
