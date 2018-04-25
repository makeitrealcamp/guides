# Seeds

Es buena práctica crear con un conjunto de datos que otros desarrolladores puedan utilizar para poblar su base de datos local.

En las aplicaciones de Ruby on Rails vas a encontrar un archivo llamado `seeds.rb` dentro de la carpeta `db` que nos va a permitir definir ese conjunto de datos iniciales utilizando los modelos de la aplicación.

Por ejemplo, puedes tener el siguiente código en `db/seeds.rb`, que va a crear 3 usuarios (asumiendo que ya existe ese modelo `User` en tu aplicación):

```ruby
User.create(email: "user1@example.com", age: 45)
User.create(email: "user2@example.com", age: 28)
User.create(email: "user2@example.com", age: 67)
```

`seeds.rb` es un archivo de Ruby normal así que puedes utilizar ciclos, condicionales, etc. Por ejemplo:

```ruby
10.times do |i|
  User.create(email: "user#{i}@example.com", age: 18 + rand(61))
end
```

Para poblar la base de datos a partir del archivo `db/seeds.rb` ejecuta el siguiente comando:

```
$ rails db:seed
```

**Nota:** si estás en una versión menor a 5.0 de Ruby on Rails debes cambiar `rails` por `rake`.
