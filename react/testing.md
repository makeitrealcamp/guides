# Testing

Para escribir las pruebas automatizadas de nuestras aplicaciones de React vamos a utilizar [Jest](https://facebook.github.io/jest/) y [Enzyme](http://airbnb.io/enzyme/).  

[Enzyme](http://airbnb.io/enzyme/) es una librería que nos va a permitir escribir pruebas de nuestros componentes más fácilmente.

## Configuración

[Jest](https://facebook.github.io/jest/) viene incluído con [create-react-app](https://github.com/facebook/create-react-app), pero [Enzyme](http://airbnb.io/enzyme/), así que debemos agregar la librería con npm o Yarn:

```
# npm
npm install --save-dev enzyme enzyme-adapter-react-16

# Yarn
yarn add enzyme enzyme-adapter-react-16 --dev
```

El siguiente paso es crear un archivo `src/setupTests.js` con el siguiente contenido:

```javascript
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });
```

**Nota:** Si estás utilizando React 15 debes cambiar las referencias a la versión 16 por referencias a la versión 15 (en la librería y el código anterior).

## Ejecutando pruebas

Para ejecutar las pruebas vas a utilizar el siguiente comando:

```
# npm
npm test

# Yarn
yarn test
```

Ese comando deja un proceso corriendo que ejecuta las pruebas cada vez que cambia el código. Puedes oprimir "a" para ejecutar todas las pruebas y "q" para salir.

## Creando pruebas

Por defecto [create-react-app](https://github.com/facebook/create-react-app) crea una prueba de ejemplo en `src/App.test.js`:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

La vamos a modificar para utilizar [Enzyme](http://airbnb.io/enzyme/):

```javascript
import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<App />);
});
```

`shallow` es una función de [Enzyme](http://airbnb.io/enzyme/) que se utiliza para probar componentes de forma aislada, ya que no renderiza los subcomponentes.

Si deseas renderizar los subcomponentes utiliza `render` o `mount`.

`render` es bastante limitado y es recomendado cuando sólo necesitas analizar el resultado de la estructura HTML.

`mount` lanza un navegador sin cabeza (headless browser) que permite simular eventos (como clicks), ejecutar código JavaScript, etc. Sin embargo es mucho más lento que `shallow` o `render`, así que úsalo sólo cuando sea completamente necesario.

[Jest](https://facebook.github.io/jest/), por defecto, toma las pruebas de los archivos que terminen en `test.*` o que se encuentren en la carpeta `__tests__`.

Existen varios métodos que puedes utilizar para verificar los componentes.

### find

Quizá el método más útil para verificar tus componentes es el `find`, que permite buscar elementos específicos con selectores CSS. Por ejemplo:

```javascript
it("renders task list" () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('TaskList').length).toBe(1);
});
```

En este caso estamos verificando que exista un componente `TaskList` dentro de `App`. Si queremos verificar los elementos dentro de `TaskList` utilizaríamos `render` en vez de `shallow`:

```javascript
it("renders task list" () => {
  const wrapper = render(<App />); // render - en vez de shallow
  expect(wrapper.find('ul .task').length).toBe(3);
});
```

### simulate

Este método permite simular eventos como clicks, presionar teclas, enviar formularios, etc. Sólo está disponible con `shallow` y `mount`. Por ejemplo, podemos simular la creación de una nueva tarea (asumiendo que tenemos un campo de texto y un botón para hacerlo):

```javascript
it("creates a new task" () => {
  const wrapper = mount(<App />);

  wrapper.find("input#title").simulate("change", { target: { value: "Hacer mercado" }})
  wrapper.find(".btn-new-task").simulate("click");

  expect(wrapper.find('ul .task').length).toBe(4);
});
```

### setState

Permite cambiar el estado del componente.

```javascript
it("renders task list" () => {
  const wrapper = mount(<App />);

  wrapper.setState({ tasks: [{...}, {...}] });
  expect(wrapper.find('ul .task').length).toBe(2);
});

El listado completo de métodos se encuentra en [este enlace](http://airbnb.io/enzyme/docs/api/).

{% youtube %} https://www.youtube.com/watch?v=phuXKvUsYi8 {% endyoutube %}
