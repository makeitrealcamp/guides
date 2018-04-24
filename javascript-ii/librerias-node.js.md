# Librerías \(Node.js\)

Las librerías son una parte fundamental de cualquier lenguaje de programación y nos permiten reutilizar código que otros desarrolladores han escrito y publicado.

A las librerías se les llama **paquetes** en [Node.js](https://nodejs.org/en/).

[Node.js](https://nodejs.org/en/) viene con un manejador de paquetes llamado [npm](https://www.npmjs.com/). Un manejador de paquetes nos permite descargar los paquetes que han creado otros desarrolladores y utilizarlos en nuestras propias aplicaciones. También nos permite crear y publicar nuestros propios paquetes.

Hace un par de años surgió un nuevo manejador de paquetes llamado [Yarn](https://yarnpkg.com/en/) que cada día toma más fuerza. Veamos cada uno en detalle.

## npm

[npm](https://www.npmjs.com/) es una aplicación para la línea de comandos que viene incluída en [Node.js](https://nodejs.org/en/), así que no es necesario instalar nada adicional.

### Instalando paquetes

Con [npm](https://www.npmjs.com/) puedes instalar un paquete en tu máquina de forma **local** \(en una carpeta\) o **global**, dependiendo de cómo lo vayas a usar.

Si vas a utilizar el paquete desde tu código debes instalarlo de forma **local**, en la misma carpeta de tu proyecto.

Si el paquete es una aplicación para la línea de comandos es mejor instalarlo de forma **global**, para que esté disponible desde cualquier ubicación de nuestro sistema.

#### Instalación local

Para instalar un paquete de forma **local** utiliza el comando `npm install` seguido del nombre del paquete. [npm](https://www.npmjs.com/) crea una carpeta llamada `node_modules` en la carpeta en la que estés ubicado\(a\), y ahí instala el paquete.

Por ejemplo, crea una carpeta llamada `npm-test` e instala el paquete [faker.js](https://github.com/marak/Faker.js/), que es una librería para generar datos ficticios ejecutando los siguientes comandos:

```text
$ mkdir npm-test
$ cd npm-test
$ npm install faker
```

Revisa que exista la carpeta `node_modules` y que dentro de esa carpeta exista una carpeta llamada `faker`. En un momento vamos a ver cómo utilizar este paquete desde tu código.

#### Instalación global

Instalar un paquete de forma **global** es similar a instalar uno **local**, la única diferencia es que se debe agregar la opción `-g` al comando `npm install`.

Por ejemplo, para instalar [learnyounode](https://github.com/workshopper/learnyounode), un paquete que te enseña Node.js, ejecuta el siguiente comando desde cualquier ubicación:

```text
$ npm install -g learnyounode
```

Ahora verifica que haya quedado bien instalado ejecutando:

```text
$ learnyounode
```

Ese comando lo puedes ejecutar desde cualquier ubicación de tu sistema.

### Usando un paquete en tu código

Para usar un paquete debes requerirlo con la función `require`. Por ejemplo, en la misma carpeta donde instalaste [faker.js](https://github.com/marak/Faker.js/), crea un archivo `index.js` con el siguiente código:

```javascript
var faker = require('faker');

var name = faker.name.findName();
console.log(name);
```

Ahora ejecútalo con el siguiente comando:

```text
$ node index.js
'Dane Effertz'
```

El resultado seguramente será diferente en tu caso.

Nuestra recomendación es que siempre consultes la documentación del paquete para ver cómo requerirlo y usarlo.

### package.json

La mejor forma de de manejar paquetes en un proyecto es crear un archivo llamado `package.json`.

`package.json` es un archivo con formato JSON dónde se definen los paquetes de los que depende nuestro proyecto \(con sus respectivas versiones\). De esa forma va a ser mucho más fácil para otros desarrolladores instalar esas dependencias.

El archivo `package.json` debe estar en la raíz de tu proyecto y debe tener, como mínimo, un nombre y una versión como se muestra a continuación:

```javascript
{
  "name": "mi-super-paquete",
  "version": "1.0.0"
}
```

El **nombre** debe ser una palabra en minúscula sin espacios, puedes utilizar guión \(`-`\) y raya al piso \(`_`\).

La **versión** debe ser de la forma **x.x.x** y debería seguir el [**versionamiento semántico**](https://docs.npmjs.com/getting-started/semantic-versioning), que define cuando incrementar cada uno de los números:

* El último número se incrementa cuando se corrigen bugs y se realizan cambios menores que no afectan funcionalidades existentes.
* El segundo número se incrementa cuando se introducen funcionalidades y cambios que no afectan las funcionalidades existentes.
* El primer número se incrementa cuando se introducen cambios que afectan funcionalidades existentes.

La forma más fácil de generar el archivo `package.json` para tu proyecto es utilizar el comando `npm init` que te va a guiar en la creación de un `package.json` mucho más completo con la descripción, el autor y la licencia de tu proyecto, entre otros.

### Agregando dependencias

Existen dos tipos de dependencias que puedes agregar al `package.json`:

* **dependencies**: paquetes que son requeridos durante la ejecución del programa.
* **devDependencies**: paquetes que se utilizan para desarrollo y pruebas.

Una forma de agregar dependencias a tu proyecto es agregándolas al archivo `package.json` directamente. Por ejemplo, si queremos agregar una dependencia de ejecución llamada `react` y otra de desarrollo llamada `faker` podemos hacerlo de la siguiente forma:

```javascript
{
  "name": "mi-super-paquete",
  "version": "1.0.0",
  "dependencies": {
    "react": "1.0.0"
  },
  "devDependencies" : {
    "faker": "3.1.0"
  }
}
```

Cada vez que modifiques manualmente el archivo `package.json` asegúrate de ejecutar el siguiente comando para que se instalen los paquetes que agregaste o cambiaste:

```text
$ npm install
```

Sin embargo, la forma más fácil de agregar una dependencia es utilizando `npm install` con la opción `--save` o `--save-dev`. Por ejemplo:

```text
$ npm install react --save
$ npm install faker --save-dev
```

Cuando descargues un proyecto que contenga un archivo `package.json` no olvides ejecutar `npm install` para descargar todas las dependencias.

La documentación completa de [npm](https://www.npmjs.com/) se encuentra en el siguiente enlace [https://docs.npmjs.com/](https://docs.npmjs.com/).

## Yarn

[Yarn](https://yarnpkg.com/en/) fue el producto de la colaboración entre Facebook y Google para crear un mejor manejador de paquetes que [npm](https://www.npmjs.com/).

El primer paso para utilizar [Yarn](https://yarnpkg.com/en/) es instalarlo en tu máquina. Ingresa a [este enlace](https://yarnpkg.com/en/docs/install) donde encontrarás las instrucciones para tu sistema operativo.

[Yarn](https://yarnpkg.com/en/) es compatible con [npm](https://www.npmjs.com/), así que puedes utilizar el mismo archivo `package.json`. Los comandos también son muy similares, la diferencia más importante es que en vez de `npm install` se utiliza `yarn add`.

Para inicializar un nuevo proyecto utiliza:

```text
$ yarn init
```

Para agregar una dependencia de ejecución de forma **local** utiliza:

```text
$ yarn add [paquete]
```

Para agregar una dependencia de desarrollo o pruebas de forma **local** utiliza:

```text
$ yarn add [paquete] --dev
```

Para instalar las dependencias de un proyecto \(cuando has hecho cambios al `package.json` o has descargado un nuevo proyecto\):

```text
$ yarn install
```

Para instalar un paquete de forma **global** utiliza:

```text
$ yarn global add [paquete]
```

La documentación completa de [Yarn](https://yarnpkg.com/en/) se encuentra en el siguiente enlace: [https://yarnpkg.com/en/docs](https://yarnpkg.com/en/docs).

