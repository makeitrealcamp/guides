# Repositorios remotos

Para colaborar con otros desarrolladores es fundamental que aprendas a trabajar con **repositorios remotos**.

Un **repositorio remoto** nos permite sincronizar nuestro repositorio con otro (u otros) en una ubicación diferente (generalmente en un servidor o un servicio en Internet, aunque podría ser también otra carpeta del mismo computador).

En esta guía vamos a trabajar con un servicio llamado [Github](https://github.com), que nos va a permitir crear repositorios centrales (públicos o privados).

Aunque en **git** no es necesario un repositorio central (por eso se dice que es distribuído), en la práctica es muy común y útil tenerlo. Primero, para mantener una copia de nuestro repositorio y, segundo, para facilitar la colaboración con otras personas.

Existen otros servicios similares a [Github](https://github.com) como [Bitbucket](https://bitbucket.org/) y [Gitlab](https://gitlab.com/), entre otros. Incluso, si tienes un servidor (propio o alquilado), puedes configurar un servidor de **git** y alojar allí tus **repositorios remotos**. Esto esta fuera del alcance de estas guías pero puedes consultar [este recurso](https://git-scm.com/book/en/v2/Git-on-the-Server-The-Protocols) para más información.

En [Github](https://github.com) puedes crear repositorios gratis, aunque hay algunas limitaciones. Consulta la [página de precios](https://github.com/pricing) para más información.

Si aún no tienes una cuenta en [Github](https://github.com) es hora de crear una antes de continuar.

### Creando un repositorio en Github

Para crear un repositorio en [Github](https://github.com) ingresa a tu cuenta y haz click sobre la opción "New Repository" como se muestra en la siguiente imagen:

![Nuevo Repositorio](https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/git-new-repo.jpg)

En la siguiente pantalla debes darle un nombre al repositorio, asegurarte que esté público y oprimir el botón "Create repository":

![Crear Repositorio](https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/git-create-repo.jpg)

Has creado un repositorio en [Github](https://github.com), es hora de configurarlo en el repositorio local y subir el historial.

### Configurando el repositorio remoto

Cuando creas un repositorio en [Github](https://github.com) te va a aparecer una pantalla como la que ves a continuación. Copia y pega en la consola las líneas que se indican con la flecha roja:

![Configurar Repositorio](https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/git-configure-remote.jpg)

La primera línea configura el repositorio remoto en tu repositorio local. **Esta línea sólo la debes ejecutar una vez por repositorio remoto**.

En general, para configurar un repositorio remoto se utiliza el siguiente comando:

```
git remote add <nombre> <url>
```

**Nota:** aunque es posible tener múltiples repositorios remotos con diferentes nombres, de ahora en adelante vamos a asumir que sólo tienes uno llamado `origin`. Si se llama diferente, debes cambiar `origin` por el nombre correspondiente en los comandos que lo requieran. Para consultar el nombre del repositorio remoto ejecuta el comando `git remote`.

Para sincronizar los commits de la rama `master` con el **repositorio remoto** por primera vez se utiliza el siguiente comando (como se muestra en la imagen anterior):

```
git push -u origin master
```

Cuando crees nuevos commits puedes ejecutar el mismo comando sin la opción `-u` o puedes sólo ejecutar:

```
git push
```

Automáticamente **git** sabe a qué repositorio y rama enviar los nuevos commits (siempre y cuando hayas utilizado la opción `-u` la primera vez que hiciste el push).

**Recuerda que los commits no se envían automáticamente al remoto cuando los creas, debes ejecutar `git push` para enviarlos.**

### Clonando un repositorio

Para descargar un repositorio a tu computador (a esto se le conoce como clonar) utiliza el comando `git clone` seguido de la URL del repositorio. Por ejemplo, el siguiente comando clonaría el repositorio de [Node.js](https://github.com/nodejs/node):

```
git clone https://github.com/nodejs/node.git
```

Al ejecutar este comando se crea una carpeta llamada `node` con una copia completa del repositorio original (la carpeta oculta `.git`) y el espacio de trabajo (los archivos y carpetas del proyecto). También se configura un **repositorio remoto** llamado `origin`.

Puedes clonar cualquier repositorio público y repositorios privados a los que tengas acceso.

Al clonar un repositorio únicamente se descarga el historial de la rama `master`, a continuación veremos cómo descargar otras ramas.

## Descargando otras ramas

Para descargar otras ramas del **repositorio remoto** utiliza el comando `git checkout` seguido del nombre de la rama. Por ejemplo, si en el repositorio remoto existe una rama llamada `rama-1`, ejecutaríamos los siguientes comandos para descargarla:

```
git fetch origin
git checkout rama-1
```

El primer comando actualiza la información del **repositorio remoto** (incluyendo las ramas que existen). El segundo comando descarga la rama si no existe localmente.

### Actualizando una rama

Si estás trabajando con otros desarrolladores, es posible que tu repositorio local se desactualice con respecto al remoto. Sin embargo, no es posible actualizar todas las ramas a la vez, debes actualizarla una por una.

Para actualizar una rama úbicate sobre ella y ejecuta el comando `git pull` para actualizarla. Por ejemplo, para actualizar la rama `master` ejecutaríamos los siguientes comandos:

```
git checkout master
git pull
```

`git pull` es equivalente a ejecutar los siguientes dos comandos (asumiendo que el remoto se llama `origin`):

```
git fetch origin
git merge origin/master
```

`git pull` es recomendable ejecutarlo únicamente si no se han creado nuevos commits localmente. La razón es que si hay commits diferentes en la rama remota y la local, se crearía un **merge commit**. Por esta razón, si hay nuevos commits localmente, es mejor rebasar la rama como veremos en la siguiente sección.

### Rebasando una rama local contra una rama remota

Si se han creado commits diferentes tanto en la rama local como en la rama remota es preferible rebasar la rama local contra la rama remota.

**Nota:** para aprender sobre rebasar ramas (localmente) te recomendamos referirte a la guía [Trabajando con ramas](ramas.md).

Por ejemplo, para rebasar una rama llamada `rama-1` (asumiendo que existe en el repositorio remoto) ejecutaríamos los siguientes comandos:

```
git checkout rama-1
git fetch origin
git rebase origin/rama-1
```

El primer comando nos ubica en `rama-1`. El segundo comando actualizaría la información del repositorio remoto (incluyendo nuevos commits que puedan existir en la rama remota). El tercer comando rebasa la rama contra la rama remota.

### Reemplazando una rama local

En ocasiones queremos que unarama local quede igual que una rama remota. Por ejemplo, si quisieramos que la rama `rama-1` quedara como la remota, ejecutaríamos los siguientes comandos:

```
git fetch origin
git reset --hard origin/rama-1
```

El comando `git reset` resetearía la rama en la que estamos actualmente ubicados y reemplazaría el historial con el que existe en la rama remota.

### Reemplazando una rama remota

En ocasiones queremos que una rama remote quede igual que la rama local (el caso inverso de la sección anterior). Por ejemplo, si queremos que la rama remota `rama-1` quede como la local, ejecutaríamos el siguiente comando:

```
git push -f <remoto> <rama>
```

Este comando es muy útil cuando hemos reescrito el historial de commits en nuestra rama local y queremos actualizar la rama remota. El push normal fallaría porque los commits no coincidirían.

**Nota:** Ten mucho cuidado con esta opción `-f`, puede que se pierdan cambios en la rama remota. Nunca lo utilices sobre `master` o sobre ramas en las que otras personas estén trabajando. En la mayoría de servicios como [Github](https://github.com) es posible proteger las ramas que no queremos que se puedan reemplazar.

### Resumen de los comandos

* `git clone <url>` - clona un repositorio.
* `git remote add <nombre> <url>` - configura un repositorio remoto.
* `git remote` - lista los repositorios remotos.
* `git push -u <remoto> <rama>` - sincroniza la rama con la remota por primera vez.
* `git push` - envía los nuevos commits a la rama remota.
* `git push -f <remoto> <rama>` - reemplaza la rama remota con el historial de la rama local.
* `git pull` - actualiza los commits de la rama remota.
* `git checkout <rama>` - descarga la rama del remoto si no existe localmente.
* `git fetch <remoto>` - actualiza la información del repositorio remoto.
* `git rebase <remoto>/<rama>` - rebasa la rama local contra la remota.
