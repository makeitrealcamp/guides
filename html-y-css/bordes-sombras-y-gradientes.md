# Bordes, sombras y gradientes

En este capítulo vamos a explorar algunas de las nuevas características de CSS3 como bordes redondeados, sombras para cajas y textos, y gradientes.

Antes se utilizaban trucos para lograr el mismo efecto con imágenes pero ahora con CSS3 tenemos una forma más fácil y estándar de hacerlo.

## Bordes redondeados

Veamos primero un ejemplo de bordes redondeados \(consulta el HTML y CSS en la pestaña respectiva\):

{% embed url="https://codepen.io/germanescobar/pen/QampxP" %}

Para crear bordes redondeados utiliza la propiedad `border-radius`.

`border-radius` recibe un tamaño \(puede ser en pixeles, rems, etc.\) como valor.

Por ejemplo, para aplicar un borde redondeado con radio de `5px` a un `div` con clase `redondeado` utilizarías la siguiente regla:

```css
div.redondeado {
  border-radius: 5px;
}
```

También puedes aplicarle bordes redondeados a cada esquina individualmente utilizando las siguientes propiedades:

* `border-top-left-radius`
* `border-top-right-radius`
* `border-bottom-left-radius`
* `border-bottom-left-radius`

Sin embargo, también existen atajos que puedes utilizar con `border-radius`. Por ejemplo, puedes definir el tamaño de cada esquina separando los valores por espacio:

```css
div.redondeado {
  border-radius: 5px 10px 10px 20px;
}
```

El primer valor aplica a la esquina superior izquierda, el segundo a la superior derecha, el tercero a la inferior izquierda y el cuarto a la inferior derecha.

Cuando los valores de la esquina superior derecha e inferior izquierda son iguales podemos utilizar otro atajo:

```css
div.redondeado {
  border-radius: 5px 10px 20px;
}
```

El primer valor aplica a la esquina superior izquierda, el segundo a la superior derecha e inferior izquierda, y el tercero a la inferior derecha.

Si la esquina superior izquierda y la inferior derecha tuvieran el mismo valor \(p.e. 5px\) podríamos utilizar otro atajo:

```css
div.redondeado {
  border-radius: 5px 10px;
}
```

El primer valor aplica a la esquina superior izquierda y a la inferior derecha. El segundo valor a la superior derecha y a la inferior izquierda.

## Sombras

Utiliza la propiedad `box-shadow` para agregarle sombra a una caja y `text-shadow` para agregarle sombra al texto.

### Sombra de caja

Veamos primero un ejemplo \(consulta el HTML y CSS en la pestaña respectiva\):

{% embed url="https://codepen.io/germanescobar/pen/jYZKYV" %}

Para agregarle sombra a una caja utiliza la propiedad `box-shadow`.

`box-shadow` recibe los siguientes valores separados por espacio:

* **Posición horizontal** \(requerido\) - un valor positivo ubica la sombra a la derecha de la caja mientras que uno negativo la ubica a la izquierda.
* **Posición vertical** \(requerido\) - un valor positivo ubica la sombra debajo de la caja mientras que uno negativo la ubica encima de la caja.
* **Difuminación** \(opcional\) - el radio de difuminación, entre mayor el número más borrosa va a ser la sombra.
* **Propagación** \(opcional\) - el radio de propagación, un valor positivo incrementa el tamaño de la sombra mientras que uno negativo reduce el tamaño de la sombra.
* **Color** \(opcional\) - por defecto utiliza el color de la fuente.

### Sombra de texto

Veamos primero un ejemplo \(consulta el HTML y CSS en la pestaña respectiva\):

{% embed url="https://codepen.io/germanescobar/pen/VyXWga" %}

Para agregarle sombra al texto utiliza la propiedad `text-shadow`.

`text-shadow` recibe los siguentes valores separados por espacio:

* **Posición horizontal** \(requerido\) - un valor positivo ubica la sombra a la derecha del texto, uno negativo a la izquierda.
* **Posición vertical** \(requerido\) - un valor positivo ubica la sombra debajo del texto, uno negativo encima.
* **Difuminación** \(opcional\) - el radio de difuminación, entre mayor el número, más borrosa la sombra.
* **Color** \(opcional\) - por defecto utiliza el color de la fuente.

## Gradientes

Los gradientes te permiten realizar transiciones entre dos o más colores.

Existen dos tipos de gradientes:

* Lineales
* Radiales

### Gradientes lineales

Para crear un gradiente lineal utiliza la función `linear-gradient` en la propiedad `background` o `background-image`:

```css
.gradiente {
  background: linear-gradient(red, orange);
}
```

Por defecto la dirección es de arriba hacia abajo:

{% embed url="https://codepen.io/germanescobar/pen/bavrNv" %}

#### Dirección

Para cambiar la **dirección** puedes pasarle un primer argumento a `linear-gradient`. Los posibles valores son:

* `to bottom` - hacia abajo \(el valor por defecto\).
* `to top` - hacia arriba.
* `to right` - hacia la derecha.
* `to left` - hacia la izquierda.
* `to top left` - hacia la esquina superior izquierda.
* `to top right` - hacia la esquina superior derecha.
* `to bottom left` - hacia la esquina inferior izquierda.
* `to bottom right` - hacia la esquina inferior derecha.
* Un ángulo \(p.e. `90deg`, `-45deg`, etc.\)

#### Múltiples colores

Puedes utilizar más de dos colores en tu gradiente:

```css
.gradiente {
  background: linear-gradient(to right, blue, red, yellow, green);
}
```

Veamos este ejemplo en Codepen:

{% embed url="https://codepen.io/germanescobar/pen/Ozwdjv" %}

También puedes cambiar la ubicación donde cambia cada color:

```css
.gradiente {
  background: linear-gradient(to right, blue 20%, red 60%, yellow, green);
}
```

{% embed url="https://codepen.io/germanescobar/pen/JMBxMK" %}

#### Transparencias

Los gradientes soportan transparencias que se pueden utilizar para crear efectos interesantes. El siguiente gradiente inicia completamente transparente y termina en un rojo total:

```css
.gradiente {
  background: linear-gradient(to right, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1));
}
```

{% embed url="https://codepen.io/germanescobar/pen/wpxNYY" %}

### Gradientes radiales

Para crear un gradiente radial utiliza la función `radial-gradient` en la propiedad `background` o `background-image`:

```css
.gradiente {
  background: radial-gradient(red, yellow);
}
```

Por defecto el gradiente inicia en el centro de la caja y tiene forma de elipse:

{% embed url="https://codepen.io/germanescobar/pen/zpLeXB" %}

Si quieres cambiar el centro del gradiente puedes pasarle un primer argumento a `radial-gradient`:

```css
.gradiente {
  background: radial-gradient(at 20px 20px, red, yellow);
}
```

Veamos este ejemplo en Codepen:

{% embed url="https://codepen.io/germanescobar/pen/ZvjPzb" %}

Además de posiciones exactas puedes utilizar `top`, `right`, `bottom`, `left`, `top right`, etc.

También puedes cambiar la forma del gradiente a un círculo de la siguiente forma:

```css
.gradiente {
  background: radial-gradient(circle at 20px 20px, red, yellow);
}
```
