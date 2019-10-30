# Escuchando eventos

Para escuchar eventos de uno o más elementos utiliza el método `on`.

Por ejemplo, si queremos escuchar el `click` de **todos** los párrafos del documento podemos utilizar el siguiente código:

```javascript
$('p').on('click', function() {
  alert("Hiciste click sobre un párrafo");
});
```

Primero **seleccionamos** los elementos sobre los que queremos escuchar el evento con `$(selector)` \(en el ejemplo utilizamos `$('p')` para **seleccionar** todos los párrafos\).

El método `on` recibe el **nombre del evento** que queremos escuchar \(en el ejemplo el evento `click`\) y una **función**, que es la que se ejecuta cuando ocurre el evento. En esta función escribimos el código que queremos que se ejecute cada vez que que ocurra el evento.

A la **función** que recibe el método `on` se le llama un **callback** y puede recibir un argumento con **información del evento**. De esto hablaremos más adelante.

**Nota:** En algunos proyectos verás la siguiente forma de escuchar los eventos, que es equivalente a la anterior:

```javascript
$('p').click(function() {
  alert("Hiciste click sobre un párrafo");
});
```

Sin embargo, nuestra recomendación es siempre utilizar la forma anterior utilizando `on`.

## Eventos del mouse

Los eventos más comunes que puedes escuchar del mouse son los siguientes:

* `click`
* `dblclick` - doble click
* `mouseenter` - se dispara cuando el mouse **entra** sobre alguno de los elementos seleccionados.
* `mouseleave` - se dispara cuando el mouse **sale** de alguno de los elementos seleccionados.
* `mouseover` - se dispara cuando el mouse **entra o sale** de alguno de los elementos seleccionados.
* `mousemove` - se dispara cuando el mouse **se mueve** dentro de alguno de los elementos seleccionados.

La función que le pasamos al método `on` recibe un argumento con información del evento. Por ejemplo, a través de este objeto podemos obtener la posición del mouse cada vez que se mueve:

```javascript
$(document).on('mousemove', function(e) {
  console.log("El mouse se encuentra en las coordenadas:" + e.pageX + ", " + e.pageY);
});
```

## Eventos del teclado

Existen tres eventos que puedes escuchar del teclado:

* `keydown` - se dispara cuando oprimes una tecla.
* `keypress` - similar a `keydown` pero no aplica para teclas como `Shift`, `Esc`, `Alt`.
* `keyup` - se dispara cuando **sueltas** una tecla.

El método `which` del evento retorna el código de la tecla oprimida:

```javascript
$(document).on('keyup', function(e) {
  console.log("La tecla oprimida fue " + e.which);
});
```

Para ver la lista de códigos y a qué tecla corresponden sigue [este enlace](https://css-tricks.com/snippets/javascript/javascript-keycodes/).

## Eventos sobre formularios

Sobre los formularios \(y los elementos del formulario\) puedes escuchar los siguientes eventos:

* `blur` - se dispara cuando un elemento pierde el foco.
* `change` - se dispara cuando un elemento cambia.
* `focus` - se dispara cuando un elemento recibe el foco.
* `submit` - se dispara cuando el formulario se envía.

## Evitando la acción por defecto

Para evitar que ocurra la acción por defecto \(p.e. que un link no cambie la página o que un formulario no sea enviado\) puedes utilizar el método `preventDefault()` sobre el argumento que llega en la función.

Por ejemplo, el siguiente ejemplo intercepta todos los clicks sobre links y evita que cambie la página:

```javascript
$('a').on('click', function(e) {
  e.preventDefault();
  alert("Oprimiste un link pero ha sido interceptado ... muajaja");
});
```

## Delegación de eventos

La mayoría de eventos se disparan primero sobre el elemento que ocurren, y después se disparan sobre el elemento padre, el padre del padre, y así sucesivamente hasta `document`, y por último `window`.

Para detener este proceso puedes utilizar el método `stopPropagation` del evento:

```javascript
$('p').on('click', function(e) {
  e.stopPropagation();

  alert("Este evento no se va a propagar a los padres");
});
```

## $\( document \).ready\(\)

Una página no debe ser manipulada con jQuery hasta que el documento esté cargado completamente.

Hasta ahora hemos evadido este problema ubicando nuestro código al final de la página, pero esto no siempre es posible.

Si debes esperar a que toda la página cargue puedes usar el evento `ready`:

```javascript
$(document).ready(function() {
  console.log( "ready!" );
});
```

Existe un atajo equivalente:

```javascript
$(function() {
  console.log( "ready!" );
});
```

**Nota:** Recuerda que esto no es necesario si ubicas tu código jQuery al final de la página.

