# Funciones

Una función es una colección de varias líneas de código que se puede invocar desde otras partes del programa o aplicación. Al invocar una función, estamos ejecutando todas esas líneas a la vez, sin tener que repetir ese código siempre que lo necesitemos. Es una forma de reutilizar código.

Para definir una función en **Python** se utiliza la palabra clave `def` seguido del nombre de la función, paréntesis y dos puntos como se muestra a continuación:

```python
def saludar():
  # el código que queremos que se ejecute, debe estar indentado
  print("Hola!")
```

Para **invocar** la función utilizamos el nombre seguido de paréntesis:

```python
saludar() # Imprime "Hola!"
```

### Argumentos

Podemos pasarle información a la función a través de argumentos (o parámetros). Puedes pensar en los argumentos como información que le pasamos a la función cuando la invocamos. Los argumentos se definen dentro de los paréntesis de la función. Por ejemplo, podemos recibir un argumento `nombre` en nuestra función `saludar`:

```python
def saludar(nombre):
  print("Hola " + nombre)

saludar("Pedro") # "Hola Pedro"
saludar("María") # "Hola María"
```

Fíjate que dentro de la función podemos utilizar el argumento como si fuera cualquier otra variable y al invocar la función decidimos la información que le queremos pasar.

### Múltiples parámetros

Las funciones pueden recibir más de un argumento separándolos con coma (`,`). Por ejemplo:

```python
def saludar(nombre, edad):
  print("Hola " + nombre + " de " + edad + " años")

saludar("Pedro", 20) # "Hola Pedro de 20 años"
saludar("María", 30) # "Hola María de 30 años"
```

¿Todos los argumentos deben ser usados dentro de la función? Una función sigue trabajando normal incluso si ninguno de los argumentos son usados dentro de la función. Sin embargo, hacer esto es contra-intuitivo, ya que el propósito de los argumentos es permitir diferentes entradas para que sean usados dentro de la función.

### Keyword arguments

En la función del anterior ejercicio, teníamos dos argumentos: `nombre` y `edad`. No importa que valor sea puesto en el primero y en el segundo argumento, serán asignados respectivamente. Esto es llamado argumentos posicionales, porque la asignación depende de la posición. También podemos pasar estos argumentos como "keyword arguments", donde decimos explícitamente a qué argumento corresponde.

Presta atención al orden de los argumentos en el siguiente código:

```python
def saludar(nombre, edad):
  print("Hola " + nombre + " de " + edad + " años")

saludar(edad=30, nombre="Maria") # "Hola Maria de 30 años"
```

En la última línea cambiamos el orden en que pasamos los argumentos de la función, sin embargo sigue imprimiendo en las posiciones correctas. Esto es debido a que explícitamente le hemos dicho a qué argumento pertenece cada valor.

### Argumentos por defecto

También podemos definir argumentos por defecto usando una sintaxis similar a la anterior, pero en la definición de la función. Si la función no es llamada con ese argumento, entonces es asignado el valor por defecto. Estos argumentos por defecto deben declararse como último argumento dentro de los paréntesis, si no tendremos error de sintaxis.

```python
def saludar(nombre, edad=20):
  print("Hola " + nombre + " de " + edad + " años")

saludar(nombre="Pedro") # "Hola Pedro de 20 años"
```

Si vemos, en la última línea solo pasamos un argumento a la función. Pero debido a que habíamos declarado un argumento por defecto no tendremos ningún error y se tomará ese valor para el parámetro `nombre`.

### Valor de retorno

Las funciones pueden, opcionalmente, retornar un valor. Para ello usamos la palabra reservada `return` seguido del valor que queremos retornar:

```python
def dividir_por_cuatro(numero):
  return numero / 4

resultado = dividir_por_cuatro(16)
# la variable resultado almacena ahora el valor de 4

print("16 dividido por 4 es " + str(resultado) + "!")
# acabamos de imprimir la variable

# hagamos esta otra operación
resultado2 = dividir_por_cuatro(resultado)

print(str(resultado) + " dividido por 4 es " + str(resultado2) + "!")
```

Respuesta:

```
16 dividido por 4 es 4.0!
4.0 dividido por 4 es 1.0!
```

### Retorno de múltiples valores

Algunas veces vamos a querer retornar varios valores desde una función. Podemos hacerlo separando los valores con coma:

```python
def valor_al_cuadrado(valor_x, valor_y):
  x_2 = valor_x * valor_x
  y_2 = valor_y * valor_y
  return x_2, y_2
```

Perfecto, hemos declarado una función que retorna dos valores, los cuales hemos separado por coma. Sin embargo, debemos llamar la función de una manera especial. Miremos como:

```python
x_al_cuadrado, y_al_cuadrado = valor_al_cuadrado(1, 3) # retorna 1 y 9

print(x_al_cuadrado)
print(y_al_cuadrado)
```

Como vemos, podemos obtener estos valores de retorno asignándolos a variables cuando llamamos la función.

### Alcance

Las variables definidas dentro de las funciones no existen fuera de la función, por tanto si tratamos de acceder a esa variable obtendremos un `NameError`. La parte de un programa donde una variable puede ser accedida la llamamos en programación el scope, en español significa el "alcance" de la variable.

```python
def crear_string(articulo_especial):
  return "Nuestro artículo especial es " + articulo_especial + "."

print("No me gusta el " + articulo_especial)
```

Este código dará un `NameError` ya que no encuentra la variable `articulo_especial`. Dicha variable sólo puede ser usada y llamada dentro del "scope" de la función llamada `crear_string`. Sin embargo, una variable definida fuera del scope de una función puede ser accedida dentro de esa función.

```python
encabezado = "Nuestro artículo especial es "

def crear_string(articulo_especial):
  return encabezado + articulo_especial + "."

print(crear_string("Mandalorian")) # "Nuestro artículo especial es Mandalorian"
```
