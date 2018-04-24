# Excepciones

Las excepciones nos permiten interrumpir el flujo normal del programa para indicar que algo inesperado ha sucedido.

Seguramente ya has visto excepciones como `SyntaxError` que se dispara cuando tienes un error de sintaxis en el código o `NoMethodError` cuando intentas invocar un método que no existe.

Cuando se dispara una excepción el programa interrumpe el código y termina a menos de que alguien intercepte la excepción y la maneje.

## Interceptando excepciones

```ruby
begin
  1 / 0 # esto lanza una excepción ZeroDivisionError
rescue
  # este código se ejecuta cuando ocurre una excepción
end
```

Si queremos ver el mensaje y el stacktrace podemos asignar la excepción a una variable:

```ruby
begin
  1 / 0
rescue => e
  puts e.message # imprime el mensaje
  puts e.backtrace.join(`\n`) # imprime el stacktrace
end
```

Si queremos interceptar solo unas excepciones específicas debemos escribir el nombre de la clase:

```ruby
begin
  1 / 0
rescue ZeroDivisionError => e
  # código que se ejecuta cuando ocurre un ZeroDivisionError
end
```

## Lanzando excepciones

Para lanzar una excepción utiliza la palabra clave `raise`:

```ruby
raise ArgumentError.new("El argumento es inválido")
```

Cuando se lanza una excepción debemos decidir qué excepción vamos a lanzar. `ArgumentError` se utiliza cuando existe un error en un argumento de un método. Otra más común es `RuntimeError`:

```ruby
raise RuntimeError.new("No se esperaba que ...")
```

Otras formas equivalentes en las que puedes lanzar una excepción son:

```ruby
raise RuntimeError, "No se esperaba que ..."

# lo siguiente genera un RuntimeError
raise "No se esperaba que ..."
```

Existen muchas más excepciones incluidas con Ruby y están organizadas en una jerarquía de clases. Veamos algunas de ellas:

```text
Exception
 NoMemoryError
 ScriptError
   LoadError
   NotImplementedError
   SyntaxError
 SignalException
   Interrupt
 StandardError
   ArgumentError
   IOError
     EOFError
   IndexError
   LocalJumpError
   NameError
     NoMethodError
   RangeError
     FloatDomainError
   RegexpError
   RuntimeError
   SecurityError
   SystemCallError
   SystemStackError
   ThreadError
   TypeError
   ZeroDivisionError
 SystemExit
```

La jerarquía es importante porque cuando capturas, por ejemplo, `StandardError`, estás capturando cualquier excepción debajo en la jerarquía como `ArgumentError`, `IOError`, etc.

En general, uno debe ser lo más específico al capturar excepciones. Evita capturar `Exception`, es una mala práctica.

Cuando omites la excepción en el `rescue` realmente estás capturando `StandardError` \(y por lo tanto, cualquier excepción que esté debajo en la jerarquía\).

## Creando nuestras propias excepciones

También es posible crear nuestras propias excepciones, simplemente crea una clase que extienda de `StandardError`:

```ruby
class PermissionDeniedError < StandardError
end

raise PermissionDeniedError.new()
```

Como una excepción no es más que una clase normal de Ruby, puedes agregarle un constructor, atributos y métodos:

```ruby
class PermissionDeniedError < StandardError
  attr_reader :action

  def initialize(message, action)
    # Call the parent's constructor to set the message
    super(message)

    # Store the action in an instance variable
    @action = action
  end
end

# Cuando alguien trate de borrar algo sin permiso podrías
# hacer algo así:
raise PermissionDeniedError.new("Permission Denied", :delete)
```

