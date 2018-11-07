# Flexbox

**Flexbox** es una nueva forma de organizar y distribuir los elementos HTML.

{% youtube %} https://youtube.com/watch?v=cjsvASZWsxs {% endyoutube %}

**Flexbox** incluye un nuevo valor `flex` para la propiedad `display` de CSS y un conjunto de nuevas **propiedades de CSS** como `justify-content`, `align-items` y `flex-direction`, entre otros.

La mayoría de navegadores ya soportan **Flexbox** a excepción de Internet Explorer 8 y 9.

Los conceptos más importantes de **Flexbox** son el **contenedor** y los **ítems**:

#### Contenedor

Es el elemento padre de los elementos que queremos organizar.

#### Ítems

Los hijos directos del **contenedor**. Un **ítem** también puede ser el **contenedor** de otros elementos.

Algunas de las **propiedades de CSS** que introduce **Flexbox** aplican a los **contenedores** y otras a los **ítems**.

## Algunos ejemplos

Antes de describir las **propiedades de CSS** veamos algunos ejemplos para que te des una idea de lo que se puede hacer con **Flexbox**.

Veamos un primer ejemplo. Imagína que queremos mostrar tres elementos dentro de un `div` separados por espacios iguales \(consulta el HTML y CSS haciendo click en la pestaña respectiva\):   

{% embed url="https://codepen.io/germanescobar/pen/opZxBp" %}

Aunque antes existían varios trucos para obtener el mismo resultado, con **Flexbox** ahora tenemos una forma más fácil y estándar de hacerlo.

Veamos otro ejemplo, uno que es particularmente difícil sin **Flexbox**: centrar un elemento vertical y horizontalmente:

{% embed url="https://codepen.io/germanescobar/pen/KZWQxV" %}

## Propiedades para el contenedor

Para utilizar **Flexbox** debes aplicarle `display: flex` al **contendor**. Por ejemplo, si el contenedor tiene clase `container` definiríamos la siguiente regla CSS:

```css
.container {
  display: flex;
}
```

Eso es todo! Por defecto, los **ítems** \(los hijos del **contenedor**\) se van a posicionar de forma horizontal de izquierda a derecha **en una misma línea**, sin importar si son elementos de bloque o en línea:

{% embed url="https://codepen.io/germanescobar/pen/PEpQLr" %}

Para cambiar la distribución de los **ítems** se utilizan las propiedades `flex-direction`, `flex-wrap`, `justify-content` y `align-items` sobre el **contenedor**.

### Dirección

Por defecto los **ítems** se ubican de izquierda a derecha. Sin embargo podemos cambiar la dirección utilizando la propiedad `flex-direction` que puede tener alguno de los siguientes valores:

* `row`: es el valor por defecto, los **ítems** se posicionan de izquierda a derecha.
* `row-reverse`: los **ítems** se posiciónan de derecha a izquierda.
* `column`: los **items** se posicionan verticalmente, de arriba hacia abajo.
* `column-reverse`: los **ítems** se posicionan verticalmente, de abajo hacia arriba.

Por ejemplo, para mostrar los elementos de derecha a izquierda podemos utilizar el valor `row-reverse`:

{% embed url="https://codepen.io/germanescobar/pen/xpqWZz" %}

Puedes editar este ejemplo y cambiar el valor de `flex-direction` para experimentar.

### Wrap

Por defecto, si no hay suficiente espacio en el **contenedor**, los **ítems** se salen del espacio. Sin embargo, utilizando la propiedad `flex-wrap` puedes modificar este comportamiento. Los valores que puede recibir `flex-wrap` son:

* `no-wrap`: es el valor por defecto, los **ítems** se salen del **contenedor** si no hay espacio.
* `wrap`: los **ítems** se posicionan en nuevas filas si no hay espacio.
* `wrap-reverse`: similar a `wrap` pero en vez de agregar filas debajo, se agregan encima.

**Nota:** si cambias la propiedad `flex-direction` a `column` o `column-reverse`, los **ítems** se ubican en nuevas columnas, no filas, cuando utilizas el valor `wrap` o `wrap-reverse`.

Por ejemplo, si queremos que los elementos que no quepan se ubiquen en nuevas filas podemos asignarle el valor `wrap` a `flex-wrap`:

{% embed url="https://codepen.io/germanescobar/pen/rpydLp" %}

### Alineación horizontal

Para alinear los ítems de forma horizontal se utiliza la propiedad `justify-content` sobre el contendedor. Los posibles valores son:

* `flex-start`: es el valor por defecto, los items se alínean a la izquierda del contenedor.
* `flex-end`: los ítems se alínean a la derecha del contenedor.
* `center`: los ítems se alínean en el centro del contenedor.
* `space-between`: los ítems se separan por espacios iguales ocupando todo el contenedor \(los ítems de los extremos se ubican en los extremos del contendor\).
* `space-around`: los ítems se distribuyen uniformemente en el contenedor.

Por ejemplo, el valor `space-around` se ve de la siguiente forma:

{% embed url="https://codepen.io/germanescobar/pen/vpxzJy" %}

**Nota:** si cambias la propiedad `flex-direction` a `column` o `column-reverse`, `justify-content` se utiliza para alinear los ítems de forma vertical \(por eso se utiliza `flex-start` y `flex-end` en vez de `left` y `right`\).

### Alineación vertical

Para alinear los ítems de forma vertical se utiliza la propiedad `align-items` sobre el contenedor. Los posibles valores son:

* `stretch`: el valor por defecto, los ítems se estiran para ocupar todo el espacio vertical.
* `flex-start`: los ítems se alínean en la parte superior del contenedor.
* `flex-end`: los ítems se alínean en la parte inferior del contendor.
* `center`: los ítems se alínean en el medio del contendor.
* `baseline`: se posicionan con respecto a la línea base del texto del contenedor.

Por ejemplo, el valor `flex-end` se ve de la siguiente forma cuando los ítems tienen diferentes tamaños:

{% embed url="https://codepen.io/germanescobar/pen/xpqaXb" %}

**Nota:** si cambias la propiedad `flex-direction` a `column` o `column-reverse`, `align-items` se utiliza para alinear los ítems de forma horizontal \(por eso se utiliza `flex-start` y `flex-end` en vez de `top` y `bottom`\).

## Propiedades para los ítems

Con lo que has visto hasta ahora puedes solucionar la mayoría de distribuciones utilizando **Flexbox**. Incluso las propiedades más comunes son sólo `justify-content` y `align-items`.

Sin embargo, existen otras propiedades que puedes aplicar sobre los **ítems** como `order`, `flex-grow`, `flex-shrink`, `flex-basis`, `flex` y `align-self`:

### Orden

La propiedad `order` te permite cambiar el orden de los **ítems** en un **contenedor**.

### Incrementar el tamaño

La propiedad `flex-grow` te permite incrementar el tamaño de un **item** con respecto a los demás.

### Encoger el tamaño

La propiedad `flex-shrink` te permite definir cuánto se va a encoger un **ítem** con respecto a los demás cuando el espacio es reducido.

### Definir el ancho

La propiedad `flex-basis` te permite definir el ancho de un **ítem**.

### Atajo

La propiedad `flex` es un atajo para definir las propiedades `flex-grow`, `flex-shrink` y `flex-basis` de un **ítem**.

### Alineación

La propiedad `self-align` permite sobrescribir el valor de la pripiedad `align-items` del **contenedor**.
