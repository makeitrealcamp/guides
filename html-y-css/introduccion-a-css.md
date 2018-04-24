# Introducción a CSS

**CSS** \(Cascading Style Sheets\) es un lenguaje que se utiliza para definir **el formato \(los estilos\)** de los elementos HTML.

Existen 3 formas para definir los estilos CSS:

* Inline \(en línea\): Utilizando el atributo `style` de los elementos HTML.
* Interno: Utilizando la etiqueta `<style>` dentro de `<head>`.
* Externo: Utilizando un archivo externo con extensión `.css`.

La forma más recomendada es utilizar un archivo externo.

## Inline CSS

Se utiliza para aplicarle estilos a un único elemento HTML:

```markup
<h1 style="color: blue">Este es un título de color azul</h1>
```

**Nota:** esto no se considera una buena práctica porque estás mezclando la estructura del documento con el formato.

## CSS Interno

Se utiliza para definir los estilos de una única página Web. El CSS se define en el `<head>` dentro de la etiqueta `<style>`:

```markup
<!DOCTYPE html>
<html>
  <head>
    <style>
       h1 { color: blue; }
    </style>
  </head>
  <body>
    <h1>Esta es un título de color azul</h1>
  </body>
</html>
```

Para definir el CSS se utilizan **reglas CSS**:

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

Una **regla CSS** está compuesta de un **selector** \(que define a qué elementos se le quieren aplicar esos estilos\), y una o más **propiedades** \(que definen los estilos que se le van a aplicar a los elementos seleccionados\).

Una propiedad CSS está compuesta de un atributo y un valor. Al final se agrega un punto y coma \(`;`\).

## CSS Externo

Es un archivo con extensión `.css` que se utiliza para definir los estilos de múltiples páginas Web.

Para referenciar el archivo CSS desde HTML se utiliza la etiqueta `<link>` en el `<head>` del HTML:

```markup
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Esta es un título de color azul</h1>
  </body>
</html>
```

## Reglas CSS

Cuando utilizas CSS interno o externo los estilos se definen utilizando **reglas CSS**.

Una **regla CSS** está compuesta de un **selector** \(que define a qué elementos se le quieren aplicar esos estilos\), y una o más **propiedades** \(que definen los estilos que se le van a aplicar a los elementos seleccionados\).

Por ejemplo:

```text
h1 {
  color: blue;
  font-size: 24px;
}
```

`h1` es el **selector**. En este caso estamos "seleccionando" todas los elementos `h1` del documento.

Las propiedades se encierran entre llaves `{` y `}`.

Cada propiedad está compuesta de un atributo, dos puntos y un valor. Al final de cada propiedad va un punto y coma \(`;`\).

## Selectores

La forma más fácil de seleccionar elementos es por etiqueta. Sin embargo ¿qué pasa si solo queremos seleccionar ciertos párrafos del documento? Para eso podemos utilizar clases y ids.

### Clases

A las etiquetas HTML les puedes agregar un atributo especial llamado `class` que después puedes usar como selector:

```markup
<p>Párrafo 1</p>
<p class="special">Parrafo 2</p>
```

Si queremos que los elementos que tengan la clase `special` sean de color azul, podemos hacer lo siguiente:

```css
.special {
  color: blue;
}
```

Para seleccionar elementos por clase se utiliza un punto seguido del nombre de la clase. Esto seleccionaría todos los elementos que tengan esa clase.

El atributo `class` en el HTML soporta más de una clase separándolas por espacio. Por ejemplo:

```markup
<p class="clase1 clase2 clase 3">Parrafo 2</p>
```

### Ids

Otra forma de seleccionar elementos es por el atributo `id`. La diferencia entre clases y id's es que los ids no se deben repetir en varios elementos, las clases si se pueden repetir.

```markup
<p>Párrafo 1</p>
<p id="algun-id">Parrafo 2</p>
```

Ahora, si queremos que el elemento que tenga el id `algun-id` sea de color azul, podemos hacer lo siguiente:

```css
#algun-id {
  color: blue;
}
```

**Nota:** En general \(y en lo posible\) se recomienda utilizar clases en vez de ids.

## Propiedades CSS

Dentro de una regla de CSS se pueden definir una o más propiedades CSS. Las propiedades se componen de un atributo, seguido de dos puntos \(`:`\), un espacio y el valor:

```css
color: blue;
```

Veamos algunos de los atributos que más se utilizan:

### color

El atributo **color** define el color del texto. Las dos formas más comunes de definir colores en CSS son:

* El **nombre de un color** \(`red`, `blue`,  `white`, etc.\). [Ver lista de nombres](https://www.w3schools.com/colors/colors_names.asp)
* El **valor hexadecimal** \(p.e. negro es `#000000` y blanco `#ffffff`\).

Utiliza [esta herramienta](https://www.google.com.co/search?q=color+picker&oq=color+picker&aqs=chrome.0.69i59j69i60j69i59j69i60j0l2.3255j0j9&sourceid=chrome&ie=UTF-8) para ver el **valor hexadecimal** de cualquier color.

### font-size

El atributo **font-size** define el tamaño del texto. Las formas más comunes de definir el tamaño son:

* **Pixeles \(px\):** Un pixel es igual a un punto en la pantalla de tu computador. Ejemplos: `12px`, `24px`, `36px`, etc.
* **Ems \(em\):** Es una forma de definir el tamaño de forma relativa al elemento padre. Esta forma está tomando cada vez más fuerza para crear páginas que se adaptan a la pantalla. Ejemplos: `1em`, `0.8em`, `1.2em`.

### font-family

El atributo **font-family** define la fuente que se quiere usar. Se pueden definir varias fuentes separadas por coma. Si la primera fuente no está instalada, se intenta con la segunda y así sucesivamente.

En [este enlace](https://www.w3schools.com/cssref/css_websafe_fonts.asp) puedes encontrar una lista de fuentes más comunes.

### font-weight

El atributo **font-weight** define el peso de una fuente \(su grosor\). Puede ser:

* `normal`: este es el valor por defecto, muestra el texto normal.
* `bold`: muestra el texto en negrilla.

### background-color

El atributo **background-color** define el color de fondo del elemento. Se utilizan las mismas formas de definir el color que describimos en el atributo **color** previamente.

### border

El atributo **border** dibuja un borde alrededor del elemento, recibe tres argumentos:

* El **ancho** en `px` \(pixeles\).
* El **estilo de borde** \(sólido, punteado, doble, etc.\)
* El **color** del borde.

Ejemplos:

```css
p { border: 1px solid grey; }
h1 { border: 5px dotted blue; }
h2 { border: 10px dashed #000; }
```

