# Primeros pasos

Aunque existen varias formas de empezar con Bootstrap, quizá la forma más fácil es utilizar la siguiente plantilla HTML:

```markup
<!doctype html>
<html lang="en">
  <head>
    <title>Hello, world!</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  </body>
</html>
```

**Bootstrap** se compone de un archivo **CSS** y varios archivos **JavaScript**. Adicionalmente necesitamos **jQuery**. Estamos usando un **CDN \(Content Delivery Network\)** que se encarga de alojar y publicar estos archivos en Internet de forma muy eficiente.

En la plantilla estamos utilizando el doctype de HTML5, que es requerido por **Bootstrap**:

```markup
<!doctype html>
<html lang="en">
  ...
</html>
```

También estamos usando el siguiente meta tag que asegura que el responsive design funcione de manera correcta:

```markup
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
```

Por último, fíjate que estamos incluyendo los archivos **JavaScript** al final de la página. Esto permite que el navegador muestre todo el contenido con sus estilos antes de descargar estos archivos.

## ¿Qué nos ofrece Bootstrap?

* Estilos más modernos y consistentes para los elementos básicos de HTML: títulos, párrafos, listas, imágenes, tablas, formularios, etc.
* Componentes como barra de navegación, carrusel de imágenes, pestañas, fuente de íconos, paginación, ventanas emergentes \(modales\), botones y barras de progreso entre otros.
* Una grilla para organizar los elementos de nuestra página fácilmente.
* Algunas clases de CSS útiles para trabajar con márgenes, paddings, texto y responsive design.

## La documentación

Puedes encontrar la documentación de Bootstrap 4 en [https://getbootstrap.com/](https://getbootstrap.com/). Está en Inglés pero es muy completa. Te recomendamos usarla como referencia.

