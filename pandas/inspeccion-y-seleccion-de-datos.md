# Inspección y selección de datos

## Creando un DataFrame

Un DataFrame es un objeto que almacena datos como filas y columnas.  Puede pensar en un DataFrame como una hoja de cálculo o como una tabla SQL.  Puede crear manualmente un DataFrame o rellenarlo con datos de un CSV, una hoja de cálculo de Excel o una consulta SQL.

Los DataFrames tienen filas y columnas.
* Cada columna tiene un nombre, que es un string.
* Cada fila tiene un índice, que es un número entero.
* Los DataFrames pueden contener muchos tipos de datos diferentes: strings, integers, floats, tuples, etc.

Puedes pasar un diccionario a pd.DataFrame(). Cada **llave** es un nombre de columna y cada **valor** es una lista de valores de columna. Las columnas deben tener la misma longitud o se producirá un error.

```python
df1 = pd.DataFrame({
    'name': ['Jhon', 'jane', 'Joe'],
    'address': ['123 main st', '456 Maple Av', '789 Broadway'],
    'age': [38, 28, 51]
})

print(df1)
```

### Columna de la izquierda

Se conoce como los índices o “row labels” de un DataFrame. Por defecto, cada DataFrame que cree o cargue desde un archivo tendrá esta columna de valores que comienza en 0 y aumenta secuencialmente para cada fila. Estos valores son esencialmente como la identificación para cada fila, ya que cada valor debe ser único por fila.

Para ver los valores de esa columna:


```python
df1.index

# RangeIndex(start=0, stop=3, step=1)
```

Podemos también ver los valores de una fila en especifico

```python
df1.loc[2]

# name                Joe
# address    789 Broadway
# age                  51
# Name: 2, dtype: object
```

## Creando DataFrames parte 2

También puede añadir datos utilizando listas. Por ejemplo, puede pasar una lista de listas, donde cada una representa una fila de datos. Usamos el “keyword argument” columns para pasar la lista de nombres de las columnas.

```python
df2 = pd.DataFrame([
    ['John', '123 Main st', 34],
    ['Jane', '456 Maple Ave', 28],
    ['Joe', '789 Broadway', 60]
],
columns=['name', 'address', 'age'])

print(df2)
```

Aquí podría surgir una pregunta: ¿Cuándo debería crear un DataFrame de Pandas usando un diccionario o una lista? Dependiendo de varios factores, se puede preferir usar uno sobre el otro. El uso de diccionarios puede ser mucho más rápido, ya que puede incluir los nombres de las columnas como claves e incluir los valores de la columna como una lista para las claves. Sin embargo, una desventaja de usar un diccionario es que las columnas no conservarán el orden en el que las ingresó y, en su lugar, el orden por defecto será el orden alfabético. Esto es importante tenerlo en cuenta, especialmente si el orden de las columnas es importante.

El uso de una lista de listas le permite introducir cada fila de datos una por una como una lista separada, pero puede llevar más tiempo que el uso de un diccionario, ya que los nombres de las columnas deben añadirse como una lista separada después de que se añadan las filas. Sin embargo, una lista de listas le permite ordenar los nombres de las columnas específicamente, lo que puede ser muy importante.

## CSVs en Pandas

Ahora sabemos cómo crear nuestro propio DataFrame. Sin embargo, la mayoría de las veces, trabajaremos con conjuntos de datos que ya existen. Uno de los formatos más comunes para grandes conjuntos de datos es el CSV.

CSV (valores separados por comas) es un formato de hoja de cálculo de sólo texto. Puedes encontrar CSVs en muchos lugares:

  * Conjuntos de datos en línea (aquí hay un ejemplo de [data.gov](https://catalog.data.gov/dataset?res_format=CSV))
  * Kaggle ([datasets](https://www.kaggle.com/datasets))
  * UCI Machine learning ([datasets](https://archive.ics.uci.edu/))
  * Competencias en DataSource.ai: ([datasets](https://www.datasource.ai/es/home/data-science-competitions-for-startups))
  * Exportación desde hojas de Excel o Google
  * Exportación desde SQL
  * Resultado de un (Scraping)[https://en.wikipedia.org/wiki/Web_scraping]

La primera fila de un CSV contiene encabezados de columna. Todas las líneas siguientes contienen valores. Cada encabezado de columna y cada variable están separados por una coma:

```csv
columna1,columna2,columna3
valor1,valor2,valor3
```

Aquí podrían surgir nuevas preguntas, tales como: En un archivo CSV, ¿importa el espaciado antes y después de las comas? Sí, en la mayoría de los casos para los archivos CSV, Pandas separa los datos por comas, y mantiene los espacios que fueron incluidos antes o después de una coma. Por eso, es importante que al crear un archivo CSV, cada valor sólo se separe con una coma sin espacios en blanco no deseados antes o después de las comas, ya que no se eliminarán automáticamente.

## Cargando y guardando CSVs

Vaya al [siguiente enlace](https://drive.google.com/file/d/1xaeKGfq3_cBeFPMJ5eg7fHyX6lgtvOmG/view?usp=sharing) y descargue el csv a su maquina local. Suba el archivo a su ambiente de trabajo (aquí deberías estar usando un notebook: Jupyter o Colab).

Cuando usted tiene datos en un CSV, usted puede cargarlos en un DataFrame en pandas usando `.read_csv()`

```python
df3 = pd.read_csv('datasets/imdb.csv')
print(df3)
```

¿Qué pasa si hay valores vacíos o faltan valores en un archivo CSV? Si el archivo CSV contiene valores vacíos, entonces cuando leemos el archivo, rellenará las celdas vacías con `NaN`. `NaN` es la abreviación de "Not a Number", y se usará para significar valores perdidos.

## Inspeccionando un DataFrame

Cuando cargamos un nuevo DataFrame desde un CSV queremos saber cómo luce. Si es un DataFrame pequeño, podemos imprimirlo escribiendo `print(df)`

Si es un DataFrame grande nos ayuda mejor si inspeccionamos pocos ítems sin tener que mirar el DataFrame completo. El método `.head()` nos da las primeras 5 filas de un DataFrame.

```python
df3 = pd.read_csv('datasets/imdb.csv')
print(df3.head())
```

Si queremos ver más filas, podemos pasar un argumento posicional `n`. Por ejemplo `df.head(10)` nos traería las primeras 10 filas

El metodo `df.info()` nos da algunas estadísticas sobre cada columna

```python
df3.info()

# <class 'pandas.core.frame.DataFrame'>
# RangeIndex: 220 entries, 0 to 219
# Data columns (total 5 columns):
#  #   Column       Non-Null Count  Dtype
# ---  ------       --------------  -----
#  0   id           220 non-null    int64
#  1   name         220 non-null    object
#  2   genre        220 non-null    object
#  3   year         220 non-null    int64
#  4   imdb_rating  220 non-null    object
# dtypes: int64(2), object(3)
# memory usage: 8.7+ KB
```

## Seleccionar Columnas

Ahora que ya conocemos cómo crear y cargar datos, vamos a seleccionar partes de ese dataset que son interesantes o importantes para nuestro análisis

Supongamos que tenemos un DataFrame llamado `customers` que contiene lo siguiente:

```
name                   |   age
Catalina               |   30
Daniel                 |   38
Gerardo                |   35
```

Supongamos que usted quiere tomar el promedio de edades, o dibujarle un histograma de las edades. Para hacer esto debemos seleccionar la columna. Hay dos formas de hacerlo:
* Seleccionar la columna como si estuviéramos seleccionado un valor de un diccionario: `customers['age']` para tomar los años
* Si el nombre de la columna cumple con los requisitos de nombramiento de variables, puede entonces seleccionarla usando la siguiente notación: `df.MySecondColumn`. En nuestro ejemplo: `customers.age`

Ejercicio:
1. Selecciona la columna `age` del DataFrame `imdb.csv` con la notación de diccionario
2. Selecciona la columna `genre` del DataFrame `imdb.csv` con la notación de variable.

Respuesta:

```python
age = df3['year']
print(age)

# 0      2009
# 1      2015
# 2      2012
# 3      2008
# 4      1999
#        ...
# 215    2001
# 216    2002
# 217    1999
# 218    1995
# 219    1979
# Name: year, Length: 220, dtype: int64

genre = df3.genre
print(genre)

# 0      action
# 1      action
# 2      action
# 3      action
# 4      action
#         ...  
# 215     drama
# 216     drama
# 217     drama
# 218     drama
# 219     drama
# Name: genre, Length: 220, dtype: object
```

## Series

Cuando seleccionamos una sola columna, el resultado es también llamado `Series`

```python
print(type(genre))
# <class 'pandas.core.series.Series'>

print(type(age))
# <class 'pandas.core.series.Series'>
```

## Series Vs DataFrame
Un Pandas series es un objeto de una sola dimensión que contiene cualquier tipo de datos, y es similar a un array de Numpy.

Las Series tienen un único nombre "label" de eje como el título de la columna el cual es el índice de la serie. Una serie es esencialmente una columna única.

Creemos una Serie en vez de un DataFrame

```python
clinic_east = pd.Series([100, 51, 76, 57, 43, 4, 89])

print(clinic_east)

# 0    100
# 1     51
# 2     76
# 3     57
# 4     43
# 5      4
# 6     89
# dtype: int64

print(type(clinic_east))
# <class 'pandas.core.series.Series'>
```

Un dataframe es un objeto de dos dimensiones que puede contener múltiples columnas de diferentes tipos de datos. Ellos son similares a una tabla SQL. Una única columna de un dataframe es una Serie y un dataframe es un contenedor de dos o más series.

Cuando tienes un dataframe muy grande, podrías querer seleccionar solo unas pocas columnas. Para seleccionar dos o más columnas de un dataframe, usamos una lista de los nombres de las columnas.

## Seleccionando múltiples columnas

Cuando tienes un dataframe muy grande, podrías querer seleccionar solo unas pocas columnas. Para seleccionar dos o más columnas de un dataframe, usamos una lista de los nombres de las columnas.

```python
new_df = df3[['genre', 'year']]
print(new_df)

# genre  year
# 0    action  2009
# 1    action  2015
# 2    action  2012
# 3    action  2008
# 4    action  1999
# ..      ...   ...
# 215   drama  2001
# 216   drama  2002
# 217   drama  1999
# 218   drama  1995
# 219   drama  1979
#
# [220 rows x 2 columns]

print(type(new_df))
# <class 'pandas.core.frame.DataFrame'>
```

Aquí podría surgir una nueva pregunta: ¿Podemos seleccionar las columnas en cualquier orden? Si. Al seleccionar varias columnas de un DataFrame, puede ordenarlas de la forma que desee que aparezcan. Esto es particularmente útil porque si quisiéramos ver los datos de una cierta manera diferente al orden original de las columnas, podemos re-ordenarlos en la salida de la forma que necesitemos.

## Seleccionando Filas

Los dataframes son zero-indexed lo que significa que empieza por 0 y suma desde ahí. Si queremos seleccionar “The Avengers” que está en la tercera fila, lo hacemos con este comando:

```python
avengers = df3.iloc[2]
print(avengers)

# id                        3
# name           The Avengers
# genre                action
# year                   2012
# imdb_rating             8.1
# Name: 2, dtype: object
```

Aquí podría surgir una nueva pregunta: Cuando seleccionamos una fila, también se le denomina una "Serie"? Si. Igual a como cuando seleccionamos una columna

```python
print(type(avengers))
```

¿Cómo es que el resultado del iloc no es una lista?
Al usar iloc en Pandas, devolverá una fila especificada, pero en forma de Serie. La columna izquierda del resultado está compuesta por índices que son los nombres de las columnas del dataframe. Y la columna de la derecha está compuesta por los valores de cada columna de la fila de datos. Esta es una característica útil en Pandas porque muestra toda la información sobre las columnas y los valores de una fila de forma clara.

## Seleccionando múltiples filas

Estas son diferentes formas de seleccionar multiples filas:

* Selecciona de la 3ra a la 6ta

```python
df3.iloc[3:7]

# id	name	genre	year	imdb_rating
# 3	4	The Dark Knight	action	2008	9.0
# 4	5	Star Wars: Episode I - The Phantom Menace	action	1999	6.6
# 5	6	Star Wars	action	1977	8.7
# 6	7	Avengers: Age of Ultron	action	2015	7.9
```

* Selecciona de la 0 a la 3ra

```python
df3.iloc[:4]

# id	name	genre	year	imdb_rating
# 0	1	Avatar	action	2009	7.9
# 1	2	Jurassic World	action	2015	7.3
# 2	3	The Avengers	action	2012	8.1
# 3	4	The Dark Knight	action	2008	9.0
```

* Selecciona las ultimas 3

```python
df3.iloc[-3:]

# id	name	genre	year	imdb_rating
# 217	218	Big Daddy	drama	1999	6.4
# 218	219	Se7en	drama	1995	8.6
# 219	220	Seven	drama	1979	6.1
```

Cuando usamos iloc para seleccionar rangos de filas del dataframe ¿podemos omitir filas? Si, es muy similar al slicing de python

```python
df3.iloc[0:10:3]

# id	name	genre	year	imdb_rating
# 0	1	Avatar	action	2009	7.9
# 3	4	The Dark Knight	action	2008	9.0
# 6	7	Avengers: Age of Ultron	action	2015	7.9
# 9	10	Iron Man 3	action	2013	7.3
```

## Seleccionando filas

Usted puede seleccionar un subset de datos de un dataframe usando sentencias lógicas de esta forma: `df[df.MyColumnName == desired_column_value]`. Supongamos que queremos seleccionar las películas de género “horror”

```python
df3[df3.genre == 'horror']

# id	name	genre	year	imdb_rating
# 97	98	World War Z	horror	2013	7.0
# 98	99	What Lies Beneath	horror	2000	6.6
# 99	100	Gremlins	horror	1984	7.2
# 100	101	The Blair Witch Project	horror	1999	6.4
# 101	102	The Conjuring	horror	2013	7.5
# 102	103	The Ring	horror	2002	7.1
# 103	104	The Grudge	horror	2004	5.9
# .......
```

O las mayores al año 2013

```python
df3[df3.year > 2013]

# id	name	genre	year	imdb_rating
# 1	2	Jurassic World	action	2015	7.3
# 6	7	Avengers: Age of Ultron	action	2015	7.9
# 15	16	American Sniper	action	2014	7.4
# 16	17	Furious Seven	action	2015	7.4
# 18	19	Guardians of the Galaxy	action	2014	8.1
# 35	36	Captain America: The Winter Soldier	action	2014	7.8
# 36	37	The Lego Movie	action	2014	7.8
# ......
```

O las que son diferentes al género romance

```python
df3[df3.genre != 'romance']

# id	name	genre	year	imdb_rating
# 0	1	Avatar	action	2009	7.9
# 1	2	Jurassic World	action	2015	7.3
# 2	3	The Avengers	action	2012	8.1
# 3	4	The Dark Knight	action	2008	9.0
# 4	5	Star Wars: Episode I - The Phantom Menace	action	1999	6.6
# ...	...	...	...	...	...
```

Usted puede también combinar múltiples sentencias lógicas, y cada sentencia en paréntesis. Por ejemplo queremos seleccionar las que son mayores a 2013 o son del género "drama"

```python
df3[(df3.year > 2013) | (df3.genre == 'drama')]

# id	name	genre	year	imdb_rating
# 1	2	Jurassic World	action	2015	7.3
# 6	7	Avengers: Age of Ultron	action	2015	7.9
# 15	16	American Sniper	action	2014	7.4
# 16	17	Furious Seven	action	2015	7.4
# 18	19	Guardians of the Galaxy	action	2014	8.1
# 35	36	Captain America: The Winter Soldier	action	2014	7.8
# ...	...	...	...	...	...
```

O las que son mayores al 2013 y son género "drama"

```python
df3[(df3.year > 2013) & (df3.genre == 'drama') ]

# id	name	genre	year	imdb_rating
# 199	200	Dawn of the Planet of the Apes	drama	2014	7.7
# 200	201	Interstellar	drama	2014	8.7
# 213	214	Gone Girl	drama	2014	8.2
```

¿Importa el orden de los operadores lógicos?
Si y no. Depende de cuantas sentencias lógicas haya. Cuando hay solo una sentencia lógica siempre será evaluado de la misma forma porque solo es una sentencia. Por ejm: `num < 3`
Cuando hay dos sentencias lógicas, el orden no importa porque solo aplicaría `or` o `and` `(|, &)`

Cuando hay más de dos sentencias lógicas el orden empieza a importar.

## Comando `isin`

Volvamos a nuestro dataframe de movies, y supongamos que queremos seleccionar las filas donde las películas sean “Star Wars”, “Dark Shadows” y “Blade”. Podemos usar el comando `isin` para chequear el nombre: `df.name`

```python
# isin
# Star Wars, Dark Shadows, Blade

my_selection = df3[df3.name.isin(["Star Wars", "Dark Shadows", "Blade"])]

print(my_selection)

#       id          name   genre  year imdb_rating
# 5      6     Star Wars  action  1977         8.7
# 127  128  Dark Shadows  horror  2012         6.2
# 137  138         Blade  horror  1998         7.1
```

## Reset Index

Cuando seleccionamos un subset de un dataframe usando lógica, terminamos con índices no-consecutivos. Esa es una forma poco elegante y nos hace difícil la tarea de seleccionar por índices con `iloc`. Podemos solucionar esto usando el método `.reset_index()`.

Siguiendo con el ejemplo inmediatamente anterior:

```python
my_selection.reset_index()

#   index	id	name	genre	year	imdb_rating
# 0	5	6	Star Wars	action	1977	8.7
# 1	127	128	Dark Shadows	horror	2012	6.2
# 2	137	138	Blade	horror	1998	7.1
```

Como puedes ver los índices fueron movidos a una columna llamada `index`. A menos que se necesiten para algo especial, podemos usar `drop=True`.

```python
my_selection.reset_index(drop=True)

#   id	name	genre	year	imdb_rating
# 0	6	Star Wars	action	1977	8.7
# 1	128	Dark Shadows	horror	2012	6.2
# 2	138	Blade	horror	1998	7.1
```

¿Cuándo deberíamos usar el `reset_index()`? Cuando un dataframe no tiene índices consecutivos, osea que no son secuenciales `(0, 1, 2 …)` y salta algunos números. Esto se da con los subsets (selecciones de ciertas filas). Otra situación es cuando la columna que es por default el índice fue cambiada por otros valores diferentes a integers, por ejemplo `names`. Pandas permite esto. Por tanto necesitamos otra vez indices
