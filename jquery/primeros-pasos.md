# Primeros pasos

Existen varias formas de empezar a trabajar con **jQuery**. Vamos a ver dos de ellas.

### Codepen

La primera, y quizá la forma más fácil, es utilizar una herramienta en línea como [Codepen](https://codepen.io/pen). Ingresa a ese link y vas a ver una pantalla similar a la siguiente \(aunque quizá ya la han actualizado\):

![Codepen](https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/codepen.jpg)

Ahora debes configurar **jQuery** como se muestra en la siguiente animación:

![Configure jQuery in Codepen](https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/codepen-jquery.gif)

Estás listo\(a\) para empezar a trabajar con **jQuery**.

### La segunda forma es crear un documento HTML

Otra forma es crear un documento HTML e incluir **jQuery**.

Existen varias formas de incluir **jQuery** pero la más fácil es utilizar un [CDN como el de Google](https://developers.google.com/speed/libraries/#jquery).

Puedes copiar la siguiente estructura en un archivo HTML para empezar:

```markup
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prueba de jQuery</title>
</head>
<body>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script>
    // acá va el código que vamos a escribir
  </script>
</body>
</html>
```

## Un ejemplo

Independiente de cómo vayas a trabajar con jQuery, vamos a escribir nuestro primer ejemplo.

Crea un `div` en el HTML de [Codepen](https://codepen.io/pen) o de tu documento como se muestra a continuación:

```markup
<div></div>
```

Escribe el siguiente código CSS \(si creaste un documento HTML puedes hacerlo en la etiqueta `<style>` dentro del `<head>`\):

```css
div {
  background-color: red;
  height: 200px;
}
```

El código JavaScript que debes incluir es el siguiente:

```javascript
$('div').on('click', function() {
  $(this).css('background', 'yellow');
});
```

En la primera línea del código JavaScript nos estamos enlazando al evento `click` del `<div>`. De esa forma, cuando le hagan **click**, se va a ejecutar el código que está dentro de la función, que cambia el fondo a amarillo.

**jQuery** se divide en tres grandes funcionalidades:

* Manipular elementos HTML.
* Escuchar eventos del teclado, mouse, etc.
* Realizar peticiones con AJAX.

