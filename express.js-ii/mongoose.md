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
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on("error", function(e) { console.log(e); });
db.on("open", function() {
  // acá va el resto del código
});
```

La primera línea está requiriendo la librería. En la segunda nos conectamos al MongoDB que está corriendo localmente. Después utilizamos `mongoose.connection` para saber cuando la conexión esté abierta u ocurra un error.

El siguiente paso es definir un **schema**, que define la estructura que vamos a utilizar y un **modelo**, que nos va a permitir interactuar con MongoDB:

```javascript
...
db.on("open", function() {
  // definimos el schema
  var schema = mongoose.Schema({
    title: String,
    body: String
  });

  // definimos el modelo
  var Article = mongoose.model("Article", schema);
});
```

Con el modelo podemos crear documento:

```javascript
var first = new Article({ title: "Artículo 1", body: "Cuerpo del artículo" });
first.save(function(err) {
  if (err) return console.error(err);
});
```

También podemos buscar documentos:

```javascript
Article.find(function(err, articles) {
  if (err) return console.error(err);
  console.log(articles);
});
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
