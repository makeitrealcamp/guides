# DDL

**DDL** nos permite crear y definir la **estructura** que va a tener cada base de datos.

**DDL** tiene más diferencias que **SQL** entre los diferentes motores de bases de datos. Los ejemplos que vamos a ver a continuación aplican únicamente para [PostgreSQL](https://www.postgresql.org/).

Las operaciones más comunes con DDL son:

* Crear bases de datos con `CREATE DATABASE`;
* Crear tablas con `CREATE TABLE`.
* Eliminar tablas con `DROP TABLE`.
* Cambiar tablas con `ALTER TABLE`.

## Creando bases de datos con CREATE DATABASE

La sintaxis para crear una base de datos es la siguiente:

```sql
CREATE DATABASE <nombre>;
```

Por ejemplo:

```sql
CREATE DATABASE myhotels;
```

## Creando tablas con CREATE TABLE

La sintaxis más básica para crear una tabla es \(asumiendo que queremos tener una **llave primaria** llamada `id` que sea autonumérica\):

```sql
CREATE TABLE <nombre> (
  id serial PRIMARY KEY,
  <columna2> <tipodedato>,
  ...
);
```

Por ejemplo:

```sql
CREATE TABLE hotels (
  id serial PRIMARY KEY,
  name varchar(255) NOT NULL,
  stars int
);
```

El `NOT NULL` al final del campo `name` le dice a PostgreSQL que ese campo no acepta valores nulos.

## Tipos de datos

PostgreSQL tiene una gran variedad de tipos de datos pero vamos a ver los principales:

* `integer` o `int`: campo numérico.
* `decimal`: número con decimales.
* `serial`: numérico autoincremental.
* `varchar`: texto con límite.
* `text`: texto sin límite.
* `timestamp`: fecha y hora.
* `date`: fecha sin hora.
* `time`: hora sin fecha.
* `boolean` o `bool`

Existen muchos más tipos pero estos son los que se usan la mayor parte del tiempo y se encuentran en la mayoría de motores.

## Llaves foráneas

Para crear una **llave foránea** puedes utilizar la palabra clave `REFERENCES` como en el siguiente ejemplo:

```sql
CREATE TABLE rooms (
  id SERIAL PRIMARY KEY,
  hotel_id int REFERENCES hotels (id) ON DELETE CASCADE,
  number varchar(10)
);
```

`REFERENCES hotels (id)` crea la **llave foránea**.

`ON DELETE CASCADE` es opcional y le dice a la tabla que cuando eliminen un registro en `hotels`, también elimine todos los registros relacionados en `rooms`.

## Eliminando tablas con DROP TABLE

La sintaxis para eliminar una tabla es:

```sql
DROP TABLE <tabla>;
```

Por ejemplo:

```sql
DROP TABLE rooms;
```

## Cambiando tablas con ALTER TABLE

La sintaxis de `ALTER TABLE` cambia dependiendo de los que queramos hacer. Veamos las tres tareas más comunes:

Para **agregar una columna** a una tabla utilizamos la siguiente sintaxis:

```sql
ALTER TABLE <tabla> ADD <columna> <tipodedatos> <restricciones>;
```

Para **eliminar una columna** de una tabla utilizamos la siguiente sintaxis:

```sql
ALTER TABLE <tabla> DROP COLUMN <columna>;
```

Para **modificar el tipo de datos de una columna** utilizamos la siguiente sintaxis:

```sql
ALTER TABLE <tabla> MODIFY <columna> <tipodedatos> <restricciones>;
```

Ejemplos:

```sql
ALTER TABLE hotels ADD address varchar(255) NOT NULL;
ALTER TABLE hotels DROP COLUMN address;
ALTER TABLE hotels MODIFY address varchar(100) NOT NULL;
```

