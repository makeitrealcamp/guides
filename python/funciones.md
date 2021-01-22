# Funciones

Una función es una colección de varias líneas de código. Al llamar una función, estamos llamando todas esas líneas a la vez, sin tener que repetir el código. Una función es una herramienta que usted puede usar una y otra vez para producir un resultado consistente desde diferentes entradas.

## Escribir una función
Para escribir una función en python necesitamos un encabezado y un bloque de código indentado. El encabezado empieza con la palabra `def` y el nombre de la función seguido de paréntesis y dos puntos.

El código indentado corre algún tipo de operación. La sintaxis luce algo como lo siguiente:

```python
def nombre_de_la_funcion():
  # mi código
  pass
```

Esa es la sintaxis básica de una función, la identificación es el espacio en blanco a la izquierda del comentario. En python el espacio en blanco que deja la indentación le dice al computador que hace parte de la función y qué no hace parte de ella.

Nota: la palabra reservada `pass` se usa comunmente en Python para "saltarse" la ejecución de una función.

Si quisiéramos escribir otra línea fuera de la función, solo debemos quitar la indentación. Normalmente se usan 2 espacios de indentación, aunque muchas plataformas usan 4 espacios. Normalmente usamos la tecla "Tab" o tabuladora de nuestro teclado. Hagamos otro ejemplo


```python
def saludar():
  print("Bienvenido a mi tienda de camisetas")
  print("La camiseta que tenemos en oferta hoy es la de los Avengers")
  print("Disfruta comprando!")

saludar()
# Esto imprime las líneas de saludo
```

Nota: si intentas imprimir estas líneas desde tu consola o terminal te arrojará un `SintaxError`. Esto es debido a que en tu consola espera que ingreses por cada línea una expresión (sin saltos de línea). Existe la opción de crear Lambdas en python, lo que es igual a una función escrita en una sola línea de código (fuera de otras utilidades). Puedes ver más información aquí. https://www.w3schools.com/python/python_lambda.asp Te recomendamos seguir ejecutando los comandos desde tu IDE favorita.

### Parámetros
¿Qué pasa si queremos cambiar algo dinámicamente dentro de la función? Podemos usar los parámetros. Los parámetros son variables que podemos pasar dentro de la función cuando la llamamos. Cada vez que llamamos a la función con un valor diferente dentro del paréntesis, ese valor es asignado a esa variable para mantener el valor.

```python
def saludar(oferta_especial):
  print("Bienvenido a mi tienda de camisetas")
  print("La camiseta que tenemos en oferta hoy es la de " + oferta_especial)
  print("Disfruta comprando!")

saludar("los Avengers")
# Esto imprime las líneas de saludo
```

### Múltiples parámetros
Podemos hacer una función que tome más de un parámetro usando comas. Ahora ambas variables serán pasada a la función cuando sea llamada


```python
def saludar(mi_tienda, oferta_especial):
  print("Bienvenido " + mi_tienda + " de camisetas")
  print("La camiseta que tenemos en oferta hoy es la de " + oferta_especial)
  print("Disfruta comprando!")

saludar("Comics T-Shirts. Tienda ", "los Avengers")
# Esto imprime las líneas de saludo
```

En este punto podría surgir la siguiente pregunta: ¿Todos los parámetros deben ser usados dentro de la función?
* Una función seguirá trabajando normal incluso si ninguno de los parámetros son usados dentro de la función.
* Sin embargo, hacer esto es contra-intuitivo, ya que el propósito de los parámetros es permitir diferentes inputs para que sean usados con la función.


### Keyword arguments
En la función del anterior ejercicio, teníamos dos argumentos: (mi_tienda, oferta_especial). No importa que valor sea puesto en el primero y en el segundo argumento, serán asignados respectivamente. Esto es llamado argumentos posicionales, porque la asignación depende de la posición. También podemos pasar estos argumentos como "keyword arguments", donde decimos explícitamente a qué argumento corresponde.

Presta atención al orden de los parámetros en el siguiente código:

```python
def saludar(mi_tienda, oferta_especial):
  print("Bienvenido " + mi_tienda + " de camisetas")
  print("La camiseta que tenemos en oferta hoy es la de " + oferta_especial)
  print("Disfruta comprando!")

saludar(oferta_especial="los Avengers", mi_tienda="Comics T-Shirts. Tienda ")
# Esto imprime las líneas de saludo
```

En la última línea cambiamos el orden en que pasamos los parámetros de la función, sin embargo sigue imprimiendo en las posiciones correctas. Esto es debido a que explícitamente le hemos dicho a qué parámetro pertenece cada valor.

### Parámetros por defecto
También podemos definir parámetros por defecto usando una sintaxis similar a la anterior, pero en la definición de la función. Si la función no es llamada con ese parámetro, entonces es asignado el valor por defecto. Estos parámetros por defecto deben declararse como último argumento dentro de los paréntesis, sino tendremos error de sintaxis

```python
def saludar(mi_tienda, oferta_especial="Star Wars"):
  print("Bienvenido " + mi_tienda + " de camisetas")
  print("La camiseta que tenemos en oferta hoy es la de " + oferta_especial)
  print("Disfruta comprando!")

saludar(mi_tienda="Comics T-Shirts. Tienda ")
# Esto imprime las líneas de saludo
```

Si vemos, en la última línea solo pasamos un parámetro a la función. Pero debido a que habíamos declarado un parámetro por defecto llamado "Star Wars" no tendremos ningún error y se tomará ese valor para el parámetro `oferta_especial`


### Returns
Cuando hay un resultado de una función que tiene que ser guardado en una variable, a esto lo llamamos valor de retorno de una función. Para ello usamos la palabra reservada `return`.

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

Respuesta
```
16 dividido por 4 es 4.0!
4.0 dividido por 4 es 1.0!
```

### Retorno de múltiples valores
Algunas veces vamos a querer retornar varios valores desde una función. Podemos hacerlo separando los valores por coma.

```python
def valor_al_cuadrado(valor_x, valor_y):
  x_2 = valor_x * valor_x
  y_2 = valor_y * valor_y
  return x_2, y_2
```

Perfecto, hemos declarado una función que retorna dos valores, los cuales hemos separado por coma. Sin embargo, debemos llamar la función de una manera especial. Miremos como:

```python
x_al_cuadrado, y_al_cuadrado = valor_al_cuadrado(1, 3)

print(x_al_cuadrado)
print(y_al_cuadrado)

# retorna 1 y 9
```

Como vemos, podremos obtener estos valores de retorno asignándolos a unas variables cuando llamamos la función.

### Scope
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

print(crear_string("Mandalorian"))
```
