# Plugins

Es posible extender la funcionalidad de **jQuery** a través de **plugins**. Existe una infinidad de **plugins** en Internet que te van a permitir realizar todo tipo de tareas como validar formularios, crear carruseles de imágenes, autocompletar campos, crear pestañas, datepickers (selectores de fechas), ventanas modales, etc.

De hecho, existe una colección **plugins** llamada [jQuery UI](https://jqueryui.com/), que es mantenida por los mismos de **jQuery**. Por otro lado, varios de los componentes de Bootstrap como modales, tabs, dropdowns, etc. fueron creados como **plugins**.

## Buscando y seleccionando plugins

El primero paso es buscar un **plugin** que solucione tu problema. Si buscas en Internet vas a encontrar muchas opciones así que es posible que debas seleccionar uno de ellos.

Imagina que queremos crear un campo en donde el usuario pueda seleccionar un color, es decir, un colorpicker. Si buscas en Internet "colorpicker jquery" vas a encontrar varios resultados. Lo que debes tener en cuenta es lo siguiente:

1. Que sea de código abierto, que el código fuente sea público y que esté publicado en Github, Bitbucket u otro hosting de Git.
2. Que sea gratis (a menos de que estés dispuesto a pagar). Incluso si es de código abierto puede que sea pago para uso comerciales [como este](http://jscolor.com/).
3. Que esté siendo mantenido (puedes revisar cuándo fue el último commit), el número de estrellas, etc.
4. Si estás utilizando Bootstrap intenta buscar uno que esté diseñado específicamente para trabajar con este framework.

En este caso vamos a utilizar [jQuery Minicolors](https://github.com/claviska/jquery-minicolors/) que tiene más de 800 estrellas en Github, la licencia es MIT \(una de las más abiertas\) y el último commit no fue hace mucho tiempo.

## Utilizando plugins

Desafortunadamente la documentación de muchos **plugins** no es muy buena, pero generalmente vas a necesitar descargar un archivo JavaScript con el código del **plugin** y un archivo CSS con los estilos \(aunque esto depende de la documentación del plugin\).

En nuestro caso vamos a copiar y pegar el contenido de los archivos `jquery.minicolors.min.js` y `jquery.minicolors.css`. El archivo `index.html` quedó de la siguiente forma:

```markup
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Minicolors example</title>
  <link rel="stylesheet" href="jquery.minicolors.css">
</head>
<body>
  <input type="text" id="colorpicker">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="jquery.minicolors.min.js"></script>
  <script>
    $("#colorpicker").minicolors();
  </script>
</body>
</html>
```

Primero definimos un `input` con id `colorpicker`. Luego agregamos la referencia a **jQuery** y al JavaScript del **plugin** \(el orden es importante\). También agregamos la referencia del CSS en el `head`. Y por último configuramos el plugin con la línea `$("#colorpicker").minicolors();`.

Cuando lo probamos salió un error en la consola diciendo que no podía encontrar el archivo `jquery.minicolors.png`, así que también lo tuvimos que descargar de Github.

El resultado final lo puedes ver en [este enlace](https://makeitrealcamp.github.io/minicolors) y el código fuente en [este otro enlace](https://github.com/makeitrealcamp/minicolors).

## Creando un plugin

Un **plugin** no es más que un método que se le agrega a **jQuery** con una funcionalidad específica. Vamos a hacer un ejemplo muy simple, un plugin que le cambia el color de la fuente a rojo:

```javascript
$.fn.rojizar = function() {
  this.css("color", "red");
}
```

Este código lo puedes guardar en un archivo JS y publicarlo en Internet.

Para usarlo simplemente debes seleccionar los elementos con **jQuery** y llamar el método `rojizar`. Por ejemplo, para cambiar el color de todos los párrafos del documento a rojo haríamos lo siguiente:

```javascript
$("p").rojizar();
```

Y eso es todo!
