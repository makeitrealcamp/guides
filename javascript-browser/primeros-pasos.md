# Primeros pasos

Existen varias formas de empezar a trabajar con JavaScript **en el navegador**. Vamos a ver dos de ellas.

### Codepen

La primera, y quizá la forma más fácil, es utilizar una herramienta en línea como [Codepen](https://codepen.io/pen). Ingresa a ese link y vas a ver una pantalla similar a la siguiente:

![Codepen](https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/codepen.jpg)

Es posible que no sea exactamente igual (p.e. si la actualizaron) pero lo importante es que vas a tener 3 espacios para escribir el HTML, CSS y JavaScript respectivamente. En el espacio para el HTML omite las etiquetas `html`, `head` y `body`, todo lo que escribas allí va a estar dentro del `body` que Codepen crea para ti.

### Desde un documento HTML

Otra forma de empezar a trabajar con JavaScript desde el navegador es crear un documento HTML y crear un tag `script`. Puedes copiar la siguiente estructura en un archivo HTML para empezar:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prueba de JavaScript</title>
</head>
<body>

  <script>
    // acá va el código que vamos a escribir
  </script>
</body>
</html>
```

O puedes crear un archivo con extensión `.js` y referenciarlo desde el HTML antes de cerrar el `body` (que es una mejor práctica):

```html
<script src="app.js"></script>
```

**Nota:** En este caso el archivo `app.js` se debe encontrar en la misma carpeta que el archivo HTML para que funcione.

## Un ejemplo

Independiente de cómo quieras empezar a trabajar con JavaScript, vamos a escribir nuestro primer ejemplo.

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
var div = document.querySelector("div");
div.addEventListener('click', function() {
  this.style.background = 'yellow';
});
```

En la primera línea del código JavaScript nos estamos enlazando al evento `click` del `<div>`. De esa forma, cuando le hagan **click**, se va a ejecutar el código que está dentro de la función, que cambia el fondo a amarillo.
