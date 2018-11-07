# La grilla

La grilla nos permite organizar nuestro contenido en la pantalla más facilmente utilizando una combinación de **contenedores**, **filas** y **secciones** que pueden ocupar de **1 a 12 columnas**.

El siguiente ejemplo muestra un contenedor con **2 filas**. La primera fila tiene **12 secciones** \(cada una de **1 columna**\) y la segunda fila tiene **2 secciones** \(cada una de **6 columnas**\).

{% embed url="https://codepen.io/germanescobar/pen/POLdbZ" %}

Fíjate que entre las **secciones** hay un espacio, llamado gutter. Por defecto ese espacio \(padding\) es de `15px` a cada lado. Entre una fila y otra no existe ningún espacio.

## Contenedores

Hasta ahora no lo hemos mostrado, pero las **filas** siempre deben estar envueltas en un **contenedor**.

Un **contenedor** puede contener muchas **filas**.

Existen dos tipos de contenedores: de **ancho fijo** y de **ancho variable**.

### Contenedores de ancho fijo

Los contenedores de **ancho fijo** se crean utilizando una etiqueta `<div>` con clase `container`:

```markup
<div class="container">

</div>
```

Los contenedores de **ancho fijo** ocupan:

* El 100% de la pantalla en teléfonos móviles \(`xs`\).
* `768px` en tabletas \(`sm`\).
* `992px` en pantallas de escritorio \(`md`\).
* `1200px` en pantallas grandes \(`lg`\).

### Contenedores de ancho variable

Los contenedores de **ancho variable** \(o fluidos\) ocupan siempre el 100% de la página y se crean utilizando una etiqueta `<div>` con clase `container-fluid`:

```markup
<div class="container-fluid">

</div>
```

## Filas

Para definir una **fila** se utiliza una etiqueta `<div>` con clase `row`:

```markup
<div class="row">
  <!-- acá van las secciones -->
</div>
```

Cada **fila** se puede dividir en **secciones** que pueden ocupar de **1 hasta 12 columnas**.

Para definir una **sección** se utiliza un `<div>` con una clase que comienza con alguno de los prefijos `col-xs-`, `col-sm-`, `col-md-` o `col-lg-` seguido del número de columnas que uno quiere que ocupe esa **sección**.

**Nota:** más adelante entenderás qué significan los prefijos, por ahora siempre vamos a usar `col-sm-`.

Por ejemplo, la siguiente **fila** está dividida en dos **secciones**, cada una de **6 columnas**:

```markup
<div class="row">
  <div class="col-sm-6"></div>
  <div class="col-sm-6"></div>
</div>
```

El siguiente ejemplo tiene una fila dividida en **3 secciones**, cada una de **4 columnas**:

```markup
<div class="row">
  <div class="col-sm-4"></div>
  <div class="col-sm-4"></div>
  <div class="col-sm-4"></div>
</div>
```

## Anidando filas

Dentro de una **sección** puedes anidar otra **fila** que nuevamente se va a dividir en **12 columnas** como se muestra a continuación:

{% embed url="https://codepen.io/germanescobar/pen/BmbObZ" %}

El siguiente ejemplo tiene una **fila** que se divide en dos **secciones**, cada una de **6 columnas**. Dentro de la primera **sección** estamos definiendo otra **fila** con una **sección** de **12 columnas**:

```markup
<div class="row">
  <div class="col-sm-6">
    <div class="row">
      <div class="col-sm-12"></div>
    </div>
  </div>
  <div class="col-sm-6"></div>
</div>
```

Esto nos permite distribuir los elementos de la página en configuraciones bastante complejas.

## Diferentes tipos de pantalla

En **Bootstrap**, `xs` \(extra small\) se refiere a teléfonos móviles \(menos de `768px`\).

`sm` \(small\) se refiere a tabletas \(entre `768px` y `992px`\).

`md` \(medium\) se refiere a pantallas de escritorio \(entre `992px` y `1200px`\).

`lg` \(large\) se refiere a pantallas de más de `1200px`.

## Los prefijos de las secciones

Los prefijos `col-xs-`, `col-sm-`, `col-md-` y `col-lg-` determinan cuántas columnas ocupa la sección en cada dispositivo.

Por ejemplo, si queremos que en teléfonos móviles \(`xs`\) y tabletas \(`sm`\) una sección ocupe **12 columnas** y en escritorio \(`md`\) y pantallas más grandes \(`lg`\) ocupe **6 columnas** podemos utilizar las siguientes clases:

```markup
<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6"></div>
```

Sin embargo, en este ejemplo podemos omitir la última clase \(`col-lg-6`\) porque las clases siempre aplican hacia arriba, entonces `col-md-6` va a aplicar también a `lg`.

También podemos omitir `col-xs-12` y `col-sm-12` porque ese es el valor por defecto. Por lo tanto, quedaría así:

```markup
<div class="col-md-6"></div>
```

Quizá el prefijo más común es `col-sm-` para que en teléfonos móviles las **secciones** se vean de forma vertical \(una encima de otra\) y en los demás dispositivos de forma horizontal \(una al lado de la otra **siempre y cuando no superen las 12 columnas**\), pero eso depende de cada caso.

No se recomienda mezclar prefijos en una misma fila. Por ejemplo, si quieres dividir la fila en 3 secciones de diferentes tamaños asegúrate que siempre utilicen los mismos prefijos. Por ejemplo:

```markup
<div class="row">
  <div class="col-sm-3"></div>
  <div class="col-sm-4"></div>
  <div class="col-sm-5"></div>
</div>
```

En este ejemplo las secciones se van a ver de forma vertical en teléfonos móviles y horizontal \(ocupando 3, 4 y 5 columnas respectivamente\) en los demás dispositivos.

## Filas y secciones

En una **fila** la suma de las **columnas** que ocupan las **secciones** no necesariamente debe ser 12.

Si las secciones suman menos de 12, las columnas de la derecha quedan vacías. Por ejemplo, el siguiente código solo ocuparía **2 columnas**, las 10 restantes quedarían vacías.

```markup
<div class="row">
  <div class="col-sm-2"></div>
</div>
```

Si la suma de las secciones ocupa más de 12, las secciones que no quepan aparecen debajo. Por ejemplo, en el siguiente código la última sección aparecería debajo:

```markup
<div class="row">
  <div class="col-sm-6"></div>
  <div class="col-sm-6"></div>
  <div class="col-sm-6"></div>
</div>
```

Si quieres mover una sección a la derecha puedes utilizar `offsets`. Por ejemplo, para mover una sección 3 columnas a la derecha utilizarías `col-sm-offset-3` \(recuerda que también puedes usar `xs`, `md` y `lg`\):

```markup
<div class="row">
  <div class="col-sm-6 col-sm-offset-3"></div>
</div>
```

## Ocultando secciones y elementos

Puedes ocultar secciones y elementos de la página para ciertos dispositivos utilizando las clases `hidden-xs`, `hidden-sm`, `hidden-md` y `hidden-lg`.

Por ejemplo, el siguiente div no va a estar visible en `xs` y `sm`:

```markup
<div class="hidden-xs hidden-sm">Solo es visible en md y lg</div>
```
