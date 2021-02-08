# Arrays de Dos Dimensiones
En Python podemos crear Listas que contienen otras Listas. Similarmente en NumPy podemos crear array de arrays. Si los arrays que componen nuestro array más grande son todos del mismo tamaño, entonces tienen un nombre especial: un array de dos dimensiones.

Tenemos arrays de 1-D separados
```python
test_1 = np.array([92, 94, 88, 91, 87])
test_2 = np.array([79, 100, 86, 93, 91])
test_3 = np.array([87, 85, 72, 90, 92])
```

Podemos guardarlos en un solo array de 2-D

```python
np.array([[92, 94, 88, 91, 87],
         [79, 100, 86, 93, 91],
         [87, 85, 72, 90, 92]])
```

Por ejemplo, aquí cada fila representa un test, y cada columna representa un estudiante. Esto nos permite guardar todos nuestros datos en un único array sin perder el orden. Como ya mencionamos, un array 2-D es un array de arrays donde cada array tiene el mismo número de elementos.

## No son arrays de dos dimensiones
Estos son algunos ejemplos de arrays que no son de dos dimensiones:

En el siguiente ejemplo el código corre, pero no creará un array de dos dimensiones, porque las listas tienen diferente número de elementos:

```python
np.array([[29, 49, 6],
          [77, 1]])
```

El siguiente código no correrá porque el agrupamiento con `[ ]` para la lista externa no existe:

```python
np.array([29, 49, 6],
         [77, 1, 80])
```

## Operaciones entre 1-D y 2-D
¿Podemos correr operaciones entre arrays de una dimensión (1-D) y arrays de dos dimensiones (2-D)?

* Si. NumPy correrá la operación en el array 1-D con cada fila del array 2-D individualmente
* Como resultado, solo es posible si el número de elementos en cada fila en ambos Arrays hacen match

```python
arr1 = np.array([[1, 1], [2, 2], [3, 3]])
arr2 = np.array([10, 10])

arr1 * arr2
```

Respuesta

```
array([[10, 10],
       [20, 20],
       [30, 30]])
```

## Seleccionando Elementos 1-D
NumPy nos permite seleccionar elementos de un array usando sus índices

```python
a = np.array([5, 2, 7, 0, 11])

print(a[0])
# 5

print(a[1])
# 2

print(a[-1])
# 11

print(a[-2])
# 0

print(a[1:3])
# [2 7]

print(a[:3])
# [5 2 7]

print(a[-3:])
# [ 7  0 11]

print(a[0:5:2])
# [ 5  7 11]
```

## Seleccionar Elementos en 2-D
Es muy similar a la selección de elementos en un array 1-D, solo que tenemos dos índices por seleccionar. La sintaxis para seleccionar elementos de un array 2-D es: `a[fila, columna]`, donde `a` es el array.

Es importante notar que cuando trabajamos con arrays que tienen más de una dimensión, las relaciones entre el interior de los arrays es definido en términos de ejes (axes).

Un array de dos dimensiones tiene dos ejes: eje `0` (axis `0`) que representa los valores que comparten la misma posición del índice (están en la misma columna) y eje `1` (axis `1`) representa los valores que comparten un array (están en la misma fila)


```python
a = np.array([[92, 94, 88, 91, 87],
         [79, 100, 86, 93, 91],
         [87, 85, 72, 90, 92]])

## recordemos cómo seleccionar: "a[fila, columna]"

## podemos seleccionar elementos específicos por sus índices
a[2, 1]
# 85

## si queremos seleccionar la columna entera, lo hacemos con :
a[:,0]
# array([92, 79, 87])

## si queremos seleccionar la fila entera, lo hacemos con :
a[1,:]
# array([ 79, 100,  86,  93,  91])

## podemos ir más lejos seleccionando un rango de una fila
a[0,0:3]
# array([92, 94, 88])

## podemos ir más lejos seleccionando un rango de una columna
a[0:2,0]
# array([92, 79])
```

## Operaciones Lógicas en Array
Otra cosa útil que puede hacer los arrays de NumPy es correr operaciones lógicas por cada elemento (element-wise). Supongamos que queremos saber cuántos elementos de un array son mayores que 5. Podemos hacer esto fácilmente y evaluar si es `True` por cada elemento del array sin necesidad de tener que usar un ciclo `for` para ello.

```python
a = np.array([10, 2, 2, 4, 5, 3, 9, 8, 9, 7])
a > 5

# array([ True, False, False, False, False, False,  True,  True,  True, True])
```

Podemos usar luego operadores lógicos para evaluar y seleccionar ítems basados en ciertos criterios. Podemos también combinar sentencias lógicas para especificar nuestros criterios. Para hacerlo ponemos cada sentencia entre paréntesis y usando operadores booleanos como `&` (and) y `|` (or)

```python
a = np.array([10, 2, 2, 4, 5, 3, 9, 8, 9, 7])

## usando operadores lógicos
a[a > 5]

# array([10,  9,  8,  9,  7])

## combinando sentencias
a[(a > 5) | (a < 3)]

# array([10,  2,  2,  9,  8,  9,  7])
```
