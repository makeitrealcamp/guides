# Reescribiendo la historia

En ocasiones vas a necesitar cambiar uno o más commits, por ejemplo para cambiarles el mensaje, reorganizarlos, eliminarlos, etc.

**Nota:** Nunca reescribas la historia sobre ramas que hayas publicado en un repositorio remoto y sobre las que otros colaboradores ya puedan estar trabajando.

## Cambiando el último commit

Si quieres modificar el mensaje o los cambios del último commit puedes hacer lo siguiente: realiza los cambios que necesites en tu espacio de trabajo (los archivos de tu proyecto), agregarlos al index y ejecuta el siguiente comando:

```
git commit --amend
```

La opción `--amend` le dice a **git** que queremos incluir otros cambios en el último commit y que abra el editor de texto por defecto para cambiar el mensaje.

Si no quieres cambiar el mensaje puedes utilizar:

```
git commit --amend --no-edit
```

**Nota:** En realidad **git** no modifica el último commit sino que crea uno nuevo y descarta el anterior.

## Descartando el último o últimos commits

Si quieres deshacer por completo el último commit utiliza el siguiente comando:

```
git reset --hard HEAD^
```

Si omites la opción `--hard`, los cambios del commit van a quedar en el espacio de trabajo, así que puedes volver a hacer un commit con ellos si es necesario.

Si quieres deshacer más commits puedes agregarle más caracteres `^` después de `HEAD`. Por ejemplo, si quieres deshacer los tres últimos commits ejecutarías:

```
git reset --hard HEAD^^^
```

De nuevo, si omites la opción `--hard`, los cambios de esos tres commits van a quedar en el espacio de trabajo.

Si quieres deshacer los últimos 15 commits sería engorroso escribir quince caracteres `^`. Por eso hay otra notación que hace lo mismo pero es más compacta:

```
git reset --hard HEAD~15
```

Puedes utilizar cualquiera de las dos formas para descartar los últimos commits.

## Reescribir la historia de commits

Si necesitas modificar varios commits a la vez puedes utilizar el rebase interactivo, que abre un editor de texto y te permite eliminar, modificar y unir commits:

```
git rebase -i HEAD~3
```

Este comando abriría un editor de texto con los últimos tres commits e instrucciones para modificarlos:

```
pick 2064156 Add multi-buildpack
pick 1a51cde Update buildpacks
pick 8d9019b Small design fix to invoice

# Rebase bbab9a6..8d9019b onto bbab9a6
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like "squash", but discard this commit's log message
#  x, exec = run command (the rest of the line) using shell
#
# ...
```

Cada commit tiene un comando a la izquierda que nos permite decidir qué hacer con cada uno. Por defecto, la opción es `pick`, que significa que ese commit no se va a modificar. Los demás comandos son (excepto `exec` que nunca lo hemos visto ser usado):

* `r, reword`: queremos usar el commit pero cambiando el mensaje.
* `e, edit`: queremos user el commit pero necesitamos hacer algunos ajustes.
* `s, squash`: queremos unir el commit con el anterior modificando el mensaje.
* `f, fixup`: queremos unir el commit con el anterior descartando el mensaje de este commit (dejando el del anterior).

Si eliminas una línea de commit, el commit será eliminado. Al guardar y cerrar el editor, **git** comienza a aplicar los commits deteniéndose para cambiar mensajes o realizar los ajustes donde se haya usado la opción `edit`.
