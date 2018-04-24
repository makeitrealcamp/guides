# Más elementos de HTML

En esta sección vamos a ver otros elementos de HTML.

## Importancia y énfasis al texto

La etiqueta `<strong>` se utiliza para darle importancia al texto y la etiqueta `<em>` se utiliza hacer énfasis en el texto.

Generalmente `<strong>` se muestra en **negrilla** y `<em>` en _itálica_, pero este comportamiento se puede modificar a través de CSS.

```markup
<p>Esto es <strong>importante</strong> y quiero <em>hacer énfasis</em> en esto.</p>
```

**Nota:** También existen las etiquetas `<b>` e `<i>` que muestran el texto en **negrilla** e _itálica_ respectivamente. Sin embargo, no se considera buena práctica usarlas porque es mejor aplicar el formato por CSS.

## Saltos de línea y línea horizontal

La etiqueta `<br>` se utiliza para forzar un salto de línea \(lo equivalente a oprimir la tecla `Enter` cuando estás escribiendo un documento\)

```markup
<p>Hola<br>Amigos</p>
```

La etiqueta `<br>` no necesita una **etiqueta de cierre**.

La etiqueta `<hr>` muestra una línea horizonal en el documento.

## Listas

Puedes crear listas ordenadas y no ordenadas.

Una **lista ordenada** está enumerada mientras que una **lista no ordenada** utiliza viñetas.

Un ejemplo de **lista ordenada** es la siguiente:

1. Item 1
2. Item 2
3. Item 3

Un ejemplo de **lista no ordenada** es la siguiente:

* Item 1
* Item 2
* Item 3

Una **lista ordenada** se crea con la etiqueta `<ol>` y los items con la etiqueta `<li>`:

```markup
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

Una **lista no ordenada** se crea con la etiqueta `<ul>` y los items con la etiqueta `<li>`:

```markup
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

**Nota:** Por ningún motivo utilices la etiqueta `<li>` por fuera de un `<ul>` o `<ol>`.

## Etiquetas invisibles

Existen dos etiquetas que no son visibles en el documento pero se utilizan para agrupar otros elementos y aplicarles estilos: `<div>` y `<span>`.

Veamos un ejemplo de `<div>` en donde estamos agrupando un título `<h1>`, una imagen `<img>` y un párrafo `<p>`:

```markup
<div class="main-section">
  <h1>Título</h1>
  <img src="imagen.jpg" alt="Imagen">
  <p></p>
</div>
```

`<span>` se utiliza para aplicarle estilos a un texto \(generalmente dentro de un parrafo\):

```markup
<p>Hola, tu saldo es <span class="saldo">$12000</span></p>
```

## Elementos de bloque y en línea

Existen elementos que, independiente de su contenido, ocupan todo el ancho de la página como `p`, `ol`, `ul`, `li` y `div`. A estos elementos se les conoce como **elementos de bloque**.

Otros elementos como `span`, `strong` y `em` ocupan solo el espacio que ocupa su contenido interno. A estos elementos se les conoce como **elementos en línea**.

