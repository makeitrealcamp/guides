# Primeros pasos

## Instalando e importando NumPy

Para usar [NumPy](https://numpy.org/) debemos primero instalarlo desde la consola con el siguiente comando:

```
pip3 install numpy
```

Después debemos importarlo en nuestro código de Python con la siguiente línea:

```python
import numpy as np
```

El `as np` al final de esta línea nos permite usar `np` como un atajo a NumPy (**less typing = fewer errors!**).

## Usando NumPy

[NumPy](https://numpy.org/) incluye varios objetos y funciones que podemos invocar iniciando con `np.`, seguido del nombre del objeto o la función. Por ejemplo, para sacar el promedio de un arreglo haríamos lo siguiente:

```python
prom = np.mean([1, 2, 3, 4])
print(prom) # 2.5
```

Hay algo importante que debemos aclarar y es que, aunque en este ejemplo le pasamos una lista a la función `mean`, NumPy convierte la lista a un arreglo de NumPy internamente. Podemos transformar una lista de Python en un arreglo de NumPy usando la función `array`:

```python
arr = np.array([1, 2, 3])
```

Por ejemplo, podemos sumar dos arreglos:

```python
arr = np.array([1, 2]) + np.array([1, 2])
print(arr) # [2, 4]
```

Si intentas lo anterior con listas de Python no se sumarían sino que se concatenarían:

```python
print([1, 2] + [1, 2]) # [1, 2, 1, 2]
```

En la siguiente guía vamos a explorar más sobre los arreglos de NumPy.
