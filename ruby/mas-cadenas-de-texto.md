# Más cadenas de texto

Las cadenas de texto \(strings\) son uno de los tipos de datos más importantes en la programación. En muchas formas se comportan similar a los arreglos \(piensa en una cadena de texto como un arreglo de caracteres\), y a veces es útil convertir de cadenas de texto a arreglos y viceversa. En este capítulo veremos todas las cosas interesantes que podemos hacer con cadenas de texto.

Empecemos creando un archivo llamado `strings.rb` y veamos primero como obtener la longitud de la cadena:

```ruby
str = "Hola mundo"
puts str.length
```

Si ejecutas ese programa deberías ver que la longitud de la cadena es 10:

```text
$ ruby strings.rb
10
```

Fíjate que el espacio también hace parte de la longitud.

## Recorrer cadenas

Puedes obtener los caracteres de una posición específica igual que con los arreglos. Por ejemplo, modifica el archivo para mostrar los primeros 4 caracteres:

```ruby
str = "Hola mundo"

puts str[0]
puts str[1]
puts str[2]
puts str[3]
```

Si ejecutas ese programa deberías ver algo similar a esto:

```text
$ ruby strings.rb
H
o
l
a
```

Para recorrer cada uno de los caracteres de una cadena puedes hacer lo siguiente:

```ruby
str = "Hola mundo"

chars = str.chars # ["H", "o", "l", "a", " ", "m", "u", "n", "d", "o"]
chars.each do |c|
  puts c
end
```

El método `chars` retorna un arreglo con todos los caracteres de la cadena, y después iteramos sobre ese arreglo normalmente. Fíjate que el espacio en blanco también cuenta como un caracter.

## Partiendo cadenas

No siempre queremos crear un arreglo a partir de sus caracteres. En ocasiones es útil dividir una cadena por otro caracter como espacio o coma. Para eso podemos utilizar el método `split`. Abre IRB y ejecuta lo siguiente:

```text
$ irb
2.3.1 :001 > "Hola mundo".split(" ")
 => ["Hola", "mundo"]
```

El método `split` recibe el caracter por el que quieres partir la cadena. Por ejemplo, podemos partir una cadena por comas:

```text
$ irb
2.3.1 :001 > "prueba,separar,cadenas".split(",")
 => ["prueba", "separar", "cadenas"]
```

Si quieres unir un arreglo en una cadena puedes utilizar el método `join`:

```text
$ irb
2.3.1 :001 > ["Hola", "mundo"].join(" ")
 => "Hola mundo"
```

El método `join` recibe un argumento que es el caracter que se va a utilizar para separar los elementos. Por ejemplo, podemos unir un arreglo con guiones:

```text
$ irb
2.3.1 :001 > ["Hola", "mundo"].join("-")
 => "Hola-mundo"
```

## Otros métodos útiles

Sobre las cadenas de texto podemos llamar una gran cantidad de métodos y operadores interesantes. Veamos algunos de ellos:

| Método/Operador | Descripción | Ejemplo |
| --- | --- | --- |
| `*` | Permite repetir la cadena `n` veces | `"a" * 5 # aaaaa` |
| `<<` | Permite concatenar la cadena con otra cadena | `"a" << "b" # ab` |
| `capitalize` | Capitaliza una cadena | `"hola mundo".capitalize # Hola mundo` |
| `upcase` | Cambia a mayúsculas | `"Hola".upcase # HOLA` |
| `downcase` | Cambia a minúsculas | `"HoLa".downcase # hola` |
| `empty?` | Returna true si la cadena está vacía | `"".empty? # true` |
| `gsub` | Reemplaza las ocurrencias en el texto | `"Hola mundo".gsub("mundo", "Germán") # Hola Germán` |

Prueba cada uno de los ejemplos en IRB. Puedes encontrar todos los métodos de las cadenas en la [documentación de Ruby](http://ruby-doc.org/core-2.3.1/String.html)

