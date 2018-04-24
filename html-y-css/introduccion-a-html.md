# Introducción a HTML

**HTML** \(HyperText Markup Language\) es un lenguaje que nos permite definir la estructura de las páginas Web.

**HTML** se compone de **elementos** como párrafos, encabezados, imágenes y vínculos \(links\), entre muchos otros.

Los **elementos** se definen utilizando **etiquetas**. Una **etiqueta** es una palabra encerrada entre `<` y `>` \(p.e. `<hr>` muestra una línea horizontal en el documento\).

La mayoría de **etiquetas** necesitan una **etiqueta de cierre** que es muy similar a una **etiqueta** pero tiene un slash \(`/`\) antes de la palabra. Por ejemplo, para mostrar un párrafo se utilizan la **etiqueta** `<p>` y la **etiqueta de cierre** `</p>`. En el medio de las dos etiquetas va el contenido del párrafo:

```markup
<p>Esto es un párrafo</p>
```

## Documentos de HTML

Un documento HTML es un archivo con extensión `.html` que contiene código HTML. Veamos un ejemplo de un documento HTML.

```markup
<!DOCTYPE html>
<html>
  <head>
    <title>El título de la página</title>
  </head>
  <body>
    <p>Este es un párrafo</p>
  </body>
</html>
```

Un documento HTML inicia con la declaración `<!DOCTYPE html>` que le indica al navegador que estamos usando la última versión de HTML, HTML5.

El elemento raíz del documento es `html` que define los límites del documento \(todo lo que esté entre la etiqueta `<html>` y `</html>` es el documento\).

Dentro de las etiquetas `<head>` y `</head>` se encuentra toda la información que no es visible del documento. Por ejemplo, el elemento `title` se utiliza para mostrar el título en la pestaña del navegador.

Dentro de las etiquetas `<body>` y `</body>` va toda la información visible en el área blanca del navegador.

## Elementos

Un elemento HTML consiste generalmente de una **etiqueta de inicio** \(p.e. `<p>`\) y una **etiqueta de cierre** \(p.e. `</p>`\).

Las **etiquetas** se pueden anidar. Por ejemplo, para resaltar un texto en **negrilla** dentro de un párrafo se utiliza el **elemento** `strong`:

```markup
<p>Esto es un párrafo <strong>con un texto en negrilla</strong></p>
```

### Párrafos

Los párrafos se definen con la etiqueta `<p>`:

```markup
<p>Esto es un párrafo</p>
<p>Esto es otro párrafo</p>
```

### Títulos \(encabezados\)

Los títulos se definen con las etiquetas `<h1>` a `<h6>` siendo `<h1>` el título de más importancia y `<h6>` el de menos importancia:

```markup
<h1>Este es un título 1</h1>
<h2>Este es un título 2</h2>
<h3>Este es un título 3</h3>
```

### Vínculos \(links\)

Los vínculos se definen con la etiqueta `<a>`:

```markup
<a href="http://makeitreal.camp/">Make it Real</a>
```

El destino del vínculo se define en el **atributo** `href`. Los atributos se utilizan para proveer información adicional a la etiqueta.

### Imágenes

Las imágenes se definen con la etiqueta `<img>`:

```markup
<img src="imagen.jpg" alt="Una imagen">
```

La etiqueta `<img>` **no** necesita una etiqueta de cierre. El atributo `src` contiene la ruta al archivo con la imagen y el atributo `alt` contiene el texto que describe la imagen \(útil para los buscadores y personas que utilizan lectores de pantallas\).

### Comentarios

Puedes agregar comentarios al código HTML utilizando la siguiente sintaxis:

```markup
<!-- Escribe acá tu comentario -->
```

Los comentarios no son visibles en el documento HTML.

