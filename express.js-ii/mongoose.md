# Mongoose

[Mongoose](http://mongoosejs.com/) es una librería escrita en Node.js para trabajar con MongoDB.

Para instalar [Mongoose](http://mongoosejs.com/) utiliza algún manejador de paquetes como [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/en/):

```
$ npm install mongoose
```

Ó

```
$ yarn add mongoose
```

Asegúrate que MongoDB esté corriendo de forma local. Crea un archivo `app.js` con el siguiente contenido:

```javascript
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

mongoose.connection.on("error", function(e) { console.error(e); });

// el resto del código
```

La primera línea está requiriendo la librería. En la segunda nos conectamos al MongoDB que está corriendo localmente. Por último nos enlazamos al evento `error` de `mongoose.connection` para saber si ocurrió un error.

El siguiente paso es declarar un **schema**, que define la estructura que vamos a utilizar en nuestros documentos, y un **modelo**, que nos va a permitir interactuar con MongoDB:

```javascript
...
// definimos el schema
var schema = mongoose.Schema({
  title: String,
  body: String,
  published: { type: Boolean, default: false }
});

// definimos el modelo
var Article = mongoose.model("Article", schema);
```

Más adelante hablaremos un poco más del **schema** y los diferentes tipos de datos pero primero veamos cómo manipular los documentos de una colección utilizando el modelo.

## Manipulando documentos

Una vez has definido el modelo en Mongoose puedes empezar a insertar, buscar, actualizar y eliminar los documentos de una colección.

### Creando un documento

Existen varias formas de insertar documentos en una colección. La primera es instanciar el modelo y utilizar el método `save`:

```javascript
var first = new Article({ title: "Artículo 1", body: "Cuerpo del artículo" });
first.save(function(err) {
  if (err) return console.error(err);
});
```

Otra forma más corta es utilizar el método `create`:

```javascript
Article.create({ title: "Artículo 2", body: "Cuerpo del artículo" }, function(err) {
  if (err) return console.error(err);
});
```

Por último, si deseas insertar varios documentos a la vez puedes utilizar el método `insertMany`:

```javascript
Article.insertMany([
  { title: "Artículo 3", body: "Cuerpo del artículo" },
  { title: "Artículo 4", body: "Cuerpo del artículo" }
], function(err) {
  if (err) return console.error(err);
});
```

### Buscando documentos

Para listar todos los documentos de una colección utiliza el método `find` de la siguiente forma:

```javascript
Article.find(function(err, articles) {
  if (err) return console.error(err);
  console.log(articles);
});
```

También puedes utilizar el método `find` para filtrar la búsqueda por una o más llaves. Por ejemplo, para buscar todos los artículos que tengan un título específico utilizaríamos lo siguiente:

```javascript
Article.find({ article: "El título" }, function(err, articles) {
  if (err) return console.error(err);
  console.log(articles);
});
```

Para buscar un documento específico utiliza el método `findOne`:

```javascript
Article.findOne({ "_id": "...." }, function(err, article) {
  if (err) return console.error(err);
  console.log(article);
});
```

Para buscar por `_id` existe un método `findById`:

```javascript
Article.findById("...", function(err, article) {
  // ...
});
```

MongoDB tiene un poderoso API de búsqueda que podemos utilizar a través de [Mongoose](https://mongoosejs.com/). A continuación vamos a ver las partes más importantes pero la referencia completa la puedes encontrar en [este enlace](https://mongoosejs.com/docs/api.html#Query).

#### Comparación

Para realizar comparaciones de números utiliza las llaves `$gt` (mayor qué), `$lt` (menor qué), `$gte` (mayor o igual a), `$lte` (menor o igual a). Por ejemplo, para buscar todas las personas con edad entre 17 y 66 utilizaríamos lo siguiente:

```javascript
Person.find({ age: { $gt: 17, $lt: 66 } }, function(err, people) {
  if (err) return console.error(err);
  console.log(people);
});
```

Si la sintaxis de búsqueda utilizando JSON te parece muy extraña, Mongoose nos ofrece una forma alternativa de expresar lo mismo encadenando métodos:

```javascript
Person.where("age").gt(17).lt(66).exec(function(err, people) {
  // ...
});
```

#### Inclusión

Para comparar contra una serie de valores utiliza la llave `$in`. Por ejemplo:

```javascript
Article.find({ tags: { $in: ["mongodb", "mongoose"] } }, function(err, articles) {
  if (err) return console.error(err);
  console.log(articles);
});
```

También existe un método `in`:

```javascript
Article.where("tags").in(["mongodb", "mongoose"], function(err, articles) {
  // ...
});
```

#### Ordenar los resultados

Para ordenar los documentos utiliza el método `sort`:

```javascript
Article.find().sort("title").exec(function(err, articles) {
  // ...
});
```

#### Limitar los resultados

Para limitar los resultados utiliza el método `limit`:

```javascript
Article.find().limit(10).exec(function(err, articles) {
  // ...
});
```

#### Seleccionar llaves

Para seleccionar llaves específicas de un documento puedes pasarle una cadena de texto al método `find` como segundo argumento con las llaves que quieres incluir (separadas por espacio):

```javascript
Article.find({}, "title description", function(err, articles) {
  // ...
});
```

También existe un método `select`:

```javascript
Article.find().select("title description").exec(function(err, articles) {
  // ...
});
```

#### Contar los resultados

Para contar el número de resultados utiliza el método `countDocuments`. Por ejemplo, para contar todos los documentos de una colección utilizaríamos:

```javascript
Article.countDocuments(function(err, count) {
  if (err) return handleError(err);
  console.log("Hay " + count + " artículos");
})
```

**Nota:** Si la colección es muy grande se recomienda utilizar el método `estimateDocumentCount`.

También puedes pasarle algunas condiciones al método `countDocuments`:

```javascript
Article.countDocuments({ published: true }, function(err, count) {
  if (err) return handleError(err);
  console.log("Hay " + count + " artículos publicados");
});
```

### Actualizando un documento

Para actualizar un documento que tienes en memoria utiliza el método `save`. Por ejemplo:

```javascript
Article.findById("...", function(err, article) {
  if (err) return console.error(err);

  article.title = "Otro título";
  article.save(function(err) {
    if (err) return console.error(err);
  });
});
```

También puedes utilizar el método `update` para actualizar uno o más documentos que cumplan con ciertas condiciones sin necesidad de cargarlos en memoria. Por ejemplo, para cambiar el título del documento con título "Artículo 1" utilizaríamos el siguiente código:

```javascript
Article.update({ title: "Artículo 1" }, { title: "Nuevo título" }, function(err) {
  if (err) return console.error(err);
});
```

El primer argumento es la condición que deben cumplir los registros y el segundo la información que se va a actualizar.

**Nota:** Por defecto el método `update` sólo actualiza el primer documento encontrado. Para actualizar todos debes pasarle la opción `multi`:

```javascript
Article.update({ title: "..." }, { title: "..." }, { multi: true }, function(err) {
  // ...
});
```

### Eliminando un documento

Para eliminar un documento utiliza el método `remove`:

```javascript
Article.findById("...", function(err, article) {
  if (err) return console.error(err);

  article.remove(function(err) {
    if (err) return console.error(err);
  });
});
```

Para eliminar uno o más documentos sin necesidad de cargarlos en memoria utiliza los métodos `deleteOne` y `deleteMany`:

```javascript
Article.deleteOne({ title: "Artículo 1" }, function(err) {
  if (err) return console.error(err);
}):
```

## Schemas

Todo en Mongoose inicia con la definición del schema. Cada esquema define la estructura que van a tener los documentos de una colección. Por ejemplo:

```javascript
var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
```

Los tipos que se permiten dentro de un schema son:

* String
* Number
* Date
* Buffer (se utiliza para manejar datos binarios)
* Boolean
* Mixed (cualquier tipo)
* ObjectId (se utiliza para generar los ids)
* Array

El schema también define los métodos de instancia, métodos estáticos, indices secundarios y middleware.

### Métodos de instancia

Cada instancia de un modelo representa un documento de MongoDB. Puedes agregar métodos a los modelos utilizando el objeto `methods`. Por ejemplo:

```javascript
schema.methods.wordCount = function() {
  return this.body.split(" ").length;
};
```

Y ya podemos utlizar el método sobre cualquier instancia de un modelo:

```javascript
var article = new Article({ title: "Art1", body: "Hola Mundo"});

article.wordCount(); // 2
```

### Métodos estáticos

Para agregar métodos directamente al modelo utiliza el objeto `statics`. Por ejemplo

```javascript
schema.statics.findByTitle = function(name, cb) {
  return this.find({ title: new RegExp(name, 'i') }, cb);
};
```

Y ahora para utilizar el método estático:

```javascript
Article.findByTitle("art", function(err, articles) {
  console.log(articles);
});
```

### Índices secundarios

MongoDB soporta índices secundarios (índices sobre llaves diferente al `_id`):

```javascript
var schema = mongoose.Schema({
  title: String,
  body: String,
  tags: { type: [String], index: true }
});
```

### Atributos virtuales

Puedes agregar atributos que no van a ser persistidos en la base de datos pero que puedes utilizar para aplicarle formato a otros campos o para combinar campos. Por ejemplo

```javascript
// el schema
var personSchema = new Schema({
  name: {
    first: String,
    last: String
  }
});

// el atributo virtual
personSchema.virtual("fullName")
  .get(function() { return this.name.first + " " + this.name.last })
  .set(function(v) {
    this.name.first = v.substr(0, v.indexOf(" "));
    this.name.last = v.substr(v.indexOf(" ") + 1);
  });

// compile our model
var Person = mongoose.model('Person', personSchema);
```

Veamos ahora cómo utilizar el atributo virtual:

```javascript
// create a document
var pedro = new Person({
  name: { first: 'Pedro', last: 'Perez' }
});

// utilicemos el atributo virtual
pedro.fullName; // "Pedro Perez"

// cambiemos el nombre y apellido
pedro.fullName = "Pablo Gomez";
```
