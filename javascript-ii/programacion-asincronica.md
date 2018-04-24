# Programación asincrónica

JavaScript es un lenguaje **no bloqueante**, lo que significa que cualquier acceso a dispositivos de E/S \(Entrada y Salida\) como el disco duro, la red, etc., ocurre de forma **asincrónica**.

**Asincrónico** significa que no vamos a esperar una respuesta inmediatamente, sino que en algún momento en el futuro vamos a recibir la respuesta. Puedes compararlo con en el correo electrónico, que nos permite comunicarnos de forma **asincrónica**, cuando enviamos un correo a otra persona no esperamos la respuesta inmediatamente, podemos hacer otras actividades mientras recibimos la respuesta.

En JavaScript existen varias formas de manejar la programación **asincrónica**. En este capítulo vamos a ver tres: **callbacks**, **promesas** y la nueva sintaxis de **async/await**.

## Callbacks

Un **callback** es una función que se le pasa como parámetro a otra función. Por ejemplo, el siguiente código utiliza jQuery para hacer un llamado AJAX e imprimir el resultado en la consola:

```javascript
$.get("http://example.com/", function(data) {
  console.log(data);
});

console.log("Esto se imprime primero");
```

Lo más importante de este ejemplo es entender que el método `get` está recibiendo dos parámetros: una URL y un **callback**.

La forma en que JavaScript ejecuta este código es la siguiente:

1. JavaScript realiza la petición HTTP a [http://example.com/](http://example.com/) de forma **asincrónica**.
2. El programa continúa su ejecución \(no se bloquea\) e imprime "Esto se imprime primero" en la consola.
3. Cuando el `get` recibe la respuesta del servidor invoca el **callback** y se imprime el resultado en la consola.

El problema con los **callbacks** es que cuando se anidan muchos llamados asincrónicos se crea lo que se conoce como el **callback hell**, que son muchos **callbacks** anidados. El siguiente código ficticio demuestra el problema:

```javascript
$.get("http://example.com/", function(data) {
  db.find(data, function(result) {
    file.read(result, function(content) {
      file.save(content, function() {
        // y así sucesivamente
      });
    });
  });
});
```

Para que el código sea vea más secuencial se introdujeron las promesas en ES6.

## Promesas

Las promesas están construídas sobre **callbacks** pero hacen que el código se vea mucho más secuencial:

```javascript
algoAsincronico()
  .then(actualizarAlgo)
  .then(guardarAlgo)
```

**jQuery** ahora soporta promesas para hacer llamados AJAX, así que podemos modificar nuestro ejemplo ficticio anterior de la siguiente forma:

```javascript
$.get("http://example.com/")
  .then(function(data) { return db.find(data); })
  .then(function(result) { return file.read(result); })
  .then(function(content) { return file.save(save); });
```

Si utilizamos las funciones flecha de ES6 el código se ve aún más compacto:

```javascript
$.get("http://example.com/")
  .then(data => db.find(data))
  .then(result => file.read(result))
  .then(content => file.save(save));
```

El método `then` recibe dos parámetros: un **callback** de éxito y otro cuando ocurre un error. Sin embargo, las promesas también tienen un método `catch` que se puede utilizar para manejar el error que se produzca en cualquier `then`:

```javascript
$.get("http://example.com/")
  .then(data => db.find(data))
  .then(result => file.read(result))
  .then(content => file.save(save))
  .catch(error => console.log("Ocurrió un error"))
```

Algo que estamos asumiendo en este ejemplo es que todos llamados `db.find`, `file.read` y `file.save` retornan una promesa \(de lo contrario la cadena se quiebra\). Pero supongamos que `db.find` no retorna una promesa, sólo acepta un **callback**, en ese caso nos tocaría crear una promesa.

### Creando promesas

Las promesas se crean con el objeto `Promise`, que recibe un **callback** con dos parámetros:

```javascript
new Promise(function(resolve, reject) {
  // invoca resolve() para resolver la promesa o reject() para generar un error
});
```

Por ejemplo, vamos a crear un método `wait` que envuelva `setTimeout` \(que no soporta promesas\) en una promesa y la devuelva:

```javascript
function wait(timeInMillis) {
  return new Promise(function(resolve) {
    setTimeout(function() { resolve(); }, timeInMillis);
  });
}

// ahora utilicemos nuestro método wait
wait(1000)
  .then(function() { console.log("Hola después de 1 segundo"); });
```

Volviendo a nuestro ejemplo ficticio, imagina que `db.find` no soporta promesas, igual podemos envolverlo en una promesa:

```javascript
$.get("http://example.com/")
  .then(data => {
    return new Promise(resolve => {
      db.find(data, result => resolve(result))
    });
  })
  .then(result => file.read(result))
  .then(content => file.save(save))
  .catch(error => console.log("Ocurrió un error"))
```

Fíjate cómo utilizamos `resolve` para pasar el resultado a la siguiente promesa. Esto es un patrón muy común en desarrollo con JavaScript hoy en día.

El problema de las promesas es que, como te puedes dar cuenta, no son triviales y son muy sujetas a errores. Por ejemplo, si en algún punto de la cadena de `then` no devuelves una promesa, la cadena se rompe y encontrar ese tipo de errores es difícil.

## Async/await

Continuando con la tradición de intentar que el código **asincrónico** de JavaScript se vea más **sincrónico**, en ES7 se introdujo async/await, que Node.js soporta completamente en las versiones recientes.

Async/await está construido sobre promesas.

Veamos un ejemplo:

```javascript
const performHttpRequest = async () => {
  const result = await http.get();
  console.log(result);
}

performHttpRequest();
```

