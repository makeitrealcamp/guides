# Middlewares

Un middleware en Redux no es más que una forma de interceptar los llamados al `dispatch` y agregar lógica adicional.

Por ejemplo, si queremos imprimir todos los llamados al `dispatch` y los cambios al estado podemos crear el siguiente middleware:

```javascript
const logger = store => next => action => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
};
```

Para configurar este middleware en el **store** debemos pasarle un tercer parámetro a `createStore` utilizando la función `applyMiddleware` de Redux:

```javascript
import { createStore, applyMiddleware } from 'redux';

// ... la función logger

const store = createStore(
  reducer,
  { tasks: []} ,
  applyMiddleware(logger) // acá configuramos el middleware
);
```

Veamos otro ejemplo. Imagina que queremos retrasar todos los llamados al dispatch por 5 segundos. Podemos crear un middleware de la siguiente forma:

```javascript
const delayer = store => next => action => {
  return setTimeout(() => {
    next(action)
  }, 5000);
};

const store = createStore(
  reducer,
  { tasks: []} ,
  applyMiddleware(delayer)
);
```

Y ahora, cada vez que llamemos `dispatch`, el cambio de estado se va a realizar 5 segundos después.

También es posible instalar varios middlewares separándolos por comas:

```javascript
const store = createStore(
  reducer,
  { tasks: []} ,
  applyMiddleware(logger, delayer)
);
```

En la práctica es raro que escribas un middleware para una aplicación. Sin embargo, existen librerías como [redux-thunk](https://github.com/reduxjs/redux-thunk) o [redux-saga](https://github.com/redux-saga/redux-saga) que hacen uso de los middlewares.

{% youtube %} https://www.youtube.com/watch?v=szelbsBXxfs {% endyoutube %}
