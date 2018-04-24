# Formularios

{% embed data="{\"url\":\"https://youtube.com/watch?v=gSOEknWAvfU?rel=0\",\"type\":\"video\",\"title\":\"\",\"icon\":{\"type\":\"icon\",\"url\":\"https://www.youtube.com/yts/img/favicon\_144-vfliLAfaB.png\",\"width\":144,\"height\":144,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://i.ytimg.com/vi/gSOEknWAvfU/maxresdefault.jpg\",\"width\":1280,\"height\":720,\"aspectRatio\":0.5625},\"embed\":{\"type\":\"player\",\"url\":\"https://www.youtube.com/embed/gSOEknWAvfU?rel=0&showinfo=0\",\"html\":\"<div style=\\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.2493%;\\"><iframe src=\\"https://www.youtube.com/embed/gSOEknWAvfU?rel=0&amp;showinfo=0\\" style=\\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;\\" allowfullscreen scrolling=\\"no\\"></iframe></div>\",\"aspectRatio\":1.7778}}" %}

  
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

