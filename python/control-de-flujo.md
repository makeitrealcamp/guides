# Control del Flujo

Los computadores van por un flujo de decisiones a medida que se ejecuta un programa, evaluando condiciones a medida que corre.

## Expresiones Booleanas
Una expresión booleana es una cláusula que puede ser evaluada a `True` o `False` y sin dejar lugar a duda o ser una respuesta ambigua.
* Hoy es fin de semana? La respuesta puede ser evaluada por `True` o `False`.
* ¿El viernes es el mejor dia de la semana? La respuesta a esto es una opinión, y no es objetivo.


### Operadores relacionales
Podemos crear expresiones booleanas usando operadores relacionales.  Los operadores relacionales comparan dos ítems y retorna `True` o `False`. También se conocen como “comparadores” Los dos primeros que veremos son:
* Igual: `==`
* No igual: `!=`

Ejecutamos lo siguiente desde la consola de Python:

```python
>>> 1 == 1
True
>>> 2 != 4
True
>>> 3 == 5
False
>>> '7' == 7
False
```

### Variables booleanas
Se trata de cualquier variable que tenga asignado un valor booleano, tal como `True` o `False`, sea directamente o porque va a evaluar alguna condición.


Seguimos ejecutando en la consola de Python
```python
>>> set_to_true = True
>>> set_to_false = False
>>> booleano_uno = 5 != 7
>>> booleano_dos = 1 + 1 != 2
>>> booleano_tres = 3 * 3 == 9
>>> booleano_uno
True
>>> booleano_dos
False
>>> booleano_tres
True
```

## Sentencias `if`
Los operadores relacionales y las variables booleanas son los bloques que constituyen las sentencias condicionales `if`. ¿Cuál es la expresión booleana en la siguiente frase? :
"Si está lloviendo, entonces saca la sombrilla".

Respuesta: "Si está lloviendo" = Es la parte de la frase que puede ser evaluada a `True` o `False` sin dejar lugar a duda.

```python
if esta_lloviendo:
  llevar_sombrilla()
```

Todo lo que está después de los `:` será ejecutado si el condicional es encontrado. Los valores internos deben estar indentados.

```python
if 2 == 4 - 2:
  print("apple")
```

¿Este condicional imprime "apple"? R:/ si lo imprime ya que cumple el condicional.

### Operaciones Relacionales II
Hay un montón de operadores relacionales ya vimos algunos, y aquí tenemos más:
* mayor que: `>`
* menor que:  `<`
* mayor o igual que: `>=`
* menor o igual que: `<=`

Supongamos que estamos corriendo una plataforma de streaming y queremos escribir una función que chequee si el usuario tiene más de `13` años y restringir ver cierto tipo de películas.

```python
def checkeo_edad(edad):
  if edad >= 13:
    return TrueF
```

Haz la prueba en tu maquina, llama a la función `checkeo_edad()` y pásale diferentes argumentos para ver cómo se comporta.

### Operaciones Booleanas:
A menudo los condicionales que usted evaluará requerirán más de dos expresiones booleanas. Puede hacerlo con operadores booleanos (también llamados operadores lógicos). Los operadores booleanos son:

* `and`
* `or`
* `not`

#### `and`
Combina dos expresiones booleanas y evalúa a `True` si ambas son `True`. Y evalúa `False` de lo contrario

Haz las siguientes operaciones desde tu consola

```python
>>> (1 + 1 == 2) and (2 + 2 == 4)
True
>>> (1 + 1 == 2) and (2 < 1)
False
>>> (1 > 9) and (5 != 6)
False
>>> (0 == 10) and (1 + 1 == 1)
False
```

#### `or`
Combina dos expresiones booleanas y evalúa a `True` si cualquiera de las dos son `True` y `False` de lo contrario

```python
>>> True or (3 + 4 == 7)
True
>>> (1 - 1 == 0) or False
True
>>> (2 < 0) or True
True
>>> (3 == 8) or (3 > 4)
False
```

#### `not`:
Cuando es aplicado a cualquier expresión booleana, `not` reversa el valor booleano. Si tenemos un valor `True` y aplicamos `not`, el operador que obtenemos es `False`.

```python
>>> not True == False
True
>>> not False == True
True
>>> not 1 + 1 == 2
False
>>> not 7 < 0
True
```

## Sentencias `else`
Una vez usted empieza a incluir una gran cantidad de cláusulas `if` el código comienza a volverse poco legible e intuitivo. Para esto hay otras herramientas que podemos usar para controlar el flujo. Las cláusulas `else` nos permiten describir que queremos hacer si las condiciones de la cláusula anterior no se cumplen. Las cláusulas `else` siempre aparecen en conjunto con las cláusulas `if`.

```python
if dia_de_semana:
  levantarse("6:30 am")
else:
  seguir_durmiendo()
```

## Sentencias `else if`
La sentencia `else if` chequea otra condición después de los previos condicionales `if`, sino se cumplen. La sintaxis en python es `elif`.

```python
def gracias(donacion):
  if donacion >= 1000:
    print("Gracias por su donación, ha alcanzado un estatus Platino!")
  elif donacion >= 500:
    print("Gracias por su donación, ha alcanzado un estatus Gold!")
  elif donacion >= 100:
    print("Gracias por su donación, ha alcanzado un estatus Silver!")
  else:
    print("Gracias por su donación, ha alcanzado un estatus Bronce!")
```

Como puedes ver, el código se va ejecutando por medio de un flujo y unos condicionales, que de ser cumplidos ejecutarán e imprimirán el valor correspondiente. Llama a la función `gracias()` pasándole diferentes valores y testea los diferentes resultados.

## Sentencias `try` y `except`
Existen estas otras dos sentencias con el fin de evaluar posibles errores que usted se podría encontrar. Estas sentencias van por un flujo similar, evaluando si se cumple o no se cumple una condición, en este caso una "prueba" y un "error". La sintaxis es la siguiente:

```python
try:
  # alguna operacion
except ErrorName:
  # alguna operacion
```

Como vemos, primero le decimos que "pruebe" una operación y luego le decimos que lance una "excepcion" si se da ese tipo de error. Vemoslo con un ejemplo:

```python
def dividir(a, b):
  try:
    resultado = a / b
    print(resultado)
  except ZeroDivisionError:
    print("No se puede dividir por cero!")
```

Hagamos unas pruebas:

```
>>> dividir(10, 3)
3.3333333333333335
>>> dividir(10, 0)
No se puede dividir por cero!
```
