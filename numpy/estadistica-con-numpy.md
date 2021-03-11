# Estadística con NumPy

Podemos usar NumPy para analizar datos usando estadística. Aprenderemos diferentes métodos para calcular propiedades estadísticas de un set de datos, como encontrar la media y la desviación standard. Esto servirá para entender cómo podemos usar la estadística para llegar a conclusiones acerca de los datos.

La estadística nos ayuda a entender mejor los datos. Usando estadística podremos inferir, con cierta certeza, que probabilidades de ocurrencia existen sobre algo y nos ayuda a leer las propiedades acerca de los datos. Sirve para, por ejemplo, obtener hábitos de uso de los usuarios, tasas de click (click rates), publicidad, posts, etc. Podría también ayudarnos, por ejemplo, a predecir futuras compras basado en historial de compras.

## Media o promedio

El primer concepto estadístico que exploramos será la media (mean), comúnmente conocida como el promedio. Es útil para obtener el centro de un dataset. NumPy incluye una función para calcular la media de los arreglos: `np.mean`.

```python
arr = np.array([5, 10.4, 4, 3, 6.6])
np.mean(arr) # 5.8
```

### Redondeando

Podemos redondear la media a un número específico de puntos decimales? Sí, podemos usar la función de Python `round()` el cual recibe dos parámetros: número a redondear y número de decimales. NumPy nos provee también una forma de redondear cada valor en un array a través de la función `np.round()`. Funciona similar al round de python porque recibe ambos parámetros.

```python
# redondeando un número con Python
numero = 1.234
print(round(numero, 2)) # 1.23
print(round(numero)) # 1

# redondeando un array con NumPy
array = np.array([1.11, 2.22, 3.33, 4.44])
print(np.round(array, 1)) # [1.1 2.2 3.3 4.4]
```

### Mean y operaciones lógicas

También podemos usar `np.mean` para calcular el **porcentaje de elementos de un array que tienen ciertas propiedades**. Recordemos que los operadores lógicos evalúan cada ítem en un array para ver si cumple una condición. Si el ítem cumple, evalúa a `True = 1` o `False = 0`.

Cuando `np.mean` calcula una sentencia lógica, la media que da como resultado será equivalente al número total de True’s dividido por el largo (`len`) del array.


```python
respuestas_encuesta = [5, 10.4, 4, 3, 6.6]
respuestas_array = np.array(respuestas_encuesta)
np.mean(respuestas_array) ## 5.8
np.mean(respuestas_array > 5) ## 0.4
```

¿Qué hizo la última línea de código? Evaluó las respuestas que son mayores a 5, y les asigna el valor de 1 (`True`), y las divide por el largo (`len`). El resultado nos dice que el 40% de los que respondieron, dieron una calificación de más de 5

### Media de los valores

Que pasa si queremos obtener la media de los valores en vez del porcentaje de valores, que satisfacen una condición? por demos hacerlo así:

Digamos que tenemos un array de temperaturas desde -20 hasta 50 y queremos obtener el promedio de temperaturas mayores a 10.

```python
temperaturas = np.array(list(range(-20, 55, 5)))
```

Primero seleccionamos los datos específicos basados en una condición, el cual creará un nuevo array para todas las temperaturas mayores a 10 `temperaturas[temperaturas > 10]`

Finalmente aplicamos la función `np.mean()` a estos datos, y nos dará la media de los valores que cumplen con ese condicional:

```python
temperaturas = np.array(list(range(-20, 55, 5)))
np.mean(temperaturas[temperaturas > 10])

# 32.5
# 32.5 es el valor medio de las temperaturas mayores a 10
```

### Media de Arrays de 2-Dimensiones

Si tenemos un array de dos-dimensiones, `np.mean` puede calcular las medias del array más largo así como de los valores interiores. Imaginemos un juego de encestar canastas en baloncesto. A un jugador le cometen 4 faltas personales y le conceden 2 tiros libres por cada falta. En nuestro array `encestar`, cada array interior es un intento y cada item es un tiro libre. 1 representa una cesta exitosa, 0 representa un fallo.

```python
encestar = np.array([[1, 0],
                     [0, 0],
                     [1, 0],
                     [1, 0]])
np.mean(encestar)

# 0.375
```

Lo que este valor significa es que de todos los tiros libres que tuvo oportunidad de encestar, logró el 37.5% de ellos.

Con numpy también podemos calcular la media de los arrays internos, especificando si lo queremos hacer sobre la fila (axis 1) o sobre la columna (axis 0)

```python
np.mean(encestar, axis=1)

# array([0.5, 0. , 0.5, 0.5])
```

Lo que este resultado significa es que en la primera de las cuatro faltas personales que le cobraron al jugador, encesto el 50%. En la segunda falta encesto el 0% y en las demás faltas encesto también el 50%

```python
np.mean(encestar, axis=0)

# array([0.75, 0.  ])
```

Y se pone más interesante si corremos la media sobre las columnas internas. Este resultado significa que en los primeros intentos tuvo una efectividad del 75% mientras que en los segundos intentos siempre falló los tiros libres, ya que no encesto ninguna.


## Valores Atípicos (Outliers)

Como podemos ver, la media es una vía útil para entender rápidamente partes diferentes de nuestra data. Sin embargo, la media está altamente influenciada por valores específicos de nuestro set de datos. ¿Qué pasa si uno de esos valores es significativamente diferente del resto? Los valores que no se ajustan dentro de la mayoría del set de datos, son conocidos como outliers (valores atípicos)

Es importante identificar valores atípicos porque si pasan desapercibidos, pueden sesgar nuestros datos y conducir a errores en nuestro análisis (como la determinación de la media)

También pueden ser útiles para señalar errores en nuestra recopilación de datos.  Cuando somos capaces de identificar los outliers, podemos determinar si se debieron a un error en la recolección de datos o si representan una desviación significativa pero real de la media.

Miremos este ejemplo:

```python
estaturas_estudiantes = [1.6, 1.55, 1.7, 1.68, 1.8, 3.9, 1.67, 1.70, 1.72]
```

¿Ves algún error en los datos? Lo más seguro es que el valor de 3.9 sea un error. ¿Qué tal la siguiente lista?

```python
estaturas_estudiantes = [1.6, 1.3, 1.7, 1.68, 1.8, 1.8, 1.67, 1.70, 1.72]
```

Tenemos un valor de `1.3`. Quizás no sea un error, si no un estudiante con problemas de estatura, por tanto sigue siendo un valor válido dentro de la lista. Y ¿qué tal ahora está lista?

```python
estaturas_estudiantes = [1.6, 1.3, 1.7, 2.1, 1.8, 1.8, 1.67, 1.70, 1.72]
```

Tenemos un valor de `2.1` lo cual es perfectamente posible (al igual que el estudiante de baja estatura) y también lo consideramos un valor atípico en comparación con los demás valores de la lista.

### ¿Como determinar outliers?

Algunas veces podemos hacerlo solo mirando el dataset y señalando los valores que parecen más grandes o menores que otros valores. Pero es un método manual, propenso a errores y difícil de realizar.

Una forma de identificar rápidamente outliers es ordenando los datos de mayor a menor o viceversa. Una vez los datos están ordenados, podemos ver rápidamente al inicio y al final del dataset para ver si hay valores más allá del rango esperado. Podemos usar la función de NumPy `np.sort`

```python
estaturas_estudiantes = [1.6, 1.3, 1.7, 2.1, 1.8, 1.8, 1.67, 1.70, 1.72]
np.sort(estaturas_estudiantes)

# array([1.3 , 1.6 , 1.67, 1.7 , 1.7 , 1.72, 1.8 , 1.8 , 2.1 ])
```

Podemos también hacer otros cálculos estadísticos para determinar un rango de valores y si algún valor se sale del rango es un outlier. Esto se puede hacer con cuantiles. Algo así: `[primer_cuantil - 1.5 * IQR, tercer_cuantil + 1.5 * IQR]` donde IQR es “Interquartile Range (Rango Intercuantil)”. Ya veremos cuantiles detalladamente más adelante en esta misma guía...

## Mediana

Otra métrica importante que podemos usar para el análisis de datos es la mediana (`median`). La mediana es el valor del medio de un set de datos que ha sido ordenado en términos de magnitud (del más pequeño al más grande)

Si el largo del set de datos es un número impar, la mediana sería el valor central (recuerde que la lista debe estar primero ordenada de menor a mayor). Así que en el siguiente ejemplo, la mediana sería 3

```python
numeros = [1, 1, 2, 3, 4, 5, 5]
numeros = np.array(numeros)
np.median(numeros)

# 3.0
```

Si el largo del set de datos es un número par, la mediana sería el valor a medio camino entre los dos valores centrales. Así que en el siguiente ejemplo, la mediana sería 3.5

```python
numeros = [1, 1, 2, 3, 4, 5, 5, 6]
numeros = np.array(numeros)
np.median(numeros)

# 3.5
```

Los valores centrales aquí son 3 y 4, por tanto decimos que 3.5 está a medio camino entre ambos valores.

Pero qué pasa si tenemos un dataset muy grande y con muchos valores? Sería muy tedioso ordenar y contar todos los valores. Afortunadamente NumPy hace ambos pasos por nosotros sin importar si es un array de largo par o impar.


```python
numeros = [50, 38, 291, 59, 14]
numeros = np.array(numeros)
np.median(numeros)

# 50
```

### Diferencias entre la Media y la Mediana

Algunas veces estos dos valores serán muy similares según el set de datos, pero son diferentes y representan conceptos diferentes. La mediana retorna el valor en una posición central de un dataset ordenado. Si el largo del dataset es par, será el promedio de los dos valores del medio. Es conocido también como el "50th percentile".
La media es el promedio de todos los valores del set de datos. Los outliers pueden influir mucho en la media, pero no en la mediana.

```python
valores = [1, 1, 1, 2, 900]
valores = np.array(valores)
np.mean(valores)
np.median(valores)

# 181
# 1.0
```

Lo que podemos ver de este ejemplo es cómo la media se ve fuertemente impactada por valores atípicos, mientras que la mediana representa mejor la mayoría de los datos.

### Representación de Mayoría

¿Cómo podemos decir si un valor representa mejor la mayoría de los datos? Podemos hacer lo siguiente:
* Primero remover los outliers del set de datos
* La media ahora puede ser calculada con estos nuevos valores para una representación más acertada de los datos
* Luego podemos verificar si cualquiera de los dos valores (media y mediana) está más cerca de esa media y esta podría decirse es la que representa mejor la mayoría de datos

```python
valores = [1, 1, 1, 2, 900]
valores = np.array(valores)
np.mean(valores)
np.median(valores)

# 181
# 1.0

valores_sin_outliers = [1, 1, 1, 2]
np.mean(valores_sin_outliers)

# 1.25
```

¿Cuál de las estadísticas (media y mediana) calculadas sobre el array `valores` está más cercana al valor dado por la media calculada sobre èl array `valores_sin_outliers`?

R: La mediana está más cercana, por tanto representa mejor la mayoría de los datos para este caso en particular.

## Percentiles (Cuantiles)

Como sabemos, la mediana está en el medio del set de datos. Es el número en el cual el 50% de los ítems están por debajo y 50% de los ítems están por arriba.

Pero qué pasa si queremos encontrar un punto en el cual el 40% de los ítems están por debajo y el 60% de los ítems están por arriba?

Este tipo de punto es llamado percentile. El `Nth` percentile está definido como el punto `N%` de ítems que están por debajo de él.

Así que el punto donde el 40% de los ítems está por debajo, es llamado el `40th` percentile. Los percentiles son medidas útiles porque pueden decirnos donde está situado un valor en particular dentro de un set de datos muy grande. Veamos un ejemplo:

```python
d = [1, 2, 3, 4, 4, 4, 6, 6, 7, 8, 8]
```

* Hay 11 números en el set de datos.
* El 40th percentile tendrá el 40% de los 10 números restantes por debajo (40% de 10 es 4) y 60% de los números encima de él (60% de 10 es 6).
* Así que el 40th percentile es 4 en este ejemplo.

En NumPy podemos calcular los percentiles usando la función `np.percentile`, el cual toma dos argumentos: el array y el percentile a calcular.

```python
d = [1, 2, 3, 4, 4, 4, 6, 6, 7, 8, 8]
d2 = np.array(d)
np.percentile(d2, 40)

# 4.0
```

¿Qué nos dicen los percentiles?

* Nos dice cómo se encuentra un valor, de un set de datos, en relación con el resto de datos.
* Un ejemplo muy conocido es para estandarizar puntajes (scores).
* Los percentiles pueden decirnos que tan bien le fue a alguien en relación con otros puntajes.
* En Data Analysis sirve para determinar el rango interquartile (3rd -1st percentile) para saber que tan disperso está el set de datos. Ya lo veremos más adelante...

Algunos percentiles tienen nombres específicos:

* El 25th percentile es llamado first quartile (primer cuantil)
* El 50th percentile es llamado the median (la mediana)
* El 75th percentile es llamado third quartile (tercer cuantil)
* El valor mínimo, el first quartile, la mediana, el third quartile y el máximo valor de un set de datos son llamados el "five-number summary". Este set de números es siempre buena idea calcularlos cuando obtenemos un set de datos por primera vez.

La diferencia entre el first quartile y third quartile es un valor llamado interquartile range (Rango Intercuartil). Decimos que el 50% del set de datos estará siempre dentro del rango intercuartil.

El rango intercuartil nos da una idea de la dispersión de nuestros datos. Cuanto menor sea el valor del rango intercuartil, menor será la desviación en nuestro dataset. Cuanto mayor sea el valor, mayor será la desviación.

```python
d = [1, 2, 3, 4, 4, 4, 6, 6, 7, 8, 8]
d2 = np.array(d)
primer_cuantil = np.percentile(d2, 25)
tercer_cuantil = np.percentile(d2, 75)

print(primer_cuantil) # 3.5
print(tercer_cuantil) # 6.5
print("Rango Intercuantil: ", tercer_cuantil - primer_cuantil)

# Rango Intercuantil:  3.0
```

### Five-number summary

¿Por qué es útil el five-number summary?

* Consiste en estos valores del dataset: minimo, 1st quartile, median, 3rd quartile y maximo
* Podemos calcular el IQR (Interquartile Range) que nos dice que tan dispersa esta nuestra data.
* Es útil también para determinar los outliers con los valores máximo y mínimo
* Es un resumen no afectado por los outliers.
* Podemos comparar las 5 métricas de resumen con otros datasets para ver símiles o diferencias

## Desviación Estándar

Mientras que la media y la mediana nos habla sobre el centro de nuestros datos, ellos no reflejan el rango de datos. Aquí es donde llega la desviación standard

Similar a los rangos intercuartiles, la desviación estándar nos dice que tan dispersa está nuestra data.

* A mayor desviación estándar, más dispersa está nuestra data del centro.
* A menor desviación estándar, más datos están agrupados alrededor de la media.

Con NumPy podemos usar la función llamada `np.std`

```python
numeros = np.array([65, 36, 52, 91, 63, 79])
np.std(numeros)

# 17.716909687891082
```

### Desviación Estándar Vs Rango Intercuartil

Desviación Estándar
* Toma en cuenta todos los valores del dataset, incluyendo outliers.
* Depende de la media, porque este valor es usado para determinar qué tanto están los datos desviados de la media del dataset.
* Es importante cuando necesitamos la varianza de un set de datos, como regresiones lineales.
* Es más confiable cuando los datos están normalizados y no sesgados (skewed)

Rango Intercuartil
* Nos dice que tan dispersos están los datos. A mayor valor, más dispersa está la data y viceversa
* No toma en cuenta todos los datos del conjunto de datos, sino principalmente las posiciones cuando el set está ordenado.
* No se afecta tanto por los outliers, o por datos no normalizados o sesgados.

Utilizar ambos cuando analizamos datos es mejor que usar uno solo, y tenemos mejores insights.
