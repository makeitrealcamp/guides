# Métodos

Los métodos, conocidos también como funciones o procedimientos en otros lenguajes, nos permiten reutilizar código.

La sintaxis para crear un método en Ruby es la siguiente:

```ruby
def hello
  puts "Hola mundo"
end
```

Para definir un método usamos la palabra reservada `def` y le damos un nombre \(en este caso `hello`\). Al final debemos cerrar el método con `end`.

Para invocar un método, utilizas el nombre del método y, opcionalmente, abres y cierras paréntesis al final:

```ruby
hello() # los paréntesis son opcionales
```

## Parámetros

Los métodos pueden recibir cero o más parámetros \(o argumentos\). Modifiquemos nuestro programa para que salude a cualquier persona:

```ruby
def hello(name)
  puts "Hola #{name}"
end

hello("Germán")
hello("David")
```

## Retornando un valor

En Ruby todas las expresiones retornan un valor. Incluso `puts "Hola mundo"` retorna un valor, solo que el valor es `nil`.

Por defecto, todos los métodos retornan el resultado de la última línea que se ejecute en el método. Vamos a modificar nuestro ejemplo para que en vez de imprimir el saludo, lo retorne:

```ruby
def hello(name)
  "Hola #{name}"
end

puts hello("Germán")
puts hello "David"  # los paréntesis son opcionales
```

También es posible retornar el valor explícitamente con la palabra reservada `return`:

```ruby
def hello(name)
  return "Hola #{name}"
end

puts hello("Germán")
puts hello "David"
```

