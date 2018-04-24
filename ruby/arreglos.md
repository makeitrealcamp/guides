# Arreglos

## Arreglos

Hasta ahora hemos trabajado con cadenas de texto, números y booleanos. En este capítulo vamos a hablar de un nuevo tipo de datos: los arreglos.

Un arreglo es una lista ordenada de elementos de cualquier tipo. Para crear tu primer arreglo abre IRB y escribe lo siguiente:

```ruby
array = [1, "Pedro", true, false, "Juan"]
```

La sintaxis de un arreglo es muy simple. Los elementos del arreglo se envuelven entre corchetes y se separan con coma. Fíjate que el arreglo que creamos contiene números, cadenas de texto y booleanos. Cada elemento del arreglo puede ser de cualquier tipo \(incluso otros arreglos!\).

### Obteniendo elementos del arreglo

Para obtener la primera posición del arreglo que acabamos de crear utilizas `array[0]`:

```text
$ irb
> array = [1, "Pedro", true, false, "Juan"]
 => [1, "Pedro", true, false, "Juan"]
> array[0]
 => 1
```

La sintaxis para obtener un elemento del arreglo es `[n]` donde `n` es la posición empezando en 0. Imprime los demás elementos del arreglo:

```text
> array[1]
 => "Pedro"
> array[2]
 => true
> array[3]
 => false
> array[4]
 => "Juan"
```

### Recorriendo un arreglo

En el ejemplo anterior pudimos imprimir cada una de las posiciones porque era un arreglo de pocos elementos. Sin embargo esto no siempre es práctico. Primero, el arreglo puede ser muy grande o puede que no sepamos el tamaño del arreglo de antemano. Crea un archivo llamado `arrays.rb` y escribe el siguiente código:

```ruby
array = [1, "Pedro", true, false, "Juan"]

array.each do |element|
  puts element
end
```

El resultado debe ser el siguiente:

```text
$ ruby arrays.rb
1
Pedro
true
false
Juan
```

Si necesitamos el índice de cada elemento podemos utilizar el método `each_with_index` en vez de `each`:

```ruby
array = [1, "Pedro", true, false, "Juan"]

array.each_with_index do |element, index|
  puts "#{index}: #{element}"
end
```

El resultado cuando lo ejecutamos debe ser el siguiente:

```text
$ ruby arrays.rb
0: 1
1: Pedro
2: true
3: false
4: Juan
```

### Reemplazando un elemento

Es posible reemplazar el valor de cualquier elemento del arreglo. Por ejemplo:

```ruby
array = [1, "Pedro", true, false, "Juan"]
array[1] = "Germán" # reemplazamos el elemento en la posición 1

# [1, "Germán", true, false, "Juan"]
```

En este ejemplo estamos reemplazando la posición 1 del arreglo \(que realmente es la segunda porque recuerda que empieza en 0\) con el valor "Germán". La línea más importante es la siguiente:

```ruby
array[1] = "Germán"
```

Como ejercicio intenta reemplazar el último elemento \("Juan"\) por otro valor.

### Insertando nuevos elementos

Es posible insertar nuevos elementos en un arreglo \(puede estar vacío o tener elementos\). Por ejemplo:

```ruby
array = ["Pedro"]
array.push("Germán") # ["Pedro", "Germán"]
array << "Diana" # ["Pedro", "Germán", "Diana"]
```

Tanto el método `push` como el operador `<<` nos permiten agregar un elemento al final de la lista. ¿Qué pasa si queremos agregar un elemento en otra posición? Para eso sirve el método `insert`:

```ruby
array = ["Pedro", "Germán", "Diana"]
array.insert(0, "Juan") # ["Juan", "Pedro", "Germán", "Diana"]
```

El método `insert` recibe 2 argumentos: la posición en la que se quiere insertar el elemento y el valor del nuevo elemento. Todos los elementos desde esa posición se mueven a la derecha.

### Eliminando elementos

Para eliminar elementos de un arreglo utiliza `delete_at`:

```ruby
array = ["Pedro", "Germán", "Diana"]
array.delete_at(1) # ["Pedro", "Diana"]
```

### Un Ejemplo

Pongamos en práctica lo que hemos visto hasta ahora y creemos un programa que le permita al usuario ingresar los nombres de algunas personas y seleccione una al azar. Crea un archivo llamado `choose.rb` y escribe lo siguiente:

```ruby
print "Ingresa el número de personas que participarán: "
num = gets.chomp.to_i

people = []
num.times do
  print "Ingresa el nombre de la persona: "
  people << gets.chomp # insertamos cada persona en el arreglo
end

puts "La persona seleccionada es #{people.sample}"
```

Las primeras dos líneas obtienen el número de personas que el usuario quiere ingresar. Después creamos un arreglo vacío en el que vamos a ir agregando las personas. Utilizando el ciclo `times` le pedimos el usuario que ingrese el nombre de cada persona. Por último, seleccionamos un elemento del arreglo al azar utilizando el método `sample`.

Ejecutemos el archivo y probémoslo:

```text
$ ruby choose.rb
Ingresa el número de personas que participarán: 3
Ingresa el nombre de la persona: Pedro
Ingresa el nombre de la persona: Juan
Ingresa el nombre de la persona: Germán
La persona seleccionada es Pedro
```

## Métodos útiles

Ya hemos visto métodos como `push` para insertar, `each` para recorrer, `delete_at` para eliminar y `sample` para seleccionar un elemento de forma aleatoria en los arreglos. Otros métodos útiles son:

| Método | Descripción |
| --- | --- |
| first | Retorna el primer elemento del arreglo |
| last | Retorna el último elemento del arreglo |
| shuffle | Retorna un nuevo arrego mezclado aleatoriamente |
| length | Retorna el tamaño del arreglo |

Puedes ver todos los métodos en la [documentación de Array](https://ruby-doc.org/core-2.3.1/Array.html).

### Métodos con exclamación al final

En la documentación de Ruby vas a encontrar algunos métodos que terminan con un signo de exclamación al final como `shuffle!` y `reverse!`. Esos métodos se deben utilizar con cuidado porque modifican el arreglo original. Generalmente estos métodos tienen otra versión sin signo de exclamación que retornan un nuevo arreglo sin modificar el original \(p.e. `shuffle` y `reverse`\).

En general intenta utilizar los métodos que **no** tienen el signo de exclamación al final a menos de que sea necesario modificar el arreglo original.

Por ejemplo, si quieres mezclar los lementos de un arreglo puedes hacerlo de dos formas:

```ruby
array = [1, 2, 3, 4, 5]

array.shuffle! # modifica el arreglo original, no es necesario asignarlo a otra variable
another_array = array.suffle # no modifica el arreglo original, es necesario asignarlo a otra variable
```

### Argumentos de un programa

Hasta ahora hemos solicitado información del usuario utilizando `gets.chomp`. Sin embargo, existe otra forma en que el usuario nos puede pasar información y es a través de los argumentos del programa.

Cuando ejecutamos un programa podemos pasarle varios argumentos separados por espacio. por ejemplo:

```text
$ ruby program.rb argumento1 argumento2 argumento3
```

Podemos acceder a estos argumentos a través de una variable llamada `ARGV` \(que es un arreglo\). Para probarlo crea un archivo llamado `args.rb` y escribe lo siguiente:

```ruby
ARGV.each do |arg|
  puts arg
end
```

Si ejecutas el archivo deberías ver algo como lo siguiente:

```text
$ ruby args.rb argumento1 argumento2 argumento3
argumento1
argumento2
argumento3
```

Es simplemente otra forma en la que puedes recibir información del usuario.

