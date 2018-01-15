# Conceptos básicos

El desarrollo Web es uno de los campos más emocionantes de la actualidad. Surgió a principios de los años 90's gracias a la creación de la **WWW (World Wide Web)**.

El objetivo inicial de la **WWW** era crear una red de documentos interconectados por vínculos (principalmente documentos científicos).

Con la aparición de los navegadores gráficos (aplicaciones que nos permiten "navegar" por esta red de documentos) como Internet Explorer, Firefox y Chrome, la **WWW** se popularizó y hoy su alcance es mucho más amplio.

## Sitios Web vs Aplicaciones Web

Los **sitios Web** consisten únicamente de contenido *estático* mientras que las **aplicaciones Web** consisten también de contenido **dinámico**.

Hace algunos años los **sitios Web** eran sólo informativos y lo único que necesitabas aprender para construirlos era **HTML y CSS**.

**HTML** permite definir la estructura de una página Web mientras que **CSS** define la apariencia.

Por otro lado, para crear **aplicaciones Web** necesitas aprender al menos un **lenguaje de programación** en el servidor (p.e. PHP, Java, Ruby, Python, etc.) y generar el contenido (HTML) de forma dinámica, generalmente a partir de la información almacenada en una **base de datos**.

Sin embargo, hoy incluso los sitios Web más básicos tienen algúna forma de interacción y contenido dinámico, así que la diferencia entre sitios Web y apicaciones Web es cada vez más borrosa.

## ¿Qué hace un desarrollador Web?

Un **desarrollador Web** se encarga de los aspectos técnicos de un sitio o de una aplicación Web. A diferencia del **diseñador Web**, que se encarga de la apariencia visual y la distribución de los elementos, el **desarrollador Web** convierte un diseño estático (una imagen) en una aplicación completamente funcional disponible en Internet. Existen varios roles en el desarrollo Web. Un **desarrollador Web** puede suplir uno o varios de estos roles al mismo tiempo.

### Front-end

El front-end es la persona que se encarga de convertir un diseño (una imagen) en código que entiendan los navegadores usando HTML, CSS, y JavaScript. Este es quizá el rol con más demanda en la actualidad y el que más rápido está evolucionando. La razón es que las empresas buscan que sus sitios y aplicaciones se adapten a diferentes pantallas, tengan animaciones, se actualicen sin necesidad de refrescar la página, reaccionen rápidamente al usuario, etc. Muchas funcionalidades que antes se hacían en el servidor (por el back-end) ahora se hacen en el navegador y son responsabilidad del front-end.

### Back-end

El back-end se encarga de conectar la aplicación con la base de datos y otros servicios externos. Suena fácil pero tiene varias implicaciones: autenticación y autorización de usuarios, lectura y escritura de información de la base de datos, envío de correos automatizados, tareas recurrentes y API's, entre otros.

### Operaciones

Se encarga de desplegar la aplicación en Internet y brindar soporte a los usuarios. Es la persona que maneja los servidores, hace copias de seguridad de la base de datos y en general está atento al correcto funcionamiento de la aplicación en producción.

A los desarrolladores que hacen todos los roles se les conoce como Full Stack Developers. Aunque todavía hay mucha demanda por Full Stack Developers, la tendencia es a la especialización.

Independientemente si deseas especializarte en alguno de estos roles, nuestra recomendación es que igual aprendas un poco de cada uno.

## Computadores

Antes un computador era una persona que realizaba cálculos matemáticos por un salario. Eso cambio con la llegada de los primeros computadores electrónicos.

Aunque los primeros computadores fueron de uso específico, a principios de los años 50's se desarrolló el primer computador "programable".

Las partes más importantes de un computador son:

* **CPU (Central Processing Unit)**: es el cerebro del computador, es el que se encarga de ejecutar todas las operaciones lógicas, aritméticas y de interactuar con los demás dispositivos (teclado, pantalla, etc.)

* **Memoria RAM**: es la memoria temporal que utilizan los programas cuando se están ejecutando. Cuando un programa termina o el computador se apaga, la información almacenada en esta memoria desaparece.

* **Disco duro**: es la memoria que sobrevive después de salir de un programa o apagar el computador.

* **Dispositivos de Entrada y Salida (E/S)**: el teclado, la pantalla, una impresora, incluso el disco duro es un dispositivo de entrada y/o salida.

El CPU, la memoria RAM y los dispositivos de E/S se les conoce como **hardware**, son los componentes físicos del computador.

**Software** es el código que es ejecutado y hace uso del hardware para hacer todo tipo de cosas interesantes como mostrarte videos en la pantalla, interpretar las teclas que estás oprimiendo al crear un documento de texto y darte indicaciones cuando manejas, entre muchos otros.

## Sistema binario

El **sistema decimal** utiliza 10 dígitos en cada posición (0 a 9). Este es el sistema al que estamos acostumbrados.

El **sistema binario**, por el contrario, sólo utiliza dos dígitos en cada posición (0 y 1).

Los computadores reconocen dos estados y por eso utilizamos el sistema binario para representarlos. A cada posición (0 o 1) se le conoce como un **bit** (binary digit).

Cualquier número decimal se puede convertir a número binario y viceversa. Veamos cómo se representan los primeros diez números del sistema decimal en el sistema binario:

| Decimal | Binario    |
|---------|------------|
| 0       | 0          |
| 1       | 1          |
| 2       | 10         |
| 3       | 11         |
| 4       | 100        |
| 5       | 101        |
| 6       | 110        |
| 7       | 111        |
| 8       | 1000       |
| 9       | 1001       |

Para representar el 0 y el 1 del sistema decimal solo necesitamos un **bit**, pero para representar el 9 decimal necesitamos 4 **bits**.

Los computadores entienden información en grupos de 8 **bits**. A cada grupo de 8 **bits** se le conoce como un **byte**.

## Código

Código son una "serie de instrucciones" que son ejecutadas por el procesador.

Antes el código se almacenaba en tarjetas perforadas pero hoy utilizamos **sistemas operativos** que nos permiten crear archivos de texto y escribir el código utilizando **lenguajes de programación**.

## Sistema operativo

El sistema operativo es un software que nos facilita la vida al momento de trabajar en un computador. Por ejemplo, el sistema operativo nos permite crear carpetas y archivos en vez de tener que manipular la memoria directamente.

El sistema operativo también se encarga de asignarle memoria RAM a cada programa y controlar el uso del CPU.

Por último, el sistema operativo es un intermediario entre los programas y los dispositivos de entrada y salida (teclado, pantalla, etc.).

## Lenguajes de programación

El procesador solo entiende **lenguaje de máquina**, que son las instrucciones en código binario.

Los lenguajes de programación nos permite escribir instrucciones en texto que después son traducidas a **lenguaje de máquina**.

Existen lenguajes de programación de alto y bajo nivel.

### Lenguaje ensamblador

El lenguaje de más bajo nivel se llama el **lenguaje ensamblador**, en donde cada instrucción se traduce a su versión en **lenguaje de máquina**.

Escribir código en **lenguaje ensamblador** es lo equivalente a almorzar con un palillo: es extremadamente lento, repetitivo y sujeto a errores.

### Lenguajes de alto nivel

Los lenguajes de alto nivel son mucho más fáciles de aprender, entender y son mucho más concisos que el **lenguaje ensamblador**. Generalmente una línea en un lenguaje de alto nivel se convierte en varias instrucciones en **lenguaje de máquina**.

Los lenguajes de programación necesitan ser traducidos a **lenguaje de máquina**. Algunos lenguajes son **compilados**, otros son **interpretados**.

En los lenguajes **compilados** se debe ejecutar una aplicación que genera otro archivo con el código en **lenguaje de máquina**. Ejemplos de lenguajes compilados incluyen C, C++ y Java, entre otros.

Los lenguajes **interpretados** son traducidos a **lenguaje de máquina** a medida que son ejecutados. Ejemplos de lenguajes interpretados incluyen Ruby y Python, entre otros.

## Recursos adicionales

* [La era de la información digital](https://blog.makeitreal.camp/la-era-de-la-informacion-digital/) - Blog de Make it Real.
* [Aprende a leer código binario](https://blog.makeitreal.camp/aprende-a-leer-en-codigo-binario/) - Blog de Make it Real.
* [¿Qué es código?](https://blog.makeitreal.camp/que-es-codigo/) - Blog de Make it Real.
