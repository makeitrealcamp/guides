# Más sobre estado

{% embed data="{\"url\":\"https://youtube.com/watch?v=JYiGMrVToBM?rel=0\",\"type\":\"video\",\"title\":\"\",\"icon\":{\"type\":\"icon\",\"url\":\"https://www.youtube.com/yts/img/favicon\_144-vfliLAfaB.png\",\"width\":144,\"height\":144,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://i.ytimg.com/vi/JYiGMrVToBM/maxresdefault.jpg\",\"width\":1280,\"height\":720,\"aspectRatio\":0.5625},\"embed\":{\"type\":\"player\",\"url\":\"https://www.youtube.com/embed/JYiGMrVToBM?rel=0&showinfo=0\",\"html\":\"<div style=\\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.2493%;\\"><iframe src=\\"https://www.youtube.com/embed/JYiGMrVToBM?rel=0&amp;showinfo=0\\" style=\\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;\\" allowfullscreen scrolling=\\"no\\"></iframe></div>\",\"aspectRatio\":1.7778}}" %}

  
 En React cada **componente** maneja su propio estado.

El estado de un componente es un objeto **de sólo lectura** que no debes modificar directamente como en el siguiente ejemplo:

```javascript
// mal - no hagas esto
this.state.title = "Otro título";
```

Para modificar el estado utiliza el método `setState`:

```javascript
this.setState({ title: "Otro título" });
```

El método `setState` crea un nuevo estado \(un nuevo objeto\), no modifica el anterior. A esto se le conoce como [inmutabilidad](https://es.wikipedia.org/wiki/Objeto_inmutable). La idea es que los cambios al estado sean explícitos y predecibles, y las aplicaciones más fáciles de mantener en el tiempo.

Acostumbrarse a escribir código inmutable toma algún tiempo pero es una buena práctica. En este capítulo vamos a ver algunas técnicas para manipular arreglos y objetos de forma inmutable.

## Arreglos

En vez de modificar el arreglo original para insertar, actualizar y eliminar elementos, lo que vamos a hacer es construir un **nuevo** arreglo con el cambio. Veamos cómo hacerlo.

### Insertando elementos

Para insertar un elemento a un arreglo utiliza el método `concat` que retorna un nuevo arreglo con el nuevo elemento:

```javascript
const arr = [1, 2, 3];
const newArr = arr.concat(4); // [1, 2, 3, 4]

// arr sigue siendo [1, 2, 3]
```

### Cambiando un elemento

Existen varias formas de cambiar un elemento de forma inmutable. La primera es con el método `map`:

```javascript
const arr = [1, 2, 3];

// vamos a cambiar la segunda posición por un 0
const idx == 1;
const newArr = arr.map((elem, i) =>
  idx === i ? 0 : elem
);

// arr: [1, 2 3]
// newArr: [1, 0, 3]
```

La segunda es utilizando el método `slice` y `concat`:

```javascript
const arr = [1, 2, 3];

const idx == 1;
const newArr = arr.slice(0. idx)
                  .concat(0)
                  .concat(arr.slice(idx + 1));
```

La tercera es con el nuevo operador `...` \(spread\) de JavaScript:

```javascript
const arr = [1, 2, 3];

const idx == 1;
const newArr = [
  ...arr.slice(0, idx),
  0,
  ...arr.slice(idx + 1)
];
```

### Removiendo un elemento

Puedes remover un elemento de forma inmutable de varias formas. La primera es con el método `filter`:

```javascript
const arr = [1, 2, 3];

// vamos a remover la segunda posición
const idx == 1;
const newArr = arr.filter((e, i) => idx != i);

// arr: [1, 2 3]
// newArr: [1, 3]
```

La segunda es utilizando el método `slice` y `concat`:

```javascript
const arr = [1, 2, 3];

const idx == 1;
const newArr = arr.slice(0, idx).
                  .concat(arr.slice(idx + 1));
```

La tercera es con el nuevo operador `...` \(spread\):

```javascript
const arr = [1, 2, 3];

const idx == 1;
const newArr = [
  ...arr.slice(0, idx),
  ...arr.slice(idx + 1)
];
```

