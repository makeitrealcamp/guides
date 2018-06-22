# Testing

Las **pruebas automatizadas**, o tests, nos ayudan a prevenir errores, especialmente cuando hacemos nuevos cambios sobre nuestro código, haciendo nuestras aplicaciones más mantenibles en el tiempo.

La desventaja de escribir pruebas es que es lento y es más código por mantener. Pero en el mediano y largo plazo las ventajas superan las desventajas.

## Tipos de pruebas

En general, las pruebas se pueden dividir en dos grandes categorías: unitarias y de integración.

Las **pruebas unitarias** se escriben para probar la lógica de métodos específicos de la aplicación, aislando sistemas externos como bases de datos, otros servidores, etc.

Por ejemplo, una prueba para un método que calcula el número de palabras de un texto sería una prueba unitaria.

Las **pruebas de integración** se escriben para probar funcionalidades completas de la aplicación y pueden involucrar componentes y sistemas externos como navegadores, bases de datos, frameworks, etc.

Por ejemplo, una prueba para que verifica que los usuarios se pueden registrar correctamente sería una prueba de integración.

## TDD \(Test Driven Development\) y BDD \(Behaviour Driven Development\)

**TDD** es un proceso para escribir pruebas automatizadas en el que primero se escribe una prueba fallida, después se implementa el código para que funcione y, por último, se mejora el código verificando que la prueba siga pasando.

**BDD** es muy similar pero el lenguaje cambia un poco para que sea entendible tanto por programadores como por personas que tienen mayor conocimiento del negocio.

## Librerías más populares

Existen varias librerías para realizar pruebas automatizadas en JavaScript como [Mocha](https://mochajs.org/), [Jasmine](https://jasmine.github.io/) y [Jest](https://facebook.github.io/jest/), entre otras.

En este capítulo vamos cómo configurar y utilizar [Mocha](https://mochajs.org/) y [Jest](https://facebook.github.io/jest/), pero nos concentraremos principalmente en [Jest](https://facebook.github.io/jest/), que es la que vamos a utilizar más adelante en los módulos de [Express II](../express-ii), [React](../react) y [Redux](../redux) más adelante.

### Mocha

Mocha (se pronuncia como en mochaccino) es una de las librerías de testing más antiguas y populares. Para usarla primero debes agregar la librería a tu proyecto:

```
# yarn
$ yarn add --dev mocha

# npm
$ npm install --save-dev mocha
```

Crea una archivo llamado `test/test.js` con el siguiente contenido:

```javascript
const assert = require("assert");
const sum = require('../sum');

describe("sum", () => {
  it("should add 1 + 2 to equal 3", () => {
    assert.equal(sum(1, 2), 3);
  });
});
```

Agrega el script de pruebas a tu `package.json`, que debería quedar parecido al siguiente:

```json
{
  "scripts": {
    "test": "mocha"
  },
  "devDependencies": {
    "mocha": "^x.y.z"
  }
}
```

Y ejecútalo con el siguiente comando:

```
$ npm test
```

Este ejemplo muestra varios conceptos importantes de testing. El **test** empieza en la línea 5 que utiliza el método `it`.

Un **test** se compone de uno o más **assertions**, que son los que realizan las verificaciones sobre el código. En el ejemplo anterior la siguiente línea es el **assertion**:

```javascript
assert.equal(sum(1, 2), 3);
```

En este caso el **assertion** está verificando que el método `sum` nos devuelva el resultado correcto.

Mocha no incluye una librería para hacer los **assertions** pero, en este caso, estamos utilizando la librería `assert` que viene incluída en Node.js. Sin embargo, existen otras librerías para hacer **assertions**, la más popular con Mocha se llama [Chai](http://www.chaijs.com/) que permite realizar los **assertions** utilizando diferentes estilos, el más común siendo el `expect`:

```javascript
const expect = chai.expect;

// ...
expect(sum(1, 2)).to.equal(3);
```

Pero la idea es la misma, poder realizar verificaciones sobre nuestro código.

### Jest

[Jest](https://facebook.github.io/jest/) es una librería de testing creada por Facebook y cada vez está ganando más popularidad por su facilidad de uso. A diferencia de Mocha, Jest ya trae incluidos los métodos para hacer los **assertions**.

Empieza por agregar la librería:

```
# yarn
$ yarn add jest --dev

# npm
$ npm install --save-dev jest
```

Ahora escribamos la prueba. Crea un archivo `sum.test.js` con el siguiente contenido:

```javascript
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Modifica el script del `package.json` para que utilice Jest:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Y ejecútalo con el siguiente comando:

```javascript
$ npm test
```

[Jest](https://facebook.github.io/jest/) utiliza algunos métodos (llamados **matchers**) para verificar los valores de diferentes formas.

En la prueba anterior vimos el método `toBe` que verifica que el valor sea exactamente igual.

Una variación del `toBe` es `toEqual` que se utiliza para verificar objetos:

```javascript
test('igualdad de objetos', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
```

El opuesto del `toBe` es `not.toBe`:

```javascript
test("opuesto de toBe", () => {
  expect(2 + 2).not.toBe(5);
});
```

Otros **matchers** utilizados son:

* `toBeNull` verifica que el valor sea `null`.
* `toMatch` verifica contra una expresión regular.
* `toContain` verifica que un array tenga un valor específico.
* `toThrow` verifica que se haya lanzado una excepción.

Otros matchers y la referencia a la lista completa de **matchers** la encuentras en el [este enlace](https://facebook.github.io/jest/docs/en/using-matchers.html).
