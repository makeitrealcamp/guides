# JSON

**JSON** \(JavaScript Object Notation\) es un **formato** para organizar **datos estructurados**, que es fácil de interpretar por una aplicación y al mismo tiempo legible por un humano.

**JSON** Se utiliza principalmente para transmitir información entre aplicaciones.

Veamos un primer ejemplo de JSON en el que estamos representando un vuelo:

```json
{
  "airline": "Oceanic",
  "status": "crashed",
  "departure": {
    "iata": "SYD",
    "time": "2004-09-22 14:55"
  }
}
```

**JSON** es parecido a un objeto de JavaScript pero con algunas diferencias importantes:

1. Los nombres de las propiedades deben estar entre comillas.
2. Los valores pueden ser de los siguientes tipos únicamente: **String**,  **Number**,  **Boolean**, **Array**, **JSON Object**.

## Ejemplos válidos de JSON

```javascript
{
  "count": 2,
  "records": [
    { "brand": "Renault", "color": "red", "released": true },
    { "brand": "Chevrolet", "color": "black", "released": false },
  ]
}
```

El elemento raíz puede ser un arreglo:

```javascript
[
  { "brand": "Renault", "color": "red", "released": true },
  { "brand": "Chevrolet", "color": "black", "released": false },
]
```

## Ejemplo inválidos de JSON

Los nombres de las propiedades deben estar encerrados en comillas:

```javascript
{
  nombre: "Pedro"
}
```

Los valores no pueden ser diferentes a los mencionados anteriormente:

```javascript
{
  time: new Date(),
  hello: function() { return "Esto está mal"; }
}
```

## De JSON a objeto JavaScript y viceversa

Una ventaja de **JSON** es que puede ser convertido a un objeto de JavaScript fácilmente utilizando [JSON.parse](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse):

```javascript
var obj = JSON.parse('{ "name": "Pedro" }');
console.log(obj.name); // Pedro
```

También es posible convertir un objeto de JavaScript a **JSON** con [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify):

```javascript
JSON.stringify({ name: "Pedro" }); // '{ "name": "Pedro" }'
```
