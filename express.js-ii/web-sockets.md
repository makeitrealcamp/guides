# Web Sockets

Web Sockets es una tecnología que permite crear aplicaciones capaces de recibir información del servidor y actualizarse en tiempo real, sin necesidad de refrescar la página.

La forma en que funciona Web Sockets es que el navegador, a través de JavaScript, abre una conexión HTTP con el servidor y **maniente esa conexión abierta** para que el servidor pueda enviarle información al navegador en cualquier momento.

Para que Web Sockets funcione se debe escribir código tanto en el cliente (con JavaScript) como en el servidor (dependiendo del lenguaje que se utilice).

## El cliente

La mayoría de navegadores hoy soportan Web Sockets. El código JavaScript necesario para abrir una conexión y escuchar mensajes del servidor es el siguiente:

```javascript
// abrimos el Web Socket
var ws = new WebSocket("ws://localhost:3001/chat");

ws.onopen = function() {
  // el Web Socket está abierto, podemos empezar a enviar mensajes
  // con el método send
  ws.send("Un mensaje");  
};

ws.onmessage = function(e) {
  // esto se invoca automáticamente cuando recibimos un mensaje
  console.log(e.data);
};

ws.onclose = function() {
  // la conexión fue cerrada
}
```

## El servidor

El servidor se puede escribir en cualquier lenguaje de programación (Web Sockets es una tecnología independiente del lenguaje). Para este ejemplo vamos a utilizar Node.js con una librería llamada [express-ws](https://github.com/HenningM/express-ws).

Para instalar la librería utiliza NPM o Yarn. Con Yarn utiliza el siguiente comando:

```
$ yarn add express-ws
```

Crea un archivo llamado `app.js` y escribe lo siguiente:

```javascript
var app = require('express')();
var ws = require('express-ws')(app);

app.ws("/chat", function(ws, req) {
  ws.on("open", function() {
    // recibimos una nueva conexión
  });

  ws.on("message", function(data) {
    // recibimos un mensaje
    ws.send(data);
  });

  ws.on("close", function() {
    // un cliente cerró la conexión
  });
});

app.listen(3001, function() {
  console.log('listening on http://localhost:3001/')
});
```

Algunas alternativas en otros lenguajes de programación incluyen:

* Ruby - [Faye's WebSockets](https://github.com/faye/faye-websocket-ruby)
* Ruby on Rails - [ActionCable](http://edgeguides.rubyonrails.org/action_cable_overview.html)
* Python - [websockets](http://websockets.readthedocs.io/en/stable/intro.html)
* Java - [JSR-356](https://javatutorial.net/java-websockets-tutorial)

## Socket.io

[Socket.io](https://socket.io/) es una librería de Node.js para desarrollar aplicaciones con WebSockets que también incluye una librería para el cliente.

El desarrollo con [Socket.io](https://socket.io/) es parecido a lo que ya hemos visto, pero Socket.io ofrece varias ventajas y funcionalidades interesantes:

* Reconexión automática.
* Canales (rooms) y eventos.
* Transimisión de imagen, audio y video.
* Soporte para navegadores antiguos (p.e. IE9 e IE8).

Veamos un ejemplo. En el cliente debes incluir la librería de Socket.io:

```html
<script src="socket.io.js"></script>
<script>
  var socket = io('http://localhost:3001/chat');

  socket.on("connect", function() {
    // podemos enviar mensajes con el método emit
    socket.emit("message", "nuevo mensaje");
  });

  socket.on("message", function (data) {
    console.log(data);
  });
</script>
```

En el servidor:

```javascript
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('message', function(msg){
    io.emit('message', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3001, function(){
  console.log('listening on *:3000');
});
```
