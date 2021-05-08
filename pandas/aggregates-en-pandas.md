# Aggregates en Pandas

Los agregados son una forma de crear un único número que describe un grupo de números

Los aggregates más comunes incluyen la media (mean), la mediana (median) o la desviación standard (standard deviation)

También aprenderemos a hacer un “rearrange” en un dataframe, lo cual es una forma de comparar datos entre dos dimensiones

## Estadística de una columna

Anteriormente vimos como correr operaciones sobre cada valor en una columna usando `apply`
Vamos a ver como combinar todos los valores de una columna en un único cálculo

```python
movies = pd.DataFrame([
    ['Avatar', 'action', 2009, 7.9],
    ['Jurassic World', 'action', 2015, 7.3]
    ['The Avengers', 'action', 2012, 8.1]
    ['The Dark Knight', 'action', 2008, 9.0]
],
columns=['name', 'genre', 'year', 'imdb_rating'])

print(movies)
print(movies.year.median())
```

### Nunique & Unique

Veamos cual es el número de ocurrencias únicas

```python
print(movies.year.nunique())
```

Veamos los valores únicos

```python
print(movies.year.unique())
```

## Sintaxis

La sintaxis general para correr cálculos es:

```python
df.column_name.command()
```

La siguiente es una tabla que resume los comandos más comunes:

```
comando | Descripción
mean    | Promedio de todos los valores de la columna
std     | Desviación estándar todos los valores de la columna
median  | Mediana de todos los valores de la columna
max     | Valor máximo de la columna
min     | Valor mínimo de la columna
count   | Número de valores en la columna
nunique | Número de valores únicos en la columna
unique  | Lista de los valores únicos en la columna
```

## Ejercicios

Descargue este csv llamado `orders.csv` https://drive.google.com/file/d/1EPqj_vQH-o2PcnChrg2CyUzGNMnVWe8K/view?usp=sharing, y siga los siguientes pasos:

```python
orders = pd.read_csv('orders.csv')
print(orders.head(10))

most_expensive = orders.price.max()
print(most_expensive)

num_colors = orders.shoe_color.nunique()
print(num_colors)
```

## Calculando aggregates

En Pandas también podemos usar el `groupby` con la siguiente sintaxis:

```python
df.groupby('column1').column2.measurement()
```

Donde:
* `column1`: es la columna por la que queremos agrupar (`groupby`)
* `column2`: es la columna sobre la cual queremos ejecutar el aggregate (`measurement`)
* `measurement`: es el método para calcular la medición que queremos aplicar.

Nuestro departamento de finanzas quiere conocer el zapato más costoso que vendemos por cada tipo de zapato (shoe_type), ¿cómo lo haríamos?

```python
pricey_shoes = orders.groupby('shoe_type').price.max()
print(pricey_shoes)
```

Después de usar `groupby` normalmente necesitaremos limpiar nuestros datos resultantes. `groupby` normalmente crea un `Series` no un `DataFrame`. Podemos usar `reset_index()`, esto volverá a transformar nuestro `Series` en un `DataFrame` y mover los índices a su propia columna. lo hacemos así:

```python
df.group('column1').column2.measurement().reset_index()
```

```python
pricey_shoes = orders.groupby('shoe_type').price.max().reset_index()
print(pricey_shoes)
```

Algunas veces la operación que queremos correr será más complicada que la media o el `count`. En esos casos podremos aplicar la función `apply` y las funciones `lambda`. De la misma forma como hicimos con columnas individuales. Un buen ejemplo de esto es calcular los percentiles.

Nuestro departamento de marketing dice que es importante tener zapatos a precios razonables y en disponibilidad para todos los colores del inventario. Vamos a calcular el `25th` percentile al precio del zapato por cada color

```python
import numpy as np

cheap_shoes = orders.groupby('shoe_color').price.apply(lambda x: np.percentile(x, 25)).reset_index()

print(cheap_shoes)
```

Algunas veces vamos a querer agregar por más de una columna. Podemos hacer esto pasando una lista de los nombres de las columnas en el método `groupby`. Imaginemos que el equipo de compras cree que ciertas combinaciones de tipos de zapatos y colores son particularmente populares este año. Vamos a crear un dataframe con el total del número de zapatos de cada combinación por tipo y color comparada

```python
shoe_count = orders.groupby(['shoe_type', 'shoe_color']).id.count().reset_index()

print(shoe_count)
```

## Pivot Tables

Cuando corremos un `groupby` entre múltiples columnas, muy seguido vamos a querer cambiar como es guardada la data. Reorganizar la tabla es lo que se conoce como "pivoting". La nueva tabla es llamada pivot table. En Pandas el comando para pivotar es:

```python
df.pivot(columns='ColumnToPivot', index='ColumnToBeRows', values='ColumnToBeValues')
```

Siguiendo este ejemplo anterior

```python
shoe_count = orders.groupby(['shoe_type', 'shoe_color']).id.count().reset_index()

shoes_count_pivot = shoe_count.pivot(
  columns='shoe_color',
  index='shoe_type',
  values='id').reset_index()

print(shoes_count_pivot)
```
