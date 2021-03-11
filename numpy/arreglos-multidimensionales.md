# Arreglos multidimensionales

En el capítulo anterior vimos arreglos de una sola dimensión. Sin embargo, podemos crear arreglos de varias dimensiones, similar a como podemos crear listas de Python que contienen otras listas internamente. Por ejemplo, creemos un arreglo de dos dimensiones (2-D):

```python
arr = np.array([
  [1, 2],
  [3, 4]
])

# También se puede en una sola línea, aunque no es tan legible
# arr = np.array([[1, 2], [3, 4]])
```

## Conociendo la forma de un arreglo

En el capítulo anterior vimos el atributo `size` para conocer el número de elementos de un arreglo. Este método sigue aplicando para arreglos multidimensionales:

```python
arr = np.array([
  [1, 2],
  [3, 4]
])

arr.size # 4
```

Sin embargo, a veces es útil también saber la forma de un arreglo, es decir, la longitud de cada una de las dimensiones. Para esto podemos utilizar el atributo `shape`:

```python
arr.shape # (2, 2)
```

## Creando arreglos multidimensionales

En el capítulo anterior vimos cómo crear arreglos utilizando métodos como `arange`, `ones` y `zeros`, entre otros. Algunos de estos métodos reciben la forma del arreglo como primer argumento:

```python
np.ones((2, 2)) # [[1.,1.], [1.,1.]]
np.zeros((2, 2, 2)) # un arreglo de tres dimensiones (un cubo): 2 x 2 x 2

np.full((3, 3, 8), 5) # un arreglo de tres dimensiones (un cubo): 3 x 3 x 8
```

Otros métodos como `arange` no permiten especificar la forma del arreglo final. Sin embargo, podemos cambiar la forma de un arreglo como veremos a continuación.

## Cambiando la forma de un arreglo

Para cambiar la forma de un arreglo utilizamos el método `reshape`. Por ejemplo, aunque el método `arange` no permite especificar la forma, podemos cambiar la forma con `reshape`:

```python
arr = np.arange(6) # [0, 1, 2, 3, 4, 5]
arr.reshape((3, 2))
# [[0, 1],
#  [2, 3],
#  [4, 5]]

# o en una sola línea
# np.arange(6).reshape((3, 2))
```

## Obteniendo valores de un arreglo multidimensional

Para obtener los valores de un arreglo multidimensional debemos especificar los índices en cada dimensión. Por ejemplo, para obtener un valor en un arreglo de dos dimensiones debemos pasar dos índices:

```python
arr = np.array([
  [1, 2],
  [3, 4]
])
arr[0, 0] # 1
arr[0, 1] # 2
arr[1, 0] # 3
arr[1, 1] # 4
```

Para un arreglo de tres dimensiones pasaríamos tres índices, y así sucesivamente.

Si queremos seleccionar la columna entera pasamos dos puntos (`:`) como primer índice:

```python
arr[:,0] # [1, 3]
```

Si queremos seleccionar la fila entera pasamos dos puntos (`:`) como segundo índice:

```python
arr[1,:] # [3, 4]
```

Podemos incluso seleccionar rangos dentro de las filas y las columnas:

```python
arr = np.array([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])

arr[1:, :2] # [[4, 5], [7, 8]]
```

## Multiplicando arreglos

Para realizar la multiplicación entre dos arreglos utiliza el método `matmul` o utilizamos el operador `@`:

```python
a = np.array([
  [2, 2]
])
b = np.array([
  [2],
  [2]
])
np.matmul(a, b) # [[8]]
a @ b # [[8]]
```

A esta multiplicación se le llama también producto de matrices o producto punto, y es diferente a la multiplicación elemento a elemento. Veamos otro ejemplo:

```python
a = np.array([
  [1, 0],
  [0, 1]
])
b = np.array([
  [4, 1],
  [2, 2]
])

np.matmul(a, b) # [[4, 1], [2, 2]]
a @ b # [[4, 1], [2, 2]]
```

Si queremos multiplicar elemento a elemento utilizaríamos el operador asterisco (`*`):

```python
a * b # [[4, 0], [0, 2]]
```

## Transponer un arreglo

Para transponer un arreglo utiliza el método `transpose` o el atributo `T`:

```python
arr = np.array([
  [1,2],
  [3,4]
])
arr.T
# [[1, 3],
#  [2, 4]]
```

## Cargando y guardando arreglos en archivos CSV

Para cargar y guardar arreglos en CSV (archivos separados por coma) utiliza los métodos `loadtxt` y `savetxt`.

```python
arr = np.array([34,9,12,11,7])

# Guardar a un archivo CSV
np.savetxt('arreglo.csv', arr, delimeter=',')

# Cargar de un archivo CSV
arr = np.loadtxt('arreglo.csv') # [34,9,12,11,7]
```

Si necesitamos manejar datos faltantes es mejor utilizar el método `genfromtxt`.
