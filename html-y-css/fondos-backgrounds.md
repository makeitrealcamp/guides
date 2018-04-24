# Fondos \(backgrounds\)

Para definir el color, la imagen, la posición, etc. de fondo de un elemento utiliza las siguientes propiedades CSS:

* `background-color`: define el color de fondo.
* `background-image`: define la imagen de fondo.
* `background-position`: define la ubicación de la imagen de fondo.
* `background-repeat`: define si se repite la imagen de fondo horizontal y verticalmente.
* `background-attachment`: define si la imagen se mantiene fija o se desplaza con la página.

### `background-color`

Esta propiedad define el color de fondo del elemento. Por ejemplo, para que todos los párrafos tengan un color azul utiliza la siguiente regla:

```css
p {
  background-color: blue;
}
```

También puedes usar un valor hexadecimal \(p.e. `#0000FF`\) o RGB \(p.e. `rgb(255, 0, 0)`\).

### `background-image`

Define la imagen de fondo. Por ejemplo:

```css
p {
  background-image: url('mi-imagen.jpg')
}
```

La ruta de la imagen puede ser relativa al documento o un URL a una imagen en Internet.

### `background-repeat`

Por defecto, cuando utilizas una imagen de fondo, la imagen se repite tanto horizontal como verticalmente \(cuando no ocupa el ancho o alto del elemento\).

Para cambiar este comportamiento utiliza la propiedad `background-repeat` que recibe las opciones:

* `no-repeat`: no repetir horizontal ni verticalmente.
* `repeat-x`: repetir solo horizontalmente.
* `repeat-y`: repetir solo verticalmente.

### `background-position`

Nos permite controlar la posición y el tamaño de la imagen cuando `background-repeat` es `no-repeat`.

`background-position` recibe dos valores: la posición vertical y horizontal.

Los valores de `background-position` pueden ser una posición en palabras \(p.e. top left\), un porcentaje o una posición en pixeles u otra unidad.

Por ejemplo, la siguiente regla centra la imagen en el componente:

```css
p {
  background-image: url('imagen.jpg');
  background-repeat: no-repeat;
  background-position: center center;
}
```

### `background-size`

`background-size` nos permite cambiar el tamaño de la imagen de fondo.

`background-size` puede recibir dos valores: el ancho y el alto en porcentaje, pixeles o alguna otra unidad. Por ejemplo:

```css
p {
  background-image: url('imagen.jpg');
  background-repeat: no-repeat;
  background-size: 60px 40px;
}
```

`background-size` también puede recibir dos valores especiales:

* `cover`: la imagen se estira hasta que ocupe todo el área del elemento.
* `contain`: la imagen se estira hasta que el alto o el ancho ocupen el alto o ancho del contenedor.

### `background-attachment`

Por defecto, cuando utilizas una imagen de fondo, la imagen se desplaza con la página.

`background-attachment` nos permite cambiar ese comportamiento y dejar la imagen fija cuando la página se desplace creando un efecto interesante:

```css
  background-image: url('imagen.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
```

## El atajo `background`

Puedes especificar varias propiedades de fondo en una línea con `background`. Por ejemplo:

```css
background: #00ff00 url("smiley.gif") no-repeat fixed center;
```

El orden es: `background-color`, `background-image`, `background-position`/`background-size`, `background-repeat` y `background-attachment`.

No importa si omites algunas de las propiedades. Por ejemplo, las siguientes declaraciones son válidas:

```css
background: red;
background: url('mi-imagen');
background: red url('mi-imagen');
background: red url('mi-imagen') fixed center;
```

