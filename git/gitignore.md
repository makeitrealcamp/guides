# Ignorando archivo y carpetas

En **git** es posible ignorar archivos o carpetas que no queremos incluir en el sistema de control de versiones, ya sea porque tienen información sensible o son autogeneradas por alguna herramienta: logs, archivos temporales, etc.

El archivo donde se define la lista de archivos y carpetas a ignorar se llama `.gitignore`. Como este archivo inicia con punto (`.`), en la mayoría de sistemas operativos aparecerá como un **archivo oculto**.

Los archivos y carpetas definidos en `.gitignore` **no** van a aparecer como archivos nuevos o modificados al ejecutar `git status`.

Si aún no existe el archivo `.gitignore` podemos crearlo con nuestro editor de texto favorito e incluirlo en el siguiente commit.

El archivo `.gitignore` debe contener, en cada línea, el nombre de un archivo, carpeta o patrón. Por ejemplo:

```
# esto es un comentario
development.log
build
```

En este caso estamos ignorando un archivo llamado `development.log` (que esté en cualquier carpeta) y la carpeta `build` (incluyendo todos los archivos que estén dentro de la carpeta).

También puedes utilizar patrones en el archivo `.gitignore`:

```
# ignorar todos los archivos que terminen en .log
*.log

# excepto production.log
!production.log

# ignorar los archivos terminados en .txt dentro de la carpeta doc (pero no sus subdirectorios)
doc/*.txt

# ignorar todos los archivos terminados en .pdf dentro de la carpeta doc y sus subdirectorios
doc/**/*.pdf
```

En [este enlace](https://github.com/github/gitignore) vas a encontrar algunas plantillas del archivo `.gitignore` que Github ha creado para algunos lenguajes de programación y frameworks populares. Puede ser un buen punto de partida para tu proyecto o también una buena forma de ver ejemplos de este archivo.
