# Peticiones HTTP con Axios

{% embed data="{\"url\":\"https://youtube.com/watch?v=kch6F2m0fkg?rel=0\",\"type\":\"video\",\"title\":\"\",\"icon\":{\"type\":\"icon\",\"url\":\"https://www.youtube.com/yts/img/favicon\_144-vfliLAfaB.png\",\"width\":144,\"height\":144,\"aspectRatio\":1},\"thumbnail\":{\"type\":\"thumbnail\",\"url\":\"https://i.ytimg.com/vi/kch6F2m0fkg/maxresdefault.jpg\",\"width\":1280,\"height\":720,\"aspectRatio\":0.5625},\"embed\":{\"type\":\"player\",\"url\":\"https://www.youtube.com/embed/kch6F2m0fkg?rel=0&showinfo=0\",\"html\":\"<div style=\\"left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.2493%;\\"><iframe src=\\"https://www.youtube.com/embed/kch6F2m0fkg?rel=0&amp;showinfo=0\\" style=\\"border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;\\" allowfullscreen scrolling=\\"no\\"></iframe></div>\",\"aspectRatio\":1.7778}}" %}

  
 React no incluye ninguna librería para hacer peticiones HTTP. Existen varias que podrías utilizar y en este capítulo vamos a hablar de una de las más populares: [Axios](https://github.com/axios/axios).

El primer paso para utilizar [Axios](https://github.com/axios/axios) en tu proyecto es instalarlo.

Con npm:

```text
$ npm install --save axios
```

Con Yarn:

```text
$ yarn add axios
```

Ahora debemos importarlo donde lo vayamos a utilizar:

```javascript
import axios from 'axios';
```

Y el último paso es utilizarlo de la siguiente forma:

```javascript
axios.get('http://localhost:3000/names')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

La documentación completa de Axios la encuentras en [este enlace](https://github.com/axios/axios).

