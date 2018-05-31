# Testing en Ruby

Las **pruebas automatizadas**, o tests, nos ayudan a prevenir errores, especialmente cuando hacemos nuevos cambios sobre nuestro código, haciendo nuestras aplicaciones más mantenibles en el tiempo.

La desventaja de escribir pruebas es que es lento y es más código por mantener. Pero en el mediano y largo plazo las ventajas superan las desventajas.

## Tipos de pruebas

En general, las pruebas se pueden dividir en dos grandes categorías: unitarias y de integración.

Las **pruebas unitarias** se escriben para probar la lógica de métodos específicos de la aplicación, aislando sistemas externos como bases de datos, otros servidores, etc.

Por ejemplo, una prueba para un método que calcula el número de palabras de un texto sería una prueba unitaria.

Las **pruebas de integración** se escriben para probar funcionalidades completas de la aplicación y pueden involucrar componentes y sistemas externos como navegadores, bases de datos, frameworks, etc.

Por ejemplo, una prueba para que verifica que los usuarios se pueden registrar correctamente sería una prueba de integración.

## TDD \(Test Driven Development\) y BDD \(Behaviour Driven Development\)

**TDD** es un proceso para escribir pruebas automatizadas en el que primero se escribe una prueba fallida, después se implementa el código para que funcione y, por último, se mejora el código verificando que la prueba siga pasando.

**BDD** es muy similar pero el lenguaje cambia un poco para que sea entendible tanto por programadores como por personas que tienen mayor conocimiento del negocio.

## Librerías más populares

Aunque existen muchas librerías de testing en Ruby, incluso uno podría escribir una, las dos más populares son [Minitest](https://github.com/seattlerb/minitest) y [RSpec](http://rspec.info/).

### Minitest

[Minitest](https://github.com/seattlerb/minitest) inició como una gema pero ahora viene incluído en las últimas versiones de Ruby.

```ruby
require "minitest/autorun"
require "./calculator"

class CalculatorTest < Minitest::Test
  def test_adds_two_positive_numbers
    calculator = Calculator.new
    assert_equal 5, calculator.add(2, 3)
  end
end
```

Este ejemplo muestra varios conceptos importantes de testing. El **test** es el método `test_adds_two_positive_numbers`.

Un **test** se compone de uno o más **assertions**, que son los que realizan las verificaciones sobre el código. En el ejemplo la siguiente línea es un **assertion**:

```ruby
assert_equal 5, calculator.add(2, 3)
```

Este **assertion** verifica que al llamar el método `add` de la clase `Calculator` nos retorne el valor esperado.

## RSpec

[RSpec](http://rspec.info/) es una gema para realizar pruebas automatizadas utilizando BDD:

```ruby
require "./calculator"

describe Calculator do
  describe "#add" do
    it "adds two positive numbers" do
      calculator = Calculator.new
      expect(calculator.add(2, 3)).to eq(5)
    end
  end
end
```

[RSpec](http://rspec.info/) es una especie de lenguaje escrito en Ruby que se lee de forma más natural para las personas que no son programadoras. A esto se le conoce como un **DSL** \(Domain Specific Language\).

[RSpec](http://rspec.info/) es un poco más complicado de configurar que [Minitest](https://github.com/seattlerb/minitest). Para más información de [RSpec](http://rspec.info/) consulta la documentación de la gema.

En este curso nos vamos a concentrar en [Minitest](https://github.com/seattlerb/minitest).

## Assertions

Los **assertions** son métodos que nos permiten realizar verificaciones en nuestras pruebas.

El único método que necesitas conocer para hacer assertions es `assert`. Los demás existen por conveniencia y facilidad para el programador.

### assert

El método `assert` recibe una condición que debe evaluar a `true` o `false` y, opcionalmente, un mensaje de error. Veamos algunos ejemplos:

```ruby
assert true  # pasa
assert false # falla

assert true, “Se esperaba que fuera verdadero”

assert 5 == 5, “Se esperaba que 5 fuera igual a 5”
```

Cuando la condición retorna `true` la aserción pasa, de lo contrario falla la prueba.

Todos los demás métodos utilizan el método `assert` por debajo.

### refute

El método `refute` es el contrario de `assert`. La prueba falla si la condición retorna `true` y la aserción pasa si retorna `false`:

```ruby
refute true  # falla
refute false # pasa

refute 5 == 5
refute 8 == 5
```

### assert\_equal

El método `assert_equal` recibe el valor esperado, el actual, y opcionalmente un mensaje de error que se imprime cuando la aserción falla:

```ruby
assert_equal 5, 5
```

Para conocer todos los métodos que ofrece [Minitest](https://github.com/seattlerb/minitest) revisa [la documentación](http://docs.seattlerb.org/minitest/Minitest/Assertions.html).

## Setup y teardown

Los métodos `setup` y `teardown` se utilizan para ejecutar código antes y después de cada prueba:

```ruby
require “minitest/autorun”
require “calculator”

class CalculatorTest < Minitest::Test
  def setup # ó before
    @calculator = Calculator.new
  end

  def teardown # ó after
    # código
  end

  def test_adds_two_positive_numbers
    assert_equal 5, @calculator.add(2, 3)
  end
end
```
