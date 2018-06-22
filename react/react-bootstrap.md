# React Bootstrap

{% youtube %} https://youtube.com/watch?v=WtyTkA-BMhI {% endyoutube %}

Puedes utilizar Bootstrap 3 en tu proyecto de React a través de la librería [react-bootstrap](https://react-bootstrap.github.io/).

**Nota:** Esta explicación aplica para Bootstrap 3. Los desarrolladores de [react-bootstrap](https://react-bootstrap.github.io/) están trabajando en el soporte para Bootstrap 4 que puedes monitorear siguiendo [este issue](https://github.com/react-bootstrap/react-bootstrap/pull/2752). Otra opción para Bootstrap 4 es [reactstrap](https://reactstrap.github.io/).

El primer paso para utilizar [react-bootstrap](https://react-bootstrap.github.io/) es instalar la librería en tu proyecto.

Con npm:

```text
$ npm install --save react-bootstrap
```

Con Yarn:

```text
$ yarn add react-bootstrap
```

El siguiente paso es agregar el CSS a tu proyecto:

```markup
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
```

Ahora puedes importar y utilizar la grilla y los componentes de la siguiente forma:

```javascript
import { Button } from ‘react-bootstrap’;

...

<Button bsStyle="primary">Primary</Button>
```

Consulta [la documentación](https://react-bootstrap.github.io/getting-started/introduction/) para más información.
