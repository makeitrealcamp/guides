# Realizando peticiones con AJAX

**AJAX** \(Asynchronous JavaScript and XML\) son un conjunto de tecnologías que te permiten hacer llamados a servidores desde el navegador **sin necesidad de refrescar la página**.

Aunque es posible realizar llamados **AJAX** utilizando JavaScript puro, **jQuery** lo hace mucho más fácil.

## $.ajax\(\)

**jQuery** ofrece varios métodos para realizar llamados **AJAX** pero el principal es `$.ajax()` que recibe un objeto como en el siguiente ejemplo:

```javascript
var request = $.ajax({
  method: "GET",
  url: "http://...../"
});
```

En este ejemplo estamos realizando una petición de tipo `GET`. Sin embargo, podríamos omitir el `method` de este ejemplo porque `GET` es el valor por defecto.

El objeto que retorna tiene tres métodos: `done`, `fail` y `always` que reciben un **callback**. El callback de `done` se dispara cuando la petición es exitosa, el de `fail` cuando falla y el de `always` siempre, sin importar si es exitosa o falla:

```javascript
request.done(function(data) {
  alert(data); // imprimimos la respuesta
});

request.fail(function() {
  alert("Algo salió mal");
});

request.always(function() {
  alert("Siempre se ejecuta")
});
```

Puedes encadenar los métodos de la siguiente forma para hacer el código más compacto:

```javascript
$.ajax({
  method: "GET",
  url: "http://...../"
}).done(function(data) {
  alert(data); // imprimimos la respuesta
}).fail(function() {
  alert("Algo salió mal");
}).always(function() {
  alert("Siempre se ejecuta")
});
```

## Enviando información en el cuerpo

Para hacer peticiones que envían información en el cuerpo \(usualmente cuando haces `POST`, `PUT` ó `PATCH`\) debes utilizar la llave `data`. Por ejemplo:

```javascript
$.ajax({
  method: "POST",
  url: "http://...../",
  data: { name: "Pedro" }
});
```

Por defecto, `data` se envía como si fuera información de un formulario, utilizando `application/x-www-form-urlencoded` como `Content-Type`.

Para enviar otro formato como **JSON**, por ejemplo, debes convertir el objeto que le pasas a `data` en una cadena de texto y utilizar `contentType` de la siguiente forma:

```javascript
$.ajax({
  method: "POST",
  url: "http://...../",
  data: JSON.stringify({ name: "Pedro" }),
  contentType: "application/json"
});
```

Veamos un resumen de las llaves más comunes que puede tener el objeto que le pasamos al método `ajax`:

| Nombre | Descripción |
| --- | --- |
| url | Define la URL a donde se va a enviar la petición. Por defecto utiliza la ruta actual. |
| method | Define el verbo HTTP. Por defecto es "GET" |
| data | La información que vamos a enviar en el cuerpo del mensaje |
| contentType | El tipo de contenido que vamos a enviar en el cuerpo. Por defecto es `application/x-www-form-urlencoded` |

Para ver todas las opciones revisa [la documentación del método `$.ajax()` de jQuery](http://api.jquery.com/jquery.ajax/).

## Otros métodos útiles

Existen otros métodos para hacer llamados **AJAX** con **jQuery** que por debajo utilizan el método `$.ajax`:

### $.get\(\)

El método `get` recibe 2 parámetros: la URL y el callback \(la función que quieres que se ejecute cuando el resultado es exitoso\).

```javascript
$.get("/products", function(data) {
  $(".result").html(data);
});
```

### $.getJSON\(\)

Este método es similar a `$.get()` pero espera formato **JSON** por defecto:

```javascript
$.getJSON("/products", function(data) {
  console.log(data);
});
```

Para ver los demás métodos que ofrece **jQuery** para hacer llamados AJAX [haz click acá](http://api.jquery.com/category/ajax/shorthand-methods/).

