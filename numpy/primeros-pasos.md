# Primeros pasos

## Instalando e importando NumPy

Para usar [NumPy](https://numpy.org/) debemos instalar la librería desde la consola con el siguiente comando:

```
pip3 install numpy
```

Después debemos importarla en nuestro código:

```python
import numpy as np
```

## Usando NumPy

[NumPy](https://numpy.org/) incluye varios objetos y funciones que podemos invocar iniciando con `np.`, seguido del nombre del objeto o la función. Por ejemplo, para sacar el promedio de un arreglo haríamos lo siguiente:

```python
prom = np.mean([1, 2, 3, 4])
print(prom) # 2.5
```

Algo importante que debemos aclarar es que, aunque en este ejemplo le pasamos una lista a la función `mean`, NumPy convierte la lista a un arreglo de NumPy internamente.

Podemos transformar una lista de Python en un arreglo de NumPy usando la función `array`:

```python
arr = np.array([1, 2, 3])
```

Sobre los arreglos de NumPy podemos realizar operaciones matemáticas. Por ejemplo, podemos sumar dos arreglos elemento por elemento:

```python
arr = np.array([1, 2]) + np.array([1, 2])
print(arr) # [2, 4]
```

Si intentamos hacer lo mismo sobre dos listas de Python no se suman sino que se concatenan:

```python
[1, 2] + [1, 2] # [1, 2, 1, 2]
```

En la siguiente guía vamos a explorar en más detalle los arreglos de NumPy.
