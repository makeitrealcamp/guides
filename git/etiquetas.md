# Etiquetas (tags)

En **git** es posible etiquetar commits que representan algún momento importante de nuestro proyecto, como el lanzamiento de una nueva versión o un despliegue en producción.

## Creando una etiqueta

Hay dos tipos de etiquetas: ligeras (lightweight) y anotadas (annotated). Una etiqueta ligera almacena únicamente el commit sobre el que se creó la etiqueta, mientras que una etiqueta anotada almacena también la información de la persona que la creó, la fecha y un mensaje. Nuestra recomendación es siempre crear **etiquetas anotadas**.

Para crear una **etiqueta anotada** utiliza el comando `git tag` con la opción `-a`:

```
git tag -a v1.4.2 -m 'Version 1.4.2'
```

El nombre va después de la opción `-a`, en este caso `v1.4.2`. La opción `-m` define el mensaje que le vamos a adjuntar a la etiqueta, si se omite se abre el editor de texto para ingresarlo.

Para crear una **etiqueta ligera** omite las opcines `-a` y `-m`:

```
git tag v1.4.2
```

## Listando etiquetas

Para listar las etiquetas de un repositorio utiliza el siguiente comando:

```
git tag
```

Si quieres ver el detalle de una etiqueta anotada (quién la creó, la fecha, el mensaje y el commit) utiliza el comando `git show` seguido del nombre de la etiqueta:

```
git show v1.4.2
```

## Eliminando etiquetas

Para eliminar una etiqueta utiliza el comando `git tag -d` seguido del nombre de la etiqueta. Por ejemplo, para eliminar una etiqueta llamada `v1.4.2` ejecuta el siguiente comando:

```
git tag -d v1.4.2
```

## Repositorios remotos

Las etiquetas no se comparten automaticamente con los repositorios remotos así que vamos a ver cómo sincronizarlas.

### Subiendo etiquetas

Para compartir una etiqueta con un repositorio remoto ejecuta el comando `git push` pasándo explicitamente el nombre de la etiqueta. Por ejemplo, para compartir una etiqueta llamada `v1.4.2` a un repositorio remoto llamado `origin`, ejecutaríamos el siguiente comando:

```
git push origin v1.4.2
```

Si tienes varias etiquetas por compartir puedes utilizar el siguiente comando:

```
git push origin --tags
```

### Actualizando etiquetas

Las etiquetas que se encuentran en un repositorio remoto se descargan automáticamente cuando recibimos el commit al que hacen referencia cuando hacemos `git pull`.

### Eliminando etiquetas

Para eliminar una etiqueta de un repositorio remoto utiliza el comando `git push` con la opción `--delete`. Por ejemplo, para eliminar la etiqueta `v1.4.2` del remoto `origin` ejecutaríamos el siguiente comando:

```
git push --delete origin v1.4.2
```
