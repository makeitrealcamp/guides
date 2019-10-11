# Canvas

**Canvas** es una etiqueta de **HTML5** que nos permite trabajar con animaciones avanzadas, dibujar elementos, crear juegos, entre otros.

**Canvas** es un plano cartesiano invertido donde la esquina superior izquierda es el punto (0,0). Si nos movemos hacia la derecha aumentamos nuestra posición en el eje horizontal o eje X y si nos movemos hacia abajo aumentamos nuestra posición en el eje vertical o eje Y.

Es importante conocer cómo funciona este sistema de coordenadas ya que por medio de este posicionaremos todos nuestros elementos dentro del **canvas**. Dibujar una linea entre en punto A y un punto B, dibujar un cuadro de 100px por 100px en las coordenadas definidas, pintar una imagen en las coordenadas (100, 100), son solo el principio de lo que podemos lograr con **canvas**.

Todas las interacciones que vayamos a tener con nuestro **canvas** se deben realizar a través de un lenguaje de scripting. En este caso vamos a utilizar JavaScript.

## Primeros pasos

Para empezar a trabajar con el API de **canvas**, primero debemos crear el elemento en nuestro HTML, luego lo seleccionamos con nuestro JavaScript, y por último obtenemos el **contexto** sobre el cual vamos a trabajar.

Cabe resaltar que si queremos cambiar el tamaño del canvas lo debemos hacer a través de las propiedades **width** y **height** de la etiqueta `<canvas>` y no usando CSS. De la primera manera definimos la resolución actual del **canvas**, de la segunda manera el contenido del **canvas** se estira o encoge para coincidir con el espacio definido.

## El contexto

El **contexto** es el plano sobre el cual vamos a trabajar, este puede ser 2D, 3D usando WebGL, o un renderizado de Bitmap.

El **contexto** lo obtenemos utilizando el método `getContext()` sobre nuestro elemento **canvas**. Este método recibe como argumento el contexto sobre el cual vamos a trabajar. Ejemplo: 2d, webgl, bitmaprenderer.

## Algunos ejemplos

En este primer ejemplo veamos dos opciones para dibujar un cuadrado en nuestro **canvas**. En la primera opción vamos a construir un cuadrado utilizando 4 lineas individuales, y en la segunda opción usamos el método `rect()` del API de **canvas**.

{% embed url="https://codepen.io/simonhoyos/pen/yLLYrpw" %}

En este segundo ejemplo vamos a usar `arc()`, el API para dibujar círculos; lineas; y traslaciones, y rotaciones para dibujar un Pacman.

{% embed url="https://codepen.io/simonhoyos/pen/BaaoeQM" %}

Algo a resaltar de este ejemplo es cómo manejamos los estilos dentro del canvas. Colores, tamaño, y demás, lo manejamos desde nuestro JavaScript y no desde el CSS como lo hemos venido haciendo hasta ahora.

En este último ejemplo veremos cómo podemos usar **canvas** para crear animaciones.

{% embed url="https://codepen.io/simonhoyos/pen/dyyYxVp" %}
