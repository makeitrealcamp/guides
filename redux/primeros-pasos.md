# Primeros pasos

El primer paso para trabajar con Redux es instalar la librería con npm o Yarn:

```
# npm
npm install --save redux

# yarn
yarn add redux
```

El componente principal de Redux es el **store**, que va a contener el estado compartido de nuestra aplicación. Para crear un **store** se utiliza el método `createStore`:

```javascript
const store = createStore();
```

El método `createStore` recibe dos argumentos. El primero es una función, llamada **función reductora**, que es la que se va a encargar de hacer cambios sobre el estado. El segundo argumento es el estado inicial de nuestra aplicación. Por ejemplo:

```javascript
const reducer = (state, action) => {
  return state;
};

const store = createStore(reducer, { tasks: [] });
```

Las **funciones reductoras** reciben el estado actual del **store** y una **acción** (un objeto), y retornan un nuevo objeto que va a reemplazar el estado del **store**.

La **función reductora** no se invoca directamente. Para invocar la **función reductora** se utiliza el método `dispatch` del **store**, que recibe un objeto. Generalmente se utiliza la llave `type` para saber qué cambios hacer sobre el estado en la **función reductora**.

```javascript
store.dispatch({ type: "CLEAR_TASKS" });
```

Por debajo, el **store** invoca la **función reductora** pasándole el estado actual como primer argumento y el objeto que recibió en el `dispatch` como segundo argumento. La función reductora utiliza la llave `type` para saber qué cambios hacer sobre el estado:

```javascript
const reducer = (state, action) => {
  if (action.type == "NEW_TASK") {
    // retorna el estado con una nueva tarea
  } else if (action.type == "REMOVE_TASK") {
    // retorna el estado eliminando una tarea
  } else if (action.type == "CLEAR_TASKS") {
    return { tasks: [] };
  }

  return state;
};
```

Además de la llave `type`, podemos enviar más información en ese objeto que le pasamos al `dispatch`:

```javascript
store.dispatch({ type: "NEW_TASK", task: { id: 1, title: "Nueva tarea" } });
```

La **función reductora** ahora puede utilizar esa información adicional:

```javascript
const reducer = (state, action) => {
  if (action.type == "NEW_TASK") {
    return { tasks: state.tasks.concat(action.task) }
  } else if (action.type == "REMOVE_TASK") {
    // retorna el estado eliminando una tarea
  } else if (action.type == "CLEAR_TASKS") {
    return { tasks: [] };
  }

  return state;
};
```

La **función reductora** siempre debería retornar un nuevo objeto si va a realizar cambios sobre el estado, nunca realizar cambios sobre el estado (el primer argumento que recibe la función).

Para obtener el estado actual del **store** se utiliza el método `getState`:

```javascript
store.getState(); // { tasks: [] } o el estado que esté en ese momento
```

Para escuchar cambios sobre el **store** se utiliza el método `subscribe`:

```javascript
store.subscribe(() =>
  console.log("El nuevo estado es: ", store.getState())
)
```

Para resumir:

1. Un **store** se crea con el método `createStore`, que recibe una **función reductora** y un estado inicial.
2. Todos los cambios al estado están centralizados en la **función reductora**, que recibe un estado y una **acción**, y retorna un nuevo estado.
3. El **store** expone tres métodos: `dispatch`, `subscribe` y `getState`. `dispatch` se utiliza para invocar la **función reductora**. `subscribe` se utiliza para escuchar cambios al estado, y `getState` se utiliza para obtener el estado actual.

El estado puede ser desde un tipo básico de JavaScript (enteros, booleanos, etc.), un arreglo, o un objeto (sin importar lo complejo que sea).

En aplicaciones reales el estado es generalmente un objeto y una de las críticas a Redux es que ese objeto se puede volver muy grande y difícil de mantener.

Otra crítica a Redux es que la **función constructura** se puede volver grande e inmanejable cuando se tengan muchos tipos de **acciones**. Sin embargo, más adelante vamos a ver cómo dividir la **función constructora** en funciones más manejables.

{% youtube %} https://www.youtube.com/watch?v=RZNNu2pO49g {% endyoutube %}

{% youtube %} https://www.youtube.com/watch?v=aaMoVAcP5-w {% endyoutube %}
