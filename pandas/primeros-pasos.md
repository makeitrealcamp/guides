# Primeros pasos

## Que es Pandas?

Pandas es un módulo para trabajar con datos tabulares. O sea datos en una tabla con filas y columnas. Los datos tabulares tienen un montón de las mismas funcionalidades de SQL o Excel pero Pandas añade el poder de Python. Para poder usar Pandas debemos instalarlo y luego importarlo dentro de un archivo de python.

El comando para instalarlo es el siguiente:

```
pip3 install pandas
```

Debes tener presente la versión de python y la versión de pandas a fin de que sean compatibles.

El módulo de pandas es usualmente importado al principio del archivo de python bajo el alias de `pd`

```python
import pandas as pd
```

Si necesitamos acceder al módulo de pandas lo haremos con el alias de `pd`.

## Diferencias entre Numpy, Pandas y Matplotlib

Pandas: El módulo Pandas se utiliza para trabajar con datos tabulares.

* Nos permite trabajar con datos en forma de tabla, como en formatos de base de datos CSV o SQL.
* También podemos crear tablas propias y editar o añadir columnas o filas a las tablas.
* Pandas nos proporciona algunos objetos poderosos como DataFrames y Series que son muy útiles para trabajar con y analizar datos.

Numpy: El módulo Numpy se utiliza principalmente para trabajar con datos numéricos.

* Nos proporciona un objeto poderoso conocido como una Array.
* Con Arrays, podemos realizar operaciones matemáticas sobre múltiples valores en los Arrays al mismo tiempo, y también realizar operaciones entre diferentes Arrays, similares a las operaciones matriciales.

Matplotlib: Por último, pero no menos importante, el módulo Matplotlib se utiliza para la visualización de datos.

* Proporciona funcionalidad para que podamos dibujar cuadros y gráficos, de modo que podamos entender y presentar los datos mejor visualmente.

Estos tres módulos tienen diferentes propósitos y funcionalidades en las que sobresalen, y juntos nos permiten analizar, manipular y visualizar datos de maneras muy útiles.
