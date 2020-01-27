# Ramas (branches)

Las **ramas** (branches) nos permiten desviarnos de la línea principal de desarrollo para realizar experimentos que después podemos integrar a la línea principal o descartarlos.

Por defecto **git** crea una **rama** por defecto llamada `master`.

Para ver en qué rama nos encontramos utiliza el comando `git status`. La primera línea nos dice en qué **rama** estamos:

```
$ git status
On branch master
...
```

## Creando una rama

Para crear una **rama** utiliza el comando `git branch` seguido del nombre que le quieres dar a la **rama**. Por ejemplo, para crear una nueva **rama** llamada `mi-rama` ejecutaríamos el siguiente comando:

```
git branch mi-rama
```

Este comando crea la **rama** pero no nos ubica sobre ella. Para cambiar de **rama** debes ejecutar el siguiente comando:

```
git checkout mi-rama
```

Sin embargo, la mayoría de veces, cuando uno quiere crear una **rama** también se quiere ubicar sobre ella, así que existe un atajo:

```
git checkout -b mi-rama
```

La diferencia con el comando anterior es la opción `-b`.

Una vez que estamos ubicados sobre una **rama**, todos los **commits** se realizarán sobre esa **rama**.

## Cambiando el nombre de una rama

Para cambiar el nombre de la **rama** debes estar ubicado sobre ella y ejecutar el comando `git branch -m` seguido del nuevo nombre. Por ejemplo, asumiendo que estamos sobre la rama `mi-rama`, y que queremos cambiarle el nombre a `otra-rama`, ejecutaríamos el siguiente comando:

```
git branch -m otra-rama
```

## Integrando una rama

Para integrar los commits de una **rama** (p.e. `mi-rama`) a otra (p.e. `master`) primero debemos ubicarnos sobre la rama principal (p.e. `master`) y ejecutar el comando `git merge` seguido del nombre de la **rama**:

```
git checkout master
git merge mi-rama
```

Si `master` no tiene **commits** adicionales desde que creamos `mi-rama`, no es necesario crear un **commit** adicional. Sin embargo, si hay otros commits en `master` se crearía un nuevo commit, llamado **merge commit**, que integraría los cambios de `mi-rama`.

### Solucionando conflictos

Es posible que se realicen cambios en las dos **ramas** que generen conflictos a la hora de integrarlas (p.e. si se crea un archivo con el mismo nombre en las dos **ramas** o si se cambia la misma línea de un archivo). En este caso es necesario solucionar los conflictos a la hora de hacer el `git merge`.

Por ejemplo, suponiendo que en `master` se creó un archivo llamado `prueba.txt` con un texto `Hola desde master` y en `mi-rama` se creo otro archivo con el mismo nombre pero el texto `Hola desde mi-rama`, al hacer el `git merge` veríamos lo siguiente en la consola:

```
$ git checkout master
$ git merge mi-rama
Auto-merging prueba.txt
CONFLICT (add/add): Merge conflict in prueba.txt
Automatic merge failed; fix conflicts and then commit the result.
```

La línea 4 nos dice que existe un **conflicto** en `prueba.txt`. Al abrir el archivo veríamos algo así:

```
<<<<<<< HEAD
Hola desde master
=======
Hola desde mi-rama
>>>>>>> mi-rama
```

Lo que está entre la línea 1 y 3 es lo que está en `master` y lo que está entre la línea 3 y 5 es lo que está en `mi-rama`. Para solucionar el **conflicto** debemos decidir qué vamos a dejar y qué vamos a eliminar. Muy importante es siempre elimianar las líneas que definen los límites (las que comienzan con `<<<<<<<`, `=======` y `>>>>>>>`).

Por ejemplo, asumiendo que queremos dejar las dos frases deberíamos modificar el archivo para que quede de la siguiente forma:

```
Hola desde master
Hola desde mi-rama
```

Los editores de programación como VSCode o Atom nos permiten solucionar los conflictos gráficamente. Por ejemplo, la siguiente imagen nos muestra lo que aparecería en Atom cuando abrimos `prueba.txt`:



Podemos utilizar los botones que dicen `use me` si sólo queremos dejar alguno de los cambios, o podemos dar click sobre los tres puntos para ver más opciones. Lo importante es que al final no nos queden las líneas que definen los límites y el archivo quede como queramos.

Una vez solucionado el conflicto debemos indicarle a **git** que ya lo solucionamos utilizando el comando `git add` y continuar con el merge.

```
git add prueba.txt
git commit -m 'Merge branch "mi-rama"'
```

Si omites el mensaje se abrirá el editor de texto por defecto para que lo ingreses.

## Eliminado una rama

Para eliminar una **rama** que ya ha sido integrada en otra utilizamos el comando `git branch -d`. Para que este comando funcione debemos estar ubicados en la rama a la que fue integrada. Por ejemplo, asumiendo que `mi-rama` ya fue integrada a `master` ejecutaríamos el siguiente comando:

```
git checkout master
git branch -d mi-rama

```

Si no hemos integrado la rama pero igual la queremos eliminarla, podemos cambiar la opción `-d` por `-D`. Por ejemplo, asumiendo que la rama `mi-rama` tiene nuevos commits y no ha sido integrada, podemos eliminarla ejecutando el siguiente comando:

```
git branch -D mi-rama
```

## Rebasando una rama

Una rama se rebasa con alguno de dos siguientes objetivos:

1. Actualizar una rama con respecto a otra. Imagina que estás en una `mi-rama` pero en `master` hay unos commits nuevos que necesitas traer a `mi-rama` para terminar lo que estás haciendo.
2. Evitar el **merge commit** al integrar. Si rebasas `mi-rama` contra `master` antes de integrarla vas a evitar la necesidad de crear un **merge commit** cuando ejecutes `git merge` (asumiendo que `master` tiene nuevos commits).

Para rebasar una rama debes ubicarte sobre la rama derivada (p.e. mi-rama) y ejecutar el siguiente comando (asumiendo que la quieres rebasar contra `master`):

```
git checkout mi-rama
git rebase master
```

Lo que hace el comando `git rebase` es lo siguiente:

1. Mueve los nuevos commits que hayas hecho sobre `mi-rama` a un lugar temporal.
2. Actualiza `mi-rama` con los nuevos commits que se hayan creado en `master`.
3. Aplica los nuevos commits que hayas hecho sobre `mi-rama`, pero ahora ya está actualizada con respecto a `master`.

El resultado es que `mi-rama` tiene los mismos commits que master más los nuevos que tenías en `mi-rama`.

En el paso 3 pueden ocurrir conflictos que deberás solucionar de forma similar a lo que vimos en la sección **Solucionando conflictos**.
