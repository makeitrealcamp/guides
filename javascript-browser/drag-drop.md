# Arrastrar y soltar (drag and drop)

Esta funcionalidad permite arrastrar un elemento y soltarlo sobre otro elemento.

El primer paso para poder arrastrar un elemento es agregarle el atributo `draggable` con el valor `true`:

```html
<div draggable="true"></div>
```

El siguiente paso es utilizar JavaScript (a través de los eventos que veremos a continuación) para saber cuándo el elemento empieza a ser arrastrado y cuándo es soltado.

Sobre el elemento arrastrado se disparan los siguientes eventos:

* `dragstart`: el usuario inició el arrastre del elemento.
* `drag`: el usuario está arrastrando el elemento (se dispara cada pocos cientos de milisegundos).
* `dragend`: el usuario terminó el arrastre.

Sobre el elemento destino se disparan los siguientes eventos:

* `dragenter`: el elemento arrastrado está entrando en la zona de soltado.
* `dragleave`: elemento arrastrado está saliendo de la zona de soltado.
* `dragover`: el elemento arrastrado está sobre la zona de soltado (se dispara cada pocos cientos de milisegundos)
* `drop`: el elemento fue soltado.

Veamos un ejemplo, arrastra la imagen del cuadrado de la izquierda al cuadrado de la derecha:

{% embed url="https://codepen.io/germanescobar/pen/ExxGOWg" %}

El primer paso de este ejemplo fue agregarle la propiedad `draggable` a la imagen:

```html
<img id="logo" src="..." draggable="true">
```

Como no hay forma de saber cuál elemento es el que se está arrastrando y soltando utilizamos el evento `dragstart` para guardar el `id` del elemento en un objeto llamado `dataTransfer`:

```javascript
var img = document.querySelector("img")
img.addEventListener("dragstart", function(e) {
  e.dataTransfer.setData("text", this.id)
})
```

Por último, manejamos el evento `drop` sobre el cuadrado de la derecha. Para que se dispare el evento `drop` debemos invocar el método `e.preventDefault()` sobre los eventos `dragenter` y `dragover` (esto es un poco confuso pero así funciona).

```javascript
var target = document.querySelector(".target")
target.addEventListener("dragenter", function(e) {
  e.preventDefault()
})
target.addEventListener("dragover", function(e) {
  e.preventDefault()
})
target.addEventListener("drop", function(e) {
  e.preventDefault()
  var id = e.dataTransfer.getData("text")
  this.appendChild(document.getElementById(id))
})
```

Para indicar visualmente que el cuadrado de la derecha es una zona de soltado, podemos crear una nueva clase `dotted` que muestre un borde de guiones y utilizar los eventos `dragenter` y `dragleave` para agregar y remover la clase:

```css
.dotted { border: 1px dashed #333; }
```

```javascript
target.addEventListener("dragenter", function(e) {
  e.preventDefault()
  this.classList.add("dotted")
})
target.addEventListener("dragleave", function() {
  this.classList.remove("dotted")
})
target.addEventListener("drop", function(e) {
  // ...
  this.classList.remove("dotted")
})
```

Lo anterior se puede ver en el siguiente ejemplo:

{% embed url="https://codepen.io/germanescobar/pen/rNNobqv" %}

**Nota:** La funcionalidad de arrastrar y soltar es bastante básica con JavaScript puro. Sin embargo, si estás utilizando jQuery puedes utilizar [este plugin de jQuery UI](https://jqueryui.com/draggable) que facilita la implementación y agrega funcionalidades como retroalimentación visual y restricciones de movimiento, entre otras.
