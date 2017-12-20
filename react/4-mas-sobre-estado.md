# Más sobre estado

<iframe width="853" height="480" src="https://www.youtube.com/embed/JYiGMrVToBM?rel=0" frameborder="0" allowfullscreen></iframe>

<br>
En React cada **componente** maneja su propio estado.

El estado de un componente es un objeto que no debes modificar directamente como en el siguiente ejemplo:

```js
// mal - no hagas esto
this.state.title = "Otro título";
```

Para modificar el estado utiliza el método `setState`:

```js
this.setState({ title: "Otro título" });
```

El método `setState` crea un nuevo estado (un nuevo objeto), no modifica el anterior. A esto se le conoce como [inmutabilidad](https://es.wikipedia.org/wiki/Objeto_inmutable). La idea es que los cambios al estado sean explícitos y predecibles, y las aplicaciones más fáciles de mantener en el tiempo.

Acostumbrarse a escribir código inmutable toma algún tiempo pero es una buena práctica. En este capítulo vamos a ver algunas técnicas para manipular arreglos y objetos de forma inmutable.

## Arreglos

Veamos como insertar, modificar y eliminar elementos de un arreglo de forma inmutable.

### Insertando elementos
