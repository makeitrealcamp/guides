# Audio y Video

Antes de HTML5, un video o audio sólo se podía reproducir en un navegador utilizando un plugin (como flash).

HTML5 introduce las etiquetas `<video>` y `<audio>` que nos permiten reproducir video y audio respectivamente.

Con JavaScript podemos reproducir, pausar, detener, etc., el audio o el video.

## Audio

```html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
  Tu navegador no soporta el elemento de audio.
</audio>
```

La etiqueta `<audio>` crea el reproductor. La etiqueta `<source>` se utiliza para definir la fuente. Se pueden utilizar varias fuentes en diferentes formatos.

## Video
