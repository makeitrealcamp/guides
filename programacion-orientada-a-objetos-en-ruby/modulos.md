# Módulos

Los **módulos** en Ruby cumplen una doble función: evitan colisiones de nombres y nos ayudan a reutilizar código.

Un **módulo** es un contenedor de clases, métodos y constantes. Los módulos se definen utilizando la palabra clave `module`.

Creemos un módulo `MyModule`:

```ruby
module MyModule
end
```

Dentro del módulo podemos definir clases, métodos y constantes. Por ejemplo:

```ruby
module MyModule
  MAX_CONNECTIONS = 5

  def method_one
  end

  def method_two
  end

  class ThingOne
  end

  class ThingTwo
  end
end
```

Para acceder a las clases y constantes escribes el nombre del módulo, seguido de `::` (doble dos puntos), seguido del nombre de la clase o la constante. Por ejemplo:

```ruby
puts MyModule::MAX_CONNECTIONS # Imprime 5

MyModule::ThingOne.new # Crea una instancia de la clase
```

A los métodos que están definidos en un módulo no los podemos acceder directamente, tenemos que **mezclar** el módulo dentro de una clase.

## Mezclando el módulo

Los módulos se pueden incluir dentro de una clase utilizando la palabra clave `include`:

```ruby
class Person
  include MyModule
end
```

Esto va a incluir todos los métodos de `MyModule` dentro de `Person`, así que podemos llamar los métodos `method_one` y `method_two` (que definimos dentro del módulo `MyModule` en la sección anterior) sobre instancias de `Person`.

Otra ventaja de incluir (o mezclar) un módulo dentro de una clase es que podemos acceder a las clases y las constantes que están definidas dentro del módulo directamente:

```ruby
class Person
  include MyModule

  def initialize
    puts MAX_CONNECTIONS # no hay necesidad de agregar el prefijo MyModule::
    ThingOne.new # no hay necesidad de agregar el prefijo MyModule::
  end
end
```

Es posible mezclar más de un módulo en una clase. Por ejemplo, suponiendo que existen los módulos `Module1` y `Module2`, podemos hacer lo siguiente:

```ruby
class Person
  include Module1
  include Module2
end
```

## Anidando módulos

Es posible anidar módulos dentro de módulos. Por ejemplo:

```ruby
module System
  module Currency
    class Dollar
    end
  end
end
```

¿Cómo accedemos a la clase `Dollar`? De la siguiente forma:

```ruby
System::Currency::Dollar.new
```
