# Redux ToolKit

Redux Toolkit tiene como objetivo simplificar Redux con una mejor abstracción y mas conveniente sobre el “texto original” del que se quejaron tantos desarrolladores. Redux esta bien, pero era un poco complicado.

Redux ha cambiado mucho. El kit de herramientas (Toolkit) de Redux se ha convertido en la forma recomendada de usar Redux, el nuevo *codebase* basado en el kit de herramientas de Redux diferirán mucho de lo que solíamos escribir en el pasado.

Sin embargo, los bloques de construcción fundamentales de Redux siguen siendo la acción, los *reducers* (reductores), el *middleware* y el store (*tienda*), y necesita un buen conocimiento de estos bloques para dominar Redux y el kit de herramientas de Redux.

Si has llegado hasta aquí y te has dado cuenta que para usar Redux es necesario hacer lo siguiente:

- Configuración (boilerplate): Redux requiere demasiado código repetitivo, lo que hace que sea engorroso escribir código eficiente y limpio
- Agregar muchos paquetes para construir una aplicación a gran escala.

Hoy en dia, contamos con [Redux toolkit](https://redux-toolkit.js.org/) que nos ofrece las siguientes soluciones:

- Simplifica la configuración de redux
- Elimina la necesidad de agregar múltiples paquetes para tener una aplicación escalable.
- Reduce el código repetitivo.

Actualmente no se recomienda usar `react-redux` sin `@reduxjs/toolkit`.

## RTK - (Redux Tool Kit)

Proporciona el soporte automático para muchas dependencias que eran necesario instalar por aparte con redux tradicional, entre ellas encontramos:

- [Redux Dev-tools]()
- [immer.js](https://www.npmjs.com/package/immer)
- [redux](https://www.npmjs.com/package/redux)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [Reselect](https://www.npmjs.com/package/reselect)

En las siguientes secciones, exploraremos Redux Toolkit con el fin de ayudarte a conocer los principales conceptos.

## Instalacion

La forma recomendada de iniciar nuevas aplicaciones con React y Redux es mediante el uso de la plantilla oficial Redux+JS o la plantilla Redux+TS para Create React App, que aprovecha la integración de Redux Toolkit y React Redux con los componentes de React.

```bash
# Redux + Plain JS template
npx create-react-app my-app --template redux
```

### Una aplicación existente

Redux Toolkit está disponible como un paquete en NPM para usar con un paquete de módulos o en una aplicación Node:

```bash
# NPM
npm install @reduxjs/toolkit
```

## Qué está incluido:

Redux Toolkit includes these APIs:

- [configureStore()](https://redux-toolkit.js.org/api/configureStore): envuelve `createStore` para proporcionar opciones de configuración simplificadas y buenos valores predeterminados. Puede combinar automáticamente los reductores, agregar cualquier middleware de Redux, incluye  `redux-thunk` de forma predeterminada y permite el uso de la extension Redux DevTools en los navegadores.
- [createReducer()](https://redux-toolkit.js.org/api/createReducer): permite proporcionar una tabla de búsqueda de tipos de acción para los casos de los reducers. Además, utiliza automáticamente la [biblioteca `immer`](https://github.com/immerjs/immer) para permitirle escribir actualizaciones inmutables más simples con código mutativo normal, como `state.todos[3].completed = true`.
- [createAction()](https://redux-toolkit.js.org/api/createAction): genera una función de *creador de acción* para el tipo de acción dada. La función en sí tiene `toString()` definido, por lo que puede usarse en lugar de la constante de tipo.
- [createSlice()](https://redux-toolkit.js.org/api/createSlice): acepta un objeto de funciones reductoras, un nombre de sección (slice) y un valor de estado inicial, y genera automáticamente un reductor slice con los creadores de acción y los tipos de acción correspondientes.
- [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk): acepta un tipo de acción y una función que devuelve una promesa, y genera un procesador que envía tipos de acción `pending/fulfilled/rejected` en función de esa promesa

## Preparando el Store

Para empezar a escribir lógica con redux, lo primero que se tiene que hacer es configurar el `Store`. Para eso [Redux toolkit](https://redux-toolkit.js.org/) provee un método que nos ayuda con el procedimiendo, el cual se llama `configureStore`.

```jsx
// store/index.js

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
```

**Conexión con React**

Ahora es momento de poner disponible el store hacia React, para eso `react-redux` provee un `Provider` para poner disponible el `Store` en todo el árbol de componentes.

```jsx
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

## Crear Slices

Redux Toolkit ha ayudado a codificar la noción de que, en lugar de dividir nuestra redux store en varios archivos reductores, archivos de acción y archivos selectores, debe dividirse en **slices** (secciones). Cada slice en general, es responsable de poseer los reductores, selectores o procesadores que acceden o manipulan principalmente esa información.

El método `createSlice` de RTK simplifica la forma en que se crean los reductores. Los reductores son el lugar donde el estado redux se actualiza (o se reemplaza). Se pasa una acción a nuestra tienda redux y cada uno de nuestros reductores tiene la oportunidad de responder a esa acción con un nuevo estado. Con RTK, se definen métodos de reducción y las acciones y los tipos de acción asociados con esos métodos se generan automáticamente.

```jsx
import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

## Reducer

Como se mencionó anteriormente, los [reducers](https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers#writing-reducers) son funciones puras que toman el estado actual y la acción para retornar un nuevo estado.

[Redux toolkit](https://redux-toolkit.js.org/api/createreducer) exporta una función llamada `createReducer` la cual facilita la creación de un reducer agregando ciertas características que facilitan el desarrollo.

`createReducer`

```jsx
import { createAction, createReducer } from '@reduxjs/toolkit'

const reducer = createReducer(initalState, (builder) => {});
```

Redux toolkit tiene un objeto builder, el cual expone una serie de métodos como `addCase` con el cual le recibe como parámetros.

**ActionCreator:** La función generada por `createAction` o una acción como tal.

**Reducer:** El reducer encargado solo de manejar esta acción.

Ejemplo:
```jsx
import { createAction, createReducer } from '@reduxjs/toolkit'

const increment = createAction('counter/increment')
const decrement = createAction('counter/decrement')
const incrementByAmount = createAction('counter/incrementByAmount')

const initialState = { value: 0 }

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
})
```

## Accciones

Las acciones son objetos planos que expresan una intención de cambiar el estado. Puedes pensar en una acción como un evento ocurrido en la aplicación, por ejemplo; se agregó un producto, se eliminó un contacto, cargando contactos, todos ellos describen algo que está pasando en al app.

Dicho esto podemos empezar a escribir acciones, las acciones tiene un [estándar](https://medium.com/@khriztianmoreno/flux-standard-action-fsa-499369bf34fa) que indican que deben ser así.

```js
{
  type: 'ADD_TODO',
  payload: {
    text: 'Do something.'
  }
}
```

Redux toolkit Simplifica este procedimiento con un utility llamado [createAction](https://redux-toolkit.js.org/api/createAction) el cual es una [HOF](https://leobar37.medium.com/hofs-clousures-y-callbacks-para-ser-feliz-en-javascript-fa105ed6ad44)(higher order function) los cuales son funciones que retornan funciones.

```jsx
import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction("ADD_TODO");
```

## Conclusión

Redux Toolkit es beneficioso para todos los usuarios de Redux independientemente de su nivel de habilidad. Se puede agregar como una parte interna del proyecto al inicio o se puede agregar durante la actualización interna en el existente.

Pero aún asi, es necesario que tengas el conocimiento básico de cómo manejar y cambiar el estado de manera inmutable y también debe tener una idea de lo que está sucediendo bajo el capó antes de migrar de Redux a Redux Toolkit.
