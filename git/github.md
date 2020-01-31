# Github

En la guía de [Repositorios remotos](repositorios-remotos.md) vimos cómo crear un repositorio en [Github](https://github.com/) y sincronizarlo con uno local. Ahora vamos a ver algunas funcionalidades adicionales de [Github](https://github.com/) para trabajar con otros colaboradores.

En [Github](https://github.com/) un repositorio puede ser público o privado. Un repositorio público es visible para cualquier persona mientras que un repositorio privado es visible únicamente para la persona (u organización) que lo creó y para los colaboradores que tengan acceso.

## El archivo `README.md`

Puedes crear un archivo llamado `README.md` en la carpeta raíz de tu proyecto y Github va a mostrar el contenido de ese archivo en la página principal del proyecto (debajo de la lista de archivos).

El archivo `README.md` se utiliza para escribir cualquier información que pueda ser útil para una persona que ve por primera vez el proyecto como la descripción, las instrucciones de instalación y de uso, una explicación de cómo contribuir, etc.

En el archivo `README.md` utiliza un formato llamado Markdown que nos permite darle estilo básico al contenido sin necesidad de escribir HTML. En [este enlace](https://guides.github.com/features/mastering-markdown/) vas a encontrar una guía de Markdown escrita por Github.

## Pull Requests

Un Pull Request (PR) es un mecanismo para solicitar, revisar y **discutir** los cambios que se van a integrar sobre una rama (generalmente `master`).

### Abriendo un Pull Request

Antes de abrir un Pull Request debemos subir una rama a un repositorio de Github. Por ejemplo, para subir una rama `bug-1` a un repositorio llamado `origin`, ejecutaríamos:

```
git push -u origin bug-1
```

Hay varias formas de abrir el Pull Request, todas se hacen desde la aplicaciónn Web de [Github](https://github.com/). Si subiste la rama recientemente y abres la página del proyecto aparecerá un mensaje para que abras el Pull Request como se muestra en la siguiente imagen:

De lo contrario, puedes hacer click sobre las ramas del proyecto en la parte superior como se muestra en la siguiente imagen para ver la lista de ramas:



Y hacer click sobre el botón "Open Pull Request" como se muestra en la siguiente imagen:



Independientemente de cómo abras el Pull Request, vas a ver la siguiente imagen que te mostrará los cambios y la opción de cambiar el título y la descripción:


Para terminar debes oprimir el botón "Open Pull Request".

### Comentando sobre el Pull Request

### Actualizando el Pull Request

### Integrando o rechazando el Pull Request

## Issues

## Forks
