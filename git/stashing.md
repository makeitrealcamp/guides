# Stashing (guardando cambios)

Stashing es una funcionalidad de **git** que nos permite tomar los archivos modificados del espacio de trabajo y guardarlos en un espacio temporal (llamado el **stash**) que después podemos recuperar.

Stashing es muy útil cuando estamos en la mitad de un cambio y debemos cambiarnos a otra rama (p.e. porque surgió algo urgente que debemos solucionar). En vez de crear un commit temporal, podemos guardar nuestros cambios en el **stash** temporalmente y, más adelante, recuperarlos para seguir trabajando en ellos.

Es posible tener múltiples grupos de cambios (entradas) en el **stash**, pero es importante no abusar del **stash**. En general deberías guardar una única una entrada en el **stash**.

### Agregando cambios al stash

Para almacenar los archivos modificados de tu espacio de trabajo utiliza el comando `git stash`. Nuestra recomendación es ejecutar `git add` antes de ejecutar `git stash` porque los nuevos archivos no quedaría en el stash:

```
git add .
git stash
```

Si haces un `git status` después de un **stash** vas a ver que no hay cambios en tu espacio de trabajo.

### Listando las entradas en el stash

Para ver la lista de entradas que existen en el stash (se crea una nueva entrada cada vez que haces `git stash`) ejecuta el siguiente comando:

```
git stash list
stash@{0}: WIP on master: 5002d47 Crea el nuevo landing
stash@{1}: WIP on rama-1: 7a834c0 Modifica la página de productos
stash@{2}: WIP on master: f67239a Elimina la página de contacto
```

Cada línea representa un grupo de cambios y muestra: un identificador del stash, la rama y el último commit que existía cuando hicimos el stash.

### Recuperando cambios del stash

Para recuperar los cambios del stash existen dos comandos que puedes utilizar: `git stash pop` y `git stash apply`.

`git stash pop` aplica los últimos cambios que agregaste al stash (`stash@{0}`) y elimina esa entrada del stash. `git stash apply` es similar pero mantiene la entrada en el stash.

Si quieres aplicar los cambios de otra entrada utiliza el identificador, por ejemplo, el siguiente comando tomaría la segunda entrada en el stash, aplicaría los cambios y eliminaría la entrada:

```
git stash pop stash@{1}
```

Lo mismo podríamos hacer con apply, la única diferencia es que la entrada no se eliminaría (quedaría en el stash):

```
git stash apply stash@{1}
```

### Ver los cambios de una entrada del stash

Si quieres ver los cambios que existen en una entrada del stash utiliza el comando `git stash show -p` seguido del identificador de la entrada. Por ejemplo, para ver la segunda entrada del stash ejecutaríamos:

```
$ git stash show -p stash@{0}
diff --git a/style.css b/style.css
new file mode 100644
index 0000000..d92368b
--- /dev/null
+++ b/style.css
@@ -0,0 +1,3 @@
+* {
+ text-decoration: blink;
+}
diff --git a/index.html b/index.html
index 9daeafb..ebdcbd2 100644
--- a/index.html
+++ b/index.html
@@ -1 +1,2 @@
+<link rel="stylesheet" href="style.css"/>
```

Si omites el identificador se muestra la última entrada.

### Creando una rama a partir del stash

Para crear una rama a partir de una entrada del stash utiliza el comando `git stash branch` seguido del nombre de la nueva rama y el identificador del stash. Por ejemplo, para crear una rama llamada `rama-stash` a partir de la segunda entrada del stash ejecuta:

```
git stash branch rama-stash stash@{1}
```

### Eliminando una entrada del stash

Si ya no necesitas alguna entrada en el stash, puedes eliminarla con el comando `git stash drop` seguido del identificador de la entrada. Por ejemplo, para eliminar la segunda entrada ejecuta:

```
git stash drop stash@{1}
```

O puedes eliminar todas las entradas del stash con el siguiente comando:

```
git stash clear
```
