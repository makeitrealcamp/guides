# Elementos básicos de HTML

**Bootstrap 4** utiliza una librería llamada [Reboot](http://getbootstrap.com/docs/4.0/content/reboot/) que aplica estilos a los elementos básicos de HTML como encabezados, párrafos, formularios, tablas, etc. Con sólo incluir **Bootstrap** en tu página vas a ver cambios en la tipografía y otros elementos.

## Breakpoints

**Bootstrap** define los siguientes breakpoints que te recomendamos usar en tu aplicación.

```css
/* Bootstrap es mobile first */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { }
```

También vas a encontrar las abreviaciones `xs`, `sm`, `md`, `lg` y `xl` en varias clases de Bootstrap para controlar la forma en que se organizan y se muestran los elementos en diferentes tipos de pantallas.

Por ejemplo, `text-center` se utiliza para centrar texto en todos los tipos de pantalla, mientras que `text-md-center` aplicaría a pantallas de `768px` o más.

**Nota:** Los breakpoints en esta versión de Bootstrap cambiaron. En **Boostrap 3** `sm` eran tabletas \(`768px` o más\), `md` eran pantallas de escritorio \(`992px` o más\) y `lg` eran pantallas de `1200px` o más.

## Tipografía

Por defecto **Bootstrap 4** utiliza la [fuente nativa](https://getbootstrap.com/docs/4.0/content/reboot/#native-font-stack) de cada dispositivo.

Además de los encabezados `h1` a `h6`, **Boostrap** ahora incluye las clases `display-1`, `display-2`, `display-3` y `display-4` para crear encabezados que sobresalen sobre los normales:

{% embed url="https://codepen.io/germanescobar/pen/dZLdNG" %}

Utiliza la clase `lead` en los párrafos que quieres que sobresalgan y la clase `blockquote` en las etiquetas `<blockquote>` para citar:

{% embed url="https://codepen.io/germanescobar/pen/EbJQmq" %}

### Tamaño

Para controlar el tamaño de la fuente te recomendamos utilizar **rem** en vez de **pixeles**. De esa forma puedes cambiar el tamaño de la fuente en todo tu sitio cambiando únicamente el tamaño del elemento raíz `html`.

Utiliza media queries para aumentar el tamaño de la fuente en dispositivos de mayor tamaño. Por ejemplo:

```css
html {
  /* toma el valor por defecto del navegador, sin embargo también puedes usar px */
  font-size: 1rem;
}

@media (min-width: 768px) {
  html { font-size: 1.2rem; }
}

@media (min-width: 992px) {
  html { font-size: 1.4rem; }
}

@media (min-width: 1200px) {
  html { font-size: 1.6rem; }
}
```

### Utilidades

Utiliza las clases `text-left`, `text-center`, `text-right` y `text-justify` en párrafos para alinearlos a la izquierda, centro, derecha y justificados respectivamente.

También existen `text-sm-left`, `text-md-right`, etc. para controlar la alineación en diferentes dispositivos.

Para ver todas las opciones de tipografía te recomendamos ir a la [documentación en Bootstrap](https://getbootstrap.com/docs/4.0/content/typography/).

## Imágenes

Para crear imágenes responsive \(que se adapten al tamaño del contenedor\) utiliza la clase `img-fluid`.

Para aplicar bordes redondeados utiliza las clases `rounded` \(todos los bordes\), `rounded-top`, `rounded-right`, `rounded-bottom`, `rounded-left`, `rounded-circle` \(para crear un círculo\) y `rounded-0` \(para quitar los bordes redondeados\).

[Ir a la documentación de Bootstrap](https://getbootstrap.com/docs/4.0/content/images/)

## Tablas

Para aplicarle los estilos de **Bootstrap** a las tablas debes agregar la clase `table` \(esto es necesario para evitar conflictos con otros componentes que utilicen tablas\):

```markup
<table class="table">
  ...
</table>
```

Veamos un ejemplo que puedes editar para probar diferentes configuraciones:

{% embed url="https://codepen.io/germanescobar/pen/XzQErm" %}

### Encabezados

Utiliza las clases `thead-light` y `thead-dark` sobre la etiqueta `<thead>` para cambiar el color de fondo del encabezado.

### Tablas con bordes

Agrega la clase `table-bordered` para agregar bordes a la tabla:

```markup
<table class="table table-bordered">
  ...
</table>
```

### Tablas con bandas

Agrega la clase `table-striped` para intercalar el fondo de las filas:

```markup
<table class="table table-striped">
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

Puedes utilizar las clases `table-active`, `table-primary`, `table-secondary`, `table-success`, `table-info`, `table-warning` y `table-danger`, `table-dark` y `table-light` sobre los `<tr>`, `<th>` o `<td>` para cambiar el color de las filas o celdas:

```markup
<!-- En filas -->
<tr class="table-active">...</tr>
<tr class="table-success">...</tr>
<tr class="table-warning">...</tr>
<tr class="table-danger">...</tr>
<tr class="table-info">...</tr>

<!-- En celdas (`td` or `th`) -->
<tr>
  <td class="table-active">...</td>
  <td class="table-success">...</td>
  <td class="table-warning">...</td>
  <td class="table-danger">...</td>
  <td class="table-info">...</td>
</tr>
```

### Tablas responsive

Agrega la clase `table-responsive` para hacer la tabla responsive \(con scroll horizontal\).

También puedes limitar a qué dispositivos aplica el responsive utilizando `table-responsive-sm`, `table-responsive-md`, etc. Desde ese punto en adelante, la tabla se va a comportar de forma normal.
