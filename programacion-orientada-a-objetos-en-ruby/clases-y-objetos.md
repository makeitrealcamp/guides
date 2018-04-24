# Clases y objetos

La **Programación Orientada por Objetos \(POO\)** te va a permitir escribir código más claro y fácil de mantener en el tiempo.

Los conceptos principales de la **POO** son las **clases** y los **objetos**.

Las **clases** son plantillas a partir de las cuáles se crean **objetos**.

Los **objetos** son instancias de una **clase**.

## Sintaxis

La sintaxis que se utiliza para crear una **clase** es la siguiente:

```ruby
class Person
end
```

Las **clases** siempre se nombran en mayúsculas utilizando **CamelCase** \(cada palabra comienza con mayúscula\).

La sintaxis para crear un **objeto** es la siguiente:

```ruby
Person.new
```

## Métodos

En las clases puedes definir métodos que después vas a poder invocar sobre los objetos:

```ruby
class Person
  def greet
    "Hola"
  end
end
```

Para utilizar el método primero debemos crear una instancia \(objeto\) de la clase:

```ruby
p1 = Person.new
puts p1.greet # imprime "Hola"
puts p1.greet # imprime "Hola"
```

### Métodos privados

Es posible crear métodos que sólo son visibles dentro de la clase. Para hacerlo debemos utilizar la palabra clave `private`. Todos los métodos que van debajo de esa palabra `private` son privados:

```ruby
class Person
  ...

  private
    def secret_method
      puts "Este es un método privado"
    end
end
```

## Constructor

Las clases pueden tener un método especial llamado `initialize` que se llama cada vez que se crea un objeto con `.new`:

```ruby
class Person
  def initialize
    puts "creando nueva persona ..."
  end

  ...
end

Person.new # imprime "creando nueva persona ..."
```

El constructor puede recibir argumentos:

```ruby
class Person
    def initialize(name)
    puts "creando nueva persona llamada #{name}"
  end
  ...
end
```

```ruby
Person.new("Pedro") # imprime "creando nueva persona llamada Pedro"
Person.new("Juan") # imprime "creando nueva persona llamada Juan"
```

## Atributos

Un objeto puede guardar información en atributos, variables que están asociadas a un objeto particular.

A los atributos también se les conoce como **variables de instancia**.

Los atributos se definen en la clase utilizando el caracter `@` al principio. Veamos cómo se utiliza.

```ruby
class Person
    def initialize(name)
    @name = name
  end

  def greet(other_person_name)
    "Hola #{other_person_name}, me llamo #{@name}"
  end
end
```

### Visibilidad de los atributos

Por defecto, los atributos son privados, es decir, solo son visibles dentro de la clase. Si queremos exponerlos al mundo exterior tenemos que crear métodos para leerlos y modificarlos \(a estos métodos se les conoce como **getters** y **setters**\).

```ruby
class Person
    def initialize(name)
    @name = name
  end

  def greet(other_person_name)
    "Hola #{other_person_name}, me llamo #{@name}"
  end

  # Método para que @name pueda ser leído desde afuera
  def name
    @name
  end

  # Método para que @name pueda ser modificado desde afuera
  def name=(name)
    @name = name
  end
end
```

El método para leer el atributo se debe llamar igual que el atributo y generalmente retorna el valor del atributo.

El método para escribir el atributo se debe llamar igual que el atributo pero con un `=` al final del atributo.

Ruby tiene un atajo para no tener que escribir siempre el **getter** y **setter** de todos los atributos, el `attr_accessor`. El siguiente código es equivalente al anterior:

```ruby
class Person
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def greet(other_person_name)
    "Hola #{other_person_name}, me llamo #{@name}"
  end
end
```

Si no quieres que el atributo pueda ser modificado utiliza `attr_reader` en vez de `attr_accessor`.

Si no quieres que el atributo pueda ser leído utiliza `attr_writer` en vez de `attr_accessor`.

## En Ruby \(casi\) todo es un objeto

Cuando haces algo como `"Hola".length` estás llamando el método `length` de una clase llamada `String`. De hecho podemos ser más explícitos y crear la cadena de la siguiente forma:

```ruby
$ irb
> s = String.new("Hola")
 => "Hola"
> s.length
 => 4
```

Cuando creas una cadena con comillas, Ruby lo traduce a `String.new("...")`. Lo mismo ocurre con los arreglos y los hashes, que se crean con las clases `Array` y `Hash` respectivamente.

Puedes consular la documentación de las clases [String](https://ruby-doc.org/core-2.3.3/String.html), [Array](https://ruby-doc.org/core-2.3.3/Array.html) y [Hash](https://ruby-doc.org/core-2.3.3/Hash.html) para ver todos los métodos que puedes utilizar.

Los números también son objetos en Ruby y puedes llamar métodos sobre ellos:

```text
$ irb
> 2.even?
 => true
```

De hecho, cuando sumas dos números en Ruby \(p.e. `1 + 2`\) realmente estás llamando el método `+` sobre el primer número y le estás pasando el segundo número como argumento!

```text
$ irb
> 1+(2)
 => 3
```

Para ver todos los métodos que tienen los números puedes consultar la documentación de [Fixnum](https://ruby-doc.org/core-2.3.3/Fixnum.html), la clase que representa números en Ruby \(fíjate en todos los métodos que parecen operadores como `+`, `=`, etc.\).

## Conociendo la clase de un objeto

Todos los objetos tienen un método especial llamado `class` que retorna la clase que se utilizó para crearlos:

```text
$ irb
> 2.class
 => Fixnum
> "Hola".class
 => "String"
```

## self

Por último, es muy probable que veas la palabra clave `self` en las clases. Veamos para qué sirve con un ejemplo:

```ruby
class Person
  def initialize
    random_number = self.random_number
  end

  def random_number
    # generates random number
  end
end
```

Con `self` podemos ser más explícitos para referirnos a un método del objeto. En este caso, estamos almacenando el resultado del **método** `random_number` en una **variable** `random_number`. Como tienen el mismo nombre utilizamos `self` para indicarle a Ruby que nos estamos refiriendo al **método** y no a la **variable**.

`self` se utiliza generalmente cuando hay colisiones de nombres entre un método y una variable.

