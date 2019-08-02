# Testing

En este capítulo vamos a ver cómo escribir **pruebas automatizadas** para tus aplicaciones de [Express](https://expressjs.com/). Vamos a ver cómo crear pruebas para las rutas y pruebas de sistema (que incluyen desde la interacción en el navegador hasta la base de datos).

## Probando las rutas

Asumiendo que ya has incluído [Express](https://expressjs.com/), el primer paso es incluir las librerías que vamos a utilizar para hacer las pruebas: [Jest](https://facebook.github.io/jest/docs/en/getting-started.html), [Supertest](https://github.com/visionmedia/supertest) y [Superagent](https://github.com/visionmedia/superagent):

```
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

### MongoDB

Si estás utilizando MongoDB utiliza una variable de entorno en la aplicación para pasarle la URL de conexión:

```javascript
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/<dev-db-name>', { useNewUrlParser: true });
```

Modifica `package.json` para que la prueba se ejecute con otra base de datos:

```json
"scripts": {
  "test": "MONGODB_URI=mongodb://localhost:27017/<test-db-name> jest --forceExit"
},
```

**Nota:** No olvides cambiar `<dev-db-name>` y `<test-db-name>` con los nombres de tu base de datos de desarrollo y pruebas respectivamente.

Y en la prueba agrega lo siguiente:

```javascript
const mongoose = require("mongoose");

beforeEach(async () => {
  // antes de cada prueba limpiamos todas las colecciones para iniciar con una
  // base de datos en blanco
  for (var i in mongoose.connection.collections) {
    await mongoose.connection.collections[i].remove({});
  }
});

afterAll(async () => {
  await mongoose.disconnect();
});
```

En la primera línea estamos requiriendo Mongoose (esto lo debes agregar con los demás `require`).

En la línea 3 agregamos un `beforeEach` con una función que se va a ejecutar antes de cada prueba y que va a limpiar todas las colecciones de la base de datos.

En la línea 11 agregamos un `afterAll` con una función que se va a ejecutar después de todas las pruebas y que va a desconectarse de Mongoose.

### Autenticación

Para probar rutas que requieren autenticación podemos crear un método de ayuda que realiza la autenticación antes de ejecutar el resto de nuestra prueba. Por ejemplo, en una prueba podemos tener el siguiente código:

```javascript
const request = require('supertest');
const mongoose = require("mongoose");
const User = require("./User");
const app = require('./app');

// Esto soluciona un issue de Jest con las cookies en Superagent. Ver
// https://github.com/facebook/jest/issues/2549
request.agent.prototype._saveCookies = function(res) {
  const cookies = res.headers['set-cookie'];
  if (cookies) this.jar.setCookies(cookies[0].split(","));
};

const signIn = async (credentials) => {
  const agent = request.agent(app);
  await agent.post('/login')
      .type("form")
      .send(credentials);

  return agent;
}

describe("GET /private", () => {
  test("redirects to login if not authenticated", async () => {
    const response = await request(app).get('/polls');
    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe("/login");
  });

  test("responds with success code if authenticated", async () => {
    const credentials = { email: "pedro@gmail.com", password: "test1234" };
    const user = await User.create(credentials);
    const agent = await signIn(credentials);

    const response = await agent.get("/private");
    expect(response.statusCode).toBe(200);
  });
});
```

En la línea 13 creamos un método `signIn` que se va a encargar de autenticar al usuario haciendo `POST` a `/login`. Después tenemos dos pruebas, una que verifica que el usuario sea redirigido a `/login` si no está autenticado y otra que permita el acceso si está autenticado.

## Pruebas de sistema

Las pruebas de sistema se utilizan para probar la interacción desde el navegador hasta la base de datos. Son el tipo de pruebas más completas, aunque también las más lentas.

El primer paso es instalar [Puppeteer](https://github.com/GoogleChrome/puppeteer):

```
$ npm install --save-dev puppeteer
```

La siguiente es un ejemplo de una prueba de sistema:


```javascript
const puppeteer = require("puppeteer");
const mongoose = require("mongoose");
const app = require("./app");

let server;
let page;
let browser;
beforeAll(async () => {
  server = app.listen(3000);

  browser = await puppeteer.launch({
    headless: true,
    args: [`--window-size=1920,1080`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

beforeEach(async () => {
  for (var i in mongoose.connection.collections) {
    await mongoose.connection.collections[i].remove({});
  }
});

afterAll(async () => {
  server.close();
  await mongoose.disconnect();
  browser.close();
});

test("user can register and login", async () => {
  await page.goto("http://localhost:3000/");
  await page.click('a[href="/register"]');

  // registrarse
  await page.waitFor('input[id=email]');
  await page.type("input[id=email]", "pedro@gmail.com");
  await page.type("input[id=password]", "test1234");
  const nav = page.waitForNavigation();
  await page.click("button[type=submit]");
  await nav;

  // login
  expect(page.url()).toBe("/login");
  await page.type("input[id=email]", "pedro@gmail.com");
  await page.type("input[id=password]", "test1234");

  expect(page.url()).toBe("/");
});
```
