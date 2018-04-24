# SQL

Para acceder y manipular la información en un **sistema de gestión de base de datos \(SGBD\)** se utiliza **SQL**.

**SQL** expone 4 tipo de operaciones:

* `SELECT` para listar registros de las tablas.
* `INSERT` para insertar registros.
* `UPDATE` para actualizar registros.
* `DELETE` para eliminar registros.

**SQL** no diferencia entre mayúsculas y minúsculas. `SELECT` es lo mismo que `select`;

## Listando registros con SELECT

La sintaxis más simple del `SELECT` es la siguiente:

```sql
SELECT <columnas> FROM <tabla>;
```

Si quieres mostrar todas las columnas de la tabla utiliza `*`. Por ejemplo:

```sql
SELECT * FROM rooms;
SELECT hotel_id, number FROM rooms;
```

Puedes agregar condiciones con `WHERE`:

```sql
SELECT * FROM rooms WHERE hotel_id = 3;
```

## Insertando registros con INSERT

La sintaxis para insertar un registro es la siguiente:

```sql
INSERT INTO <tabla> (<columnas>) VALUES (<valores>);
```

Por ejemplo:

```sql
INSERT INTO rooms (hotel_id, number, size, price) VALUES (2, 405, 45, 500);
```

## Actualizando registros con UPDATE

La sintaxis para actualizar registros es la siguiente:

```sql
UPDATE <tabla> SET <campo1>=<valor1>, <campo2>=<valor2> WHERE <condiciones>;
```

Por ejemplo:

```sql
UPDATE rooms SET number='406' WHERE id = 1;
```

## Eliminando registros con DELETE

La sintaxis para eliminar registros es la siguiente:

```sql
DELETE FROM <tabla> WHERE <condiciones>;
```

Por ejemplo:

```sql
DELETE FROM rooms;
DELETE FROM rooms WHERE size > 200;
```

## Opciones del SELECT

Las sentencias SELECT se pueden utilizar para hacer consultas complejas a la Base de Datos.

### AND

Se utiliza cuando el `WHERE` tiene dos o más condiciones en donde **todas** se deben cumplir.

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;
```

### OR

Se utiliza cuando el `WHERE` tiene dos o más condiciones en donde **alguna** se debe cumpliar:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
```

Puedes mezclar `AND` y `OR` pero debes utilizar paréntesis para agrupar donde sea necesario.

### LIMIT

Se utiliza para **limitar el número de registros** que retorna la consulta.

```sql
SELECT column1, column2, ...
FROM table_name
LIMIT 10
```

### OFFSET

Se utiliza para **saltar** un número determinado de registros. Generalmente se utiliza en conjunto con `LIMIT` para paginar:

```sql
SELECT column1, column2, ...
FROM table_name
LIMIT 10
OFFSET 50
```

### ORDER BY

Se utiliza para ordenar los resultados de forma ascendente o descendente por uno o más campos de la consulta.

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC;
```

En vez de `ASC` \(ascendente\) puedes utilizar `DESC` \(descendente\).

### GROUP BY

Se utiliza para agrupar registros por uno o más campos.

```sql
SELECT column1, column2, ...
FROM table_name
GROUP BY column1, column2, ...
```

Generalmente se usa en conjunto a alguna de las siguiente funciones: `COUNT`, `MAX`, `MIN`, `SUM,`AVG\`.

### COUNT

Se utiliza para contar los registros de una consulta:

```sql
SELECT COUNT(column_name)
FROM table_name;
```

### MIN

Selecciona el **menor** valor de una columna:

```sql
SELECT MIN(column_name)
FROM table_name;
```

### MAX

Selecciona el **mayor** valor de una columna:

```sql
SELECT MAX(column_name)
FROM table_name;
```

### SUM

Se utiliza para **sumar** los valores de una columna:

```sql
SELECT SUM(column_name)
FROM table_name;
```

### AVG

Se utiliza para sacar el **promedio** de los valores de una columna:

```sql
SELECT AVG(column_name)
FROM table_name;
```

### JOINS

Se utilizan para unir información de dos o más tablas.

La sintaxis básica de un `JOIN` es la siguiente:

```sql
SELECT column1, column2, ...
FROM table1 JOIN table2 ON  table1.column1 = table2.column2
```

Existen diferentes tipos de `JOIN`:

* `JOIN` \(o `INNER JOIN`\): muestra los registros que tienen coincidencias en las dos tablas.
* `LEFT JOIN`: muestra todos los registros de la tabla izquierda, y los que coincidan a la derecha. Este es el `JOIN` más común.
* `RIGHT JOIN`: muestra todos los registros de la tabla derecha, y los que coincidan a la izquierda.
* `FULL JOIN`: muestra todos los registros de las dos tablas.

![JOIN](https://www.w3schools.com/sql/img_innerjoin.gif)

![LEFT JOIN](https://www.w3schools.com/sql/img_leftjoin.gif)

![RIGHT JOIN](https://www.w3schools.com/sql/img_rightjoin.gif)

![FULL JOIN](https://www.w3schools.com/sql/img_fulljoin.gif)

Imágenes tomadas de [https://www.w3schools.com/sql/sql\_join.asp](https://www.w3schools.com/sql/sql_join.asp).

