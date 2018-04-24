# Tipos y operadores

En este capítulo vamos a hablar sobre cadenas de texto, números y booleanos \(verdadero o falso\), que son algunos de los tipos de datos en Ruby, y cómo realizar operaciones básicas con ellos.

## Cadenas de texto

Una cadena de texto es un conjunto de caracteres encerrados entre comillas simples \(`'`\) o dobles \(`"`\). Por ejemplo:

```ruby
"Texto entre comillas dobles"
'Texto entre comillas simples'
```

## Números

Los números en Ruby funcionan muy similar a como funcionan en otros lenguajes de programación y puedes realizar las operaciones normales sobre ellos como sumas, restas, etc. Por ejemplo:

```ruby
puts 1 + 2
puts 3 * 4 + 5
puts 8 / 2
```

## Expresiones booleanas

En Ruby se utilizan las expresiones `true` y `false` para representar verdadero y falso respectivamente.

Los operadores lógicos `<`, `>`, `<=`, `>=`, `==`, `!=` se utilizan para crear expresiones que evalúan a un valor booleano `true` o `false`.

```text
$ irb
> 5 > 3
 => true
> 5 >= 3
 => true
> 4 < 4
 => false
> 4 <= 4
 => true
> 2 == 2
 => true
> 2 != 2
 => false
> "ruby" == "javascript"
 => false
> "ruby" != "javascript"
 => true
```

## Concatenando cadenas

Es posible unir cadenas de texto con el operador `+`. Por ejemplo, abre IRB y ejecuta lo siguiente:

```ruby
"Hola" + "Mundo" + "Cómo" + "Estás"
```

Deberías ver algo como esto:

```text
$ irb
> "Hola" + "Mundo" + "Cómo" + "Estás"
 => "HolaMundoCómoEstás"
```

Fíjate que las palabras no se separan con espacio automáticamente, tenemos que agregar los espacios explícitamente:

```text
$ irb
> "Hola " + "Mundo " + "Cómo " + "Estás"
 => "Hola Mundo Cómo Estás"
```

### Concatenando valores de diferentes tipos

Si intentas concatenar una cadena con un número vas a ver el siguiente error:

```text
$ irb
> "Hola" + 3
TypeError: no implicit conversion of Fixnum into String
    from (irb):1:in `+'
    from (irb):1
    from /Users/germanescobar/.rvm/rubies/ruby-2.3.0/bin/irb:11:in `<main>'
```

El error nos dice que no es posible convertir un `Fixnum` \(un número\) a un `String` \(a una cadena de texto\). Una solución a este problema es convertir explícitamente el número a una cadena añadiendo `.to_s` a la derecha del número:

```text
$ irb
> "Hola" + 3.to_s
 => "Hola3"
```

Ahora intenta lo siguiente, queremos que imprima `"2 + 3 es 5"`:

```text
$ irb
> "2 + 3 es " + 2 + 3
TypeError: no implicit conversion of Fixnum into String
    from (irb):6:in `+'
    from (irb):6
    from /Users/germanescobar/.rvm/rubies/ruby-2.3.0/bin/irb:11:in `<main>'
```

¿Qué pasa si le añadimos `.to_s` a cada número? Veamos:

```text
$ irb
> "2 + 3 es " + 2.to_s + 3.to_s
 => "2 + 3 es 23"
```

No es el resultado que esperábamos. Lo que hizo Ruby fue concatenar la cadena `"2 + 3 es "` con las cadenas `"2"` y `"3"`.

Una solución es envolver la suma entre paréntesis y agregarle `.to_s`:

```text
$ irb
> "2 + 3 es " + (2 + 3).to_s
 => "2 + 3 es 5"
```

Pero estar convirtiendo los tipos a cadena de texto con `.to_s` es muy engorroso. Ruby nos ofrece una mejor solución, la interpolación:

## Interpolación

La interpolación es la forma recomendada de concatenar cadenas en Ruby. Abre IRB e intenta lo siguiente:

```text
$ irb
> "Hola #{4}"
 => "Hola 4"
```

La interpolación nos permite ejecutar código Ruby dentro de una cadena de texto, convertir el resultado a una cadena de texto y reemplazarlo en donde se definió. Por ejemplo:

```text
$ irb
> "2 + 3 es #{2 + 3}"
 => "2 + 3 es 5"
```

Para usar interpolación ten en cuenta lo siguiente:

* Debes usar comillas dobles \(`"`\) en vez de sencillas \(`'`\). Si utilizas comillas sencillas Ruby ignora la interpolación:

  ```text
  $ irb
  > '2 + 3 es #{2 + 3}'
   => "2 + 3 es #{2 + 3}"
  ```

* La sintaxis de la interpolación es `#{}`. Ruby evalúa lo que esté entre los corchetes y lo convierte en cadena de texto.
* Puedes usar `#{}` las veces que quieras dentro de una cadena.

