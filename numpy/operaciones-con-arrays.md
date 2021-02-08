# Operaciones con Arrays
Generalmente los Numpy arrays son más eficientes que las listas. Una de las razones es que te permiten hacer operaciones con los elementos. (element-wise). Una operación con un elemento (element-wise) te permite correr rápidamente una operación como una suma, en cada elemento de un array. Comparemos cómo añadir un número a cada valor en una Lista versus a un NumPy array

```python
# usando un ciclo for para sumar 3 a cada elemento
mi_lista = [1, 2, 3, 4, 5]
mi_array_mas_3 = []

for i in range(len(mi_lista)):
  operacion = mi_lista[i] + 3
  mi_array_mas_3.append(operacion)

print(mi_array_mas_3)
```

Respuesta

```
[4, 5, 6, 7, 8]
```

```python
# usando un list comprehension para sumar 3 a cada elemento
mi_lista = [1, 2, 3, 4, 5]

mi_array_mas_3 = [ i + 3 for i in mi_lista]

print(mi_array_mas_3)
```

Respuesta

```
[4, 5, 6, 7, 8]
```

```python
# usando numpy
mi_lista = [1, 2, 3, 4, 5]
mi_array = np.array(mi_lista)
mi_array_mas_3 = mi_array + 3

print(mi_array_mas_3)
```

Respuesta

```
[4 5 6 7 8]
```

**Nota** Fíjese que la respuesta nos da un objeto sin comas, esto es porque el tipo de datos en un Array de NumPy

```
>>> print(type(mi_array_mas_3))
<class 'numpy.ndarray'>
```

Como podemos ver, podemos usar un ciclo `for` o un list comprehension si es una Lista. Con un array, solo sumamos 3 a el array. Lo mismo para restar, multiplicar o dividir

```python
# usando numpy
mi_lista = [1, 2, 3, 4, 5]
mi_array = np.array(mi_lista)
mi_array_al_cuadrado = mi_array ** 2

print(mi_array_al_cuadrado)
```

Respuesta

```
[ 1  4  9 16 25]
```

## Operaciones comunes
Como vimos, las operaciones sobre cada elemento más comunes son sumar, restar, multiplicar, módulos y exponenciales.

```python
ejemplo = np.array([12, 34, 45, 67, 89])

ejemplo + 1
# array([13, 35, 46, 68, 90])

ejemplo * 10
# array([120, 340, 450, 670, 890])

ejemplo % 10
# array([2, 4, 5, 7, 9])
```

Los arrays también pueden ser sumados o restados con otros arrays de NumPy. Cuando sumamos o restamos arrays de NumPy, cada elemento será sumado/restado de su elemento match.


```python
a = np.array([1, 2, 3, 4, 5])
b = np.array([6, 7, 8, 9, 10])

a + b
# array([ 7,  9, 11, 13, 15])
```

### ¿Qué pasa si es de otro largo el array?
¿Qué pasa cuando aplicamos una operación entre dos arrays de una dimensión (1-D) con diferentes largos?
* Tendremos un mensaje de error, específicamente un `ValueError`
* La ejecución trata de emparejar desde el primero hasta el último elemento
* Cuando un elemento no encuentra pareja, tendremos una error de emparejamiento

```python
a = np.array([1, 2, 3, 4, 5])
b = np.array([6, 7, 8, 9])

a * b
```

Respuesta

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: operands could not be broadcast together with shapes (5,) (4,)
```
