# Posicionamiento

La propiedad CSS `position` define el tipo de posicionamiento para el elemento. Los posibles valores son:

* `static`: el valor por defecto.
* `relative`: relativo a su ubicación normal.
* `fixed`: fijo en la ventana del navegador.
* `absolute`: relativa el ancestro más cercano con posición `relative` o a la ventana del navegador.

Los valores `relative`, `fixed` y `absolute` se utilizan generalmente en conjunto con las propiedades `top`, `left`, `bottom` y `right`.

## `position: relative`

Nos permite mover el elemento a una ubicación **relativa** a su posición original utilizando las propiedades: `left`, `top`, `right`, `bottom`.

```css
p {
  position: relative:
  top: 20px;
  left: 20px;
}
```

En lo posible se recomienda mejor utilizar `margin`.

`position: relative` se utiliza más para posicionar elementos de forma absoluta dentro del elemento.

## `position: absolute`

Nos permite ubicar un elemento a una ubicación **relativa** al ancestro más cercano que esté posicionado con `position: relative`, o a la ventana del navegador en su defecto.

Se utilizan las propiedades `top`, `left`, `right` y `bottom` para ubicar el elemento.

```css
p {
  position: absolute:
  left: 100px;
  top: 100px;
}
```

## `position: fixed`

Esta propiedad nos permite ubicar un elemento de manera **fija** relativamente a la ventana del navegador. No importa si se utilizan las barras de desplazamiento, el elemento va a permanecer fijo en su posición.

```css
div.fixed {
  position: fixed;
  bottom: 0;
  right: 20px;
}
```

