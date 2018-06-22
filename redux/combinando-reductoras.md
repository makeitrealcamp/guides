# Combinando funciones reductoras

En aplicaciones grandes la función reductora se puede volver muy larga y difícil de manejar:

```javascript
const reducer = (state, action) => {
  if (action.type == "...") {
    // código
  } else if (action.type == "...") {
    // más código
  }
  // más else ifs, quizá decenas o cientos
}
```

Redux nos permite dividir la **función reductora** en funciones más manejables a través de la función `combineReducers`:

```javascript
import { createStore, combineReducers } from "redux";

const reducer1 = (state={}, action) => {
  // ...
  return state;
}

const reducer2 = (state={}, action) => {
  // ...
  return state;
}

const store = createStore(combineReducers({ tasks: reducer1, users: reducer2 }));
```

`reducer1` se va a encargar de realizar los cambios sobre el arreglo de `tasks` y `reducer2` se va a encargar de realizar los cambios sobre `users`. Cada **función reductora** se va a encargar de una parte del estado.

Algo particular de este código es que estamos inicializando el estado en los argumentos de las **funciones reductoras** y ya no estamos utilizando el segundo argumento de `createStore` que recibe el estado inicial. Esto se debe a que `combineReducers`, al principio, llama a todas las **funciones reductoras** pasándoles `undefined` como primer argumento.

{% youtube %} https://www.youtube.com/watch?v=G_dbuk9B2pQ {% endyoutube %}
