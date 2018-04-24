# Métodos y atributos de clase

Hasta ahora, los métodos y atributos de los que hemos hablado están asociados a un objeto. En este capítulo hablaremos sobre métodos y atributos que están asociados a la clase directamente.

## Métodos de clase

Un método de clase es muy parecido a un método de instancia, con la diferencia de que el nombre tiene el prefijo `self.`:

```ruby
class Person
  def self.mi_metodo_de_clase
    puts "Este es un método de clase"
  end
end
```

Para invocar este método debes hacerlo directamente sobre la clase \(fíjate que el prefijo `self.` se omite\):

```ruby
Person.mi_metodo_de_clase
```

Si intentas invocar el método sobre una instancia recibirás un error:

```ruby
p1 = Person.new
p1.mi_metodo_de_clase # error
```

## Atributos de clase

Supongamos que necesitamos contar cuántos objetos se crean a partir de la clase `Person`. Esa información la podríamos almacenar en un atributo de clase. Los atributos de clase se identifican porque utilizan dos `@@` en vez de una:

```ruby
class Person
  @@people_count = 0

  def initialize
    @@people_count += 1
  end

  def self.people_count
    @@people_count
  end
end
```

En este ejemplo estamos inicializando nuestro atributo de clase `@@people_count` en 0. Cada vez que se cree un objeto de tipo `Person` se va a invocar el constructor `initialize` que incrementa `@@people_count` en 1.

Los atributos de clase no son visibles fuera de la clase. Es por eso que creamos un método de clase `people_count` que va a retornar `@@people_count`.

Probemos esta clase a ver si funciona:

```ruby
puts Person.people_count # Imprime 0

Person.new
puts Person.people_count # Imprime 1

Person.new
puts Person.people_count # Imprime 2
```

