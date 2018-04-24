# Ciclos

Los ciclos nos permiten repetir la ejecución de un código varias veces.

En Ruby existen varias formas de hacer ciclos. Veamos algunas:

## while

```ruby
while <condición>
  # acá va el código que se va a repetir mientras la condición sea verdadera
end
```

## times \(iterando N veces\)

```ruby
850.times do |i|
  # código que se quiere ejecutar 850 veces.
end
```

Existe una sintaxis equivalente que nos permite ejecutar lo mismo en una sola línea:

```ruby
850.times { |i| puts "Hola #{i}" }
```

## each

```ruby
(10..15).each do |i|
  puts "#{i} Hola mundo"
end
```

La forma de crear un rango es con dos o tres puntos seguidos \(`..` o `...`\) entre dos números. La diferencia es que los dos puntos \(`..`\) incluyen el último valor, los tres puntos \(`...`\) lo excluyen.

