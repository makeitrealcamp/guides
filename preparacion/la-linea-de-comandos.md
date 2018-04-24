# La línea de comandos

![La l&#xED;nea de comandos](https://blog.makeitreal.camp/assets/images/cli.jpg)

La **línea de comandos** \(también conocida como consola, terminal o símbolo del sistema\) era la única forma de interactuar con un computador antes que aparecieran las interfaces gráficas.

La **línea de comandos** es una aplicación en la que puedes escribir y ejecutar comandos para realizar tareas como:

* Navegar por las carpetas de tu computador.
* Manipular archivos \(crear, editar, copiar, mover y eliminar\).
* Conectarte a servidores remotos.
* Crear **scripts** que te ayuden con tus tareas diarias.

Y mucho más!

## Abriendo la línea de comandos

En Windows busca una aplicación que se llama **PowerShell**.

En Mac utiliza el spotlight \(la lupa en la parte superior derecha de la pantalla\) y busca **Terminal**.

En Linux depende de la distribución que estés utilizando. En Ubuntu, por ejemplo, utiliza el ícono de Ubuntu en la parte superior izquierda y busca **Terminal**.

**Nota:** Windows viene con una **línea de comandos** llamada **Símbolo del Sistema** pero es preferible **PowerShell** porque los comandos son iguales a los de Linux y Mac.

## El prompt

Cuando abres la **línea de comandos** lo primero que ves es el `prompt`, que es lo que va antes del cursor sobre la línea en la que puedes empezar a escribir.

Por ejemplo, en la **Terminal** de Linux el `prompt` se ve generalmente así:

```text
germanescobar@makeitreal:~$
```

En el **PowerShell** de Windows primero aparecen unas líneas de "bienvenida" antes de mostrar el `prompt`:

```text
Windows PowerShell
Copyright (C) 2015 Microsoft Corporation. All rights reserved.

PS C:\Users\germanescobar>
```

El `prompt` también puede variar dependiendo de la **línea de comandos** que utilices y la configuración.

Veamos algunos de los comandos que ya vienen en tu sistema operativo y que puedes utilizar para navegar por las carpetas y manipular archivos:

## Primer comando: la ubicación actual

En la **línea de comandos** siempre vas a estar ubicado\(a\) sobre una ruta \(carpeta\) de tu sistema.

Para conocer la ruta actual puedes escribir el comando `pwd` y oprimir `Enter`.

**Nota:** No olvides el `Enter` al final de cada comando para ejecutarlo!

Por ejemplo, en mi **línea de comandos** \(la que ves en la imagen arriba\) se ve así:

```text
Last login: Wed Feb 24 20:10:39 on ttys001
~$ pwd
/Users/germanescobar
~$
```

Cada vez que escribes un comando aparece el resultado debajo y nuevamente el `prompt`.

**Nota:** De ahora en adelante vamos a representar el `prompt` con el símbolo `$`. Ese símbolo **no** lo tienes que escribir en tu **línea de comandos**.

## Listando carpetas y archivos

Para listar las carpetas y los archivos de la ubicación actual vas a utilizar el comando `ls`:

```text
$ ls
```

La forma en que este comando muestra los resultados varía dependiendo de la **línea de comandos** y la configuración. Por ejemplo, en **PowerShell** se ve así generalmente:

```text
Windows PowerShell
Copyright (C) 2015 Microsoft Corporation. All rights reserved.

PS C:\Users\germanescobar>ls

    Directorio: C:\Users\germanescobar

Mode             LastWriteTime    Length Name
----             -------------    ------ ----
d-r--    24/02/2017  1:32 a.m.           Contacts
d-r--    24/02/2017  1:32 a.m.           Desktop
d-r--    24/02/2017  1:32 a.m.           Documents
d-r--    24/02/2017  1:32 a.m.           Downloads
d-r--    24/02/2017  1:32 a.m.           Favorites
d-r--    24/02/2017  1:32 a.m.           Music
d-r--    24/02/2017  1:32 a.m.           Pictures
d-r--    24/02/2017  1:32 a.m.           Videos
```

## Cambiando de ubicación

Para cambiar de carpeta en la **línea de comandos** utilizas el comando `cd` seguido de la ruta de la carpeta. Por ejemplo, si quieres ir a la carpeta raíz de tu sistema debes escribir:

```text
$ cd /
```

### Rutas relativas y absolutas

Para las rutas de las carpetas puedes utilizar rutas relativas o absolutas.

Una **ruta relativa** toma como referencia la carpeta actual.

Una **ruta absoluta** inicia con `/` y se refiere a la ruta completa desde la carpeta raíz de tu sistema.

Por ejemplo, si nos encontramos en la carpeta `/Users/germanescobar`, la **ruta relativa** `Projects/images` se refiere a la **ruta absoluta** `/Users/germanescobar/Projects/images`.

### La carpeta del usuario

Cuando ingresas a la **línea de comandos** te vas a encontrar en la carpeta raíz de tu usuario \(generalmente en `/Users/tu_nombre_de_usuario`\).

Puedes volver a esta carpeta en cualquier momento utilizando el comando:

```text
$ cd ~
```

Ese caracter `~` es díficil de encontrar en el teclado a veces. Si no lo encuentras pide ayuda!

### La carpeta padre

Existen dos nombres de carpeta especiales que se utilizan para referirse a la carpeta actual y a la carpeta padre.:

* `.` se refiere a la carpeta actual
* `..` se refiere a la carpeta padre.

Por ejemplo, si nos encontramos en la ruta `/Users/germanescobar/Projects` y ejecutamos:

```text
$ cd ..
```

La nueva ubicación será `/Users/germanescobar`.

Puedes utilizar `..` en tus **rutas relativas**. Por ejemplo, si te encuentras en una carpeta `images` y quieres ir a una carpeta `fonts` que está al lado de `images` puedes ejecutar:

```text
$ cd ../fonts
```

Esa ruta `../fonts` lo que está diciendo es: vaya a la carpeta padre y después ingrese a la carpeta `fonts`.

## Creando una carpeta

Para crear una carpeta utiliza el comando `mkdir` seguido del nombre de la carpeta que quieres crear en la ubicación actual. Por ejemplo:

```text
$ mkdir Projects
```

El último comando crea la carpeta `Projects` dentro de la ubicación actual. Sin embargo, `mkdir`** no te cambia de ubicación automáticamente**. Para eso debes ejecutar:

```text
$ cd Projects
```

Nuestra recomendación es que crees esa carpeta `Projects` dentro de la raíz de tu usuario para todos tus proyectos.

## Abriendo archivos y carpetas en Atom

**Atom** viene con una aplicación de la **línea de comandos** llamada `atom`. Puedes utilizar ese comando para abrir un archivo o una carpeta en **Atom**.

Por ejemplo, el siguiente comando abre el archivo `archivo1.txt`:

```text
$ atom archivo1.txt
```

Para abrir la carpeta actual:

```text
$ atom .
```

## Eliminando archivos y carpetas

Para eliminar un archivo utiliza el comando `rm` seguido de la ruta \(relativa o absoluta\) al archivo que quieras eliminar. Por ejemplo, el siguiente comando elimina el archivo `archivo1.txt` en `/Users/germanescobar/Desktop`

```text
$ rm /Users/germanescobar/Desktop/archivo1.txt
```

Para eliminar una carpeta utiliza el comando `rm -r` seguido de la ruta \(relativa o absoluta\) de la carpeta que quieres eliminar:

```text
$ rm -r /Users/germanescobar/Desktop/mi-carpeta
```

## Moviendo archivos y carpetas

Para mover un archivo de ubicación utiliza el comando `mv` seguido del nombre del archivo y la ubicación donde lo quieres mover \(separándolos por espacio\).

Por ejemplo, el siguiente comando movería el archivo `archivo1.txt` a la carpeta `mi-carpeta` en la ruta actual:

```text
$ mv archivo1.txt mi-carpeta
```

Mover una carpeta es muy parecido a mover un archivo, utiliza el comando `mv` seguido del nombre de la carpeta que quieres mover y la carpeta destino.

Por ejemplo, el siguiente comando movería la carpeta `mi-carpeta` a la carpeta `otra-carpeta` en la misma ubicación:

```text
$ mv mi-carpeta otra-carpeta
```

## Copiando archivos y carpetas

Para copiar un archivo a otra ubicación utiliza el comando `cp` seguido del nombre del archivo y la ubicación a la que quieres copiar el archivo.

Por ejemplo, asumiendo que `archivo1.txt` y `mi-carpeta` existen en la ubicación actual puedes utilizar el siguiente comando para copiar `archivo1.txt` a `mi-carpeta`:

```text
$ cp archivo1.txt mi-carpeta
```

Para copiar una carpeta a otra ubicación utiliza el comando `cp -r` seguido del nombre de la carpeta que quieres mover y la ruta a donde la quieres mover.

Por ejemplo, el siguiente comando **copia** la carpeta `mi-carpeta` a la carpeta `otra-carpeta` en la misma ubicación:

```text
$ cp -r mi-carpeta otra-carpeta
```

## Trucos y consejos

Si oprimes la flecha arriba `↑` te van a aparecer los últimos comandos que has ingresado. Muy útil para repetir un comando que ya has ingresado. Si te pasas te puedes devolver con la flecha hacia abajo:

Puedes autocompletar las rutas ingresando las primeras letras y oprimiendo la tecla `tab`. Ahorra mucho tiempo!

