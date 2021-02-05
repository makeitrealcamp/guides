# Diccionarios
Un diccionario es una lista desordenada de pares de `clave:valor`. Supongamos que queremos guardar los precios de diferentes items que se venden en una cafeteria:

* La avena cuesta 3 dólares.
* La tostada cuesta 6 dólares.
* Zumo de zanahoria cuesta 5 dólares.
* Muffin cuesta 2 dólares.

En python creamos un diccionario con estos valores de la siguiente forma:

```python
menu = {"avena": 3, "tostada": 6, "zumo": 5, "muffin": 2}
```

Fíjate en eso:
* Un diccionario comienza y termina con llaves (`{` y `}`).
* Cada elemento consta de una clave (es decir, "`avena`") y un valor (es decir, `3`).
* Cada par de `clave:valor` (es decir, `"avena": 3, "tostada": 6`) está separada por una coma (`,`)
* Se considera una buena práctica insertar un espacio en blanco después de cada coma, pero el código se puede ejecutar sin espacio.

Como vemos, los diccionarios nos proporcionan una **forma de mapear** piezas de datos entre sí, de manera que podamos encontrar rápidamente los valores que se asocian entre sí.

## Caracteristicas
* Los diccionarios pueden tener como claves tipos de datos integer (`int`)
* Los valores pueden ser de cualquier tipo de datos válidos en python, tales como `float, bool, str`.
* Pueden inicializarse vacíos como las listas, por ejemplo: `{}` o `dict()`
* Para añadir valores a un diccionario puedes usar la sintaxis index o llamando al método `update`. Por ejemplo:

```python
locations = {}
locations['Paris'] = 100
locations.update({"London": 75})
print(locations)
```

Resultado

```
{'Paris': 100, 'London': 75}
```

Si queremos imprimir el valor que contiene `Paris`, lo llamamos de la siguiente forma

```python
print(locations['Paris'])
```

Resultado

```
100
```

Los diccionarios son "desordenados", lo cual significa que los elementos no tienen un orden definido, no se puede hacer referencia a un elemento utilizando un índice (como sí lo haciamos con las listas).

Los diccionarios son modificables, lo que significa que podemos cambiar, añadir o eliminar elementos una vez creado el diccionario.

## Claves
Aquí podría surgir un pregunta y es ¿puede un diccionario tener dos claves con el mismo valor? La respuesta es: No, cada clave de un diccionario debe ser única. No puede tener dos claves con el mismo valor. Si se intenta utilizar la misma clave de nuevo, se sobrescribirá el valor anterior almacenado. Si una clave necesita almacenar múltiples valores, entonces el valor asociado con la clave debe ser una lista u otro diccionario, como por ejemplo

```python
menu = {"alumnos": ["ana", "pedro", "jose"],
        "edades": [23, 21, 25],
        "promedio_calificaciones":
          {"matematicas": 4.5, "estadistica": 4.8, "fisica": 3.9}
        }
```

**Nota** Fíjate que hemos realizado saltos de linea, esto es con el fin de tener una mejor visualización del diccionario, y saber donde empieza y termina cada clave y cada valor.

Aquí puedes observar como la clave `promedio_calificaciones` tiene un valor de tipo diccionario, donde almacenamos lo siguiente: `{"matematicas": 4.5, "estadistica": 4.8, "fisica": 3.9}`.

## Iterando diccionarios
Podrás notar que anteriormente iteramos sobre las listas, ahora podemos iterar sobre los diccionarios, y lo hacemos con unas pequeñas diferencias, revisemos este código:

```python
menu = {"alumnos": ["ana", "pedro", "jose"],
        "edades": [23, 21, 25],
        "promedio_calificaciones":
          {"matematicas": 4.5, "estadistica": 4.8, "fisica": 3.9}
        }

for key, value in menu.items():
  print("Esta es la clave: ", key)
  print("Este es el valor: ", value)
```

Resultado

```
Esta es la clave:  alumnos
Este es el valor:  ['ana', 'pedro', 'jose']
Esta es la clave:  edades
Este es el valor:  [23, 21, 25]
Esta es la clave:  promedio_calificaciones
Este es el valor:  {'matematicas': 4.5, 'estadistica': 4.8, 'fisica': 3.9}
```

Interesante! podemos también iterar solamente sobre la llave o solamente sobre el valor de la siguiente manera:

```python
## iterando sobre la clave
for key in menu:
  print("Esta es la clave: ", key)
```

Resultado

```
Esta es la clave:  alumnos
Esta es la clave:  edades
Esta es la clave:  promedio_calificaciones
```

```python
## iterando sobre el valor
for key in menu:
  print("Este es el valor: ", menu[key])
```

Resultado

```
Este es el valor:  ['ana', 'pedro', 'jose']
Este es el valor:  [23, 21, 25]
Este es el valor:  {'matematicas': 4.5, 'estadistica': 4.8, 'fisica': 3.9}
```

# Tuplas
Es una estructura de datos en Python que nos permite guardar diferentes piezas de datos en ella. Es muy similar a las Listas, excepto porque las Tuplas son inmutables. Esto significa que una vez creada, el orden y el contenido de la tupla no puede ser cambiada.

```python
my_info = ('Daniel', 'Medellin', 'Programmer', 3)
print(my_info)
```

Resultado

```
('Daniel', 'Medellin', 'Programmer', 3)
```

Podemos llamar un elemento por su posición

```python
print(my_info[0])
print(my_info[-1])
```

```
Daniel
3
```

Pero decimos que es inmutable porque no se pueden cambiar los valores una vez son asignados.

```python
my_info[0] = 'Danny'
```

Resultado

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment

```

Obtenemos un TypeError diciendo que no podemos re-asignar un valor ya que se trata de una tupla.

## Upacking tuple
Tenemos una tupla previamente asignada a la variable `my_info` que hicimos de la siguiente manera

```python
my_info = ('Daniel', 'Medellin', 'Programmer', 3)
```

Cada uno de los elementos de la tupla pueden ser asignados a una variable, a esto lo llamamos "desempacar" una tupla. Esta es la sintaxis

```python
nombre, ciudad, profesion, experiencia = my_info
print(nombre)
print(profesion)
```

Resultado

```
Daniel
Programmer
```

## Un solo elemento
Una tupla puede contener un solo elemento, pero debemos tener cuidado al momento de asignarlo, ya que podríamos caer en un error. Miremos esto en detalle:

```python
un_elemento = (4)
print(un_elemento)
print(type(un_elemento))
```

Resultado

```
4
<class 'int'>
```

`4` en este caso no es una tupla, sino un integer. Esto es porque el paréntesis se usa en python para agrupar operaciones matemáticas, por ejemplo `(4 + 2)`. Entonces ¿cuál es la forma correcta de asignar una tupla de un solo elemento? Miremos:

```python
un_elemento = (4,) ## añadimos una coma al final
print(un_elemento)
print(type(un_elemento))
```

Resultado

```
(4,)
<class 'tuple'>
```

# Sets
Los sets o conjuntos se utilizan para almacenar múltiples elementos en una sola variable. El set es uno de los 4 tipos de datos incorporados en Python que se utilizan para almacenar colecciones de datos, recordemos que los otros 3 son la lista, la tupla y el diccionario, todos con diferentes cualidades y usos.

Un set es una colección que no está ordenada ni indexada. Los sets se escriben de la siguiente manera:

```python
mi_coleccion = {"pablo", "ana", "andrea"}
print(mi_coleccion)
```

Resultado

```
{'andrea', 'ana', 'pablo'}
```

## Caracteristicas
* Los elementos del set no están ordenados, no son modificables y no permiten valores duplicados.
* Desordenado significa que los elementos de un set no tienen un orden definido. Los elementos del conjunto pueden aparecer en un orden diferente cada vez que se utilizan, y no se puede hacer referencia a ellos por índice o clave.
* Los sets son inmutables, lo que significa que no podemos cambiar los elementos una vez creado el set, pero sí se pueden añadir nuevos.
* Los conjuntos no pueden tener dos elementos con el mismo valor.


```python
mi_coleccion = {"pablo", "ana", "andrea", "andrea"}
print(mi_coleccion)
```

Resultado

```
{'andrea', 'ana', 'pablo'}
```

## Tipos de datos
Los sets pueden almacenar cualquier tipo de datos, incluso mezclados entre sí.

```python
set1 = {"pablo", "ana", "andrea"}
set2 = {1, 5, 7, 9, 3}
set3 = {True, False, False}
set4 = {"abc", 34, True, 40, "mujer"}
```
