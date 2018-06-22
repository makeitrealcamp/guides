# Media Queries

{% youtube %} https://youtube.com/watch?v=kwr-TnUdUkc {% endyoutube %}

A través de **media queries** podemos ajustar nuestra página a diferentes dispositivos como tabletas, teléfonos inteligentes y televisores de gran tamaño. A esta técnica se le conoce como **responsive design**.

Con **media queries** podemos aplicar diferentes estilos de acuerdo a alguna característica de la pantalla \(p.e. la resolución, el ancho o alto de la ventana del navegador, el tamaño del dispositivo, etc\).

Generalmente se utiliza el ancho del navegador en pixeles \(`px`\) y existen algunos valores que nos pueden ayudar a determinar el tipo de dispositivo:

* Si el ancho de la ventana es menor a `768px` corresponde a teléfonos inteligentes.
* Si es entre `768px` y `992px` corresponde a tabletas.
* Si es entre `992px` y `1200px` corresponde a computadores de escritorio.
* Si es mayor a `1200px` corresponde a pantallas grandes.

A los puntos en los que cambia el contenido se les conoce como **puntos de quiebre \(breakpoints\)**.

## Nuestro primer media query

Para definir un **media query** utilizamos `@media` seguido de una expresión que define para qué dispositivos van a aplicar los estilos que estén dentro de ese **media query**.

Por ejemplo, el siguiente **media query** va a aplicar cuando el ancho del navegador supere los `992px`:

```css
@media (min-width: 992px) {
  /* acá van las reglas que aplican cuando el ancho es de más de 992px */
}
```

Por ejemplo, si queremos que el fondo de nuestro documento sea amarillo en anchos menores a `992px` y rojo en anchos iguales o mayores podemos hacer lo siguiente:

```css
/* por defecto va a ser amarillo  */
body {
  background-color: yellow;
}

@media (min-width: 992px) {
  // esto solo aplica si el ancho es de más de 992px
  body {
    background-color: red;
  }
}
```

Si el ancho es menor a `992px` va a aplicar la regla que está por fuera del **media query**. Es como si el **media query** no existiera.

Cuando el ancho de la ventana es de `992px` o más, la regla que está en el **media query** va a sobrescribir la que está definida por fuera del **media query**.

## Mobile first

En **mobile first** las reglas CSS que están por fuera de **media queries** están dirigidas a teléfonos inteligentes y se utilizan **media queries** para ajustar el contenido a pantallas más anchas.

Veamos un ejemplo. Supongamos que queremos que en teléfonos inteligentes el tamaño de nuestra fuente sea de `14px`, en tabletas de `15px`, en computadores de escritorio `16px` y en pantallas más grandes de `17px`:

```css
// mobile first
body {
  font-size: 14px;
}

// tabletas
@media (min-width: 768px) {
  body {
    font-size: 15px;
  }
}

// escritorio
@media (min-width: 992px) {
  body {
    font-size: 16px;
  }
}

// pantallas grandes
@media (min-width: 1200px) {
  body {
    font-size: 17px;
  }
}
```
