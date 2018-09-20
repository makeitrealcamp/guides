# MongoDB

[MongoDB](https://www.mongodb.com/) es quizá la base de datos **no relacional** más popular de la actualidad. Está diseñada para manejar grandes cantidades de datos distribuídos en varios servidores.

MongoDB es gratis y de código abierto. Sin embargo existe una versión paga con mayor soporte para despliegues más complejos (para empresas que estén dispuestas a pagar).

## Conceptos

Los conceptos más importantes de MongoDB son la **base de datos**, la **colección** y el **documento**:

### Base de datos

En MongoDB una base de datos es una conjunto de **colecciones**. Un servidor de MongoDB generalmente contiene muchas base de datos.

### Colección

Una colección es un grupo de documentos. Es lo equivalente a una **tabla** en una base de datos relacional.

### Documento

Un documento es un conjunto de llaves y valores que se almacena en un formato llamado BSON (Binary JSON). BSON es muy similar a JSON (JavaScript Object Notation) pero con algunos tipos adicionales que no son soportados en JSON.

Un documento es el equivalente a un **registro** de una tabla en una base de datos relacional.

A diferencia de una tabla, en donde todos los registros tienen las mismas columnas, en MongoDB cada documento puede contener diferentes llaves (columnas).

Veamos un ejemplo de un documento que representaría un post de un blog:

```text
{
   title: 'MongoDB Overview',
   description: 'MongoDB is a NoSQL database',
   by: 'Germán Escobar',
   url: '/mongodb-overview',
   tags: ['mongodb', 'database', 'nosql'],
   likes: 100,
   comments: [
      {
         user: 'user1',
         message: 'My first comment',
         dateCreated: new Date(2018,1,20,2,15),
         like: 0
      },
      {
         user: 'user2',
         message: 'My second comments',
         dateCreated: new Date(2018,1,25,7,45),
         like: 5
      }
   ]
}
```

Fíjate que los comentarios están incluidos en el documento. En una base de datos relacional tendríamos otra tabla para los comentarios, pero en MongoDB cada documento es independiente de los demás, así que es normal ver documentos con estructuras complejas como en este ejemplo.

## Instalación

Puedes descargar, instalar y ejecutar MongoDB en tu máquina o puedes utilizar un servicio como [mLab](https://mlab.com/) que te permite crear instancias de MongoDB en la nube.

Sin embargo, así quieras utilizar [mLab](https://mlab.com/) vas a necesitar instalar el cliente de MongoDB, llamado **`mongo` shell**, que nos va a permitir interactuar con el servidor de MongoDB.

### Instalación local

Para instalar y ejecutar MongoDB en tu máquina localmente sigue las instrucciones que se encuentran en [este enlace](https://docs.mongodb.com/manual/administration/install-community/).

Una vez hayas instalado el servidor puedes utilizar el cliente de MongoDB, llamado el `mongo` shell, para conectarte al servidor ejecutando el siguiente comando:

```
$ mongo
```

Si funciona bien deberías ver algo parecido a lo siguiente, inmediatamente después de ejecutar el comando:

```
MongoDB shell version v3.6.4
connecting to: mongodb://127.0.0.1:27017
MongoDB server version: 3.6.4
... más líneas
>
```

La última línea es el `prompt` en donde podrás empezar a ejecutar los comandos de MongoDB.

Para salir ejecuta:

```
> exit
```

### mLab

Si deseas utilizar [mLab](https://mlab.com/) debes seguir las intrucciones de la sección anterior, pero no necesitas ejecutar el servidor, sólo asegúrate que el siguiente comando funcione:

```
$ mongo --version
```

La primera línea debería ser parecida a la siguiente (la versión puede ser diferente):

```
MongoDB shell version v3.6.4
```

El siguiente paso es ingresar a [mLab](https://mlab.com/) y crear una cuenta.

Una vez tengas una cuenta en [mLab](https://mlab.com/) crea un nuevo **MongoDB Deployment** desde la aplicación Web seleccionando las siguientes opciones:

* Cloud Provider: Amazon Web Services
* Plan Type: Sandbox (Free)

Si te pregunta por una región utiliza la primera que aparezca, generalmente **US East (Virginia)**.

Nombra la base de datos, por ejemplo `personal-test`, y finaliza el proceso. Te deberá aparecer un nuevo **MongoDB Deployment**.

Haz click sobre la base de datos que acabas de crear y busca la opción **Users**. Selecciónala y crea un nuevo usuario.

Identifica el comando de conexión que debe ser parecido al siguiente:

```
mongo ds111430.mlab.com:11430/personal-test -u <dbuser> -p <dbpassword>
```

Cópialo y pégalo en tu línea de comandos reemplazando `<dbuser>` y `<dbpassword>` con las credenciales que ingresaste.

Si funciona bien deberías ver algo parecido a lo siguiente:

```
MongoDB shell version v3.6.4
connecting to: mongodb://ds111430.mlab.com:11430/personal-test
MongoDB server version: 3.4.14
WARNING: shell and server versions do not match
rs-ds111430:PRIMARY>
```

La última línea es el `prompt` en donde podrás empezar a ejecutar los comandos de MongoDB.

Para salir ejecuta:

```
> exit
```

## Utilizando el `mongo` Shell

`mongo` shell es la aplicación de consola que te permite conectarte con el servidor de MongoDB, interactuar con los datos y realizar tareas administrativas.

Asegúrate de estar conectado al `mongo` shell de acuerdo a las instrucciones en la sección anterior.

Vamos a ver las tareas más comunes que puedes hacer con el `mongo` shell:

### Creando y seleccionando bases de datos

**Nota:** Esta sección sólo aplica para una instalación local, en [mLab](https://mlab.com/) creas la base de datos a través de la aplicación Web.

Para mostrar la base de datos que estás utilizando ejecuta el siguiente comando:

```
> db
```

Para cambiar de base de datos utiliza el comando `use`. Por ejemplo:

```
> use mydatabase
```

Para listar las bases de datos existentes utiliza el comando:

```
> show dbs
```

Para crear bases de datos sólo debes utilizarla:

```
> use newdatabase
```

Sin embargo, la base de datos no va a ser creada hasta que no creemos una colección o insertemos un documento.

Para eliminar una base de datos utiliza el método `db.dropDatabase`:

```
> db.dropDatabase();
```

### Creando colecciones y documentos

Para crear una colección utiliza el método `db.createCollection`. Por ejemplo:

```
> db.createCollection("users");
```

Para listar las colecciones utiliza el siguiente comando:

```
> show collections
```

Para insertar un documento en una colección utiliza el método `db.<collection>.insertOne`. Por ejemplo:

```
> db.users.insertOne({ email: "pedro@example.com", name: "Pedro Perez", age: 35 });
```

Deberías ver un resultado similar al siguiente:

```
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5aea08739b3eae8fd48323e3")
}
```

Cada documento tiene una llave `_id` que identifica el documento de forma única en esa colección. Si no especificamos el `_id` MongoDB le asigna uno automáticamente. El `_id` puede ser:

* Un `ObjectId` (esto es el que utiliza MongoDB para generar un identificador único)
* Una forma de identificar el objeto de forma natural (como el número de identificación de la persona).
* Un número que se vaya incrementando.

La forma que recomendamos es dejar que MongoDB genere el `_id` automáticamente.

**Nota:** Si la colección `users` no existiera, sería creada automáticamente al insertar el documento.

También existe el método `insert` que permite insertar uno o más documentos:

```
> db.users.insert([
    { email: "juan@example.com", name: "Juan Gomez", age: 19 },
    { email: "maria@example.com", name: "Maria Diaz", age: 27 }
  ]);
```

### Listando y filtrando documentos

Para listar documentos dentro de una colección utiliza el método `db.<collection>.find`. Por defecto, si no le pasas ningún parámetro a este método retorna todos los registros de la colección. Por ejemplo, para listar todos los documentos de la colección `users` ingresa lo siguiente:

```
> db.users.find({});
```

Para buscar documentos por uno o más campo específicos le puedes pasar un objeto con las llaves y los valores por los que quieras buscar. Por ejemplo:

```
> db.users.find({ _id: 5 });
> db.users.find({ email: "pedro@example.com" });
```

También es posible buscar documentos que cumplan más de una condición puedes separar las expresiones por coma o utilizar el operador `$and`:

```
> db.users.find({ name: "Pedro Perez", age: 20 });
> db.users.find({ $and: [{ name: "Pedro Perez" }, { age: 20 }] });
```

Por último, si quieres buscar documentos que cumplan una condición u otra utiliza el operador `$or`:

```
> db.users.find({ $or: [{ name: "Pedro Perez" }, { age: 20 }] });
```

Si los valores son de la misma llave es preferible utilizar el operador `$in`. Por ejemplo, la siguiente línea encontraría todos los documentos con `email` igual a "pedro@example.com" o "maria@example.com":

```
> db.users.find({ email: { $in: ["pedro@example.com", "maria@example.com"] } });
```

Para comparar valores utiliza los operadores `$gt` (mayor qué), `$gte` (igual o mayor qué), `$lt` (menor qué), `$lte` (igual o menor qué):

```
> db.users.find({ age: { $gt: 20 } });
> db.users.find({ age: { $lt: 30 } });
> db.users.find({ age: { $gte: 20, $lte: 30 } });
```

Para buscar en documentos embebidos utiliza la notación `.` (punto). Imagina que tenemos documentos de este tipo:

```
{
  name: { first: "Pedro", last: "Perez" }
}
```

Si queremos encontrar los documentos que tengan primer nombre "Pedro" utilizaríamos la siguiente línea:

```
> db.users.find({ "name.first": "Pedro" });
```

### Actualizando un documento

Para actualizar un documento utiliza el método `db.<collection>.updateOne`, que recibe un filtro y los campos que se quieren actualizar. Por ejemplo:

```
> db.users.updateOne({ _id: 5 }, { $set: { email: "daniel@example.com", name: "Daniel Gael" } });
```

Por defecto `updateOne` actualiza el primer documento que coincida con el filtro. Para actualizar todos los documentos que coincidan utiliza el método `db.<collection>.update`.

### Eliminando un documento

Para eliminar documentos de una colección utiliza el método `db.<collection>.remove`, que recibe un filtro de los documentos que se quieren eliminar:

```
> db.users.remove({ age: { $lt: 20 } });
```

Para eliminar **todos** los documentos de una colección puedes pasarle un objeto vacío al método `db.<collection>.remove`:

```
> db.users.remove({});
```

### Ordenar y agregar documentos

Los métodos y operadores de agregación nos permiten agrupar, contar, sumar y ordenar documentos, entre otras operaciones.

Quizá la operación de agregación más común es contar el número de documentos en una colección:

```
> db.users.count({});
```

Para agrupar registros utiliza el método `db.<collection>.aggregate` y los operadores `$group` y `$sum`, entre otros. Por ejemplo:

```
> db.orders.aggregate([{
  $group: {
    _id: "$productId",
    count: { $sum: 1 },
    total: { $sum: "$amount" }
  }
}]);
```

También puedes ordenar los documentos con el mismo método `aggregate` y el operador `$sort`. Por ejemplo, el siguiente comandos devolvería todas las `orders` ordenadas por `date` de forma descendente:

```
> db.orders.aggregate([{ $sort: { date: -1 } }]);
```

1 es ascendente, -1 descendente.

Por último, puedes limitar el número de registros con `$limit` o saltarlos con `$skip`:

```
> db.orders.aggregate([
    { $skip: 5 },
    { $limit: 10 }
  ]);
```

`aggregate` recibe un arreglo de objetos. Cada uno de los objetos va realizando una nueva operación sobre los datos. A esto se le conoce como el [pipeline de agregación](https://docs.mongodb.com/manual/aggregation/#aggregation-pipeline).

Existen otros operadores que puedes consultar en la [documentación oficial de MongoDB](https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline/).

### Índices

Los índices permiten acelerar la búsqueda de documentos por llaves diferentes a la primaria (`_id`).

Para crear un índice utiliza el método `db.<collection>.createIndex`. Por ejemplo, para crear un índice ascendente sobre el campo `age` de la colección `users`:

```
db.users.createIndex({ age: 1 });
```

Para crear un índice descendente utiliza un valor de -1.

Para obtener los índices de una colección utiliza el método `db.<collection>.getIndexes()`. Por ejemplo:

```
> db.users.getIndexes();
```

Para remover un índice utiliza el método `db.<collection>.dropIndex`. Por ejemplo:

```
> db.users.dropIndex({ age: 1 });
```
