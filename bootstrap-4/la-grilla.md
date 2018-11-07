# La grilla

La grilla nos permite organizar nuestro contenido en la pantalla más facilmente utilizando una combinación de **contenedores**, **filas** y **secciones** que pueden ocupar de **1 a 12 columnas**.

El siguiente ejemplo muestra un contenedor con **2 filas**. La primera fila tiene **12 secciones** \(cada una de **1 columna**\) y la segunda fila tiene **2 secciones** \(cada una de **6 columnas**\).

{% embed url="https://codepen.io/germanescobar/pen/YEMaJO" %}

Fíjate que entre las **secciones** hay un espacio, llamado **gutter**. Por defecto ese espacio \(padding\) es de `15px` a cada lado. Entre una fila y otra no existe ningún espacio.

## Contenedores

Las **filas** siempre deben estar envueltas en un **contenedor**.

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
* `576px` en teléfonos móviles modo portrait \(`sm`\).
* `768px` en tablets \(`md`\).
* `992px` en pantallas de escritorio \(`lg`\).
* `1200px` en pantallas más anchas \(`xl`\).

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

Al igual que con **Bootstrap 3** cada fila se puede dividir en **secciones**. Sin embargo, **Bootstrap 4** tiene más opciones que **Bootstrap 3**.

## Secciones de igual tamaño

Para crear secciones de igual tamaño en todos los dispositivos utiliza la clase `col`. Por ejemplo, el siguiente código crearía **4 secciones** de igual tamaño:

```markup
<div class="row">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```

Para controlar en qué dispositivos las secciones se muestran de forma vertical \(una encima de la otra\) u horizontal \(una al lado de la otra\) puedes utilizar las abreviaciones `sm`, `md`, `lg` y `xl`. Por ejemplo, si queremos que que las columnas se vean vertical en móviles y horizontal en los demás dispositivos podemos hacer lo siguiente:

```markup
<div class="row">
  <div class="col-sm"></div>
  <div class="col-sm"></div>
  <div class="col-sm"></div>
  <div class="col-sm"></div>
</div>
```

Aunque es posible mezclar las abreviaciones en una misma fila, la recomendación es que utilices la misma abreviación en todas las secciones de una misma fila.

Fíjate que no es necesario agregar `col-md`, `col-lg` y `col-xl`. Por defecto, las clases siempre van a aplicar a dispositivos de mayor tamaño.

## Secciones de diferente tamaño

También puedes definir el número de columnas que va a ocupar cada sección:

```markup
<div class="row">
  <div class="col-8"></div>
  <div class="col-4"></div>
</div>
```

Al igual que con las secciones de igual tamaño, puedes utilizar las abreviaciones `sm`, `md`, `lg` y `xl` para controlar cómo se van a ver las columnas en diferentes dispositivos. Por ejemplo, para que se vean vertical en dispositivos `xs` y `sm`, y horizontal en `md`, `lg` y `xl` podríamos hacer lo siguiente:

```markup
<div class="row">
  <div class="col-md-8"></div>
  <div class="col-md-4"></div>
</div>
```

Esta última forma es igual a como se hace en **Bootstrap 3**.

Quizá la abreviación más común es `md` para que las **secciones** se vean de forma vertical \(una encima de otra\) en teléfonos móviles \(`xs` y `sm`\) y en los demás dispositivos de forma horizontal \(una al lado de la otra\), pero eso depende de cada caso.

**Nota:** Recuerda que si las secciones suman más de **12 columnas**, las que no quepan se ubican debajo.

Al igual que en **Bootstrap 3** puedes organizar las secciones en diferentes tamaños para cada uno de los dispositivos. Por ejemplo, el siguiente código dividiría las secciones en 4 y 8 columnas para pantallas medianas, y en 6 y 6 columnas para pantallas `lg` y `xl` \(`992px` o superior\). En `xs` y `sm` se verían de forma vertical.

```markup
<div class="row">
  <div class="col-md-8 col-lg-6"></div>
  <div class="col-md-4 col-lg-6"></div>
</div>
```

## Alineación horizontal

Si las secciones no ocupan las **12 columnas** las puedes alinear de varias formas \(gracias a las diferentes alineaciones que nos ofrece Flexbox\). Las siguientes clases las puedes agregar a las filas \(`row`\):

* `justify-content-center`: centra las secciones.
* `justify-content-start`: alínea las secciones a la izquierda \(esto es por defecto\).
* `justify-content-end`: alínea las secciones a la derecha.
* `justify-content-around`: separa las secciones dejando el mismo espacio entre ellas.
* `justify-content-between`: sparar las secciones dejando el mayor espacio entre ellas.

El siguiente ejemplo muestra diferentes alineaciones con **2 secciones** en cada fila:

{% embed url="https://codepen.io/germanescobar/pen/WXWKvP" %}

## Alineación vertical

Puedes alinear las secciones de diferentes formas \(de nuevo, gracias a Flexbox\). Las siguientes clases las puedes agregar a las filas \(`row`\) o a las secciones:

* `align-items-center`: las secciones se ubican en el medio.
* `align-items-start`: las secciones se ubican en la parte superior.
* `align-items-end`: las secciones se ubican en la parte inferior.

## Removiendo los gutters

Los espacios entre columnas se pueden remover agregando la clase `no-gutters` a las filas \(`row`\).

## Anidando filas

Dentro de una **sección** puedes anidar otra **fila** que nuevamente se va a dividir en **12 columnas** como se muestra a continuación:

{% embed url="https://codepen.io/germanescobar/pen/MORBJw" %}

El siguiente ejemplo mostraría una **fila** que se divide en dos **secciones**, cada una de **6 columnas**. Dentro de la primera **sección** estamos definiendo otra **fila** con una **sección** de **12 columnas**:

```markup
<div class="row">
  <div class="col">
    <div class="row">
      <div class="col"></div>
    </div>
  </div>
  <div class="col"></div>
</div>
```

Esto nos permite distribuir los elementos de la página en configuraciones bastante complejas.
