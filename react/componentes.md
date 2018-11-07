# Componentes

{% youtube %} https://youtube.com/watch?v=BZ_dm32OHKc {% endyoutube %}


 En React se introduce el concepto de **componentes** para crear la interfaz gráfica de nuestra aplicación.

El objetivo es que cada componente sea independiente y encapsule su markup \(JSX\), sus estilos \(CSS\) y su estado \(JavaScript\). De esa forma los componentes pueden ser reutilizables y la interfaz gráfica más fácil de mantener y evolucionar.

## Definiendo un componente

Un componente se puede definir de dos formas: como una clase que extiende `Component` con un método `render`:

```javascript
import React, { Component } from "react";

class Title extends Component {
  render() {
    return <h1>Hola mundo</h1>;
  }
}
```

O como una función que retorna lo que se va a renderizar:

```javascript
const Title = () => {
  return <h1>Hola Mundo</h1>;
};
```

## Utilizando un componente

Para utilizar un componente debes importarlo y después incluirlo en tu **JSX** como se muestra en el siguiente ejemplo:

```javascript
import React, { Component } from "react";
import Title from "./Title"; // importarlo

class App extends Component {
  render() {
    // incluirlo
    return (
      <Title />
    );
  }
}
```

## Comunicación entre componentes

Todo componente recibe un objeto llamado `props` con los atributos que se le pasan a través de **JSX**. Por ejemplo, podemos pasar un atributo `name` al componente `Welcome` \(que en un momento vamos a definir\):

```javascript
<Welcome name="Pedro" />
<Welcome name="Juan" />
```

Si defines el componente en una clase, los `props` se reciben en le constructor de la clase:

```javascript
class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

Si defines el componente como una función, los `props` se reciben como un parámetro de la función:

```javascript
const Welcome = (props) => {
  return <h1>{props.name}</h1>;
};
```

## El estado de un componente

Cada componente que se defina como una clase cuenta con un objeto para almacenar información llamado `state`.

Cada vez que cambia el `state`, React vuelve a renderizar \(pintar\) el componente en la vista.

```javascript
class Welcome extends Component {
  constructor() {
    super();

    this.state = {
      title: "Hola Mundo"
    };
  }

  render() {
    return <h1>{this.state.title}</h1>;
  }
}
```

En este ejemplo estamos definiendo una componente `Welcome` que inicializa el estado con una llave `title`. En el método `render` estamos obteniendo el valor de esa llave con `this.state.title`.

Para cambiar el estado utiliza el método `setState`:

```javascript
this.setState({
  title: "Hello World"
});
```

Por ejemplo, podemos cambiar nuestro ejemplo anterior para que cuando hagan click sobre el `h1` cambie el texto. Para eso vamos a definir un método `updateText` que vamos a invocar cuando hagan `click` sobre el `h1`:

```javascript
class Welcome extends Component {
  constructor() {
    ...

    // tenemos que enlazar el método al contexto actual
    this.updateText = this.updateText.bind(this);
  }

  render() {
    return <h1 onClick={this.updateText}>{this.state.title}</h1>;
  }

  updateText() {
    this.setState({
      title: "Hello World"
    });
  }
}
```

Veamos el mismo ejemplo en Codepen, haz click sobre el `h1`:

{% embed url="https://codepen.io/germanescobar/pen/xpZzrx" %}

**Nota:** Utiliza siempre el método `setState` para cambiar el estado, de lo contrario la vista no se va a actualizar.
