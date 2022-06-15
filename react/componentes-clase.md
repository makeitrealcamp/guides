# Componentes de Clase

Aunque los componentes de clase han perdido popularidad y la comunidad de React recomienda utilizar componentes funcionales, aún existen proyectos que utilizan componentes de clases y por eso creamos esta guía.

Un reto interesante (y quiza una de las razones por las que los componentes de clase han perdido popularidad) es que para trabajar con componentes de clase debes saber lo siguiente:

* Cómo definir una clase.
* Qué es herencia.
* Cómo definir un constructor.
* Para qué se utiliza la palabra clave `super`.
* Cómo utilizar `this` correctamente.
* Para qué se utiliza el método `bind`.

Esto temas los puedes consultar en las guías de la sección [JavaScript II](../javascript-ii/).

## Definiendo un componente

Para definir un componente de clase se debe extender `Component` y crear un método `render` que retorna el JSX:

```javascript
import React, { Component } from 'react';

class Title extends Component {
  render() {
    return <h1>Hola mundo</h1>;
  }
}
```

## Props

Para recibir `props` en un componente clase debemos crear un constructor que los reciba:

```javascript
class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.name}</h1>
  }
}
```

Lo primero que hacemos en el constructor es llamar el constructor padre con los `props`, esto los almacena para que los podamos obtener con `this.props`.

## Estado

A diferencia de los componentes funcionales que utilizan el hook `useState` para manejar el estado, los componente clase cuentan con un objeto llamado `state` donde vamos a almacenar nuestro estado.

Cada vez que cambia `state` (a través del método `setState`), React vuelve a renderizar el componente en la vista.

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

En este ejemplo estamos definiendo un componente llamado `Welcome` que inicializa el estado con una llave `title`. En el método `render` estamos obteniendo el valor de esa llave con `this.state.title`.

Para cambiar el estado utilizamos el método `setState`:

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

## Métodos de cíclo de vida

Una ventaja de los componentes de clase es que cuenta con métodos específicos para cada momento del ciclo de vida de un componente. Los más importantes son:

* `componentDidMount`: se ejecuta justo después que se ha renderizado el componente, ideal para hacer llamados a API o cualquier otra inicialización que necesita el componente.
* `componentWillUnmount`: se ejecuta antes de que el componente se remueve del DOM, cuando se va a "desmontar".

Estos métodos están definidos en `React.Component` y se sobrescriben en el componente. Por ejemplo:

```javascript
import React, { Component } from 'react';

class Welcome extends Component {
  componentDidMount() {
    console.log("El componente ha sido montado");
  }

  componentWillUnmount() {
    console.log("El componente va a ser desmontado");
  }

  render() {
    // return JSX
  }
}
```

Otros métodos que podemos sobrescribir son los siguientes:

* `componentWillUpdate`: se ejecuta antes de que el componente se va a volver a renderizar (p.e. porque se llamó `setState` o los `props` cambiaron).
* `shouldComponentUpdate`: este método nos permite decidir si el componente se debe volver a renderizar, si retorna `true` se vuelve a renderizar, de lo contrario no se renderiza.
* `componentDidUpdate`: se ejecuta después de que el componente se volvió a renderizar.