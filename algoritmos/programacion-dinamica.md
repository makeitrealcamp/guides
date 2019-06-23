# Programación dinámica

La programación dinámica es una técnica que se utiliza para optimizar algunos algoritmos.

Los algoritmos que se pueden optimizar con esta técnica son los que realizan varias veces los mismos cálculos y que, por lo tanto, se pueden optimizar almacenando los resultados en memoria para solo tener que realizarlos una única vez.

El ejemplo más común de programación dinámica es calcular algún valor de la [Secuencia de Fibonacci](https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci), que se puede solucionar de forma recursiva:

![Árbol de recursión para el quinto elemento de la secuencia de fibonacci](https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/dynamic-programming-1.png)

El problema es que estamos calculando `f(3)` dos veces y `f(2)` tres veces. Podemos optimizar este algoritmos para que utilice un objeto (un diccionario) en donde se almacene el resultado de estos valores y sólo sea necesario calcularlos una única vez.

Utilizando el objeto adicional, nuestra recursión quedaría de la siguiente forma, en donde los valores en naranja ya se encuentran en el objeto:

![Los valores en naranja ya están calculados o son casos base](https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/dynamic-programming-2.png)
