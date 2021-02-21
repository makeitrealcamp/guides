# Primeros pasos

Para verificar si tienes **Python 3** instalado abre una línea de comandos y ejecuta `python3 --version`. Si ya lo tienes te va a aparecer una línea similar a la siguiente:

```text
$ python3 --version   
Python 3.8.5
```

La versión puede ser diferente pero cualquier versión superior a 3.0 está bien.

Si ves un mensaje diciendo que el comando no fue encontrado, significa que aún no tienes Python 3 instalado. Puedes encontrar las instrucciones para instalarlo en el siguiente enlace:
[https://realpython.com/installing-python/](https://realpython.com/installing-python/)

Una vez que tengas instalado **Python 3** y lo hayas verificado con el comando anterior puedes continuar.

## Ejecutando código Python

Existen dos formas en las que puedes ejecutar código escrito en Python. La primera es abriendo la consola interactiva de Python, y la segunda es creando un archivo con extensión `.py` y ejecutándolo desde la consola.

### Consola interactiva

Abre una consola y ejecuta el siguiente comando:

```text
$ python3
```

Este comando abre la consola interactiva de Python:

```text
Python 3.6.11 (default, Jun 29 2020, 05:15:03)
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>>
```

Te encuentras listo para ejecutar cualquier código en Python. Puedes identificar que estás en la consola interactiva porque encuentras los siguientes tres caracteres en el prompt: `>>>`.

Ahora ejecuta el siguiente código:

```text
>>> print("Hello world")
```

Obtendrás el siguiente resultado:

```text
Hello world
```

Para salir de la consola interactiva de Python oprime `Ctrl + D` o escribe `exit()` y oprime `Enter`.

### A partir de un archivo

Ahora vamos a hacer este mismo proceso pero creando un archivo con extensión `.py`. Puedes usar el editor de tu preferencia, por ejemplo [Atom](https://atom.io/), [VSCode](https://code.visualstudio.com/) o incluso [PyCharm](https://www.jetbrains.com/pycharm/). Vamos de nuevo a la consola y crearemos una carpeta llamada `/python` ejecutando el siguiente comando:

```text
mkdir python
```

Ingresamos a la carpeta y creemos nuestro primer archivo de Python:

```text
cd python
touch index.py
```

Si ejecutas el comando `ls` ya debería aparecer el archivo Python listado. Si te das cuenta, los archivos de Python tendrán la extensión `.py`.

Ahora accede a tu editor de texto seleccionado y abre desde allí el archivo `index.py` que acabamos de crear y escribe la siguiente línea:

```python
print("Hello World")
```

Guarda el archivo y vuelve a la consola.

**Nota:** antes de ejecutar el siguiente comando verifica que ya te has salido de la consola interactiva de Python oprimiendo `Ctrl + D` o ejecutando `exit()`. Fíjate que no aparezca `>>>` en el prompt.

En la consola debes estar ubicado en la carpeta `/python` que creamos hace un momento. Ahora ejecuta el siguiente comando:

```text
python3 index.py
```

Esto le indica a la máquina que ejecute el código que se encuentra en `index.py` utilizando Python. Deberías ver lo siguiente en la pantalla:

```text
Hello World
```

Excelente, has empezado con pie derecho estas guías, ahora empecemos a hacer cosas más interesantes!

### Comentarios

Los comentarios en Python se utilizan para:

* Documentar el código y darle contexto a otras personas sobre nuestro código.
* Ignorar temporalmente la ejecución de una o más líneas de código.

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
