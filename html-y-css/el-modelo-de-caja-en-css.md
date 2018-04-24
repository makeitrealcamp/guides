# El modelo de caja en CSS

El modelo de caja se compone del margen externo \(`margin`\), borde \(`border`\) y margen interno \(`padding`\) de un elemento.

## Márgenes

El margen se utiliza para definir el espacio alrededor del elemento.

Puedes utilizar las propiedades CSS `margin-top`, `margin-right`, `margin-bottom` y `margin-left` para definir el margen superior, derecho, inferior e izquierdo respectivamente:

```css
p {
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  margin-left: 5px;
}
```

### Atajo con `margin`

Para reducir el código puedes especificar todas las márgenes en una sola propiedad `margin`:

```css
p {
  margin: 5px 5px 5px 5px;
}
```

El orden es: margen superior, derecho, inferior e izquierdo.

Si todos los márgenes son iguales puedes hacer lo siguiente:

```css
p {
  margin: 5px;
}
```

`margin` también puede recibir dos valores: el valor para el margen superior e inferior, y el valor para el margen izquierdo y derecho.

Por ejemplo, la siguiente regla le aplicaría un margen de `10px` arriba y abajo, y `20px` a los lados.

```css
p {
  margin: 10px 20px;
}
```

`margin` también puede recibir **tres** valores: el valor para el margen superior, y el margen de los lados, y el margen inferior.

Por ejemplo, la siguiente regla le aplicaría un margen de `10px` arriba, `20px` a los lados y `30px` abajo:

```css
p {
  margin: 10px 20px 30px;
}
```

## Bordes

Las propiedades CSS `border-width`, `border-style` y `border-color` nos permiten definir el ancho, el estilo y el color del borde de un elemento.

El siguiente ejemplo definiría un borde **sólido** de `1px` de color rojo:

```css
p {
  border-width: 1px;
  border-style: solid;
  border-color: red;
}
```

Las opciones más comunes de `border-style` son `solid` \(sólido\), `dotted` \(punteado\), `dashed` \(guiones\) y `double` \(doble\).

Cada una de las propiedades puede recibir de uno a 4 valores, muy parecido a como funciona con los márgenes:

* Un valor: aplica a los 4 lados \(p.e. `border-width: 5px`\).
* Dos valores: el primero para arriba y abajo, el segundo a los lados. \(p.e. `border-width: 5px 10px`\)
* Tres valores: el primero para arriba, el segundo para los lados y el tercero para abajo \(p.e. `border-width: 5px 10px 20px`\).
* Cuatro valores: arriba, derecha, abajo, izquierda \(p.e. `border-width: 1px 2px 3px 4px`\).

### Atajo con `border`

Puedes utilizar el atajo `border` para definir el ancho, estilo y color de todos los lados:

```css
p {
  border: 1px solid blue;
}
```

También puedes utilizar el atajo pero para cada uno de los lados:

```css
p {
  border-top: 1px solid blue;
  border-right: 2px dashed red;
  border-bottom: 3px dotted yellow;
  border-left: 4px double green;
}
```

### Bordes redondeados

La propiedad `border-radius` se utiliza para agregar bordes redondeados a un elemento:

```css
p {
  border: 2px solid red;
  border-radius: 5px;
}
```

Puedes asignar la propiedad `border-radius` a cada esquina individualmente con `border-top-left-radius`, `border-top-right-radius`, `border-bottom-left-radius` y `border-bottom-right-radius`.

## Márgenes externas \(padding\)

El **padding** se utiliza para definir el margen interno de un elemento.

Al igual que con los márgenes externos, CSS tiene propiedades para definir el **padding** de cada lado del elemento: `padding-top`, `padding-right`, `padding-bottom` y `padding-left`.

```css
p {
  padding-top: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
}
```

### Atajo con `padding`

Para reducir el código puedes especificar todos los **paddings** en una sola propiedad `padding`:

```css
p {
  padding: 5px 5px 5px 5px;
}
```

`padding` puede recibir uno, dos, tres y cuatro valores como `margin`:

* Un valor: aplica a los 4 lados.
* Dos valores: el primero aplica arriba y abajo, el segundo a los lados.
* Tres valores: el primero arriba, el segundo a los lados y el tercero abajo.
* Cuatro valores: arriba, derecha, abajo, izquierda.

## Ancho y alto

Puedes especificar el **ancho** y el **alto** de un elemento utilizando las propiedades `width` y `height`:

```css
p {
  width: 400px;
  height: 300px;
}
```

El **padding** y el **borde** suman al ancho y alto del elemento.

