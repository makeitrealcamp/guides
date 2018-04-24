# Clases utilitarias

Bootstrap 4 incluye clases CSS que puedes aplicar a tus elementos para controlar diferentes aspectos como bordes, display, espacios, flexbox, alineación y visibilidad, entre otros.

## Bordes

Utiliza las clases `border`, `border-top`, `border-right`, `border-bottom` y `border-left` para **agregar** bordes a tus elementos.

Utiliza las clases `border-0`, `border-top-0`, `border-right-0`, `border-bottom-0` y `border-left-0` para **remover** bordes de tus elementos.

Para mostrar una imagen dentro de un círculo utiliza la clase `rounded-circle`. Asegúrate que la imagen sea cuadrada.

Para más información consulta [este enlace](https://getbootstrap.com/docs/4.0/utilities/borders/).

## Espacios

Puedes utilizar clases para controlar el `margin` y `padding` de tus elementos de forma responsive.

Las clases que controlan el `margin` empiezan con `m` y las que controlan el `padding` comienzan con `p`.

Por defecto existen 6 tamaños para los espacios: de 0 a 5 con los siguientes valores:

* `0` - eliminar el `margin` o el `padding`.
* `1` - `0.25rem`
* `2` - `0.5rem`
* `3` - `1rem`
* `4` - `1.5rem`
* `5` - `3rem`

Por ejemplo, para agregar un margen de `0.5rem` utilizarías la clase `m-2`. Para un `padding` de `1rem` utilizaríamos la clase `p-3`.

También puedes aplicar el `margin` o `padding` a diferentes lados agregando las siguientes letras a `m` o `p`:

* `t` - aplicar al `margin` o `padding` superior \(p.e. `mt-3` o `pt-1`\).
* `b` - aplicar al `margin` o `padding` inferior \(p.e. `mb-1` o `pb-5`\).
* `l` - `margin` o `padding` izquierdo.
* `r` - `margin` o `padding` derecho.
* `x` - `margin` o `padding` derecho e izquierdo.
* `y` - `margin` o `padding` superior e inferior.

También puedes agregar `sm`, `md`, `lg` y `xl` para controlar en qué tipos de pantalla se aplica el `margin` o el `padding`. Por ejemplo: `mt-md-5` sólo agregaría el margen superior de `3rem` para tablets o superior.

Para más información consulta [este enlace](https://getbootstrap.com/docs/4.0/utilities/spacing/).

## Display

Puedes controlar el `display` de un elemento utilizando las clases `d-none`, `d-inline`, `d-block` y `d-flex` \(existen otros pero estos son los más comunes\).

También puedes controlar en qué tipos de pantalla se aplica el display agregando `sm`, `md`, `lg` y `xl`. Por ejemplo `d-md-none` aplicaría `display: none` a tabletas o pantallas más grandes \(`lg` y `xl`\).

Para más información consulta [este enlace](https://getbootstrap.com/docs/4.0/utilities/display/).

## Colores

Existen clases para cambiar el color del texto y del fondo utilizando los colores contextuales de Bootstrap.

Para cambiar el color de texto utiliza las clases `text-primary`, `text-secondary`, `text-success`, `text-danger`, `text-warning`, `text-info`, `text-light`, `text-dark`, `text-muted`, `text-white`.

Para cambiar el color de fondo utiliza las clases `bg-primary`, `bg-secondary`, `bg-success`, `bg-danger`, `bg-warning`, `bg-info`, `bg-light`, `bg-dark`, `bg-white`.

Para más información consulta [este enlace](https://getbootstrap.com/docs/4.0/utilities/colors/).

## Texto

Para alinear el texto utiliza las clases `text-left`, `text-center`, `text-right` y `text-justify`. También puedes controlar en qué tipos de pantalla se aplica la alineación. Por ejemplo, `text-md-center` va a centrar el texto a tabletas o pantallas más grandes \(`lg` y `xl`\)

Utiliza las clases `text-lowercase`, `text-uppercase` y `text-capitalize` para transformar el texto en minúscula, mayúscula y capitalizado, respectivamente.

Por último, existen las clases `font-weight-bold`, `font-weight-normal`, `font-weight-light` y `font-italic`.

Para más información consulta [este enlace](https://getbootstrap.com/docs/4.0/utilities/text/).

## Flexbox

Para aplicar Flexbox a un elemento utiliza la clase `d-flex`.

Para controlar la dirección del texto existen las clases `flex-row`, `flex-row-reverse`, `flex-column` y `flex-column-reverse`.

Para controlar la propiedad `justify-content` existen las clases `justify-content-start`, `justify-content-end`, `justify-content-center`, `justify-content-between` y `justify-content-around`.

Para controlar la propiedad `align-items` existen las clases `align-items-start`, `align-items-end`, `align-items-center`, `align-items-baseline` y `align-items-stretch`.

Para alinear un ítem existen las clases `align-self-start`, `align-self-end`, `align-self-center`, `align-self-baseline` y `align-self-stretch`.

Todas estas clases ofrecen variaciones que permiten controlar en qué tipo de pantallas se aplica. Por ejemplo `align-items-sm-start` o `justify-content-lg-end`.

Flexbox funciona muy bien con márgenes automáticas para organizar los elementos. Utiliza las clases `ml-auto` y `mr-auto` para controlar las márgenes automáticas \(esto lo usa el componente Navbar para mostrar items a la izquierda y derecha\).

Como te puedes dar cuenta Bootstrap incluye muchas clases que nos permiten trabajar con Flexbox. Además, cada una de estas opciones también permite controlar en qué tipos de pantalla se aplican \(`sm`, `md`, `lg` y `xl`\).

La documentación completa la encuentras en [este enlace](https://getbootstrap.com/docs/4.0/utilities/flex/).

