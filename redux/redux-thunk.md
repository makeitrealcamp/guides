# Operaciones asincrónicas con redux-thunk

[redux-thunk](https://github.com/reduxjs/redux-thunk) es una librería que nos permite realizar operaciones asincrónicas en nuestros **action creators**.

El primer paso es instalar la librería con npm o Yarn:

```
# npm
npm install --save redux-thunk

# yarn
yarn add redux-thunk
```

El siguiente paso es configurarlo en nuestro **store**:

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// ...

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);
```

Ahora debemos cambiar nuestros **action creators** para que retornen una función en vez de un objeto. Dentro de la función realizamos el llamado asincrónico e invocamos el `dispatch`:

```javascript
const newTask = task => {
  return dispatch => {
    return axios.post("...", task)
      .then(response => {
        dispatch({
          type: "NEW_TASK",
          task: response
        });
      });
  };
};
```

Eso es todo. La ventaja es que no es necesario cambiar nada en el resto de nuestro código.

{% youtube %} https://www.youtube.com/watch?v=dRlD0YqU6w4 {% endyoutube %}
