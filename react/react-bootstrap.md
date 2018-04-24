# React Bootstrap

{% embed data="{\"url\":\"https://youtube.com/watch?v=WtyTkA-BMhI?rel=0\",\"type\":\"video\",\"title\":\"\",\"icon\":{\"type\":\"icon\",\"url\":\"https://www.youtube.com/yts/img/favicon\_144-vfliLAfaB.png\",\"width\":144,\"height\":144,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://i.ytimg.com/vi/WtyTkA-BMhI/maxresdefault.jpg\",\"width\":1280,\"height\":720,\"aspectRatio\":0.5625},\"embed\":{\"type\":\"player\",\"url\":\"https://www.youtube.com/embed/WtyTkA-BMhI?rel=0&showinfo=0\",\"html\":\"<div style=\\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.2493%;\\"><iframe src=\\"https://www.youtube.com/embed/WtyTkA-BMhI?rel=0&amp;showinfo=0\\" style=\\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;\\" allowfullscreen scrolling=\\"no\\"></iframe></div>\",\"aspectRatio\":1.7778}}" %}

  
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

