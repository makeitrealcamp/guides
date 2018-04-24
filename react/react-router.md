# React Router

{% embed data="{\"url\":\"https://youtube.com/watch?v=oWEys5cX3kE?rel=0\",\"type\":\"video\",\"title\":\"\",\"icon\":{\"type\":\"icon\",\"url\":\"https://www.youtube.com/yts/img/favicon\_144-vfliLAfaB.png\",\"width\":144,\"height\":144,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://i.ytimg.com/vi/oWEys5cX3kE/maxresdefault.jpg\",\"width\":1280,\"height\":720,\"aspectRatio\":0.5625},\"embed\":{\"type\":\"player\",\"url\":\"https://www.youtube.com/embed/oWEys5cX3kE?rel=0&showinfo=0\",\"html\":\"<div style=\\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.2493%;\\"><iframe src=\\"https://www.youtube.com/embed/oWEys5cX3kE?rel=0&amp;showinfo=0\\" style=\\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;\\" allowfullscreen scrolling=\\"no\\"></iframe></div>\",\"aspectRatio\":1.7778}}" %}

  
 Para crear aplicaciones en React que estén compuestas de varias pantallas necesitamos un enrutador.

Un enrutador nos permite relacionar URL's con componentes.

React no incluye un enrutador pero podemos utilizar una liberaría llamada [react-router](https://github.com/ReactTraining/react-router).

El primer paso para utilizar [react-router](https://github.com/ReactTraining/react-router) es instalar la librería.

Con npm:

```text
$ npm install --save react-router
```

Con Yarn:

```text
$ yarn add react-router
```

Para utilizar [react-router](https://github.com/ReactTraining/react-router) en tu proyecto primero debes importarlo y utilizar los componentes `Router`, `Route` para definir las rutas:

```javascript
import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
...

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
        <Route path="about" component={About} />
      </Router>
    );
  }
}
```

En este caso, cuando ingresen a la raíz de nuestro proyecto \(`/`\) se renderizará el componente `Home` y cuando ingresen a `/about` se renderizará el componente `About`.

## Templates

Para definir template que sea común a varias pantallas de nuestra aplicación puedes crear rutas anidadas de la siguiente forma:

```javascript
render() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Template}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
      </Route>
    </Router>
  );
}
```

Lo primero es definir una ruta que va a definir el template y rutas anidadas que van a utilizar ese template. En este caso nuestro template va a ser definido por un componente llamado `Template`.

El componente `IndexRoute` se utiliza para definir el componente que se va a utilizar cuando alguien ingrese al path definido en la padre \(en este caso a la raíz del proyecto `/`\).

El componente `Template` se definiría de la siguiente forma:

```javascript
class Template extends Component {
  render() {
    return (
      <div>
        <h1>Mi Super Aplicación</h1>
        {this.props.children}
      </div>
    );
  }
}
```

Cada componente como `Home` y `About` se va a renderizar en la línea `{this.props.children}`. El `<h1>` aparecerá en todas las páginas.

## Links internos

Para crear links a las diferentes rutas de tu aplicación sin refrescar la página vas a utilizar otro componente de [react-router](https://github.com/ReactTraining/react-router) llamado `Link` que puedes utilizar de la siguiente forma:

```javascript
<Link to=“/”>Ir al Index</Link>
<Link to=“about”>Ir al About</Link>
```

