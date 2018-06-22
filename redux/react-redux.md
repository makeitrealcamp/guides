# Usando la librería react-redux

react-redux es una librería que nos ayuda a conectar el **store** con las propiedades del componente. Sin embargo, esta librería no es un requisito para utilizar Redux con React.

El primer paso es instalar la librería con npm o Yarn:

```
# npm
npm install --save react-redux

# yarn
yarn add react-redux
```

El siguiente paso es envolver nuestro componente principal en el componente `Provider` de react-redux, al que le vamos a pasar el **store**. En `app.js`:

```javascript
// acá van todos los imports

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

Y el segundo paso es conectar nuestros componentes utilizando el método `connect`, que recibe dos funciones: una que relaciona el estado con las propiedades del componente y otra que relaciona los métodos a propiedades.

Por ejemplo, imagina que tenemos el siguiente componente:

```javascript
// imports

class TaskList extends Component {
  constructor() {
    super();

    this.state = { tasks: [] };
    store.subscribe(() => {
      this.setState({
        tasks: store.getState().tasks
      });
    });
  }

  render() {
    // utiliza this.state.tasks, newTask(..) y removeTask(...)
  }

  newTask(task) {
    store.dispatch(newTask(task));
  }

  removeTask() {
    store.dispatch(removeTask(task));
  }
}
```

Utilizando react-redux podemos simplificar bastante nuestro componente:

```javascript
class TaskList extends Component {
  render() {
    return (
      // utiliza this.props.tasks, this.props.newTask, this.props.removeTask
    );
  }
}

const mapState = state => {
  return {
    tasks: state.tasks
  };
};

const mapMethods = dispatch => {
  return {
    newTask(task) {
      dispatch(newTask(task));
    },
    // ... other methods
  };
}

export default connect(mapState, mapMethods)(TaskList);
```

Lo más importante de este código es la última línea que conecta el estado y los métodos con las propiedades del componente. Fíjate que el componente sólo tiene el método `render`, así que lo podemos convertir a una función:

```javascript
const TaskList = props => {
  return (
    // utiliza props.tasks, props.newTask, props.removeTask
  );
};

// ...
```

O incluso más elegante utilizando desestructuración de argumentos:

```javascript
const TaskList = ({ tasks, newTask, removeTask }) => {
  return (
    // utiliza tasks, newTask, removeTask
  );
};

// ...
```

{% youtube %} https://www.youtube.com/watch?v=dAm3jicYvR8 {% endyoutube %}
