# Selectores CSS

Ya hemos visto los selectores por etiqueta \(p.e. `table`\), clase \(p.e. `.alert`\) e id \(p.e. `#alert`\). Veamos otros selectores.

## Lista de selectores

Puedes definir más de un selector en una regla CSS separando los selectores por coma \(`,`\). Por ejemplo:

```css
h1, h2, h3 {
  margin-bottom: 21px;
}
```

Esta regla CSS le aplicaría el margen inferior a las etiquetas `h1`, `h2` y `h3`.

## Más específicos

Podemos ser más específicos mezclando los selector. Por ejemplo, si queremos aplicar un estilos a todos los **párrafos** que tengan la clase **importante** utilizaríamos el selector `p.importante`:

```css
p.importante {
  font-size: 21;
}
```

## Descendientes

Puedes definir selectores que estén **dentro** de otros selectores.

Por ejemplo, la siguiente regla CSS aplica a las etiquetas `span` que estén dentro de una etiqueta `a` con clase `link`, que a su vez estén dentro de una etiqueta `div`.

```css
div a.link span {
  color: red;
}
```

## Descendientes directos

Puedes definir selectores que sean **hijos directos** de otros selectores.

Por ejemplo, la siguiente regla aplica a todos los elementos con clase `link` que sean **hijos directos** de una etiqueta `div`:

```css
div > .link {
  color: red;
}
```

## Cualquier selector

Utiilza el asterísco \(`*`\) para referirte a cualquier selector.

Por ejemplo, la siguiente regla aplicaría a **todos los elementos** de la página:

```css
* {
  box-sizing: border-box;
}
```

## Pseudo clases

Nos permiten seleccionar elementos por su estado actual.

Por ejemplo los vínculos que ya han sido visitados, los checkboxes que están seleccionados, los elementos sobre los que está pasando el mouse, etc.

Por ejemplo, los vínculos pueden estar en varios estados:

```css
/* no visitado */
a:link {
    color: #FF0000;
}

/* visitado */
a:visited {
    color: #00FF00;
}

/* mouse sobre el vínculo */
a:hover {
    color: #FF00FF;
}

/* seleccionado */
a:active {
    color: #0000FF;
}
```

### `:first-child` y `:last-child`

Estas dos pseudo clases nos permiten definir el primer y último selector dentro de cualquier elemento.

Por ejemplo, la siguiente regla aplicaría al primer párrafo dentro de cualquier elemento:

```css
p:first-child {
  color: red;
}
```

