# History API

El History API nos permite cambiar la URL del navegador sin refrescar la página, ver el número de URL's visitadas (la historia) y navegar por la historia de URL's (ir atrás o adelante).

El History API es muy útil en aplicaciones que nunca se refrescan, también conocidas como SPAs (Single Page Applications).

El objeto principal para utilizar el History API se llama `history`.

### Cambiando la ruta de la URL

Para cambiar la ruta de la URL utiliza los métodos `pushState` y `replaceState` de `history`.

La diferencia entre los dos métodos es que `pushState` agrega una entrada a la historia de URLs mientras que `replaceState` reemplaza la última entrada.

`pushState` y `replaceState` reciben tres argumentos: un objeto, un título y la nueva ruta.

```javascript
// agrega una ruta /users a la historia de la sesión
history.pushState(null, null, "users");
```

Puedes abrir la consola en las herramientas del desarrollador y ejecutar esa línea sobre cualquier sitio o aplicación Web. La ruta de la URL debería cambiar a `/users`.

### Atrás y adelante

Para navegar en la historia utiliza los métodos `back` y `forward` del objeto `history`. Es lo equivalente a oprimir el botón atrás o adelante del navegador.

```javascript
// equivalente a oprimir el botón de atrás del navegador
history.back();

// equivalente a oprimir el botón de adelante del navegador
history.forward();
```
### Eventos sobre la historia

Cuando una persona oprime el botón atrás o adelante, o se ejecutan los métodos `back` y `forward` del `history,` se dispara el evento `popstate` sobre `window`:

```javascript
window.onpopstate = function(e) {
  alert("location: " + document.location + ", state: " + JSON.stringify(e.state));
};
```
