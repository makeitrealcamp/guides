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

{% embed url="https://codepen.io/germanescobar/pen/zwrPVa" %}

Fíjate que el `append` agrega el contenido **después** del párrafo. Si quieres insertarlo antes puedes utilizar `prepend`:

```javascript
$('body').prepend("<h1>Hola Mundo</h1>");
```

Otros métodos útiles para insertar elementos en el documentos incluyen:

* `html` - Reemplaza **el contenido** del los elementos seleccionados con un nuevo contenido.
* `after` - Agrega contenido **después** de los elementos seleccionados.
* `before` - Agrega contenido **antes** de los elementos seleccionados.

### Reemplazando elementos

Con **jQuery** también es posible reemplazar elementos por otro contenido diferente. En el siguiente ejemplo estamos reemplazando todos los elementos `p` \(párrafos\) por `div`s:

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

### Agregando y removiendo clases de CSS

Para agregar y remover clases de uno o más elementos utiliza los métodos `addClass`, `removeClass` y `toggleClass`:

```javascript
$('div.step-1').addClass("active");
$('div.step-2').removeClass("active");

$('div.step-1').toggleClass("active"); // si tiene la clase la remueve, de lo contrario la agrega
```

Para verificar si un elemento tiene una clase utiliza el método `hasClass` que retorna `true` si alguno de los elementos seleccionados tiene la clase o `false` de lo contrario.

```javascript
if ($('div.step-1').hasClass("active")) {
  // el código que queremos ejecutar si tiene la case "active"
}
```

### Cambiando los estilos en línea

Utiliza el método `css` para cambiar los estilos en línea de uno o más elementos:

```javascript
$('div.step-1').css("background", "red");
```

Esto modifica el atributo `style` del elemento que quedaría de la siguiente forma:

```markup
<div class="step-1" style="background: red">...</div>
```

Si necesitas cambiar varias propiedades puedes encadenar métodos:

```javascript
$('div.step-1').css("background", "red").css("font-size", "1.3rem");
```

También puedes pasarle un objeto al método `css` de la siguiente forma:

```javascript
$('div.step-1').css({
  "background": "red",
  "font-size": "1.3rem"
}
```

## Encadenando métodos

Con **jQuery** puedes realizar varias acciones sobre los mismos elementos como lo hicimos en la sección anterior donde encadenamos dos veces el método `css`.

En el siguiente ejemplo vamos a realizar varias acciones sobre los `div`s del documento. Primero les agregamos la clase `active`, después les removemos la clase `pending` y, por último, les agregamos un párrafo con el texto "Hola Mundo":

```javascript
$('div').addClass("active")
        .removeClass("pending")
        .append("<p>Hola Mundo</p>");
```

Puedes encadenar todos los métodos en una misma línea o los puedes separar en diferentes líneas como lo hicimos en este ejemplo para mayor claridad.
