# Notificaciones Web

Las notificaciones Web nos permiten alertar al usuario cuando tiene nuestra página abierta pero se encuentra en otra pestaña en el navegador o en otra aplicación.

Muy probablemente ya has recibido este tipo de notificaciones. YouTube las utiliza para notificarte de nuevos videos en canales a los que estás suscrito, Facebook las utiliza para notificarte nuevas amistades, mensajes, etc. y Gmail las utiliza para notificarte de nuevos mensajes de correo electrónico.

Para que funcionen las notificaciones Web, el usuario debe tener abierta la página desde donde se van a desplegar.

El soporte para notificaciones Web está incrementando en los navegadores pero no se recomienda depender exclusivamente de ellas para notificar información importante a los usuarios. Recuerda, además, que los usuarios deben permitir el envío de notificaciones explícitamente.

Para conocer el soporte actual de las notificaciones Web en diferentes navegadores [haz click acá](https://caniuse.com/#feat=notifications).

Por último, las notificaciones Web generalmente se mezclan con Web Sockets, una tecnología que permite a los servidores enviar información a los navegadores sin necesidad de refrescar la página.

### Desplegando notificaciones

Para desplegar una notificación Web utiliza el objeto `Notification` desde JavaScript.

```javascript
if (window.Notification && Notification.permission !== "denied") {
  Notification.requestPermission((status) => {
    // status pasa a "granted" si es aceptado por el usuario

    // el siguiente código muestra la notificación
    var notification = new Notification('Título', {
      body: 'Este es el cuerpo del mensaje',
      icon: '/path/to/icon.png' // opcional
    });
  });
}
```

El primer paso para enviar una notificación es verificar si el navegador soporta las notificaciones y que el usuario no las haya bloqueado. Esto lo estamos haciendo en la línea 1.

En la línea 2 estamos solicitando el permiso a las notificaciones. Una vez han sido aceptadas se pueden empezar a enviar las notificaciones.

Una notificación se crea utilizando la función constructora `Notification` que recibe un título, un cuerpo y, opcionalmente, un ícono. En ese momento le aparece la notificación al usuario que varía dependiendo del navegador desde donde se genere.

### Eventos sobre las notificaciones

Puedes manejar los siguientes eventos sobre las notificaciones:

* `onclick`: se dispara cuando el usuario hace click sobre la notificación.
* `onclose`: se dispara cuando el usuario cierra la notificación.
* `onerror`: se dispara cuando la notificación encuentra un error.
* `onshow`: se dispara cuando la notificación se muestra.

Para manejar los eventos simplemente se agrega una función sobre el evento correspondiente de la notificación. Por ejemplo:

```javascript
var notification = new Notification(...);

notification.onclick = function() {
  parent.focus(); // enfoca la ventana que produjo la notificación
  this.close();
}
```
