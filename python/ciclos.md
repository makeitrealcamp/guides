# Ciclos
Un ciclo es una forma de evitar repetir código muchas veces

```python
razas = ["bulldog", "chihuahua", "beagle", "golden", "labrador", "pug"]
```

```
>>> print(razas[0])
bulldog
>>> print(razas[1])
chihuahua
>>> print(razas[2])
beagle
>>> print(razas[3])
golden
>>> print(razas[4])
labrador
>>> print(razas[5])
pug
```

Como ves en el ejemplo anterior, para poder imprimir cada elemento de la lista, tuvimos que hacer un print por cada uno de ellos. Esto no es eficiente, ¿que tal si tenemos una lista de 1.000 o 10.000 elementos y debemos imprimirlos todos? Sería un problema.

## Ciclo `for`
Un ciclo `for` nos permite correr una acción en cada uno de los ítems de la lista. Usar cada uno de los elementos de la lista se llama iterar. La sintaxis en Python de un ciclo `for` es la siguiente:

```python
for <variable temporal> in <lista>:
  <acción>
```

**Nota** cuando usamos código explicativo del tipo `<variable temporal>` nos estamos refiriendo a ["pseudo-código"](https://es.wikipedia.org/wiki/Pseudoc%C3%B3digo).

Revisemos cada uno de estos bloques constructores del ciclo `for`:
* <variable temporal>: puede ser llamada como quiera y no tiene que estar definida con anticipación.
* <lista>: es la lista sobre la cual queremos iterar
* <acción>: es la acción que queremos ejecutar sobre cada elemento de la lista, según nuestro anterior ejemplo, sería un `pint()`. Esa es la acción

Volvamos a realizar el mismo ejercicio, pero usando el ciclo `for`

```python
for i in razas:
  print(i)
```

resultado

```
bulldog
chihuahua
beagle
golden
labrador
pug
```

Con solo dos líneas de código imprimos todos los ítems de una lista, sin importar su tamaño. Ahora, ¿qué pasa si cambiamos el nombre de la variable temporal `i` por `raza`?

```python
for raza in razas:
  print(raza)
```

Sigue funcionando sin problemas, y dando el mismo resultado. Una buena práctica aquí es llamar las listas en plural y la variable temporal en singular. Sin embargo encontrás multiples ejemplos donde la variable temporal es llamada `i` o `j`, pero recuerda que esto no influye en el resultado final.

Todo lo que esté al mismo nivel de indentación después de la declaración del ciclo `for` estará incluido dentro del ciclo y corre en cada iteración. Si olvidamos indentar, obtendremos un `IndentationError`

### Usando `Range` con Ciclos
Anteriormente iteramos sobre una lista existente, pero algunas veces no queremos iterar sobre una lista específica, solo queremos ejecutar una acción cierta cantidad de veces, para ello podemos iterar sobre un tipo de dato `range`, que ya vimos anteriormente. La sintaxis es la siguiente:

```python
for i in <una lista de largo 3>:
  print("Warning")
```

Veamos un ejemplo real:

```python
for i in range(3):
  print("Warning")
```

Resultado

```
Warning
Warning
Warning
```

### Ciclos infinitos
Hemos iterado sobre listas que tienen un inicio y un final, pero ¿qué pasaría con este código?

```python
mis_numeros_favoritos = [4, 8, 15, 16, 42]

for numero in mis_numeros_favoritos:
  mis_numeros_favoritos.append(1)
```

¡Pruébalo en tu máquina a ver que sucede!

Respuesta: el computador se queda atorado, ya que ha entrado en un ciclo infinito, pero ¿por qué? Si revisas el código en detalle, te darás cuenta que dentro del ciclo `for` estamos añadiendo el valor `1` a la lista de forma infinita, por tanto el ciclo nunca termina. Debes oprimir las teclas `CTRL + C` para poder parar la ejecución, y así seguir adelante.

### `break`
En algún momento vamos a querer buscar un item dentro de una lista


```python
razas = ["bulldog", "chihuahua", "beagle", "golden", "labrador", "pug"]

for raza in razas:
  if raza == "beagle":
    print("Hemos encontrado un beagle")
  print(raza)
```

Resultado

```
bulldog
chihuahua
Hemos encontrado un beagle
beagle
golden
labrador
pug
```

¿Qué ves de raro en este código? En el código anterior, el programa va por cada ítem dentro de la lista `razas` y busca usando una sentencia `if` a `beagle`. Una vez lo encuentra no hay necesidad de seguir recorriendo la lista. En este caso son 6 razas (o items), pero si necesitamos ir sobre 1 millón de items tendremos un problema de rendimiento. Se puede salir del código una vez encuentra el ítem con la sentencia `break`

```python
razas = ["bulldog", "chihuahua", "beagle", "golden", "labrador", "pug"]

for raza in razas:
  if raza == "beagle":
    print("Hemos encontrado un beagle")
    break
  print(raza)
```

Resultado

```
bulldog
chihuahua
Hemos encontrado un beagle
```

### `continue`
Otro caso de uso similar se da cuando estamos iterando sobre una lista, pero podríamos querer saltarnos algunos valores o ítems. Podemos usar `continue` para movernos al siguiente `i` de la lista

```python
lista_de_numeros = [1, 2, -1, 4, -5, 5, 2, -9]

for i in lista_de_numeros:
  if i < 0:
    continue
  print(i)
```

Resultado

```
1
2
4
5
2
```

Como puedes ver, cuando la sentencia `if` encuentra un valor menor a `0` se lo "salta" con un `continue` y sigue recorriendo la lista.

### Ciclos `for` "encadenados"
¿Qué pasa si tenemos una lista que contiene múltiples listas, como hacemos para iterar sobre ella? Para esto usamos un `for` "encadenado" de la siguiente manera

```python
equipos_proyecto = [["juan", "pedro", "ana"], ["daniel", "juliana"], ["diana", "diego"]]

for equipo in equipos_proyecto:
  print(equipo)
  for estudiante in equipo:
    print(estudiante)
```

Resultado
```
['juan', 'pedro', 'ana']
juan
pedro
ana
['daniel', 'jualiana']
daniel
jualiana
['diana', 'diego']
diana
diego
```

Como vemos, tenemos dos ciclos `for` "encadenados", uno dentro del otro, ya que la lista tiene más dimensiones. Algo importante para resaltar en el ciclo `for` interno, es que iteramos sobre `equipo`, ya que son las listas internas.


## Ciclo `while`
El ciclo `while` es otro tipo de ciclo diferente al ciclo `for`. Este ciclo recorre un set de código **hasta que deja** de cumplirse una condición. Puede usarse también para iterar sobre una lista. Cada vez que una condición se cumple el código dentro del ciclo corre. Es una excelente opción para cuando no sabemos cuántas iteraciones tomará para cumplir con la condición.

Para ver las diferencia con respecto al ciclo `for` tratemos de imprimir los ítems de la lista de `razas` usando el ciclo `while`

```python
razas = ["bulldog", "chihuahua", "beagle", "golden", "labrador", "pug"]

indice = 0
while indice < len(razas):
  print(razas[indice])
  indice += 1
```

Resultado

```
bulldog
chihuahua
beagle
golden
labrador
pug
```

¿Qué diferencias logras descifrar en comparación con el ciclo `for`? Empecemos:
* Estamos iniciando una variable en `0`, la variable `indice`. Esto es necesario para poder tener un valor de comparación inicial.
* Usamos la palabra reservada `while` seguido de un condicional que puede evaluar a `True` o `False`.
* El condicional compara el valor de `indice` con respecto al largo de la lista `razas`. En la primera iteración `indice == 0` y el `len(razas) == 6`. Debido a que el resultado del condicional es `True` en la primera iteración, el código entra a ejecutar el `print(razas[indice])`
* El `print(razas[indice])` esta accediendo a la lista `razas` y llamando el item por la posición que tiene la variable `indice`, que en la primera iteración será `0`, o sea que llamamos al primer item: `print(razas[0])`
* La operación `indice += 1` es muy importante para este caso de uso, ya que si no lo hacemos quedaremos en un ciclo "infinito".
* El `indice += 1` toma el valor actual de `indice` y de forma recursiva `+=` suma el valor de `1`. Quiere decir que una vez la primera iteración finaliza, la variable `indice` deja de valer `0` y pasa a valer `1`, y vuelve a recorrer todo el ciclo `while`
* El ciclo `while` deja de ejecutarse cuando la condición `while indice < len(razas)` es `False`. La pregunta es, ¿cuando es `False`? Es `False` cuando la variable `indice` sea igual o mayor a `len(razas)`, o sea igual o mayor a `6`

Hagamos un segundo ejemplo:

```python
n = 10

# inicializamos sum y el contador i
sum = 0
i = 1

while i <= n:
    sum = sum + i
    print("contador: ", i)
    print("sumatoria: ", sum)
    i += 1    # actualizamos el contador
```

Resultado

```
contador:  1
sumatoria:  1
contador:  2
sumatoria:  3
contador:  3
sumatoria:  6
contador:  4
sumatoria:  10
contador:  5
sumatoria:  15
contador:  6
sumatoria:  21
contador:  7
sumatoria:  28
contador:  8
sumatoria:  36
contador:  9
sumatoria:  45
contador:  10
sumatoria:  55
```

Analiza el resultado en detalle, y trata de hacer otros ejemplos adicionales por tu cuenta.

## Comprensión de listas o "List Comprehensions"
Las comprensiones de listas es una forma recursiva de iterar sobre las listas y retornar una lista como resultado.

Para entenderlo fácilmente, hagamos el siguiente ciclo `for` pero en vez de hacer un `print()`, añadamos los valores que cumplen con una condición a una lista así:

```python
razas = ["bulldog", "chihuahua", "beagle", "golden", "beagle", "labrador", "pug", "beagle"]
beagles = []

for raza in razas:
  if raza == "beagle":
    beagles.append(raza)

print(beagles)
```

Resultado

```
['beagle', 'beagle', 'beagle']
```

Pensemos en ello un poco:
* Este ciclo `for` itera sobre una lista de `razas`, y retorna la lista `beagles` con los valores encontrados durante el ciclo `for` y que cumplieron la condición de `if raza == "beagle":`
* Estamos haciendo este proceso en 6 líneas de código, aquí es donde las comprensiones de listas entran en ayuda.

Hagamos ahora un list comprehension para obtener el mismo resultado:


```python
razas = ["bulldog", "chihuahua", "beagle", "golden", "beagle", "labrador", "pug", "beagle"]

beagles = [ raza for raza in razas if raza == "beagle"]

print(beagles)
```

Analiza en detalle la línea `beagles = [ raza for raza in razas if raza == "beagle"]` ya que aquí es donde ocurre la magia. En una sola línea de código hicimos el ciclo `for` y la sentencia `if` y retornamos una lista con los valores que cumplen la condición.

Veamos otro ejemplo y desglosamos aún más la comprensión de listas. Supongamos que tenemos la siguiente lista:

```python
palabras = ["@diana123", "#sinfiltro", "@juan586", "reply", "timestamp", "@anamyal5263", "#tbt"]
```

Queremos una nueva lista llamada `usernames` que tiene todos los strings de la lista que tienen un `@` como palabra inicial. Podemos hacer un ciclo `for`

```python
usernames = []

for palabra in palabras:
  if palabra[0] == '@':
    usernames.append(palabra)

print(usernames)
```

Resultado

```
['@diana123', '@juan586', '@anamyal5263']
```

Hagamos el cambio a un list comprenhension

```python
palabras = ["@diana123", "#sinfiltro", "@juan586", "reply", "timestamp", "@anamyal5263", "#tbt"]
usernames = [ palabra for palabra in palabras if palabra[0] == '@']
print(usernames)
```

Resultado

```
['@diana123', '@juan586', '@anamyal5263']
```

Como vemos es el mismo resultado del ciclo `for`.

Este list comprehension
1. Toma un elemento en `palabras`
2. Asigna ese elemento a la variable llamada `palabra`
3. Verifica si `palabra[0] == @` es igual a `True`, y si sí, añade `palabra` a la nueva lista `usernames`. Si no, no pasa nada.
4. Repite los pasos del 1-3 para todos los strings en `palabras`.

Ahora queremos crear una nueva lista con el string `" por favor sigueme!"` añadido al final de cada `username`. La nueva lista la llamaremos `mensajes`


```python
mensajes = [ usuario + " por favor sigueme!" for usuario in usernames ]
print(mensajes)
```

Resultado

```
['@diana123 por favor sigueme!', '@juan586 por favor sigueme!', '@anamyal5263 por favor sigueme!']
```

Este list comprehension:
1. Toma un string en `usernames`
2. Asigna ese `username` a una variable llamada `usuario`
3. Añade `" porfavor sigueme!"` a `usuario`
4. Añade esa concatenación a la nueva lista llamada `mensajes`
5. Repite el paso 1-4 para todos los strings en `usernames`

Poder crear listas con valores modificados es especialmente útil cuando trabajamos con números. Supongamos que tenemos la siguiente lista

```python
mis_votos = [192, 15, 22, 55, 69, 152, 13]
```

Si queremos añadir o sumar `100` a cada valor. ¿Cómo lo haríamos?

```python
mis_votos = [192, 15, 22, 55, 69, 152, 13]
votos_actualizados = [ voto + 100 for voto in mis_votos ]
print(votos_actualizados)
```

Este list comprehension:
1. Toma un número en `mis_votos`
2. Asigna ese número a una variable llamada `voto`
3. Suma 100 a `voto`
4. Añade esa suma a la nueva lista llamada `votos_actualizados`
5. Repite el paso 1-4 para todos los valores en `mis_votos`
