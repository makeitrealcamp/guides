# Tablas

Una tabla se define con la etiqueta `<table>`.

Las filas se definen con la etiqueta `<tr>`.

Las celdas se definen con la etiqueta `<td>`.

Ejemplo:

```markup
<table>
  <tr>
    <td>Pedro</td>
    <td>Perez</td>
  <tr>
  <tr>
    <td>Juan</td>
    <td>Gomez</td>
  <tr>
</table>
```

Nunca utilices `<tr>` por fuera de un `<table>`.

Nunca utilices `<td>` por fuera de un `<tr>`.

## Agregando bordes

Por defecto las tablas no tienen bordes. Si deseas agregarles un borde puedes utilizar la propiedad `border` de CSS:

```css
table, th, td {
  border: 1px solid black;
}
```

## Uniendo los bordes

Si quieres que los bordes se unan en uno puedes utilizar la propiedad `border-collapse` de CSS:

```css
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
```

## Encabezados

Para crear encabezados utiliza `th` en vez de `td`:

```markup
<table>
  <tr>
    <th>Nombre</th>
    <th>Apellido</th>
  <tr>
  <tr>
    <td>Juan</td>
    <td>Gomez</td>
  <tr>
</table>
```

## Agregar espacio interno en las celdas

Utiliza la propiedad `padding` de CSS para agregar espacio interno en las celdas:

```markup
th, td {
  padding: 15px;
}
```

## Celdas que ocupan más de una columna o fila

Para que una celda \(`td` o `th`\) ocupe más de una columna utiliza el atributo `colspan` con el número de columnas que quieres que ocupe. Por ejemplo:

```markup
<table>
  <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
  <tr>
    <td colspan="2">Ocupa 2 columnas</td>
    <td>4</td>
  </tr>
  <tr>
    <td colspan="3">Ocupa 3 columnas</td>
  </tr>
</table>
```

Para que una celda ocupe más de una fila utiliza el atributo `rowspan` con el número de filas que quieres que ocupe:

```markup
<table>
  <tr>
    <td rowspan="2">Ocupa 2 filas</td>
    <td>1</td>
  </tr>
  <tr>
    <td>2</td>
  </tr>
</table>
```

