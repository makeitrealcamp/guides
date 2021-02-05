# Primeros pasos

Para verificar si tienes Python 3 instalado abre una línea de comandos y ejecuta `python3 --version`. Si ya lo tienes te va a aparecer una línea similar a la siguiente:

```text
$ python3 --version   
Python 3.6.11
```

La versión puede ser diferente y cualquier versión superior a 3.0 está bien.

Si ves un mensaje diciendo que el comando no fue encontrado, significa que aún no tienes Python 3 instalado. Puedes encontrar las instrucciones para instalarlo en el siguiente enlace:
[https://realpython.com/installing-python/](https://realpython.com/installing-python/)

Una vez que tengas instalado Python y lo hayas verificado, continúa

## Ejecutando código Python
Existen dos formas en las que puedes ejecutar código de Python. La primera es por medio de la consola o terminal, y la segunda opción es por medio de un editor de texto, comúnmente conocido como IDE.

### Ejecutando desde la terminal o consola
Abre una consola y ejecuta el siguiente comando

```text
$ python3
```

Obtendrás una salida similar a la siguiente:
```text
Python 3.6.11 (default, Jun 29 2020, 05:15:03)
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

Esto significa que ya te encuentras listo para ejecutar cualquier comando de python. Vamos a verlo en acción. Ejecuta el siguiente comando

```text
>>> print("Hello world")
```

Obtendrás este resultado
```text
Hello world
```

Debes salir ahora de la consola interactiva de Python ejecutando `Ctrl + D` o copiar `exit()`

### Ejecutando desde un IDE

Ahora vamos a hacer este mismo proceso pero desde tu editor de texto. Puedes usar el editor de tu preferencia, el cual puede ser Atom, Sublime, VisualStudio o incluso PyCharm. Vamos de nuevo a la consola y crearemos una carpeta llamada `/python` así:

```text
mkdir python
```

Ingresamos a la carpeta y crearemos nuestro primer archivo de Python

```text
cd python
touch index.py
```

Si verificas con el comando `ls` ya debería aparecer el archivo Python listado. Si te das cuenta, los archivos de Python tendrán la extensión `.py`

Ahora accede a tu editor de texto seleccionado y abre desde allí el archivo `index.py` que acabamos de crear y copia lo siguiente:

```python
print("Hello World")
```

Guarda el archivo y vuelve a la consola.

*Nota: antes de ejecutar el siguiente comando verifica que ya te has salido de la consola interactiva de Python ejecutando `Ctrl + D` o copiando `exit()`*

En la consola debes estar ubicado en la carpeta `/python` que creamos hace un momento y ejecutar el siguiente comando

```text
python3 index.py
```

Debe haber un espacio en blanco entre `python3` e `index.py`. Esto le está diciendo a la máquina que ejecute Python3 en el archivo index.py, y debido a que allí encuentra un comando de python llamado `print` le dará las instrucciones a la máquina para que imprima el string que allí se encuentra

Deberías obtener la siguiente respuesta una vez le das enter a tu teclado.

```text
Hello World
```

Excelente, has empezado con pie derecho estas guías, ahora empecemos a hacer cosas más interesantes!

### Comentarios
Lo primero a ver, es como le decimos al computador que ignore una parte del programa. Los comentarios son importantes en 3 escenarios diferentes:

* Para proveer un contexto
* Para ayudar a otros a leer el código
* Para ignorar una línea y ver como corre el código

#### Para proveer contexto

```python
# esta variable será usada para contar el número de veces que alguien tuitea la palabra “hamburguesa”

burger_count = 0
```

Como puedes observar el signo `#` fue usado para realizar un comentario, y dicha línea será ignorada por el programa

#### Para ayudar a otros a leer el código

```python
# este código calculará la probabilidad de que mañana llueva

rain_prediction()
```

#### Para ignorar una línea y ver como corre el código

```python
# rain_prediction()
new_rain_prediction()
```

En este último ejemplo estábamos probando la función `rain_prediction()`, pero aparentemente no dió buenas predicciones, y decidimos hacer pruebas con otra función llamada `new_rain_prediction()` para ver las diferencias.

### La función `print()`

En python la función `print()` es usada para decirle al computador que “hable”. El mensaje debe estar rodeado por comillas

```python
print("Este es mi primer print en Python")
```

Te podrías estar preguntando si son ¿necesarias siempre las comillas en el print? La respuesta es SÍ. Si son necesarias para imprimir strings, pero no son necesarias para imprimir otro tipo de datos, por ejemplo, integers, arrays o booleanos. En ese caso no los necesitarás


```python
print(1.5)
print(False)
print(["lista", "dos"])
```
