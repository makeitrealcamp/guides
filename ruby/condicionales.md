# Condicionales

Los condicionales le permiten a nuestros programas tomar decisiones cuando se están ejecutando.

Ruby ofrece varias formas para crear condicionales. La sintaxis más simple es la siguiente:

```ruby
if <condición>
  # código que se ejecuta si se cumple la condición
end
```

La `<condicion>` debe ser algo que evalúe a `true` o `false`. Por ejemplo, el siguiente código **siempre** va a imprimir "Hola Mundo":

```ruby
if true
  puts "Hola Mundo"
end
```

El siguiente código **nunca** va a imprimir "Hola Mundo":

```ruby
if false
  puts "Hola Mundo"
end
```

El siguiente código sólo va a imprimir "Hola Mundo" **si el usuario ingresa "Make it Real"** \(tienen que ser exacto\):

```ruby
text = gets.chomp

if text == "Make it Real"
  puts "Hola Mundo"
end
```

### Else \(de lo contrario\)

```ruby
if <condición>
  # código que se ejecuta si se cumple la condición
else
  # código que se ejecuta si no se cumple la condición
end
```

## Condiciones compuestas

Imagina que queremos escribir un programa que imprima "El número está entre 10 y 20" si el valor de una variable está efectivamente entre 10 y 20. ¿Cómo te imaginas que lo podríamos solucionar?

Una opción es usar condiciones anidadas, de esta forma:

```ruby
num = 15

if num >= 10
  if num <= 20
    puts "El número está entre 10 y 20"
  end
end
```

## Operadores lógicos

En Ruby, al igual que en otros lenguajes de programación, se pueden crear condiciones compuestas utilizando **Y**, **O** o negación.

La **Y** se representa con el operador `&&`. Por ejemplo:

```ruby
num = gets.chomp.to_i

if num >= 10 && num <= 20
  puts "El número está entre 10 y 20"
end
```

El `&&` sólo evalúa a verdadero si los dos lados de la condición evalúan a verdadero.

EL **O** se representa con el operador `||`. Por ejemplo:

```ruby
color = gets.chomp

if color == "negro" || color == "blanco"
  puts "el color es negro o blanco"
end
```

La **negación** se representa con el operador `!`. Por ejemplo, la siguiente condición sólo se cumple si **no es cierto** que 5 sea igual a 6:

```ruby
if !(5 == 6)
  puts "5 es diferente de 6"
end
```

En general es preferible evitar la **negación** si es posible. En este caso podemos mejorar la condición utilizando el operador `!=`:

```ruby
if 5 != 6
  puts "5 es diferente de 6"
end
```

### Tablas de verdad

Cuando escribes `&&` o `||`, a cada lado debe ir una expresión booleana \(que evalúa a `true` o `false`\).

Podemos crear tablas para saber cuál sería el resultado para cada cada caso:

| Expresión | Resultado |
| --- | --- |
| `true && true` | `true` |
| `true && false` | `false` |
| `false && true` | `false` |
| `false && false` | `false` |

Fíjate que para que el resultado sea `true` los dos lados del `&&` **deben ser** `true`.

Hagamos lo mismo para el **o** \(`||`\):

| Expresión | Resultado |
| --- | --- |
| `true || true` | `true` |
| `true || false` | `true` |
| `false || true` | `true` |
| `false || false` | `false` |

Con el **ó** cualquiera de los lados puede ser `true` para que el resultado sea `true`.

La **negación** es más simple:

| Expresión | Resultado |
| --- | --- |
| `!true` | `false` |
| `!false` | `true` |

