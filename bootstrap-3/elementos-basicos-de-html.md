# Elementos básicos de HTML

**Bootstrap 3** le aplica estilos a los elementos básicos de HTML como encabezados, párrafos, formularios, tablas, etc. Con sólo incluir **Bootstrap** en tu página ya vas a ver cambios en la tipografía y otros elementos.

## Encabezados

Utiliza los encabezados `<h1>` a `<h6>` normalmente en tus páginas.

También puedes utilizar la etiqueta `<small>` para agregar texto secundario como se muestra en el siguiente ejemplo:

{% embed url="https://codepen.io/germanescobar/pen/QOPagd" %}

## Alineación

Utiliza las clases `text-left`, `text-center`, `text-right` y `text-justify` en párrafos para alinearlos a la izquierda, centro, derecha y justificados respectivamente.

## Tablas

Para aplicarle los estilos de **Bootstrap** a las tablas debes agregar la clase `table`:

```markup
<table class="table">
  ...
</table>
```

Veamos un ejemplo que puedes editar para probar diferentes configuraciones:

{% embed url="https://codepen.io/germanescobar/pen/ZKNWQW" %}

[Ver la documentación de Bootstrap](https://getbootstrap.com/docs/3.3/css/#tables).

### Tablas con bandas

Agrega la clase `table-striped` para intercalar el fondo de las filas entre blanco y gris:

```markup
<table class="table table-striped">
  ...
</table>
```

### Tablas con bordes

Agrega la clase `table-bordered` para agregar bordes a la tabla:

```markup
<table class="table table-bordered">
  ...
</table>
```

### Resaltar la fila sobre la que pasa el mouse

Utiliza la clase `table-hover` para que cuando pases el mouse sobre una fila cambie el fondo a gris:

```markup
<table class="table table-hover">
  ...
</table>
```

### Filas contextuales

Puedes utilizar las clases `active`, `success`, `info`, `warning` y `danger` sobre los `<tr>`, `<th>` o `<td>` para cambiar el color de las filas o celdas:

```markup
<!-- En filas -->
<tr class="active">...</tr>
<tr class="success">...</tr>
<tr class="warning">...</tr>
<tr class="danger">...</tr>
<tr class="info">...</tr>

<!-- En celdas (`td` or `th`) -->
<tr>
  <td class="active">...</td>
  <td class="success">...</td>
  <td class="warning">...</td>
  <td class="danger">...</td>
  <td class="info">...</td>
</tr>
```

[Abrir en la documentación de Bootstrap](https://getbootstrap.com/docs/3.3/css/#tables-contextual-classes)

## Formularios

**Bootstrap** le aplica algunos estilos a los formularios pero debes seguir la siguiente estructura:

```markup
<form>
  <div class="form-group">
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" class="form-control">
  </div>
  <button type="submit" class="btn btn-default">Enviar</button>
</form>
```

Para tener en cuenta:

* Encierra los campos de entrada con un `div` que tenga la clase `form-group`.
* Agrégale la clase `form-control` al `input`.
* Utiliza un `<button>` con `type="submit"`. En la siguiente sección vamos a hablar más de los botones.

Para los checkboxes utiliza la siguiente estructura:

```markup
<div class="checkbox">
  <label>
    <input type="checkbox"> Check me out
  </label>
</div>
```

Existen muchas variaciones sobre los formularios. Para más información [abre la documentación en Bootstrap](https://getbootstrap.com/docs/3.3/css/#forms).

## Botones

Agrega la clase `btn` sobre las etiquetas `<a>` y `<button>`, en conjunto con una de las siguientes clases para crear un botón más estilizado: `btn-default`, `btn-primary`, `btn-success`, `btn-info`, `btn-warning`, `btn-danger` o `btn-link`.

```markup
<button type="button" class="btn btn-default">Default</button>
```

Veamos un ejemplo con diferentes tipos de botones:

{% embed url="https://codepen.io/germanescobar/pen/VbOaGV" %}

[Abrir en la documentación de Bootstrap](http://getbootstrap.com/css/#buttons)

### Tamaños

Utiliza las clases `btn-lg`, `btn-sm` y `btn-xs` para cambiar el tamaño del botón.

### Mostrar en bloque

Utiliza la clase `btn-block` para que el botón ocupe el 100% del elemento que lo contiene.

### Botones deshabilitados

Agrega la propiedad `disabled` sobre los `<button>` y la clase `.disabled` sobre los `<a>` para que el botón parezca deshabilitado:

```markup
<a href="#" class="btn btn-primary disabled">Primary link</a>
```

## Imágenes

Para hacer las imágenes **responsive** agrega la clase `img-responsive` a `<img>`:

```markup
<img src="..." class="img-responsive" alt="Responsive image">
```

Utiliza la clase `img-rounded` para aplicarle borders redondeados a la imagen:

```markup
<img src="..." alt="..." class="img-rounded">
```

Utiliza la clase `img-circle` para que la imagen aparezca en un círculo:

```markup
<img src="..." alt="..." class="img-circle">
```

Utiliza la clase `img-thumbnail` para agregarle un bordes redondeados y un borde adicional a la imagen:

```markup
<img src="..." alt="..." class="img-thumbnail">
```
