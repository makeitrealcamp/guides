# Escuchando eventos

Para escuchar eventos (del mouse, teclado, etc.) utiliza el método `addEventListener` sobre cualquier elemento. Por ejemplo, si queremos escuchar el evento `click` del primer párrafo utilizaríamos el siguiente código:

```javascript
var p = document.querySelector("p");
p.addEventListener("click", function() {
  alert("Hello");
});
```

Primero estamos seleccionamos el elemento sobre el que queremos escuchar los eventos. El método `addEventListener` recibe el nombre del evento \(en este caso el `click`\) y una función que se ejecuta cuando ocurre el evento.

A la **función** que recibe el método `addEventListener` se le llama un **callback** y puede recibir un argumento con **información del evento**. De esto hablaremos más adelante.

Para escuchar los eventos de varios elementos seleccionados con `querySelectorAll` debes realizar lo siguiente:

```javascript
var ps = document.querySelectorAll("p");

ps.forEach(function(p) {
    p.addEventListener("click", function() {
        alert("Hello");
    });
});
```

## Eventos del mouse

Los eventos más comunes que puedes escuchar del mouse son los siguientes:

* `click`
* `dblclick` - doble click
* `mouseenter` - se dispara cuando el mouse **entra** sobre alguno de los elementos seleccionados.
* `mouseleave` - se dispara cuando el mouse **sale** de alguno de los elementos seleccionados.
* `mouseover` - se dispara cuando el mouse **entra o sale** de alguno de los elementos seleccionados.
* `mousemove` - se dispara cuando el mouse **se mueve** dentro de alguno de los elementos seleccionados.

La función que le pasamos al método `addEventListener` recibe un argumento con información del evento. Por ejemplo, a través de este objeto podemos obtener la posición del mouse cada vez que se mueve:

```javascript
document.addEventListener('mousemove', function(e) {
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
document.addEventListener('keyup', function(e) {
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
var a = document.querySelector("a");
a.addEventListener('click', function(e) {
  e.preventDefault();
  alert("Oprimiste un link pero ha sido interceptado ... muajaja");
});
```

## Delegación de eventos

La mayoría de eventos se disparan primero sobre el elemento que ocurren, y después se disparan sobre el elemento padre, el padre del padre, y así sucesivamente hasta `document`, y por último `window`.

Para detener este proceso puedes utilizar el método `stopPropagation` del evento:

```javascript
var p = document.querySelector("p");
p.addEventListener('click', function(e) {
  e.stopPropagation();
  alert("Este evento no se va a propagar a los padres");
});
```
