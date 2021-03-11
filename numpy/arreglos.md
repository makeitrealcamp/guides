# Arreglos

Los **arreglos** son la característica principal de NumPy; son similares a las listas de Python pero tienen algunas diferencias importantes:

* Los **arreglos** nos permiten realizar operaciones sobre todos los elementos a la vez en una misma operación; con las listas debemos realizar las operaciones sobre cada elemento individualmente.
* Los **arreglos** ocupan menos espacio en memoria y son más rápidos que las listas.
* Las listas pueden tener elementos con diferentes tipos de datos, los **arreglos** están diseñados para que todos sus elementos sean del mismo tipo.

**Nota:** En este capítulo vamos a trabajar con arreglos de una sola dimensión (1-D), en el siguiente veremos arreglos multidimensionales.

## Creando un arreglo de NumPy

Existen varias formas de crear un **arreglo** de NumPy. Una de las formas más simples es a partir de una lista o tupla utilizando el método `array`:

```python
arr = np.array([1, 2, 3]) # arr es ahora un arreglo de NumPy
```

El método `arange` permite crear un arreglo con un rango de números:

```python
np.arange(3) # array([0, 1, 2])
np.arange(3, 7) # array([3, 4, 5, 6])
np.arange(2, 9, 2) # array([2, 4, 6, 8])
```

En el último ejemplo, el tercer argumento representa el salto entre los números.

**Nota:** De ahora en adelante vamos a omitir la palabra `array` y los paréntesis en los resultados pero ten en cuenta que son arreglos de NumPy, no listas de Python.

El método `linspace` permite crear un arreglo de valores igualmente espaciados en un rango:

```python
np.linspace(0, 10, num=5) # [0., 2.5, 5., 7.5, 10.]
```

También podemos crear arreglos de unos (1) o ceros (0):

```python
np.ones(3) # [1, 1, 1]
np.zeros(3) # [0, 0, 0]
```

Y arreglos "vacíos" (información aleatoria) o con un valor determinado:

```python
np.empty(3) # crea un arreglo con 3 números aleatorios
np.full(3, 2) # [2, 2, 2]
```

Para más información te recomendamos ver la [documentación de NumPy](https://numpy.org/doc/stable/reference/routines.array-creation.html).

## Conociendo el tamaño de un arreglo

Para conocer el número de elementos que tiene un arreglo utiliza el atributo `size`:

```python
arr = np.array([4, 1, 6, 7, 3])
arr.size # 5
```

## Obteniendo valores de un arreglo

Podemos obtener un valor del arreglo utilizando la misma notación que utilizamos en las listas:

```python
arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9])
arr[0] # 1
arr[1] # 2
arr[10] # 9
```

También es posible obtener rangos de elementos utilizando la sintaxis `inicio:fin:salto`. El `inicio` se incluye pero el `fin` se excluye. Veamos algunos ejemplos continuando con el ejemplo anterior:

```python
arr[0:2] # [1, 2]
arr[2:5] # [3, 4, 5]
arr[0:7:2] # [1, 3, 5, 7]
```

Si omitimos `inicio` o `fin` significa desde el inicio o hasta el final respectivamente:

```python
arr[2:] # [3, 4, 5, 6, 7, 8, 9]
arr[:3] # [1, 2, 3]
```

Podemos utilizar números negativos. En `inicio` y en `fin` los números negativos cuentan las posiciones desde el final del arreglo:

```python
arr[-3:-1] # [7, 8]
```

Un `salto` negativo se mueve hacia los índices menores:

```python
arr[::-1] # [9, 8, 7, 6, 5, 4, 3, 2, 1]
arr[7:0:-2] # [8, 6, 4, 2]
```

Fíjate que en el último caso el `inicio` debe ser mayor al `fin`, de lo contrario retorna un arreglo vacío.

## Insertando, modificando y eliminando elementos

Los **arreglos** de NumPy son de tamaño fijo así que para insertar o eliminar elementos se debe crear un nuevo a arreglo.

Para insertar elementos al final del arreglo utilizamos el método `append`:

```python
arr = np.array([1, 2, 3])
np.append(arr, 4) # [1, 2, 3, 4]
np.append(arr, [4, 5, 6]) # [1, 2, 3, 4, 5, 6]
```

Recuerda que `arr` no se modifica cuando utilizamos `append`, debemos asignar el resultado a una nueva variable o reasignar la variable inicial:

```python
arr = np.append(arr, 4)
arr # [1, 2, 3, 4]
```

Para insertar elementos en otras posiciones del arreglo podemos utilizar el método `insert`. Por ejemplo, para insertar el número `5` en la posición `1` haríamos lo siguiente:

```python
arr = np.array([1, 2, 3])
np.insert(arr, 1, 5) # [1, 5, 2, 3]
```

Podemos modificar los elementos de un arreglo igual que lo haríamos con una lista:

```python
arr = np.array([1, 2, 3, 4])
arr[2] = 100
arr # [1, 2, 100, 3]
```

Para eliminar elementos de un arreglo podemos utilizar el método `delete`:

```python
arr = np.array([1, 2, 3, 4])
np.delete(arr, 0) # [2, 3, 4]

# podemos utilizar un rango
np.delete(arr, slice(1, 3)) # [1, 4]

# podemos utilizar una lista de índices
np.delete(arr, [0, 2]) # [2, 4]
```

## Operaciones con arreglos

Una de las características principales de los arreglos de NumPy es que podemos realizar operaciones sobre todos los elementos a la vez en una sola operación, a esto se le conoce en inglés como **element-wise**.

### Operaciones matemáticas

```python
arr = np.array([1, 2, 3])

# np.add(arr, 3)
arr + 3 # [4, 5, 6]

# np.multiply(arr, 2)
arr * 2 # [1, 4, 6]
```

Lo mismo podemos hacer con la resta (`-` o `subtract`), la división (`/` o `divide`), el exponente (`**` o `power`), el módulo (`%` o `mod`) y con [operaciones trigonométricas](https://numpy.org/doc/stable/reference/routines.math.html#trigonometric-functions).

Las operaciones también pueden ser con otros arreglos de NumPy. Por ejemplo:

```python
a = np.array([1, 2, 3, 4, 5])
b = np.array([6, 7, 8, 9, 10])

a + b # [ 7,  9, 11, 13, 15]
```

Cuando realizas operaciones matemáticas entre arreglos, los dos arreglos deben tener la misma longitud. De lo contrario se genera un error. Por ejemplo:

```python
a = np.array([1, 2, 3, 4, 5])
b = np.array([6, 7, 8, 9])

a * b
```

Genera el siguiente error:

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: operands could not be broadcast together with shapes (5,) (4,)
```

### Operaciones de agrupación

Para sumar todos los números de un arreglo podemos utilizar el método `sum` y para multiplicarlos el método `prod`:

```python
arr = np.array([1, 2, 3, 4])

# suma
np.sum(arr) # 10

# multiplicación
np.prod(arr) # 24
```

También podemos obtener el mayor y el menor número de un arreglo:

```python
np.max(arr) # 4
np.min(arr) # 1
```

### Operaciones lógicas

Cuando aplicamos operaciones lógicas sobre los arreglos, cada elemento es evaluado y se genera un nuevo arreglo de booleanos:

```python
arr = np.array([10, 2, 2, 4, 5, 3, 9, 8, 9, 7])
arr > 5 # [True, False, False, False, False, False, True, True, True, True])
```

También podemos utilizar las operaciones lógicas para seleccionar elementos basados en ciertos criterios:

```python
arr = np.array([10, 2, 2, 4, 5, 3, 9, 8, 9, 7])
arr[arr > 5] # [10,  9,  8,  9,  7]
arr[(arr > 5) | (arr < 3)] # [10,  2,  2,  9,  8,  9,  7]
```

### Otras operaciones comunes

```python
arr = np.array([1, 2, 3, 4])

# Longitud del arreglo, retorna un tupla con el resultado en la primera posición
arr.shape # (4,)

# Concatenación (retorna un nuevo arreglo)
np.concatenate((arr, [5, 6, 7])) # [1, 2, 3, 4, 5, 6, 7]

# Dividir en partes iguales
np.split(arr, 2) # [[1, 2], [3, 4]]

# Reversar (retorna un nuevo arreglo)
np.flip(arr) # [4, 3, 2, 1]

# Ordenar (retorna un nuevo arreglo)
arr = np.array([5, 2, 8, 7])
np.sort(arr) # [2, 5, 7, 8]

# Obtener los elementos únicos
arr = [1, 1, 2, 2, 3, 3]
np.unique(arr) # [1, 2, 3]

# Obtener el promedio
arr = np.array([1, 2, 3, 4])
np.mean(arr) # 2.5
```

Estas son las operaciones más comunes. Para una lista completa consulta la [documentación de NumPy](https://numpy.org/doc/stable/reference/routines.html).
