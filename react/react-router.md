# React Router

Para crear aplicaciones en React que estén compuestas de varias pantallas necesitamos un enrutador.

Un enrutador nos permite relacionar URL's con componentes.

React no incluye un enrutador pero podemos utilizar una liberaría llamada [React Router](https://reactrouter.com/).

**Nota:** en esta sección vamos a utilizar la versión **6** de [React Router](https://reactrouter.com/).

El primer paso para utilizar [React Router](https://reactrouter.com/) es instalar la librería.

Con npm:

```text
$ npm install react-router-dom@6 history@5
```

Con Yarn:

```text
$ yarn add react-router-dom@6 history@5
```

Para utilizar [React Router](https://reactrouter.com/) en tu proyecto primero debes importarlo y utilizar los componentes `BrowserRouter`, `Routes` y `Route` para definir las rutas, por ejemplo:

```javascript
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

En este caso, cuando ingresen a la raíz de nuestro proyecto \(`/`\) se renderizará el componente `Home` y cuando ingresen a `/about` se renderizará el componente `About`.

## Navegación (declarativa)

Para crear vínculos a las rutas de la aplicación sin refrescar la página utiliza el componente `Link`. Por ejemplo, podemos crear un menú que nos permita navegar al `Home` y al `About`:

```javascript
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
...

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        ...
      </Routes>
    </BrowserRouter>
  );
}
```

## Plantillas (template)

Para definir una plantilla que podamos usar en varias pantallas de nuestra aplicación puedes crear rutas anidadas de la siguiente forma:

```javascript
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

Lo primero es definir una ruta que va a definir el template y rutas anidadas que van a utilizar ese template. En este caso nuestro template va a ser definido por un componente llamado `Template`.

La ruta `index` se utiliza para definir el componente que se va a mostrar por defecto cuando alguien ingrese al path definido en la padre \(en este caso a la raíz del proyecto `/`\).

El componente `Template` se definiría de la siguiente forma:

```javascript
import { Outlet } from 'react-router-dom';

function Template() {
  return (
    <div>
      <h1>Mi Super Aplicación</h1>
      <Outlet />
    </div>
  );
}
```

Cada componente como `Home` y `About` se va a renderizar dentro del componente `Outlet`. El `<h1>` aparecerá en todas las páginas.

## Ruta No Encontrada

Puedes agregar una ruta por defecto cuando ninguna otra ruta coincida:

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        ...
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## Parámetros de Ruta

Puedes crear rutas dinámicas con **parámetros de ruta**.

Los **parámetros de ruta** son variables que puedes utilizar dentro de la ruta.

Los **parámetors de ruta** se definen empezando con dos puntos seguidos del nombre de la variable. Por ejemplo:

```javascript
<Route path="/hello/:name" element={<Greet />}>
```

Esta ruta coincidiría con cualquier URL que comience con `/hello/` seguido de cualquier otro string (que no contenga `/`), por ejemplo `/hello/pablo` o `/hello/maria`. Pero no coincidiría con `/hello/pedro/perez`.

Los **parámetros de ruta** se pueden acceder dentro del componente utilizando el hook `useParams`:

```javascript
import { useParams } from "react-router-dom";

function Greet() {
  const params = useParams();
  return <h1>Hola {params.name}</h1>;
}
```

Dependiendo del valor que llegue en el **parámetro de ruta** `name` se mostraría un saludo diferente. Por ejemplo, para `/hello/pedro` se mostraría el texto "Hola pedro" dentro del `h1`.

## Navegación (programática)

En una sección anterior de esta guía vimos cómo navegar de forma declarativa utilizando el componente `Link`. En esta sección vamos a ver cómo forzar la navegación desde nuestro código.

La primera forma es utilizar el componente `Navigate`, que redirecciona al usuario cuando se renderiza. Por ejemplo, podemos utilizar este componente para redireccionarlo a la página de ingreso si no está autenticado:

```javascript
import { Navigate } from "react-router-dom";

function App() {
  const authenticated = ...;
  return (
    { authenticated ? <h1>Bienvenido</h1> : <Navigate to="/login" /> }
  )
}
```

La otra forma es utilizar el hook `useNavigate`, que podemos invocar en nuestro código cuando necesitemos redireccionar al usuario a otra ruta. Por ejemplo, podemos utilizar `useNavigate` para redireccionar al usuario después de la autenticación:

```javascript
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleSubmit() {
    // autenticamos al usuario
    navigate("/") // lo redireccionamos
  }

  return <form onSubmit={handleSubmit}>...</form>
}
```

## Rutas Privadas

Para implementar rutas privadas (rutas que sólo usuarios autenticados pueden acceder) necesitamos crear un componente adicional que llamaremos `RequireAuth` y que se configurará en la ruta de la siguiente forma:

```jsx
<Route 
  path="/private" 
  element={
    <RequireAuth>
      <ProtectedPage />
    </RequireAuth>
  }
>
```

El componente `RequireAuth` se implementaría de la siguiente forma:

```jsx
import { useLocation } from 'react-router-dom';

function RequireAuth({ children }) {
  const location = useLocation();
  const authenticated = ... // verificar si el usuario está autenticado
  return authenticated ? children : <Navigate to="/login" state={{ from: location }} />
}
```

La idea general de este componente es verificar si el usuario está autenticado y renderizar el componente protegido o redireccionar al usuario a la página de ingreso.

**Nota:** En este ejemplo hemos omitido el código que verifica si el usuario está autenticado porque depende de la forma en que se implemente (p.e. esta información puede estar en el Context API, en Redux, o directamente en el LocalStorage, entre otras).