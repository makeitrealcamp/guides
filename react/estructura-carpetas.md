# Estructura de carpetas

Existen muchas formas de organizar los archivos y carpetas de un proyecto de React y, aunque no hay una forma “correcta”, en esta guía veremos dos opciones muy populares:

* Por función (vistas, componentes, helpers, hooks, etc.)
* Por funcionalidad (login, búsqueda, usuarios, etc.) 

Veamos cada una de las opciones en detalle.

## Por función

Cuando se organiza el proyecto por función generalmente vamos a tener al menos las siguientes carpetas dentro de `/src`:

* `/views` (o `/pages`) - contiene las vistas (páginas) de la aplicación
* `/components` - contiene los componentes que se utilizan en las páginas.
* `/hooks` - contiene los hooks que creemos en nuestra aplicación
* `/helpers` (o `/utils`) - contiene archivos de apoyo para las demás funciones.

Dependiendo del proyecto es posible que tengamos otras carpetas. Por ejemplo `/store` (si usamos Redux) o `/services`.

También es posible que dentro de cada una de las carpetas tengamos otras carpetas para mayor organización. Por ejemplo, podemos organizar la carpeta `/views` por funcionalidad, o podemos crear una carpeta para cada componente en `/components`.

## Por funcionalidad

Cuando organizamos el proyecto por funcionalidad creamos una carpeta por cada una de las funcionalidades de la aplicación, por ejemplo:

* `/base` (o `/common`) -> contiene archivos que son transversales a la aplicación como componentes reutilizables, rutas, etc.
* `/users`
* `/settings`
* `...`

Dentro de cada una de estas carpetas podemos crear otras carpetas por función (`views`, `components`, `hooks`, etc.) para mayor organización.

## Archivos de pruebas y documentación

Hay dos formas de ubicar los archivos de pruebas (p.e. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)) y de documentación (p.e. [Storybook](https://storybook.js.org/)):

* Junto a cada archivo de código fuente.
* En otras carpetas por fuera de `/src` (p.e. `/test`, `/docs`)

Nuestra inclinación es hacia otras carpetas por fuera de `/src` pero muchos proyectos lo hacen junto a cada archivo de código fuente.

Si se hace por fuera de `/src` nuestra recomendación es replicar la misma estructura de carpetas de `/src`. Por ejemplo:

```
└── /src
    └── /components
  	    └── Modal.jsx
|── /tests
    └── /components
        └── Modal.test.js
|── /docs
    └── /components
        └── Modal.stories.js 
```

Si lo hiciéramos junto a cada archivo fuente sería de la siguiente forma:

```
└── /src
    └── /components
        └── /modal
            |── Modal.jsx
            |── Modal.test.js
            |── Modal.stories.js
```
