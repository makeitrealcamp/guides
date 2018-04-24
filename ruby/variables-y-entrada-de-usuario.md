# Variables y entrada de usuario

Las variables nos permiten almacenar información temporal que podemos usar más adelante en nuestros programas.

Crea un archivo llamado `variables.rb` y agrega lo siguiente:

```ruby
name = "Germán" # cámbialo por tu nombre
puts "Hola #{name}"
```

Ejecúta el archivo y verifica que el resultado sea el correcto:

```text
$ ruby variables.rb
Hola Germán
```

En este ejemplo estamos definiendo una variable con nombre `name` y le asignamos el valor `"Germán"` \(o el valor que le hayas asignado\). En la siguiente línea estamos utilizando interpolación para mostrar la cadena de texto `"Hola "` seguido del valor que tenga en ese momento la variable `name`.

El nombre de una variable debe comenzar con `$`, `_` o una letra, y después puede contener letras, dígitos, `_` y `$`. Ejemplos de nombres válidos de variables incluyen `name`, `$element` y `_trains`.

Por otro lado, ejemplos de nombres no válidos incluyen `443german`, porque no puede empezar con un número, y `element&123`, porque el caracter `&` no es válido en el nombre.

Las [palabras reservadas de Ruby](http://www.studytonight.com/ruby/reserved-keywords-in-ruby) no se pueden usar como nombres de variables.

Como buena práctica se recomienda empezar las variables con una letra en minúscula y, si el nombre se compone de varias palabras, separarlas con raya al piso \(`_`\). Por ejemplo `video_transcoder` o `first_name`.

## La utilidad de las variables

Crea ahora un archivo llamado `square.rb` y agrega el siguiente código:

```ruby
puts "El perímetro de un cuadrado de lado 5 es #{5 * 4}"
puts "El área de un cuadrado de lado 5 es #{5 * 5}"
```

Si lo ejecutamos te debería aparecer lo siguiente:

```text
$ ruby square.rb
El perímetro de un cuadrado de lado 5 es 20
El área de un cuadrado de lado 5 es 25
```

El problema con este código es que si quisiéramos calcular el perímetro y el área de un cuadrado de lado 10, o 20, tendríamos que modificar ese valor en varias partes del código. Podemos mejorarlo utilizando una variable:

```ruby
side = 5

puts "El perímetro de un cuadrado de lado #{side} es #{side * 4}"
puts "El área de un cuadrado de lado #{side} es #{side * side}"
```

Si ejecutas el código te debería dar el mismo resultado. La ventaja es que si quieres calcular el perímetro y el área de un cuadrado con otro tamaño solo debes cambiar el valor de la variable. Intenta con 18 \(te debería dar 72 de perímetro y 324 de área\) y después con 39.

## ¿Dónde y cuánto vive una variable?

Las variables se almacenan en en una memoria especial del computador llamada **memoria RAM** y viven durante la ejecución del programa, es decir, desde el momento en que la defines hasta que tu programa termina de ejecutarse. Si abres IRB y defines una variable, esta vive hasta que cierres esa sesión de IRB.

La **memoria RAM** es una memoría de rápido acceso que está disponible mientras tu computador está encendido. El sistema operativo se encarga de administrar la memoria RAM y asignarle una porción a cada programa que se está ejecutando. Cuando el programa termina, el sistema operativo reclama esa memoria y "destruye" todas las variables que ese programa haya creado.

**Nota:** Más adelante, cuando hablemos sobre métodos, aprenderemos que las variables tienen un **alcance** y no todas las variables sobreviven hasta que termina el programa.

## Entrada del usuario

A través de la consola es posible pedirle al usuario que ingrese uno o varios valores que podemos utilizar en nuestros programas. Para esto crea un archivo llamado `input.rb` y agrega lo siguiente:

```ruby
print "Ingresa tu nombre: "
name = gets.chomp
puts "Hola #{name}"
```

Al ejecutarlo, el programa te debería pedir que ingreses tu nombre y te debería saludar:

```text
$ ruby input.rb
Ingresa tu nombre: Germán
Hola Germán
```

Lo más importante de este código es la línea `name = gets.chomp` que le pide información al usuario y la almacena en la variable `name`.

Con este conocimiento podemos mejorar el programa que calcula el perímetro y el área de un cuadrado:

```ruby
print "Ingresa la longitud del lado del cuadrado: "
side = gets.chomp

puts "El perímetro de un cuadrado de lado #{side} es #{side * 4}"
puts "El área de un cuadrado de lado #{side} es #{side * side}"
```

Si ejecutas este código te debería aparecer lo siguiente:

```text
$ ruby square.rb
Ingresa la longitud del lado del cuadrado: 5
El perímetro de un cuadrado de lado 5 es 5555
square.rb:5:in ''*': no implicit conversion of String into Integer (TypeError)
    from square.rb:5:in `<main>'
```

Tenemos dos problemas. El primero es que está calculando mal el perímetro del cuadrado \(5555 en vez de 20\). El otro es que sale un error diciendo que no se puede hacer una conversión implícita de una cadena de texto a un número \(entero\). La razón es que cuando capturamos la información del usuario Ruby asume que es una cadena de texto, así que tenemos que hacer un cambio en nuestro código para que funcione:

```ruby
print "Ingresa la longitud del lado del cuadrado: "
side = gets.chomp.to_i

puts "El perímetro de un cuadrado de lado #{side} es #{side * 4}"
puts "El área de un cuadrado de lado #{side} es #{side * side}"
```

¿Notas el cambio? En la segunda línea le agregamos `.to_i` al final para convertir lo que ingrese el usuario a un número \(integer\). Ahora, si probamos nuevamente debería funcionar:

```text
$ ruby square.rb
Ingresa la longitud del lado del cuadrado: 5
El perímetro de un cuadrado de lado 5 es 20
El área de un cuadrado de lado 5 es 25
```

