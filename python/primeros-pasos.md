# Primeros pasos

Para verificar si tienes Python 3 instalado abre una línea de comandos y ejecuta `python3 --version`. Si ya lo tienes te va a aparecer una línea similar a la siguiente:

```text
$ python3 --version   
Python 3.6.11
```

La versión puede ser diferente y cualquier versión superior a 3.0 está bien.

Si ves un mensaje diciendo que el comando no fue encontrado, significa que aún no tienes Python 3 instalado. Puedes encontrar las instrucciones para instalarlo en el siguiente enlace:
[https://realpython.com/installing-python/](https://realpython.com/installing-python/)

Una vez que tengas instalado Python y lo hayas verificado, continúa.

## Ejecutando código Python

Existen dos formas en las que puedes ejecutar código de Python. La primera es por medio de la consola o terminal, y la segunda opción es por medio de un editor de texto como VSCode, Atom o Sublime Text, entre otros.

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

Esto significa que ya te encuentras listo para ejecutar cualquier comando de python. Vamos a verlo en acción. Ejecuta el siguiente comando:

```text
>>> print("Hello world")
```

Obtendrás el siguiente resultado:

```text
Hello world
```

Para salir de la consola interactiva de Python oprime `Ctrl + D` o escribe `exit()` y oprime `Enter`.

### Ejecutando desde un editor de texto

Ahora vamos a hacer este mismo proceso pero desde tu editor de texto. Puedes usar el editor de tu preferencia, el cual puede ser Atom, Sublime, VSCode o incluso PyCharm. Vamos de nuevo a la consola y crearemos una carpeta llamada `/python` así:

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

**Nota:** antes de ejecutar el siguiente comando verifica que ya te has salido de la consola interactiva de Python oprimiendo `Ctrl + D` o ejecutando `exit()`.

En la consola debes estar ubicado en la carpeta `/python` que creamos hace un momento. Ahora ejecuta el siguiente comando:

```text
python3 index.py
```

Esto le está diciendo a la máquina que ejecute Python3 en el archivo `index.py`, y debido a que allí encuentra un comando de python llamado `print` le dará las instrucciones a la máquina para que imprima el string que allí se encuentra.

Deberías obtener la siguiente respuesta una vez oprimes `Enter` en tu teclado.

```text
Hello World
```

Excelente, has empezado con pie derecho estas guías, ahora empecemos a hacer cosas más interesantes!

### Comentarios

Los comentarios en Python se utilizan principalmente para:

* Documentar nuestro código y darle contexto a otras personas
* Ignorar una línea y ver cómo corre el código

Los comentarios empiezan con el signo `#`:

```python
# esta variable será usada para contar el número de veces que alguien tuitea la palabra “hamburguesa”
burger_count = 0
```

```python
# este código calculará la probabilidad de que mañana llueva
rain_prediction()
```

```python
# rain_prediction()
new_rain_prediction()
```

En este último ejemplo estábamos probando la función `rain_prediction()`, pero aparentemente no dio buenas predicciones, y decidimos hacer pruebas con otra función llamada `new_rain_prediction()` para ver las diferencias.

### La función `print()`

En python la función `print()` se usa para imprimir un texto en la consola. El mensaje debe estar rodeado por comillas:

```python
print("Este es mi primer print en Python")
```

Las comillas son necesarios siempre que imprimas strings (cadenas de texto). Sin embargo, no son necesarias para imprimir otro tipo de datos, por ejemplo, integers, arrays o booleanos:


```python
print(1.5)
print(False)
print(["lista", "dos"])
```
