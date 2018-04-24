# Bases de datos relacionales

Las **bases de datos relacionales** se caracterizan por modelar la información en **tablas** que se relacionan entre sí.

## Conceptos

Los conceptos más importantes que debes conocer para aprender sobre **bases de datos relacionales** son:

* Base de datos.
* Tablas, columnas y registros.
* Relaciones: llaves primarias y foráneas.

### Base de datos

Una **base de datos** es una colección de **tablas**. En un **sistema de gestión de bases de datos \(SGBD\)** puedes tener varias **bases de datos**. En desarrollo Web generalmente se utiliza una **base de datos** por aplicación.

El ícono que se utiliza para representar una base de datos es el siguiente:

![&#xCD;cono Base de Datos](https://s3.amazonaws.com/makeitreal/images/books/database-icon.png)

### Tablas, columnas y registros

Una **tabla** se compone de **columnas** y **registros**:

![Tablas, columnas y registros](https://s3.amazonaws.com/makeitreal/images/books/table-columns-rows.png)

Las **columnas** se componen de:

* Un nombre
* Un tipo de datos \(cadenas de texto, números, fechas, etc.\).
* Un tamaño
* Si la columna acepta nulos o no \(un nulo representa información que falta o es desconocida\).
* Un valor por defecto.

Los **registros** representan las filas de la tabla. Cada **registro** contiene valores para cada una de las **columnas** de la tabla.

### Relaciones

En una **base de datos relacional** las **tablas** se relacionan a través de **llaves primarias** y **llaves foráneas**.

Cada tabla tiene una **llave primaria**, que es una o más **columnas** que permite\(n\) identificar un **registro** de forma única. Generalmente la **columna** que actúa como **llave primaria** se llama **id**. Una **tabla** sólo puede tener una única **llave primaria**.

Además de la **llave primaria**, una tabla puede tener cero o más **llaves foráneas**, que son **columnas** que referencian las **llaves primarias** de otras **tablas**.

La siguiente imagen muestra dos tablas, una de productos \(`products`\) y otra de categorías \(`categories`\). Cada producto pertenece a una categoría.

![Relaciones](https://s3.amazonaws.com/makeitreal/images/books/table-relations.png)

Fíjate que cada tabla tiene su propia **lave primaria** y que `products` tiene una **llave foránea** llamada `category_id` que referencia la **llave primaria** de `categories`. De esa forma se van creando las relaciones entre tablas.

## Modelamiento

Al proceso de diseñar el diagrama con la estructura de la base de datos \(tablas, columnas y relaciones\) se le conoce como **modelamiento de bases de datos** y es uno de los primeros pasos en el proceso de desarrollo de software.

En un **diagrama de bases de datos** la forma de representar una **tabla** es utilizando un rectángulo que muestra el nombre de la tabla y sus columnas. Para mayor detalle se puede incluir el tipo de columna y sus características \(tamaño, restricciones, etc.\):

![Tabla de Productos](https://s3.amazonaws.com/makeitreal/images/books/products-table.png)

`pk` significa **llave primaria** \(primary key\) y `fk` **llave foránea** \(foreign key\). Para representar relaciones se utilizan líneas que conectan las tablas:

![Diagrama de ER](https://s3.amazonaws.com/makeitreal/images/books/er-diagram.png)

A este diagrama también se le conoce como **diagrama entidad/relación \(ER\)**.

Los adornos en los extremos de la relación indican los roles de cada tabla. En este caso, **un** producto pertenece a una categoría y una categoría puede tener **muchos** productos asociados. A esto se le conoce como una relación **uno a muchos**, y es el tipo de relación más común entre tablas.

### Herramientas de modelamiento

Existe una gran variedad de herramientas para crear tus diagramas: algunas son gratis, otras pagas. Unas son aplicaciones de escritorio, otras Web. En realidad no importa la que utilices, incluso lapiz y papel son unas excelentes herramientas de modelado :\)

Algunas opciones gratuitas \(o que ofrecen una versión gratuita\) son las siguientes:

* [Draw.io](https://www.draw.io/)
* [Lucid chart](https://www.lucidchart.com/)
* [Create.ly](https://creately.com/diagram-type/template/gdsgxpcv/database-diagram)
* [MySQL Workbench](https://www.mysql.com/products/workbench/)

### Ejemplo de modelamiento

La forma más fácil de entender el proceso de modelamiento es con un ejemplo. Imagina que estamos diseñando un sistema de **pedidos en línea**. El primer paso es describir la información que necesitamos almacenar:

Cada pedido tiene la siguiente información:

* Número
* Fecha de creación
* Fecha de entrega
* Cliente \(nombre, dirección, teléfono\)
* Productos. De cada producto necesitamos lo siguiente:
  * Nombre
  * Cantidad
  * Precio unitario
* Total del pedido

Toda esta información se podría agrugar en una gran tabla de pedidos con la siguiente estructura:

| \# | Creación | Entrega | Cliente | Productos | Total |
| --- | --- | --- | --- | --- | --- |
| 1 | 2018-01-01 | 2018-01-17 | Pedro, Cra 123, Tel: 51678 | 2 de Arroz \(800\), 1 de Leche \(1500\) | 3100 |
| 2 | 2018-01-02 | 2018-01-16 | Pablo, Cll 567, Tel: 98765 | 2 Huevos \(400\) | 800 |
| 3 | 2018-01-03 | 2018-01-19 | Pedro, Cra 123, Tel: 51678 | 2 de Arroz \(800\) | 1600 |

Aunque esta tabla incluye toda la información que nos solicitaron, existen varios problemas:

* Consultar la información de los clientes y productos implica recorrer toda la tabla.
* Existe información repetida de clientes y productos.
* Modificar la información de un cliente o producto implica recorrer toda la tabla.
* Es sujeto a errores. ¿Qué pasa si escribimos mal la dirección de un cliente o el precio de un producto en un pedido?

Aunque no existe una única forma de modelar una base de datos, existen unas reglas que te van a ayudar en este proceso:

1. Cada columna debería tener un único dato. En nuestro ejemplo la columna de `Cliente` y `Productos` tiene múltiples datos en una misma columna. Esto nos indica que debemos separar esos datos en varias columnas o, incluso, separar esa información en otras tablas.
2. Cada tabla debe tener una llave primaria \(en nuestro caso la llave primaria es el número de pedido así que bien por este lado\).
3. Una tabla debería describir un único objeto o elemento. En nuestro ejemplo, la tabla de **pedidos** también describe la información de los **clientes**, los **productos** y los **ítems** del pedido.

A este proceso de reducir la redundancia \(información repetida\) y mejorar la integridad de los datos \(evitar errores de digitación\) se le conoce como [normalización](https://es.wikipedia.org/wiki/Normalización_de_bases_de_datos).

Siguiendo las reglas anteriores vamos a separar nuestra gran tabla de **pedidos** en las siguientes cuatro:

* Clientes
* Productos
* Pedidos
* Ítems \(del pedido\)

El diagrama quedaría de la siguiente forma:

![Diagrama de pedidos](https://s3.amazonaws.com/makeitreal/images/books/orders-er-diagram.png)

El **pedido** pertenece a un **cliente** y un **cliente** puede tener muchos **pedidos**. Un **pedido** tiene muchos **ítems** y cada **ítem** pertenece a un **pedido**. Un **ítem** tiene un **producto** y un **producto** puede aparecer en muchos **ítems**.

Fíjate que en la tabla de **pedidos** no tenemos una referencia a los **ítems**. Por el contrario, cada **ítem** tiene una referencia al **pedido**. Al buscar los **ítems** de un **pedido** sólo tenemos que buscar los que coincidan con el id de ese **pedido**.

**Nota:** El **modelamiento de base de datos** es una habilidad que requiere práctica y tiempo. Asegúrate **siempre** de validar tus modelos con tu mentor \(o alguien con experiencia\) antes de empezar a desarrollar tu aplicación, te va a ahorrar bastante tiempo más adelante.

