# Testing

En este capítulo vamos a ver cómo escribir **pruebas automatizadas** para las rutas de Express.js.

Asumiendo que ya has incluído Express.js, el primer paso es incluir las librerías que vamos a utilizar para hacer las pruebas: [Jest](https://facebook.github.io/jest/docs/en/getting-started.html), [Supertest](https://github.com/visionmedia/supertest) y [Superagent](https://github.com/visionmedia/superagent):

```
# yarn
$ yarn add jest supertest superagent --dev

# npm
$ npm install jest supertest superagent --save-dev
```

El siguiente paso es separar la aplicación del servidor. Por ejemplo, la aplicación puede estar en `app.js`:

```javascript
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})
module.exports = app;
```

Y en `server.js` requerimos `app.js` y prendemos el servidor:

```javascript
const app = require('./app');
app.listen(3000, () => console.log('Listening on port 3000!'));
```

De esa forma vamos a importar `app.js` para realizar las pruebas de nuestras rutas.

En el archivo `app.test.js` escribe las pruebas:

```javascript
const request = require('supertest');
const app = require('./app');

describe('/', () => {
  test('GET responds with success code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
```

Revisa que tu `package.json` tenga configurado el script de pruebas con la opción `--forceExit`:

```json
{
  "scripts": {
    "test": "jest --forceExit"
  },
  ...  
}
```

Y ejecuta las pruebas con el siguiente comando:

```
$ npm test
```
