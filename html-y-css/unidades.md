# Unidades en CSS

Existe una gran variedad de unidades que podemos usar en CSS para expresar medidas (fuentes, márgenes, ancho y alto de elementos, etc.). En esta guía vamos a ver las más importantes y cuáles usar para responsive design.

Existen dos tipos de unidades: relativas y absolutas.

## Medidas relativas

Las medidas relativas son las más flexibles porque se adaptan a la pantalla y son las que más se deberían usar en el CSS. Las más importantes son `rem`, `em`, `vw`, `vh` y `%`. Veamos cada una en detalle.

### rem (root em)

Nos permite definir una medida de forma relativa al tamaño de la fuente raíz (la del elemento `html`). Por ejemplo, si el tamaño de la fuente raíz es `16px` (el valor por defecto de la mayoría de navegadores) estas serían algunas conversiones:

* `1rem = 16px`
* `1.5rem = 24px`
* `0.5rem = 8px`

Si el usuario cambia el tamaño de la fuente en su navegador, las fuentes van a cambiar proporcionalmente. Por ejemplo, si se cambia el tamaño de la fuente raíz a `20px` estas serían algunas conversiones:

* `1rem = 20px`
* `1.5rem = 30px`
* `0.5rem = 10px`

`rem` se utiliza en tamaños de fuentes, márgenes, paddings, entre otros.

### em

Similar al **rem** pero, en vez de ser relativo a la fuente raíz, es relativo al tamaño de la fuente del elemento padre. Esto, en ocasiones, genera problemas porque los tamaños se vuelven impredecibles a medida que cambiamos el tamaño de la fuente de diferentes elementos.

Por ejemplo, en el siguiente código, asumiendo que el tamaño de la fuente raíz es de `10px`, ¿cuál va a ser el tamaño de la fuente del `div` interno que tiene un tamaño de fuente de `1.5em`?

```html
<div style="font-size: 2em">
  <div style="font-size: 1.5em">Esto es una prueba</div>
</div>
```

Si utilizáramos `rem` la respuesta sería `15px` (`10px x 1.5`). Sin embargo, con `em` tenemos que tener en cuenta al padre que tiene una fuente de `10px * 2em = 20px`, así que la respuesta sería `30px`.

`em` es útil cuando queremos mantener esa relación de tamaño con la fuente del elemento padre, por ejemplo, para definir el `padding` de los botones, los márgenes entre párrafos, o si queremos que el tamaño de una fuente sea siempre la mitad de la del padre:

```html
<h1>
  Título
  <small style="font-size: 0.5em">Subtítulo</small>
</h1>
```

En este caso el tamaño de la fuente del subtítulo va a ser exactamente la mitad del tamaño del título.

### Porcentajes \(%\)

Permiten definir una medida como un porcentaje del elemento padre. En general los porcentajes no se recomiendan excepto en ocasiones muy puntuales, por ejemplo, cuando necesitamos un `div` que ocupe el 50% del elemento padre.

Sin embargo, un uso de los porcentajes es definir el tamaño de la fuente raíz del documento (la del elemento `html`). Por ejemplo:

```css
html {
  font-size: 90%;
}

/* podemos cambiar el porcentaje utilizando media queries, por ejemplo: */
@media (min-width: 768px) {
  html { font-size: 100%; }
}

@media (min-width: 1200px) {
  html { font-size: 110%; }
}
```

Esto le permite al usuario cambiar el tamaño del navegador en las configuraciones y que el texto de nuestra página se ajuste acorde. En este ejemplo, si el usuario cambia la fuente del navegador a `20px`, el tamaño de la fuenta será de `18px` (antes de aplicar los media queries).

En la práctica no es muy común que las personas cambien el tamaño de la fuente del navegador, pero es buena práctica permitir esta opción.

### Viewport width \(vw\)

El viewport es el área visible que ve el usuario en el navegador. `1vw` representa `1%` del **ancho** del viewport. La diferencia con los porcentajes es que no depende del tamaño del elemento padre, siempre se calcula sobre el tamaño completo del viewport.

### Viewport height \(vh\)

Similar al viewport width \(`vw`\) pero del **alto** del navegador.

### Otras

Hay dos unidades que vale la pena mencionar. `vmin`, que toma el tamaño mínimo entre el alto y el ancho del viewport y `vmax`, que toma el tamaño más grande entre el alto y el ancho del viewport.

## Medidas absolutas

La única medida absoluta que vale la pena mencionar son los pixeles (`px`). Existen otras que se utilizan cuando se va a imprimir una página (que hoy en día no es muy común que se haga): centrímetos \(`cm`\), milímetros \(`mm`\), pulgadas \(`in`\), puntos \(`pt`\) y picas \(`pc`\).

### Pixeles \(px\)

Los pixeles son útiles en medidas que se deben mantener igual sin importar el tamaño de la pantalla, por ejemplo para definir bordes, ciertos posicionamientos absolutos, los breakpoints de los media queries, entre otros.

En la práctica toma tiempo dejar de usar pixeles y acostumbrarse a usar unidades relativas. Sin embargo, las ventajas se vuelven evidentes cuando se trabaja con sitios o aplicaciones que se deben ajustar a diferentes tamaños de pantallas, que hoy son la gran mayoría (por no decir todas).