# Carga de Imágenes

Express.js no permite cargar archivos directamente, así que necesitamos usar una librería llamada [multer](https://github.com/expressjs/multer).

Como siempre, el primer paso es agregar la librería:

```
$ yarn add multer
```

El siguiente paso es configurar la librería en nuestro código:

```javascript
const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });

const app = express();

app.post('/profile', upload.single('avatar'), (req, res) => {
  // req.file es el archivo 'avatar', el nombre original se puede obtener
  // con req.file.originalname
});

...
```

En la línea 3 estamos configurando [multer](https://github.com/expressjs/multer) para que las imágenes queden almacenadas en la carpeta `uploads`. En la línea 7 estamos creando la ruta `/profile` y como segundo parámetro le estamos pasando el **middleware** de **multer** que va a recibir la imagen del formulario y guardarla en la carpeta `uploads`.

El formulario sería el siguiente:

```html
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar">
  <input type="submit" value="Enviar">
</form>
```

En la primera línea estamos definiendo la ruta `/profile` con el método `POST`. También definimos un formato llamado `multipart/form-data`, que nos permite enviar uno o más archivos junto a otra información del formulario. Sin esta última opción la carga de archivos no funcionaría.

En la segunda línea estamos definiendo el campo de tipo archivo que se va a utilizar para cargar la imagen.

## Validaciones

Para validar que sólo puedan cargar imágenes podemos agregarle una opción a la configuración de multer:

```javascript
...
const upload = multer({
  dest: 'uploads/',
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/');
    if (isPhoto) {
      next(null, true);
    } else {
      next({ message: "El tipo de archivo no es válido" }, false);
    }
  }
});
```

También es conveniente agregar la siguiente validación al campo de tipo archivo:

```html
<input type="file" name="avatar" accept="image/gif, image/png, image/jpeg">
```

De esa forma el usuario no va a poder seleccionar archivos que no sean imágenes en el formulario. Sin embargo, la validación en el servidor es necesaria porque alguien podría modificar el formulario y enviar otro tipo de archivos.

También es posible limitar el tamaño del archivo con la opción `fileSize`, que recibe el número máximo de bytes que puede tener el archivo:

```javascript
const upload = multer({
  ...,
  fileSize: 1000000 // 1MB
});
```

## Colisiones de nombres

Si dos usuarios suben imágenes con el mismo nombre la primera imagen se va a sobrescribir. Para evitar ese problema es buena práctica generar nombre de archivos únicos con un paquete llamado [uuid](https://github.com/kelektiv/node-uuid).

El primer paso es agregar la librería:

```
$ yarn add uuid
```

Ahora debemos modificar el código para cambiar el nombre de las imágenes:

```javascript
const express = require('express');
const multer  = require('multer');
const path = require("path");
const uuid = require("uuid");

const app = express();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, uuid.v4() + path.extname(file.originalname));
  }
});
const upload = multer({
  storage: storage
});

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  // ...
});
```

En la línea 8 estamos definiendo el tipo de almacenamiento que vamos a utilizar para las imágenes, en este caso una carpeta en el disco duro, y definimos dos métodos: `destination` y `filename`. `destination` se utiliza para definir el nombre de la carpeta, y `filename` para definir el nombre del archivo, ahí es donde utilizamos la librería uuid para generar un nombre único.

## Cargar múltiples imágenes

Hasta ahora hemos visto cómo cargar una única imagen. Sin embargo **multer** también permite cargar varias imágenes a la vez.

```javascript
app.post('/profile', upload.array('photos'), (req, res) => {
  // las imágenes están en req.files (es un arreglo)
});
```

## Modificar el tamaño de las imágenes

No es buena idea utilizar las imágenes originales que suben los usuarios porque podrían ser muy pesadas. Es mejor modificar su tamaño para garantizar que no pesen más de lo necesario.

Para eso vamos a utilizar una librería llamada [Jimp](https://github.com/oliver-moran/jimp) que nos va a permitir redimensionar las imágenes.

El primer paso es agregar la librería:

```
$ yarn add jimp
```

Ahora debemos configurar **Jimp** en nuestro código:

```javascript
const express = require('express');
const multer  = require('multer');

const app = express();

const uploader = multer(...);

// este es el middleware que va a redimensionar la imagen
const resize = async (req, res, next) => {
  if (!req.file) {
    next();
    return;
  }

  const photo = await jimp.read(req.file.path);
  await photo.resize(1024, jimp.AUTO);
  await photo.write(`uploads/big/${req.file.filename}`);

  next();
};

// debemos configurar el middleware en la ruta
app.post('/profile', uploader.single('avatar'), resize, (req, res) => {
  // req.file es el archivo 'avatar', el nombre original se puede obtener
  // con req.file.originalname
});
```

Fíjate cómo estamos definiendo el método `resize`, que realmente es un middleware que vamos a configurar en la ruta `POST /profile` que recibe la imagen. Ese método lee el archivo, lo redimensiona y guarda en la carpeta `uploads/big/`. Para ver todas las opciones de Jimp consulta [la documentación](https://github.com/oliver-moran/jimp).
