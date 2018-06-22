# Formularios

{% youtube %} https://youtube.com/watch?v=gSOEknWAvfU {% endyoutube %}

 Para trabajar con campos de entrada en React debes mantener sincronizado el valor de cada campo con el estado del componente. Esto requiere un poco más de código en comparación a otros frameworks pero está alineado con la filosofía de React: que todos los cambios al estado sean explícitos.

Veamos el siguiente código:

```javascript
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { name: "" };
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={this.updateName.bind(this)} />
      </div>
    );
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }
}
```

El primer paso es inicializar el estado. En este caso vamos a tener un único campo de entrada que va a almacenar un nombre:

```javascript
this.state = { name: "" };
```

El siguiente paso es mantener sincronizado el campo con la llave `name` del estado. Para eso necesitamos definir el campo de la siguiente forma:

```javascript
<input type="text" value={this.state.name} onChange={this.updateName.bind(this)} />
```

El valor de este campo va a ser `this.state.name` y cuando cambie vamos a llamar al método `updateName` que se va a encargar de actualizar el estado con el nuevo valor:

```javascript
updateName(event) {
  this.setState({
    name: event.target.value
  });
}
```

La ventaja es que si queremos utilizar el valor en cualquier otro método simplemente necesitamos obtener el valor del estado. Veamos un ejemplo con un botón que al hacerle click utiliza el valor del campo de entrada para mostrar una alerta:

```javascript
render() {
  return (
    <div>
      <input type="text" ... />
      <button onClick={this.saluda.bind(this)}>Saluda</button>
    </div>
  );
}

saluda() {
  alert(`Hola ${this.state.name}!`);
}
```

Al hacer click sobre el botón se va a llamar el método `saluda` que utiliza `this.state.name` para mostrar la alerta. No es necesario obtener el valor directamente del campo de entrada.
