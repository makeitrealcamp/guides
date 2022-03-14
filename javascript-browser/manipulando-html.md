# Manipulando HTML

Utilizando el objeto `document` (o `window.document`) es posible:

* Obtener o modificar el título del documento.
* Obtener información de los elementos.
* Insertar, eliminar, reemplazar, ocultar y mostrar elementos.
* Agregar y eliminar clases de CSS.
* Manipular el CSS de los elementos directamente.

### El título del documento

Para obtener o modificar el título del documento utiliza la propiedad `title` del objeto `document`:

```javascript
console.log(document.title);

document.title = "Nuevo título";
```

### Obteniendo elementos

Para obtener un elemento utiliza el método `querySelector` que recibe un selector CSS válido y retorna el primer elemento que coincida o `null` si no coincide ninguno

```javascript
// retorna el formulario con id my-form
var form = document.querySelector("form#my-form");
form.tagName; // "form"
form.id; // "my-form"
form.style; // retorna un objeto con los estilos del elemento
form.attributes; // retorna un objeto con los atributos del elemento
```

Puedes encontrar todos los atributos y métodos de los elementos en [este recurso](https://www.w3schools.com/jsref/dom_obj_all.asp).

Para obtener varios elementos utiliza el método `querySelectorAll` que es similar a `querySelector` pero retorna todos los elementos que coinciden:

```javascript
// retorna todos los div del documento
var divs = document.querySelectorAll("div");
for(var div of divs.entries()) {
  console.log(div);
}
```

### Insertando elementos

Para insertar elementos en el documento utiliza el método `createElement` para crear el elemento y `appendChild` para agregarlo. Por ejemplo, asumiendo que tenemos un div en el documento:

```javascript
var ul = document.createElement("ul");

var div = document.querySelector("div");
div.appendChild(ul);
```
Para agregar texto puedes utilizar el método `createTextNode`, el atributo `innerHTML` o el atributo `textContent`:

```javascript
var p = document.createElement("p");

// con createTextNode
var text = document.createTextNode("Hola");
p.appendChild(text);

// con innerHTML
p.innerHTML = "Hola";

// con textContent
p.textContent = "Hola";
```

**Nota:** `innerHTML` no sólo te permite agregar texto, también puedes agregar HTML, así que se puede ver como otra forma de insertar elementos.

### Removiendo elementos

Para eliminar un elemento debes invocar el método `removeChild` :

```javascript
var element = document.querySelector("div");
element.parentNode.removeChild(element);
```

### Agregando y removiendo clases de CSS

Utiliza la propiedad `classList` para listar, agregar y eliminar clases de CSS de un elemento.

Asumiendo que tenemos un `div` con clases `one two three`:

```html
<div class="one two three"></div>
```

Podemos listar, agregar y eliminar clases de la siguiente forma:

```javascript
var div = document.querySelector("div");
div.classList; // "one two three"

div.classList.add("four");
div.classList.remove("one");
```

Otro método útil que podemos utilizar sobre `classList` es `toggle` que agrega una clase si no la tiene o la remueve de lo contrario:

```javascript
div.classList.toggle("one"); // agrega "one" si no existe o lo remueve si existe
```
