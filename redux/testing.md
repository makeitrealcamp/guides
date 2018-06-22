# Testing

Cuando estás probando tus aplicaciones de React debes tener en cuenta lo siguiente:

1. Probar los componentes presentacionales de forma aislada (sin Redux).
2. Probar los componentes conectados utilizando un **mock** del **store**. Un **mock** es un objeto que simula ser otro objeto.
3. Probar las **funciones reductoras**.
4. Probar los **actions creators**.

El primer punto está en el módulo de [React](../react/testing.md), así que nos vamos a concentrar en los otros tres.

## Probando los componentes conectados

Los componentes conectados de Redux reciben el **store** como **prop**, así que podemos crear un **mock** del **store** y pasárselo. Para eso vamos a utilizar una librería llamada [redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store).

```
# npm
npm install --save-dev redux-mock-store

# yarn
yarn add redux-mock-store --dev
```

Ahora creemos una prueba de un componente conectado:

```javascript
import React from "react";
import { render } from "enzyme";
import configureStore from "redux-mock-store";
import TaskList from "./TaskList";

const mockStore = configureStore();

it("renders no tasks when store is empty", () => {
  const store = mockStore({ tasks: [] });

  const wrapper = render(<TaskList store={store} />);
  expect(wrapper.find('.task').length).toBe(0);
});
```

El siguiente video muestra lo que acabamos de hacer en más detalle.

{% youtube %} https://www.youtube.com/watch?v=Tos2l5uTBjA {% endyoutube %}

## Probando las funciones constructoras

El primer paso para poder probar las funciones constructoras es moverlas a un archivo independiente, por ejemplo en un archivo `reducers.js`:

```javascript
const tasks = (state=[], action) {
  // ...
};

const users = (state=[], action) {
  // ...
}

export { tasks, users };
```

Ahora, en el **store** debemos importarlas:

```javascript
import { createStore, combineReducers } from "redux";
import * as reducers from "./reducers";

export default createStore(combineReducers(reducers));
```

La forma de probar las funciones constructoras es invocándolas con diferentes estados iniciales y diferentes acciones para verificar que los nuevos estados sean los esperados:

```javascript
import { tasks, users } from "./reducers";

describe("tasks", () => {
  it("returns the initial state", () => {
    expect(tasks(undefined, {})).toEqual([]);
  });

  it("adds a task", () => {
    const task = { id: 1, name: "test" };
    const action = { type: "NEW_TASK", task: task };
    expect(tasks([], action)).toContainEqual(expect.objectContaining(task));
  });

  // more tests
});

// more tests
```

{% youtube %} https://www.youtube.com/watch?v=XaXFAVnb5ok {% endyoutube %}

### Probando los action creators

La forma más fácil de probar los action creators es invocarlos y verificar que devuelvan la acción que esperamos. Por ejemplo:

```javascript
import { newTask } from "./actionCreators";

it("creates the new task action", () => {
  const action = newTask({ id: 1, name: "test" });
  expect(action).not.toBeNull();
  expect(action.type).toBe("NEW_TASK");
  expect(action.product).not.toBeNull();
});
```

Para conocer otra forma y probar action creators con [redux-thunk](https://github.com/reduxjs/redux-thunk) mira el siguiente video:

{% youtube %} https://www.youtube.com/watch?v=h7dFY-8XNxY {% endyoutube %}
