# Distribución Estadística

La distribución estadística, también conocida como distribución de probabilidad, muestra la probabilidad o número de veces que cierto resultado ocurra dado un número de intentos.

Esto puede ayudarnos a observar y determinar la probabilidad de que un resultado ocurra. Teniendo en cuenta que siempre hay incertidumbre, esto puede ayudarnos a tomar decisiones más certeras basadas en probabilidades. La forma de la distribución puede ser categorizada.

## Histogramas

Cuando vemos por primera vez un set de datos, vamos a querer entender rápidamente ciertas cosas acerca de él, como:
* Algunos valores ocurren más seguido que otros?
* ¿Cuál es el rango del set de datos? (el max y min)
* ¿Hay muchos valores atípicos? (outliers)

Podemos visualizar esto con un gráfico llamado histograma.

### Gráficos de barras vs histogramas

Aunque parecen similares, los histogramas y los gráficos de barras son diferentes y sirven para propósitos específicos.

Histogramas:

* Son usados para graficar distribuciones o frecuencias para datos cuantitativos.
* Visualmente todas las barras se están tocando, y no hay espacio entre ellas
* Las barras representan los valores del dataset que caen dentro de cada rango de valores

Gráficos de Barras:

* Son usados para agrupar datos basados en categorías.
* Visualmente están esparcidas las barras
* Cada barra representa cuántos de los datos caen dentro de ciertas categorías.


### Creando un histograma

Supongamos que tenemos un set de datos muy grande y los datos están en un rango entre `0` y `50`. Aquí podríamos querer saber cuántos datos caen o están entre `0` y `5`, `6` y `10`, `11` y `15`, etc.

A este agrupamiento lo llamamos bins (o ubicaciones en español). Todos los bins en un histograma serán del mismo tamaño. El ancho (width) de cada bin es la distancia entre max y min de cada bin. En nuestro ej, seria 5

Aquí podría surgir una pregunta, y es: ¿hay un ancho ideal de bins para los histogramas? No existe un ancho que sirva para todos los problemas. Es totalmente independiente a la cantidad de datos y al rango que existe entre ellos. Lo ideal es que tenga una significativa representación de los datos. Escoger valores muy bajos o muy altos podría dificultar la tarea de analizar y entender los datos

Podemos graficar histogramas usando un módulo de python conocido como Matplotlib. Vamos a ver en detalle este modulo mas adelante, por ahora solo vamos a familiarizarnos un poco con su sintaxis.

```
pip3 install matplotlib
```

La línea anterior instala Matplotlib en su máquina local.

```python
## importamos las librerías
from matplotlib import pyplot as plt
import numpy as np

## dibujamos el histograma
data = np.array([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5])
plt.hist(data)

## guardamos el gráfico del histograma
plt.savefig("mi-histograma.png")
```

El histograma automáticamente se crea con 10 bins. Si usted quiere un valor diferente, debe usar la palabra reservada `bins` en `plt.hist`. Por ejemplo debe hacer algo como `plt.hist(data, bins=5)`

Si quiere un rango diferente, puede pasar un max y min usando la palabra reservada range. Por ejemplo `plt.hist(data, range=(20, 51))`


```python
## esta línea importa la librería
from matplotlib import pyplot as plt
import numpy as np

## esta línea dibuja el histograma
data = np.array([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5])
plt.hist(data, bins=5, range=(1, 6))

## esta línea guarda el gráfico del histograma en su máquina local
plt.savefig("mi-histograma.png")
```

### Selección de bins

¿Podría afectar la apariencia de una distribución nuestra elección de bins? Si, porque puede cambiar la interpretación de los datos, aunque no afectará el set de datos en sí.

Por ejemplo si ponemos un bin muy bajo, `bins=2` las barras probablemente no darán mucha información acerca de la distribución de la data. Por tanto es importante elegir un buen tamaño de bins

# Tipos de distribución

Los histogramas y sus set de datos pueden ser clasificados basados en la forma de los valores graficados. Una manera de clasificar un dataset es contando el número de diferentes picos (peaks) presentes en el gráfico. Los picos representan concentración de datos

* Unimodal: Un solo pico en el centro
* Bimodal: Dos picos. Pasa cuando la data contiene dos poblaciones diferentes.
* Multimodal: Tiene múltiples picos
* Uniforme: No tiene picos, es plano

La mayoría de los set de datos con los que trabajaremos serán unimodales (un solo pico). Podemos subclasificar las distribuciones unimodales a su vez describiendo dónde está la mayoría de datos en relación al pico.

* Unimodal - Simétrica: mayoría de números en el centro
* Unimodal - Sesgado a la derecha: la mayoria de datos estan en la izquierda
* Unimodal - Sesgado a la izquierda: la mayoria de datos estan a la derecha

El tipo de distribución afecta la posición de la media y la mediana. En distribuciones muy sesgadas la media (mean) se vuelve menos útil.

## La distribución normal

El tipo de distribución más común en estadística es la distribución normal, la cual es una distribución unimodal y simétrica.

Muchas cosas pueden conformar una distribución normal, por ejemplo: la altura de un gran número de personas, la presión sanguínea de un grupo de personas sanas, etc. La distribución normal está definida por la media y la desviación standard

La media nos dice el “medio” de la distribución y la desviación estándar nos dice el “ancho” de la distribución. A mayor desviación estándar nos lleva a una distribución más ancha, y a menor desviación standard, más delgada la distribución

Podemos usar una función de NumPy para generar un set de números que tengan la forma de una distribución normal: `np.random.normal` y recibe estos argumentos:

* `loc`: la media para la distribución normal
* `scale`: la desviación standard de la distribución
* `size`: el número de números aleatorios a generar.

```python
from matplotlib import pyplot as plt
import numpy as np

a = np.random.normal(0, 1, size=100000)

# array([ 1.34234505, -1.02927272,  0.16804986, ..., -0.48276392,
#       -1.02826908,  1.06165709])

plt.hist(a)
plt.savefig("distribucion-normal.png")

## revisa la carpeta en tu máquina local, y deberías tener el histograma de la distribución bajo el nombre de /distribucion-normal.png
```

### Distribución normal vs desviación estándar

Para entender mejor la relación entre a la desviación estándar y la distribución normal debemos entender que: En una distribución normal, sabemos ahora, que la media y la desviación standard determinan ciertas características de la forma de los datos, pero cómo exactamente?

Supongamos que tenemos una distribución normal con una media de `50` y una desviación standard de `10`. Cuando decimos “dentro de una desviación standard de la media”, esto es lo que estamos diciendo matemáticamente:

```python
rango_bajo = mean - std
           = 50 - 10
           = 40

rango_alto = mean + std
           = 50 + 10
           = 60
```

Esto significa que podemos esperar que cerca del 68% de nuestro dataset esté entre 40 y 60 de esta distribución. No importa cual media o desviación estándar elijamos, el 68% de nuestros ejemplos caerán en +/-1 desviación estándar de la media

Estas son algunas reglas de la distribución normal:
* 68% de nuestros datos caerán entre +/- 1 Desviaciones estándar de la media
```python
una_desviacion = [mean - std, mean + std]
```

* 95% de nuestros datos caerán entre +/- 2 Desviaciones estándar de la media
```python
una_desviacion = [mean - (2 * std), mean + (2 * std)]
```

* 99.7% de nuestros datos caerán entre +/- 3 Desviaciones estándar de la media
```python
una_desviacion = [mean - (3 * std), mean + (3 * std)]
```

## La distribución binomial

La distribución binomial nos dice que tan probable es que un número de “aciertos” se den, dada una probabilidad de éxito y un número de intentos. Es importante porque nos permite conocer qué tan probable es cierto resultado, incluso cuando no es esperado.

Hagamos un ejemplo:

* Los jugadores de basket normalmente encestan el 30% de los tiros libres.
* Un jugador tiene el chance de hacer 10 tiros libres en un juego de viernes por la noche.
* ¿Cuántos tiros libres se espera que enceste? R:/ `0.3 * 10 = 3`
* Pero el jugador encesta 4 tiros libres, o sea un `40%`
* ¿Esto es un resultado sorprendente? ¿Significa que él es mejor jugador de lo que se pensaba?

Las respuestas correctas son:

* No es tan sorprendente que un jugador haga 4 de 10
* Sin embargo es poco probable que haga 0 de 10 o que haga 10 de 10.
* Incluso tiene pocos chances de hacer 7, 8 o 9 de 10.

Veámoslo con código:

Hay fórmulas más complicadas para determinar estos tipos de probabilidad. Afortunadamente podemos usar NumPy, y especialmente su habilidad para generar números aleatorios. Podemos usar estos random numbers para modelar una distribución de datos numéricos que esté en línea con escenarios de la vida real.

Si queremos saber las diferentes probabilidades de que un jugador haga 1, 2, 3 o más cestas por cada 10 intentos, podemos usar `np.random.binomial` el cual podemos usar para determinar la probabilidad de diferentes resultados.

La función retorna el número de “éxitos” por cada “experimento”. Y toma estos 3 argumentos:

* `N`: el número de intentos o ejemplos
* `P`: la probabilidad de éxito
* `size`: número de experimentos

Para continuar con el ejemplo de basket, vamos a generar 10.000 "experimentos" con 10 "intentos" cada uno, y una probabilidad de éxito del 30%

```python
plt.close() # esta línea la usamos para "limpiar" el gráfico anterior, de lo contrario se imprimirán dos histogramas

from matplotlib import pyplot as plt
import numpy as np

a = np.random.binomial(10, 0.3, size=10000)
print(a)

plt.hist(a, range=(0, 10), bins=10, density=True)
plt.xlabel("Número de tiros libres")
plt.ylabel("Frecuencia")
plt.savefig("distribucion-binomial.png")
```

En su máquina local debió guardarse el histograma de la distribución normal. Volvamos a analizar las preguntas anteriores.

Problema a resolver:

* Los jugadores de basket normalmente encestan el 30% de los tiros libres.
* Un jugador tiene el chance de hacer 10 tiros libres en un juego de viernes por la noche.
* ¿Cuántos tiros libres se espera que enceste? R:/ `0.3 * 10 = 3`.
* Pero el jugador encesta 4 tiros libres, o sea un `40%`.
* ¿Esto es un resultado sorprendente? ¿Significa que él es mejor jugador de lo que se pensaba?

Las respuestas correctas siguiendo el histograma que acabamos de crear son:

* No es tan sorprendente que un jugador haga 4 de 10.
* Sin embargo es poco probable que haga 0 de 10 o que haga 10 de 10.
* Incluso tiene pocos chances de hacer 7, 8 o 9 de 10.

Otras conclusiones:

* Nuestro jugador tenía 30% de chances de hacer el tiro libre. Pero hace 10 intentos y mete 4 tiros libres, pero solo esperábamos que hiciera 3. ¿Qué probabilidades había de que hiciera esos 4 tiros?
* Podemos calcular esa probabilidad contando el porcentaje de experimentos con algún resultado, usando la función `np.mean`.
* Recuerde que tomando la media de una sentencia lógica nos dará un porcentaje de valores que satisfacen esa sentencia lógica.

```python
a = np.random.binomial(10, 0.3, size=10000)
np.mean(a == 4)

# 0.1947
```

la probabilidad de que haga 4 tiros libres es de 19.47%

```python
a = np.random.binomial(10, 0.3, size=10000)
np.mean(a == 8) # 0.002
np.mean(a == 1) # 0.1171
np.mean(a > 5) # 0.0467
np.mean(a <= 5) # 0.9533
```

Miremos estos cuatro resultados:

* La probabilidad de que haga 8 de 10 tiros libres es de solo 0.2%.
* La probabilidad de que haga 1 de 10 tiros libres es 11%, lo cual significa que es más probable que un jugador enceste pocos tiros libres a que enceste mucho tiros libres.
* La probabilidad de que haga más de 5 tiros libres es de solo el 4%.
* La probabilidad de que haga menos de 5 tiros libres es del 95%, lo que quiere decir que es altamente probable que ni siquiera enceste la mitad de los 10 tiros libres!
