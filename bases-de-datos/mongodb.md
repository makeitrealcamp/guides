# MongoDB

MongoDB es una base de datos basada en documentos.

## Conceptos

Los conceptos más importantes de MongoDB son:

* Base de datos.
* Colección.
* Documento.

### Base de datos

En MongoDB una base de datos es una conjunto de **colecciones**. Un servidor de MongoDB generalmente tiene muchas base de datos.

### Colección

Una colección es un grupo de documentos. Es lo equivalente a una tabla en un SGBDR \(sistema de gestión de base de datos relacionales\).

### Documento

Un documento es un conjunto de llaves y valores. Es lo equivalente a un registro en un SGBDR. Sin embargo, a diferencia de una tabla en un SGBDR en donde todos los registros tienen las mismas columnas, en MongoDB cada documento puede contener diferentes llaves \(columnas\).

Veamos un ejemplo de un documento tomado de [esta fuente](https://www.tutorialspoint.com/mongodb/mongodb_overview.htm):

```text
{
   _id: ObjectId(7df78ad8902c)
   title: 'MongoDB Overview',
   description: 'MongoDB is no sql database',
   by: 'tutorials point',
   url: 'http://www.tutorialspoint.com',
   tags: ['mongodb', 'database', 'NoSQL'],
   likes: 100,
   comments: [
      {
         user:'user1',
         message: 'My first comment',
         dateCreated: new Date(2011,1,20,2,15),
         like: 0
      },
      {
         user:'user2',
         message: 'My second comments',
         dateCreated: new Date(2011,1,25,7,45),
         like: 5
      }
   ]
}
```

## Primeros pasos con MongoDB

Puedes descargar e instalar MongoDB en tu máquina o puedes utilizar un servicio como [mLab](https://mlab.com/) o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

