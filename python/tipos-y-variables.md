# Tipos y Variables

## Strings

Los programadores nos referimos a las cadenas de texto como "strings"

```python
print("Hello World")
```

Ahora podrías hacerte una nueva pregunta, y es si ¿puedo usar comillas simples?, y si es así ¿cuándo usar las comillas dobles o simples?

Miremos estos ejemplos válidos de strings:

```python
print("I'm coding!")
print('El computador esta imprimiendo "Hola Mundo!"')
```

¿Qué notas extraño en ambas líneas de código? En la primera línea estamos combinando exitosamente comillas dobles (para abrir y cerrar la frase) con las comillas simples (para denotar la palabra en inglés I’m).

En la segunda línea estamos combinando exitosamente las comillas simples (para abrir y cerrar la frase) con las comillas dobles (Para acentuar la palabra "Hola Mundo!")

Como puedes ver, podemos usar las comillas dobles o simples para abrir o cerrar las frases, pero lo que no podemos hacer es algo como esto:

```python
print("Una frase común en programación es "Hola Mundo!"")
```

El problema acá es que el string está terminando después de la palabra "es"; como abriste la frase con comillas dobles y estás acentuando la frase "Hola Mundo" con el mismo tipo de comillas. Si ejecutas esto en tu consola obtendrás el siguiente error:

```python
>>> print("Una frase común en programación es "Hola Mundo!"")
  File "<stdin>", line 1
    print("Una frase común en programación es "Hola Mundo!"")
                                                  ^
SyntaxError: invalid syntax
```
**Nota:** más adelante veremos los diferentes tipos de error en Python.

## Variables

Las variables son la forma en que guardamos información para luego re-usarla. Se asigna el valor con el signo `=`:

```python
hola = "Hola Mundo desde Python, mi lenguaje favorito!"
print(hola)
```

No es coincidencia que las llamemos variables, ya que pueden cambiar durante la ejecución del programa

```python
terminator = "Hasta la vista"
print(terminator)

terminator = "Hasta la vista, Baby"
print(terminator)
```

Algo a notar aquí, es que la variable sigue llamándose igual `terminator`, pero fue "reasignada" a otro valor, por tanto cambió el valor de la variable.

Otra pregunta que podría surgir es si ¿las variables pueden ser reasignadas a otro tipo de datos? SI, siempre y cuando sea un tipo de dato válido en Python. Veamos este ejemplo

Esta es una variable que inicialmente se ha asignado como un string:

```python
var = "Hola"
```

Ahora podemos re-asignarla a cualquier otro valor independientemente de su tipo:

```python
var = 35
var = False
```

## Errores

Cuando nos encontramos con un error no esperado, a esto lo llamamos "bugs". Dos errores comunes en python son `SyntaxError` y `NameError`:

* `SyntaxError`: significa que algo está mal escrito en el programa, como puntuaciones donde no pertenecen, no hay paréntesis de cierre, etc.
* `NameError`: cuando el interpretador de python ve una palabra que no reconoce, como una variable no definida por ejemplo.

Anteriormente vimos un error de sintaxis cuando los paréntesis no estaban bien cerrados. Miremos de nuevo. Haz el siguiente `print()`.

```python
print("Una frase común en programación es "Hola Mundo!"")
```

El resultado es un `SyntaxError: invalid syntax`, y python trata de señalar dónde está el posible error con el símbolo `^`, en este caso señalando "Hola".

Resultado:

```
File "<stdin>", line 1
  print("Una frase común en programación es "Hola Mundo!"")
                                                ^
SyntaxError: invalid syntax
```

Miremos ahora el `NameError`. Simplemente llama a una función con el nombre equivocado o que no existe de la siguiente manera:

```python
mi_var = "tendré un error?"
print(mi_va)
```

¿Qué ves de raro en este código? Exacto, en el print escribimos mal el nombre de la variable, por tanto el resultado será un `NameError`:


```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'mi_va' is not defined
```

## Números

Hay dos tipos de datos numéricos en python: `int` como integer y `float` como decimal:

* Integer: número entero, no tiene puntos decimales.
* Float: puede ser usado para representaciones fraccionarias/decimales.

Pueden ser asignados a una variable:

```python
un_integer = 2
un_float = 2.1

print(un_integer + 3)
```

Como siempre, ensáyalo en tu máquina y prueba el resultado. Cambia los valores y juega con ellos un poco.

**Nota:** es importante que todos estos ejercicios los vayas ejecutando en una terminal o en tu editor preferido, así podrás ver los resultados. Te recomendamos, igualmente, hacer diferentes pruebas para que te familiarices aún más con el lenguaje.

### Cálculos

Python puede ejecutar todas las operaciones matemáticas:

```python
#imprime 500
print(573 - 74 + 1)

#imprime 50
print(25 * 2)

#imprime 2.0
print(10 / 5)
```

**Nota:** La división puede caer en un error especial: `ZeroDivisionError`. Es cuando intenta dividir por cero.

```python
#imprime error ZeroDivisionError
print(573 / 0)
```

El resultado del código anterior sería el siguiente:

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero

```

### Cambiando números

Los valores numéricos asignados a variables pueden ser tratados de la misma manera como si fuesen números en sí. Dos variables pueden ser sumadas o divididas, por ejemplo:

```python
precio_capucchino = 1.50
numero_de_cafes = 4

print(precio_capucchino * numero_cafes)
```

Luego podríamos actualizar los valores:

```python
precio_capucchino = 2.00
print(precio_capucchino * numero_cafes)
```

### Exponenciales

Python puede ejecutar exponenciales. Python usa la notación `**` para hacer exponenciación:

```python
# 2 a la potencia de 10 == 1024
print(2 ** 10)

# 8 al cuadrado == 64
print(8 ** 2)

# 9 al cubo == 729
print(9 ** 3)
```

Con este mismo símbolo `**` podemos ejecutar la operación de raiz cuadrada de la siguiente forma


```python
# raíz cuadrada de 4 == 2
print(4 ** 0.5)

# raíz cuadrada de 16 == 4.0
print(4 ** 0.5)
```

### Módulo

La operación módulo es el valor remanente de una división. Es indicado por el símbolo `%`. Si el número es divisible, entonces el resultado del módulo será `0`. Es útil cuando necesitamos correr acciones cada `N` número de veces, o cuando necesitamos saber si son numero pares o impares:

```python
## 29 / 5 es 5 con un remanente de 4
print(29 % 5)

## 32 / 3 es 10 con un remanente de 2
print(32 % 3)

## 44 / 2 es 22 con un remanente de 0
print(44 % 2)
```

### Concatenación

El operador `+` no solo suma dos números, sino que también puede "añadir" dos strings. Esto se llama concatenación. Si queremos concatenar un string con un número debemos cambiar el número a string con la función `str()` de python.


```python
nacimiento_string = "Yo tengo "
edad = 10
nacimiento_string_2 = " años de edad!"

string_completo = nacimiento_string + str(edad) + nacimiento_string_2
print(string_completo)
```

Como puedes ver, en la concatenación tuvimos que "convertir" la variable que almacena un número a un string usando el método de Python `str()`

### Más igual

Esta es una forma abreviada de actualizar variables. Cuando usted tiene un número guardado en una variable y quiere sumar otro valor al valor actual de la variable, puede usar el operador `+=`.

Este operador también puede ser usado con la concatenación de strings

```python
# primero la variable tiene un número almacenado de 3
numero_km = 3
print(numero_km)

# luego necesitamos actualizar la variable.
# digamos que queremos actualizarla con otros 4 km
numero_km += 4
print(numero_km)
# el nuevo valor es el anterior + 4

# si queremos volverlo a actualizar, podemos hacerlo de nuevo
numero_km += 3
print(numero_km)
```

Ahora hagámoslo con strings:

```python
mi_tweet = "este es mi tweet."
print(mi_tweet)

mi_tweet += " este es otro tweet"
print(mi_tweet)

mi_tweet += " #color"
print(mi_tweet)
```

### Strings multilinea

Si necesita escribir múltiples líneas en un string puede usar triple comillas: `"""` o `'''` en vez de un par de ellas tanto para abrir como para cerrar:

```python
### strings multilinea
lorem = """
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
ad minim veniam, quis nostrud exercitation ullamco laboris nisi

ut
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum.
"""

print(lorem)
```
