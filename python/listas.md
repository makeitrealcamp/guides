# Listas

Una lista es un set ordenado de objetos en Python. Una lista empieza y termina con corchetes (`[` y `]`)

Cada ítem es separado por coma (por ej. `[67, 68]`). Es considerado buena práctica añadir espacio después de la coma. Veamos unos ejemplos

```python
# listado de alturas de estudiantes de una clase
alturas = [1.9, 1.70, 1.6, 1.7]
```

Una lista puede contener más que solo números decimales.

```python
# nombres de estudiantes
alturas = ["andres", "andrea", "juan", "juana"]

# podemos combinar datos
lista_mixta = ["andrea", 25]
```

## Listas de listas

Hemos visto que las listas pueden contener números y strings, pero las listas también pueden contener otras listas!

```python
alturas = [['andres', 30], ['andrea', 25], ['juan', 28], ['juana', 27]]
```

Como vemos tenemos un corchete "padre" que tiene unos elementos internos separados por coma. Estos elementos son otras listas, cada una con dos elementos: un string y un integer, que a su vez están separados por comas. Si imprimes alturas este será el resultado:

```
>>> alturas
[['andres', 30], ['andrea', 25], ['juan', 28], ['juana', 27]]
```

## Listas vacías

Una lista no tiene siempre que contener valores. Podemos crear listas vacías. Usualmente lo hacemos porque planeamos llenarla más adelante con datos. Ya vamos a hablar sobre cómo anexar datos a una lista

```python
lista_vacia = []
```

### Creciendo la lista: `append`

Podemos añadir un único elemento a la lista usando `.append()`. La declaración de `.append()` siempre va después de la lista. Esto es diferente a las funciones como `print()` que siempre vienen antes, miremos la diferencia

```python
# sintaxis del print
print(elemento)

# sintaxis del .append()
elemento.append("sub-elemento")
```

No podemos añadir más de un elemento a la lista con `.append()` En el caso de ser necesario, llamamos múltiples veces la función `.append()`, aunque existe una mejor manera de añadir más de un elemento (más adelante en esta misma sección lo veremos)

```python
# añadiendo ítems a una lista vacía
lista_vacia = []
lista_vacia.append(1)
```

```
>>> print(lista_vacia)
[1]
```

No siempre vamos a añadir nuevos valores a una lista vacía, podríamos necesitar añadir un nuevo elemento a una lista existente. Supongamos que tenemos la siguiente lista con los siguientes elementos `mi_lista = [1, 2, 3]`. La pregunta es ¿Cómo añadimos el valor `4` a esta lista?


```python
# añadiendo ítems a una lista previamente creada
mi_lista = [1, 2, 3]
mi_lista.append(4)
```

```
>>> print(mi_lista)
[1, 2, 3, 4]
```

### Creciendo la Lista: más(`+`)

Existe una segunda forma de añadir elementos a una lista vacía o previamente creada y con valores. Cuando queremos añadir múltiples ítems a una lista podemos usar el `+` para combinar dos listas. Solo podemos usar el `+` para añadir otras listas a una lista, no para agregar valores únicos (como si lo hacía `.append()`)

Otra forma de añadir un único valor a una lista es con la sintaxis: (`[]`) (por ej. `mi_lista + [4]`). Con el operador + se puede añadir más de una lista.

```python
items_vendidos = ['galletas', 'pasteles', 'arequipe']
items_vendidos_nuevos = items_vendidos + ['tortas', 'empanadas']
```

```
>>> print(items_vendidos)
['galletas', 'pasteles', 'arequipe']
>>> print(items_vendidos_nuevos)
['galletas', 'pasteles', 'arequipe', 'tortas', 'empanadas']
```

Hemos añadido dos elementos en un solo paso con el operador `+`

## Rangos

Muy pronto vamos a necesitar construir listas con una lista consecutiva de números. (por ej, una lista de ítems con valores del 0 al 9). Para ello podemos usar una función llamada `range`.

La función `range` toma un único parámetro y genera una lista empezando desde `0` y terminando un número antes del número asignado en el parámetro.

```python
mi_rango = range(10)
```

```
>>> print(mi_rango)
range(0, 10)
```

Si puedes ver, no se creo una lista consecutiva de números del 0 al 9, sino que creo un objeto `range(0, 10)`. Este objeto debemos convertirlo a una lista, con el método `list` de la siguiente manera.

```python
mi_rango = range(10)
mi_rango_lista = list(mi_rango)
```

```
>>> print(mi_rango_lista)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Ahora sí tenemos una lista de valores de 0 a 9 (recuerda que termina un número antes del número asignado en el parámetro). Esto es útil si necesitamos crear, por ejemplo, 10.000 valores consecutivos en una lista. No tiene sentido hacerlo manual, en ese caso podemos hacerlo con un `range`

Si pasamos dos argumentos al método `range()` le estaremos diciendo el valor desde el cual debe empezar la lista.

```python
mi_lista = range(2, 9)
```

```
print(list(mi_lista))
[2, 3, 4, 5, 6, 7, 8]
```

Interesante! en este caso no empezamos la lista en 0, sino en 2, hasta 8 (un número antes del pasado al parámetro).

Si usamos un tercer argumento, podemos crear una lista que salta ciertos valores.

```python
mi_lista = range(2, 9, 2)
```

```
print(list(mi_lista))
[2, 4, 6, 8]
```

Ahora lo que hizo fue ir de dos en dos

## Índices de una lista

Las listas están indexadas, esto significa que cada elemento de la lista tiene un valor posicional el cual nos servirá para hacer ciertas operaciones especiales. Veamos un ejemplo

```python
mi_lista = [1, 2, 3, 4, 5]
```

En la lista anterior el valor `1` tiene un índice de `0`, el valor `2` tiene un índice de `1`, el valor `3` tiene un índice de `2` y así sucesivamente. Como vemos, estos valores siempre empiezan en cero, por ello decimos que las listas son estructuras de datos indexadas a cero. Veamos esta otra lista

```python
mi_lista2 = ["ana", "juan", "daniel", "andrea", "juana"]
```

En la lista anterior el valor `ana` tiene un índice de `0`, el valor `juan` tiene un índice de `1`, el valor `daniel` tiene un índice de `2` y así sucesivamente.

Más adelante veremos la utilidad en detalle

## Operaciones con listas

Ahora que ya sabemos como crear una lista, podemos empezar a trabajar con listas previamente creadas.

### Largo de una Lista

Muy seguido, necesitaremos conocer el número de ítems dentro de una lista, usualmente llamado el largo (length). Podemos hacer eso usando la función `len`, cuando aplicamos `len` a una lista obtenemos el número de ítems

```python
mi_lista = [1, 2, 3, 4, 5]
```

```
print(len(mi_lista))
5
```

¿Cómo está relacionada la función `len()` con los índices de una lista? La función `len()` retorna el número de ítems en una lista. Los índices de una lista empiezan en `0` (como vimos anteriormente), por lo tanto el valor de `len()` representa un valor más 1 que el último index de la lista. Esto significa que los índices válidos de una lista son cualquier número entre `0` y `len() - 1`

La función `len()` es comúnmente usada con la función `range()`. Desde que `range()` por default retorna una lista desde `0` hasta el número pasado `-1`, el `len()` de una lista puede ser pasada a `range()` para generar una lista válida de índices


```python
ejemplos = ["rojo", "azul", "amarillo", "verde"]
```

```
print(len(ejemplos))
4
```

Imprimamos los índices de la lista usando un `range()` y un `len()` combinados

```python
for color in range(len(ejemplos)):
  print(color)
```
Nota: más adelante veremos los ciclos `for`, por ahora solo ejecutemos el código para ver que sucede. El resultado es:

```
0
1
2
3
```

Como vemos el `len()` es `4`, sin embargo los índices de la lista van desde `0` hasta `3`. Esto será muy útil para cuando necesitemos hacer operaciones sobre cada elemento de una lista, ya que de esta forma accedemos a los índices de cada elemento.

### Seleccionando elementos

Recordemos que las listas están indexadas y estos índices empiezan en `0`. Podemos seleccionar un único elemento de la lista usando corchetes (`[ ]`) y el índice del ítem de la lista

```python
ejemplos = ["rojo", "azul", "amarillo", "verde"]
```

```
>>> print(ejemplos[0])
rojo
>>> print(ejemplos[2])
amarillo
```

¿Qué pasa si queremos seleccionar el último elemento de la lista? Podemos usar el índice `-1`, incluso cuando no sabemos cuántos elementos hay en la lista.

```
>>> print(ejemplos[3])
verde
>>> print(ejemplos[-1])
verde
```

Como puedes ver, el elemento "verde" se encuentra en la última posición de la lista, y podemos acceder a él pasando explícitamente el valor del índice, o pasando el valor de `-1`. Este último selector es importante cuando tenemos listas muy largas, y así evitamos un conteo manual de los índices.

### Slicing lists
Supongamos que tenemos la siguiente lista de items:

```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```

Supongamos que queremos seleccionar desde la `b` hasta la `f`. ¿Cómo lo hacemos? Podemos hacerlo usando la siguiente sintaxis `letras[inicio:fin]`, donde:
* inicio: es el índice del primer elemento que queremos incluir en nuestra selección
* fin: es el índice "uno mayor que" el índice que queremos incluir en la selección.

```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
sublista = letras[1:6]
```

```
>>> print(sublista)
['b', 'c', 'd', 'e', 'f']
```

Como vemos la letra `f` en la lista `letras` se encuentra en el índice o posición #5 (empezando la cuenta desde cero). Según lo anterior, debemos sumarle 1 a ese valor y pasarlo a la selección, es por ello que tenemos el valor de 6 (`letras[1:6]`)

Si queremos seleccionar los primeros 3 elementos de una lista podemos usar el siguiente código.

```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
sublista = letras[0:3]
```

```
>>> print(sublista)
['a', 'b', 'c']
```

Cuando empezamos la selección al inicio de la lista, es válido omitir el cero.

```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
sublista = letras[:3]
```

```
>>> print(sublista)
['a', 'b', 'c']
```

Podemos hacer algo similar cuando seleccionamos los últimos ítems de una lista.

```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
sublista = letras[2:]
```

```
>>> print(sublista)
['c', 'd', 'e', 'f', 'g']
```

Miremos en detalle esta sintaxis: `letras[2:]`. Recordando las reglas del slicing (`letras[inicio:fin]`), hemos llamado solo a la posición 2 para iniciar el slice, pero el valor después de los `:` fue omitido. Esto quiere decir que queremos seleccionar todos los elementos desde la posición `2` hasta el final, y no es necesario poner el valor `-1` o el valor del índice del último elemento. Esto nos facilita la selección y es la sintaxis más común para este tipo de selecciones.

Si queremos seleccionar los últimos 3 elementos de una lista podemos usar índices negativos para contar desde el final de la lista

```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
sublista = letras[-3:]
```

```
>>> print(sublista)
['e', 'f', 'g']
```

Como vemos, en esta ocasión le dijimos que fuera desde `-3` o sea el "antepenúltimo" valor hasta el final de la lista. O sea los últimos tres valores. Aquí podría surgir la pregunta ¿Puede el inicio o el final del slice tener índices negativos? La respuesta es sí. Ya vimos un ejemplo, ahora experimentamos más.

```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
sublista = letras[-2:]
```

```
>>> print(sublista)
['f', 'g']
```

Y que tal esta otra

```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
sublista = letras[:-2]
```

```
>>> print(sublista)
['a', 'b', 'c', 'd', 'e']
```

En esta sintaxis `letras[:-2]` y siguiendo las reglas del slicing (`letras[inicio:fin]`) hemos omitido el valor de `inicio`, lo cual quiere decir que queremos seleccionar desde la posición o índice 0. Y en el valor `fin` pusimos `-2`, o sea que omite los últimos dos valores de la lista. Haz pruebas por tu cuenta para que te familiarices con la selección de elementos, ya que es una operación muy común con python.

Podría surgir una pregunta adicional, y es que pasa si seleccionamos un índice que no existe? veamos un ejemplo:


```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
sublista = letras[10]
```

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: list index out of range
```

Si estamos seleccionado el índice con valor de `10`, el cual no existe obtendremos un error. Pero qué pasa si lo hacemos en un slice?


```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
sublista = letras[:10]
```

```
>>> print(sublista)
['a', 'b', 'c', 'd', 'e', 'f', 'g']
```

No nos da un error, sino que imprime hasta donde encuentra indices. Haz más pruebas por tu cuenta.


### Removiendo elementos
Ahora vamos a ver cómo remover elementos de una lista. El método `remove()` elimina el elemento especificado:


```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
letras.remove("c")
```

```
>>> print(letras)
['a', 'b', 'd', 'e', 'f', 'g']
```

El método `pop()` elimina el índice especificado (o el último elemento si no se especifica el índice):

```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
letras.pop(0)
```

```
>>> print(letras)
['b', 'c', 'd', 'e', 'f', 'g']
```

El método `clear()` vacía la lista por completo:

```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
letras.clear()
```

```
>>> print(letras)
[]
```

### Editando elementos
Ahora veamos cómo editar elementos de una lista

```python
letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
letras[0] = 'z'
```

```
>>> print(letras)
['z', 'b', 'c', 'd', 'e', 'f', 'g']
```

Como vemos, en este caso no usamos ningún método especial, solamente llamamos al índice del elemento que queremos editar, en este caso `0` y luego le asignamos el nuevo valor.
