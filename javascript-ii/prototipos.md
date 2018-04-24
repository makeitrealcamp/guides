# Prototipos

JavaScript **es un lenguaje orientado a objetos** \(en [JavaScript I](https://github.com/makeitrealcamp/guias-de-make-it-real/tree/c2b90a7a324e43c4dc6689e308b6fc3f19e612d4/js-ii/js/9-objetos-literales.md) vimos los objetos literales\). Sin embargo, a diferencia de otros lenguajes orientados a objetos como Java, Ruby, C\#, etc. que utilizan **clases**, JavaScript **está basado en prototipos**.

**Nota:** ES6 introduce **clases** a JavaScript. Sin embargo, las nuevas **clases** de JavaScript no son más que un truco sobre los **prototipos**. En el capítulo de ES6 hablaremos sobre las **clases**.

En JavaScript, cada **objeto** está asociado a otro objeto \(el **prototipo**\) del cual hereda sus propiedades.

Cuando creas un **objeto literal** \(p.e. `{ nombre: "Pedro" }`\) el prototipo es `Object.prototype`, que es el prototipo raíz de todos los objetos.

## Función constructora

Existe otra forma de crear objetos en JavaScript y es con una **función constructora**. Veamos un primer ejemplo de una **función constructora**:

```javascript
var Persona = function(name) {
  this.name = name;
}
```

Fíjate que para definir las propiedades utilizamos la palabra clave `this`. Aunque parece una función normal \(y en cierta forma lo es\), con esta función podemos crear varios objetos utilizando la palabra clave `new`.

```javascript
var p1 = new Persona("Pedro");
var p2 = new Persona("Juan");
```

**Nota:** No olvides el `new` cuando utilices una función constructura. Por convención las funciones constructoras se nombran en mayúsculas para diferenciarlas de una función normal. Siempre que veas una función en mayúscula ya sabes que es una función constructura y que debes utilizar `new` para invocarla.

## Accediendo a las propiedades de un objeto

En [JavaScript I](https://github.com/makeitrealcamp/guias-de-make-it-real/tree/c2b90a7a324e43c4dc6689e308b6fc3f19e612d4/js-ii/js/9-objetos-literales.md) vimos que es posible acceder a las propiedades de un objeto utilizando la notación de corchetes \(`[]`\) o punto \(`.`\):

```javascript
obj["propiedad"];
obj.propiedad;
```

Ahora que sabes que todo objeto tiene un prototipo del que hereda sus propiedades, veamos cómo busca JavaScript las **propiedades** en la **jerarquía de prototipos**:

1. Primero busca sobre el **objeto** directamente. Si la encuentra la devuelve.
2. Si no la encuentra, busca en el **prototipo** del **objeto**. Si la encuentra la devuelve.
3. Si no la encuentra, busca en el **prototipo** del **prototipo**, y así sucesivamente hasta que llega al prototipo raíz `Object.prototype`.
4. Si no la encuentra en ningún objeto de la jerarquía retorna `undefined`.

## Agregando propiedades al prototipo de un objeto

Para agregar una **propiedad** a todos los **objetos** que han sido creados a partir de una misma **función constructora**, puedes agregar las **propiedades** al **prototipo**. Por ejemplo:

```javascript
var Persona = function(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
};

Persona.prototype.saluda = function() {
  return "Hola " + this.nombre;
};
```

Ahora todos los **objetos** creados a partir de la **función constructora** `Persona` van a tener la propiedad `saluda` \(no importa si fueron creados antes de definirla\):

```javascript
var pedro = new Persona("Pedro", "Perez");
console.log(pedro.saluda()); // imprime "Hola Pedro"
```

Lo interesante es que, de esta forma, puedes agregarles métodos a los objetos nativos de JavaScript como [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) y [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), entre muchos otros.

Por ejemplo, imagina que queremos agregar un método a los arreglos que sume todos los elementos, podemos agregarle el método `sum` a `Array.prototype`:

```javascript
Array.prototype.sum = function() {
  var total = 0;

  for (var i=0; i < this.length; i++) {
    total += this[i];
  }

  return total;
}
```

Ahora podemos usar este método sobre cualquier arreglo:

```javascript
[1, 2, 3].sum(); // retorna 6
```

