# Herencia

La herencia es una forma de reutilizar código en la programación orientada a objetos. A través de herencia, una clase puede **recibir** los métodos de otra clase.

Para indicar que una clase hereda de otra se utiliza el operador `<` en la definición de la clase seguido del nombre de la clase que se quiere extender \(heredar\). Por ejemplo:

```ruby
# Clase Padre
class Figure
  attr_accessor: :stroke, :fill
end

# Hereda de Figure
class Circle < Figure
  attr_accessor :radius
end

# Hereda de Figure
class Square < Figure
  attr_accessor :side
  ...
end

# Hereda de Figure
class Triangle < Figure
  attr_accessor :base, :height
end
```

En este caso `Circle`, `Square` y `Triangle` heredan de `Figure`, es decir, que tienen todos los métodos se definan en `Figure` \(en este caso los métodos para leer y escribir `stroke` y `fill`\). Por ejemplo:

```ruby
c1 = Circle.new
c1.fill = "red"
puts c1.fill
```

## Jerarquía de clases

Una clase puede ser padre de muchas otras clases, e hija de otra al mismo tiempo.

```ruby
class Figure
  ...
end

class Circle < Figure
  attr_accessor :radius
end

class Cylinder < Circle
  attr_accessor :length
end
```

`Circle` es hija de `Figure` y padre de `Cylinder`. A medida que se van creando más clases se va creando una jerarquía de clases.

### Object

En Ruby la clase `Object` es la clase padre de todas las clases que no hereden de alguna otra. `Object` define métodos como `class`, `to_s`, `methods`, `respond_to?`, `nil?`, `is_a?`, entre otros. Puedes ver la lista completa en la documentación de la clase [Object](https://ruby-doc.org/core-2.3.3/Object.html). Todos estos métodos están disponibles en cualquier clase de Ruby.

**Nota:** `Object` extiende de otra clase llamada `BasicObject`, que es la raíz de toda la jerarquía de clases en Ruby, pero esa es una clase vacía, así que en la práctica puedes pensar en `Object` como la clase raíz.

## Sobrescribiendo métodos

Es posible sobreescribir los métodos de la clase padre definiendo un método que se llame igual en la clase hija. Por ejemplo, es muy común sobrescribir el método `to_s` que está definido en `Object`:

```ruby
class Circle < Figure
  ...

  def to_s
    "Este es un círculo con radio #{@radius}"
  end
end
```

**Nota:** No es necesario que el método esté definido directamente en la clase padre, puede estar más arriba en la jerarquía como en este ejemplo.

Puedes utilizar la palabra clave `super` para invocar el método padre. Por ejemplo:

```ruby
class Employee
  def salary
    puts "Calculando salario"
  end
end

class Manager < Employee
  def salary
    puts "Calculando bonos"
    super # esta línea llama el método salary de Employee
  end
end
```

## Herencia y el constructor

El constructor se hereda y se puede sobrescribir como cualquier otro método. La única restricción es que si vas a usar `super` debe ser la primera línea del `initialize`, de lo contrario sale un error.

```ruby
class Parent
  def initialize
    puts "Este es el constructor de Parent"
  end
end

class Child
  def initialize
    super # llama el constructor de Parent
    # acá puede ir más código
  end
end
```

