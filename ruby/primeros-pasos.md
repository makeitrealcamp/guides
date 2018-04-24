# Primeros pasos

Para verificar si tienes Ruby instalado abre una línea de comandos y ejecuta `ruby -v`. Si ya lo tienes te va a aparecer una línea similar a la siguiente:

```text
$ ruby -v
ruby 2.3.0p0 (2015-12-25 revision 53290) [x86_64-darwin13]
```

La versión puede ser diferente, cualquier versión mayor a 2.1.0 está bien.

Si ves un mensaje diciendo que el comando no fue encontrado, significa que aún no tienes Ruby instalado. Puedes encontrar las instrucciones para instalarlo en el siguiente enlace: [https://github.com/makeitrealcamp/ruby-installation](https://github.com/makeitrealcamp/ruby-installation).

Una vez que tengas instalado [Ruby](https://ruby-lang.org/) y lo hayas verificado, continúa. En las siguientes secciones vamos a ver cómo ejecutar código Ruby en el interpretador y desde un archivo.

## IRB

Existen dos formas de ejecutar código Ruby. La primera es abrir el interpretador de Ruby ejecutando el comando IRB.

```text
$ irb
2.3.0 :001 >
```

El interpretador nos permite escribir cualquier expresión válida de Ruby y oprimir `Enter`. El interpretador evalúa la expresión y debajo muestra el resultado:

```text
$ irb
2.3.0 :001 > 1 + 2
  => 3
2.3.0 :002 >
```

Puedes repetir ese mismo proceso las veces que quieras. Esa es una forma muy rápida de probar código. Para salir escribe `exit` y oprime `Enter`.

## Nuestro primer programa

La otra forma de ejecutar código Ruby es crear un archivo con extensión `rb` en el que escribimos nuestro código. Para eso crea una carpeta en tu máquina y úbicate sobre ella en la consola. Ábrela con tu editor preferido.

Crea un archivo llamado `hello_world.rb` \(los archivos de Ruby terminan con la extensión `rb` y se recomienda nombrar el archivo todo en minúscula separando las palabras con raya al piso\). En el archivo escribe lo siguiente:

```ruby
puts "Hola mundo"
```

Guárdalo. Para ejecutarlo escribe lo siguiente en la consola \(asegúrate de estar sobre la carpeta donde está el archivo\):

```text
$ ruby hello_world.rb
Hola mundo
```

Deberías ver la cadena de texto "Hola mundo" en la consola. Cambia el texto por cualquier otro y vuelve a ejecutar el archivo.

¡Felicitaciones, has creado tu primer programa en Ruby!

## Errores

Veamos ahora qué pasa si cometemos algún error en nuestro código. Por ejemplo, borra el caracter `u` de la palabra `puts`:

```text
pts "Hola Mundo"
```

Vuelve a ejecutar el archivo con `ruby hello_world.rb`. Te debería aparecer el siguiente mensaje de error:

```text
$ ruby hello_world.rb
hello_world.rb:1:in `<main>`: undefined method `pts` for main:Object (NoMethodError)
Did you mean? puts
```

El mensaje nos dice que el error ocurrió en el archivo `hello_world.rb` en la línea `1`, y que no se encuentra el método `pts`. Además nos da una sugerencia \(correcta en este caso\) preguntándonos si nos estábamos refiriendo al método `puts`.

Hay veces que es fácil encontrar los errores, otras veces no es tan fácil. Lo que si es cierto es que a medida que vayas trabajando con el lenguaje vas a ir desarrollando una intuición que te va a permitir solucionar los errores más fácilmente, pero al principio es un proceso lento que es parte de ese aprendizaje.

Cometamos otro error intencionalmente para ver un mensaje diferente. Vuelve a escribir `puts` correctamente, pero ahora borra la comilla al final de esa línea:

```text
puts "Hola Mundo
```

Vuelve a ejecutar el archivo. Debería salir un mensaje como el siguiente:

```text
$ ruby hello_world.rb
hello_world.rb:1: unterminated string meets end of file
```

Esta vez nos dice que hay una cadena de texto que no está terminada y se encuentra con el final del archivo, o se alarga hasta el final del archivo.

## Comentarios

Los comentarios se utilizan para documentar o aclarar nuestro código. Para agregar un comentario se utiliza el caracter `#`:

```ruby
# este es un comentario
puts "Hola mundo"
puts "Esto está muy bacano" # este es otro comentario
```

## Dos formas de imprimir

En Ruby existen dos formas de imprimir en la consola: `puts` y `print`.

La diferencia es que `puts` agrega un **salto de línea** al final, `print` no.

En Ruby \(y en otros lenguajes de programación\) el **salto de línea** se representa con `\n`.

Por ejemplo, las dos siguientes líneas son equivalentes:

```ruby
puts "Hola Mundo"
print "Hola Mundo\n"
```

