# Testing

Para escribir pruebas automatizadas en nuestras aplicaciones en React vamos a utilizar una librería llamada [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (a veces abreviado RTL).

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro) no reemplaza [Jest](https://facebook.github.io/jest/), que seguimos necesitando para definir y correr nuestras pruebas, sino que nos ofrece objetos y métodos para renderizar, interactuar y validar nuestro código de React.

## Configuración

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro) viene incluído con [create-react-app](https://github.com/facebook/create-react-app). En otras configuraciones que no esté incluído debemos instalar las siguientes librerías manualmente:

```text
# npm
npm install --save-dev jest @testing-library/react @testing-library/jest-dom 

# Yarn
yarn add jest @testing-library/react @testing-library/jest-dom --dev
```

El siguiente paso es crear un archivo `src/setupTests.js` con el siguiente contenido:

```javascript
import '@testing-library/jest-dom';
```

## Ejecutando pruebas

Para ejecutar las pruebas vas a utilizar el siguiente comando:

```text
# npm
npm test

# Yarn
yarn test
```

**Nota:** En [create-react-app](https://github.com/facebook/create-react-app) este comando deja un proceso corriendo que ejecuta las pruebas cada vez que cambia el código. Puedes oprimir "a" para ejecutar todas las pruebas y "q" para salir.

## Escribiendo la primera prueba

Escribamos una prueba que renderice un componente `App` y verifique que tenga un texto específico:

```javascript
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders text", () => {
  render(<App />)
  expect(screen.getByText(/learn react/i)).toBeInTheDocument()
})
```

La primera línea importa algunos objetos de React Testing Library que vamos a necesitar en la prueba: `render` para renderizar el componente y `screen` para buscar el elemento.

La segunda línea importa el componente `App`.

De la cuarta a la séptima línea tenemos la prueba que renderiza el componente y verifica que exista un elemento con texto "learn react" (ignorando mayúsculas y minúsculas) en el documento.

## Encontrando elementos

Una parte importante de las pruebas es encontrar elementos en la página para hacer validaciones (assertions) o interacciones (p.e. click en el mouse o escribir en el teclado).

React Testing Library ofrece varias formas de encontrar elementos, entre ellas:

* **Por rol** (`getByRole`): el rol de un elemento describe su funcionalidad y se utiliza para mejorar la accesibilidad de la página. Es posible cambiar el rol por defecto de un elemento utilizando la propiedad `role`.
* **Por texto** (`getByText`): por el texto del elemento.
* **Por testId** (`getByTestId`): por el valor del atributo `data-testid` de cualquier elemento.

Estas son las tres formas que nos parecen más importantes. Para ver la lista completa te recomendamos revisar la [documentación de la librería](https://testing-library.com/docs/queries/about).

Por ejemplo, para seleccionar un encabezado (`h1`) podríamos utilizar el rol "heading", el texto o agregarle un atributo `data-testid`:

```javascript
// <h1>Título</h1>
screen.getByRole("heading", { level: 1 })

// <h1>Título</h1>
screen.getByText("Título")

// <h1 data-testid="title">Título</h1>
screen.getByTestId("title")
```

Estos métodos retornan el elemento o lanzan una excepción si no lo encuentran. Fíjate que estamos llamando los métodos sobre el objeto `screen`, que es la forma más común.

En React Testing Library no hay forma de encontrar elementos por `id` o `class` (`className` en JSX). La razón es que estos atributos pueden cambiar fácilmente y hacen que las pruebas sean muy frágiles.

Aunque React Testing Library promueve la búsqueda por rol, en la práctica no es tan fácil conocer todos los roles. Afortunadamente existe una herramienta llamada [Testing Playground](https://testing-playground.com/) que nos ayuda con esta tarea. También existe una lista de todos los roles en [este recurso](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques).

`getByRole` tiene las siguientes variaciones: `queryByRole`, `findByRole`, `getAllByRole`, `queryAllByRole`, `findAllByRole`. Lo mismo ocurre con `getByTestId` y las demás formas de encontrar elementos.

Las variaciones que tienen la palabra `All` se utilizan para encontrar varios elementos, las que no la tienen se utilizan para encontrar un solo elemento. Por ejemplo:

```javascript
// retorna un arreglo con todos los encabezados
screen.getAllByRole("heading")

// retorna un encabezado, si no hay o hay más de uno genera una excepción
screen.getByRole("heading")
```

`getBy` y `queryBy` (y su contrapartida `getAllBy` y `queryAllBy`) son muy parecidas, la única diferencia es que `getBy` lanza una excepción si no hay coincidencias mientras que `queryBy` retorna `null`, que es útil cuando necesitamos verificar que un elemento **no** existe, por ejemplo:

```javascript
expect(screen.queryByRole("...")).not.toBeInTheDocument()
```

La diferencia entre `getBy` y `findBy` (y `getAllBy` y `findAllBy`) es que `getBy` retorna el elemento inmediatamente mientras que `findBy` retorna una promesa y se puede utilizar para encontrar elementos que pueden tomar tiempo en aparecer (o desaparecer).

Por defecto `screen` busca en todo el `body` del documento. Para limitar la búsqueda utiliza el método `within`:

```javascript
const container = screen.getByTestId("container")
within(container).getByRole("heading")
```

## Interactuando con los elementos

Para interactuar con los elementos utilizamos el objeto `fireEvent` seguido del nombre del evento que queramos disparar. Por ejemplo:

```javascript
const input = screen.getByRole("textbox", { name: "email" })
fireEvent.change(input, { target: { value: "pedro@example.com" } })

const button = screen.getByRole("button", { name: "Ingresar" })
fireEvent.click(button)
```

Disparar eventos de esta forma tiene una desventaja y es que debemos conocer el evento exacto que estamos utilizando. 

Por ejemplo, al escribir en un campo de texto se están disparando varios eventos: `keyDown`, `keyPress`, `keyUp` y `change`.

Existe una librería complementaria llamada `@testing-library/user-event` que nos permite simular interacciones que disparan todos los eventos de una acción.

Para instalar la librería ejecuta:

```
$ npm install --save-dev @testing-library/user-event
```

La librería se utiliza de la siguiente forma:

```javascript
const user = userEvent.setup()

const input = screen.getByRole("textbox", { name: "email" })
await user.type(input, "pedro{enter}")

const button = screen.getByRole("button", { name: "Ingresar" })
await user.click()
```

Para aprender más sobre `@testing-library/user-event` te recomendamos ver la [documentación oficial](https://testing-library.com/docs/user-event/intro).

## Validando los elementos

Aunque los métodos `getBy...` y `findBy...` lanzan una excepción si no se encuentran (y hacen que la prueba falle) es mejor hacer el `expect`:

```javascript
const h1 = screen.getByRole("heading", { level: 1 })
expect(h1).toBeInTheDocument()
```

El método `toBeInTheDocument` es de la librería `@testing-library/jest-dom`. Para ver la lista completa de **matchers** que agrega esta librería te recomendamos ver la [documentación oficial](https://github.com/testing-library/jest-dom#readme).

Para negar algún matcher utiliza `.not` antes del matcher:

```javascript
const h1 = screen.getByRole("heading", { level: 1 })
expect(h1).not.toBeInTheDocument()
```

Para esperar a que aparezca un elemento puedes utilizar el `find...` o el `waitFor`:

```javascript
const h1 = await screen.findByRole("heading", { level: 1 })
expect(h1).toBeInTheDocument()

// espera a que aparezca un elemento con texto "algo" en el documento
await waitFor(() => expect(screen.getByText("algo")).toBeInTheDocument())
```
En general es preferible utilizar el `find...` cuando es posible.

**Nota:** Estos métodos retornan una promesa así que no olvides el `await` y agregarle el `async` a la prueba.

Para esperar a que desaparezca un elemento puedes utilizar el método `waitForElementToBeRemoved` o el `waitFor`:

```javascript
await waitForElementToBeRemoved(() => screen.getByText('algo'))

await waitFor(() => screen.getByText("algo")).not.toBeInTheDocument())
```

## Debugging

Para imprimir el HTML en la consola utiliza el método `debug` del objeto `screen`:

```javascript
// imprime todo el documento
screen.debug()
// imprime un elemento
screen.debug(screen.getByText('test'))
// imprime varios elementos
screen.debug(screen.getAllByText('multi-test'))
```

Otra opción interesante es el método `logTestingPlaygroundURL` que genera un URL con un link al [Testing Playground](https://testing-playground.com/).

```javascript
// imprime en la consola una URL que puedes abrir en el navegador
screen.logTestingPlaygroundURL();
```