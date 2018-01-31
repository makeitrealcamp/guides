# Peticiones HTTP con Axios

{% youtube %} https://youtube.com/watch?v=kch6F2m0fkg?rel=0 {% endyoutube %}

<br>
React no incluye ninguna librería para hacer peticiones HTTP. Existen varias que podrías utilizar y en este capítulo vamos a hablar de una de las más populares: [Axios](https://github.com/axios/axios).

El primer paso para utilizar [Axios](https://github.com/axios/axios) en tu proyecto es instalarlo.

Con npm:

```shell
$ npm install --save axios
```

Con Yarn:

```shell
$ yarn add axios
```

Ahora debemos importarlo donde lo vayamos a utilizar:

```js
import axios from 'axios';
```

Y el último paso es utilizarlo de la siguiente forma:

```js
axios.get('http://localhost:3000/names')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

La documentación completa de Axios la encuentras en [este enlace](https://github.com/axios/axios).
