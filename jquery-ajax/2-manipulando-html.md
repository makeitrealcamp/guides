# Manipulando HTML

Con **jQuery** es posible:

* Insertar, eliminar, reemplazar, ocultar y mostrar elementos.
* Agregar y eliminar clases de CSS.
* Manipular el CSS de los elementos directamente.
* Obtener información de los elementos.

### Insertando elementos

Existen varias formas de insertar elementos en el documento. Vamos a empezar analizando la siguiente línea de código:

```javascript
jQuery('body').append("<h1>Hola Mundo</h1>");
```

En esta línea están ocurriendo varias cosas. Empecemos con `jQuery` que es una función que define la librería **jQuery**. Como en tus projectos vas a repetir tanto esa función, existe una forma más corta utilizando la variable `$`, que es equivalente a escribir `jQuery`:

```javascript
$('body').append("<h1>Hola Mundo</h1>");
```

La variable `$` es una función que recibe como primer parámetro un selector CSS. Veamos algunos ejemplos:

* `$(p)` - Selecciona todos los párrafos del documento.
* `$('.item')` - Selecciona todos los elementos que tengan la **clase** `item`.
* `$('#example')` - Selecciona todos los elementos que tengan el **id** `example`.
* `$('.wrapper p')` - Selecciona todos los elementos `p` que estén dentro de otro elemento

En nuestro ejemplo estamos seleccionando el elemento `body`. Después del selector va la acción que queremos realizar sobre el elemento, o los elementos, seleccionados. En este caso `.append("<h1>Hola Mundo</h1>")`, es decir, agregar un `h1` al final del `body`:

[](codepen://germanescobar/zwrPVa)

Fíjate que el `append` agrega el contenido **después** del párrafo. Si quieres insertarlo antes puedes utilizar `prepend`:

```javascript
$('body').prepend("<h1>Hola Mundo</h1>");
```

Otros métodos útiles para insertar elementos en el documentos incluyen:

* `html` - Reemplaza **el contenido** del los elementos seleccionados con un nuevo contenido.
* `after` - Agrega contenido **después** de los elementos seleccionados.
* `before` - Agrega contenido **antes** de los elementos seleccionados.

### Reemplazando elementos

Con **jQuery** también es posible reemplazar elementos por otro contenido diferente. En el siguiente ejemplo estamos reemplazando todos los elementos `p` (párrafos) por `div`s:

```javascript
$('p').replaceWith(`<div>Hola Mundo</div>`);
```

Recuerda que esta línea reemplazaría **todos** los `p` que existan en el documento.

### Removiendo elementos

Para remover elementos del documento se utiliza el método `remove`. Por ejemplo si queremos remover todos los párrafos que tengan la clase `test` podemos ejecutar la siguiente línea:

```javascript
$('p.test').remove();
```

El método `remove` elimina los elementos seleccionados del documento. Sin embargo, muchas veces lo que queremos es simplemente ocultar el elemento, no eliminarlo completamente.

### Ocultando y mostrando elementos

Para ocultar y mostrar elementos se utilizan los métodos `hide` y `show`:

```javascript
$('div.step-1').hide();
$('div.step-2').show();
```

En este ejemplo estamos ocultando el `div` con clase `step-1` y mostrando el `div` con clase `step-2`.
