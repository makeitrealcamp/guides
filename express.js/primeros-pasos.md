# Primeros Pasos

Para instalar Express utiliza el siguiente comando:

```text
$ npm install express
```

Ahora crea un archivo llamado `app.js` con el siguiente contenido:

```javascript
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));
```

Ejecuta el archivo con el siguiente comando:

```text
$ node app.js
Listening on port 3000!
```

Por último ingresa a [http://localhost:3000/](http://localhost:3000/) desde un navegador. Deberías ver el texto "Hola Mundo" en un encabezado `h1`.

Felicitaciones, has creado tu primera aplicación con Express! En el siguiente capítulo vamos a hacer un repaso del protocolo HTTP.

