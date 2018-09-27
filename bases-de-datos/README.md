# Bases de datos

Una **base de datos** es una colección estructurada de datos, organizada para ser fácil de acceder y manipular.

Aunque una **base de datos** puede ser tan simple como un archivo de texto separado por comas \(CSV\), para aplicaciones Web se recomienda utilizar un **sistema de gestión de bases de datos \(SGBD\)** como [MySQL](https://www.mysql.com/), [PostgreSQL](https://www.postgresql.org/), [MongoDB](https://www.mongodb.com/), etc., por varias razones:

* Están optimizadas para almacenar y manipular grandes cantidades de datos.
* Ofrecen mayor seguridad de la información \(manejo de usuarios y roles\).
* Permiten a varios usuarios acceder y manipular la información de forma concurrente \(al mismo tiempo\).
* Garantizan la integridad de los datos.

Un **sistema de gestión de bases de datos \(SGBD\)** puede contener muchas **bases de datos**.

**Nota:** a los **SGDB** se les conoce en Inglés como **Database Management Systems \(DBMS\)**. También se les conoce como **motores de bases de datos**.

Los **SGBD** se pueden dividir en dos grandes grupos: relacionales y no relacionales.

Los **SGBD relacionales** se caracterizan por modelar la información en **tablas** que se relacionan entre sí. Ejemplos de **SGBD relacionales** incluyen [MySQL](https://www.mysql.com/), [PostgreSQL](https://www.postgresql.org/) y [SQLServer](https://www.microsoft.com/en-us/sql-server/default.aspx), entre otros.

Los **SGBD no relacionales** \(también conocidas como **NoSQL**\) modelan la información de diferentes formas: documentos, llave-valor y grafos, entre otras. Ejemplos de **SGBD no relacionales** incluyen [MongoDB](https://www.mongodb.com/), [Redis](https://redis.io/) y [Apache Cassandra](http://cassandra.apache.org/) entre otras.

## Prerequisitos

* [Preparación](../preparacion/)

Para MongoDB se recomiendan los siguientes temas:

* [JavaScript I](../javascript-i/)
* [JavaScript II](../javascript-ii/)
* [jQuery y AJAX](../jquery-y-ajax/)

## Contenido

* [Bases de datos relacionales](bases-de-datos-relacionales.md)
* [SQL](sql.md)
* [DDL](ddl.md)
* [MongoDB](mongodb.md)
