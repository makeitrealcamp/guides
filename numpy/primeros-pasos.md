# Primeros pasos

## Instalando e importando NumPy
Para usar NumPy con Python, debemos instalarlo e importarlo en la línea superior usando el siguiente código:

Instalación desde la consola

```
pip3 install numpy
```

Importación desde un archivo de python

```python
import numpy as np
```

Escribiendo `as np` nos permite usar `np` como un atajo a NumPy (**less typing = fewer errors!**)

## Usando NumPy
Un NumPy array es un tipo especial de Lista. Es una Estructura de Datos que organiza múltiples items. Cada ítem puede ser de diferentes tipos (strings, numbers, o incluso otros arrays). Los arrays son más poderosos cuando son usados para guardar números. Esto es porque los arrays nos dan formas especiales de correr operaciones matemáticas que son simples de escribir y computacionalmente más eficientes.

Un NumPy array se ve de esta manera:

```python
mi_array = np.array([1, 2, 3, 4, 5, 6])
```

Podemos transformar una Lista de Python en un NumPy Array usando `np.array()` y guardando en una nueva variable

```python
mi_lista = [1, 2, 3, 4, 5, 6]
mi_array = np.array(mi_lista)
```

## NumPy Arrays VS Listas
* Ambos pueden guardar múltiples ítems de cualquier tipo de datos.
* En ambos se puede acceder a ítems individuales por sus índices.
* La diferencia más notable e importante es que podemos correr operaciones en un Array (sobre cada ítem), como suma, multiplicación y resta, como se podría en matemáticas.
* Con las listas no se puede aplicar en cada uno de los  elementos una suma, y causaría error.

## Creando Arrays desde CSV
Típicamente no estaremos ingresando datos directamente dentro de un array. En vez, estaremos importando datos de algún otro lugar. Podemos transformar archivos CSV en arrays usando la función: `np.genfromtxt()`

Creemos un archivo llamado sample.csv desde un editor de texto con los siguientes datos
`34,9,12,11,7`.

Importemos el CSV a NumPy usando el siguiente código:

```python
csv_array = np.genfromtxt('sample.csv', delimiter=',')
print(csv_array)
```

Un archivo CSV contiene líneas de datos que tiene columnas de datos separadas por comas. Cada fila sería como una fila en una base de datos.
