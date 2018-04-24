# Manipulación de archivos

En Node.js es posible manipular archivos \(crear, leer, modificar, mover, etc.\). En este capítulo vamos a ver tres de estas operaciones: leer, escribir y verificar si un archivo o carpeta existe.

**Nota:** Ten en cuenta que esto sólo aplica para Node.js, desde el navegador **no** es posible manipular archivos, sería muy inseguro.

## Leer de un archivo

La forma más fácil de leer un archivo con Node.js es utilizando el método `readFile` del módulo `fs`. Para empezar crea un nuevo archivo llamado `contenido.txt` con el siguiente contenido:

```text
Primera línea
Segunda línea
Tercera línea
```

Ahora crea un archivo en la misma carpeta llamado `read.js` con el siguiente contenido:

```javascript
var fs = require('fs');

fs.readFile('contenido.txt', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);
});
```

Ejecútalo en la consola, debería mostrar el contenido del archivo y una línea en blanco al final:

```text
$ node read.js
Primera línea
Segunda línea
Tercera línea
```

El método `readFile` recibe 3 argumentos: la ruta al archivo, la codificación y una función que va a ser invocada cuando se lea el archivo \(a esta función se le llama **callback**\).

### Leyendo archivos grandes

El método `readFile` lee todo el archivo en memoria. El problema es que si el archivo es muy grande es posible que la máquina no tenga la suficiente memoria para leerlo.

Si el archivo es muy grande es mejor utilizar la siguiente forma:

```javascript
var fs = require('fs'),
    readline = require('readline');

var reader = readline.createInterface({
  input: fs.createReadStream('archivo-grande.txt')
});

reader.on('line', function (line) {
  console.log(line);
});
```

## Escribir a un archivo

La forma más fácil de de escribir a un archivo es con el método `writeFile` del módulo `fs`. Por ejemplo, crea un archivo llamado `write.js` y transcribe el siguiente código:

```javascript
var fs = require('fs');

fs.writeFile("nuevo.txt", "Primera línea\nSegunda línea", function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("El archivo fue creado correctamente");
});
```

Ejecútalo en la consola y revisa que el archivo haya sido creado correctamente:

```text
$ node write.js
El archivo fue creado correctamente
```

El método `writeFile` recibe tres argumentos: la ruta del archivo que quieres crear, el contenido y una función que se invoca cuando ha terminado de escribir el archivo o ha ocurrido un error.

### Escribiendo a un archivo línea por línea

Si necesitas escribir un archivo línea por línea puedes utilizar la siguiente forma:

```javascript
var fs = require('fs');

var stream = fs.createWriteStream("nuevo.txt");
stream.once('open', function(fd) {
  stream.write("Primera línea\n");
  stream.write("Segunda línea\n");
  stream.end();
});
```

## Verificar si un archivo o una carpeta existen

Para verificar si un archivo o carpeta existe utiliza el método `stat` del módulo `fs`:

```javascript
var fs = require("fs");

fs.stat('nuevo.txt', function(err) {
  if (err == null) {
    console.log("El archivo existe");
  } else if (err.code == 'ENOENT') {
    console.log("el archivo no existe");
  } else {
    console.log(err); // ocurrió algún error
  }
})
```

