# ActiveRecord - Validaciones

Las validaciones garantizan que sólo información válida se almacene en la base de datos.

Existen varios lugares en donde uno puede realizar validaciones: en la base de datos directamente, en el cliente utilizando JavaScript y en los modelos.

Aunque la validación en los modelos no anula la validación en la base de datos o en el cliente, los modelos ofrecen un sitio conveniente en dónde definir las validaciones.

## Creando nuestra primera validación

Las validaciones se definen dentro de los modelos utilizando generalmente el método `validate`:

```ruby
class Article < ApplicationRecord
  validates :title, presence: true
end
```

## ¿Cuándo ocurren las validaciones?

Las validaciones ocurren cuando invocas alguno de los siguientes métodos:

* `create`
* `create!`
* `save`
* `save!`
* `update`
* `update!`
* `valid?`
* `invalid?`

Los métodos que terminan con `!` lanzan una excepción si el registro es inválido. Los demás, excluyendo `valid?` e `invalid?` retornan el objeto si las validaciones pasan o `false` de lo contrario.

Por ejemplo, el siguiente código crea un nuevo artículo e intenta guardarlo. Si el método `save` no retorna false va a mostrar "Se guardó bien!". De lo contrario va a mostrar los errores separados por coma \(`,`\):

```ruby
article = Article.new(title: "Mi primer artículo")
if article.save
  puts "Se guardó bien!"
else
  puts article.errors.full_messages.join(", ")
end
```

Más adelante vamos a ver cómo trabajar con los errores de las validaciones.

## Validaciones incluídas

Rails incluye varias validaciones predefinidas que puedes utilizar en tus modelos.

### Presencia

Para validar que ciertos atributos no sean vacíos o `nil` utiliza la opción `presence`.

Por ejemplo, en el siguiente código estamos validando que los atributos `:name`, `:login` e `:email` no sean `nil` ni vacíos:

```ruby
class Person < ApplicationRecord
  validates :name, :login, :email, presence: true
end
```

### Booleanos

Para validar que un atributo booleano no sea `nil` debes usar la siguiente validación en vez de `presence`:

```ruby
validates :boolean_field_name, inclusion: { in: [true, false] }
```

### Incusión y exclusión

Para validar que uno o más atributos estén incluídos o excluídos de un conjunto utiliza las opciones `inclusion` y `exclusion` respectivamente:

```ruby
validates :size, inclusion: { in: %w(small medium large),  message: "%{value} is not a valid size" }
validates :legacy_code, format: { with: /\A[a-zA-Z]+\z/, message: "only allows letters" }
```

### Números

Para verificar que uno o más atributos contienen sólo valores numéricos utiliza la opción `numericality`:

```ruby
class Player < ApplicationRecord
  validates :points, numericality: true
  validates :games_played, numericality: { only_integer: true }
end
```

Además de `only_integer` las opciones que le puedes pasar a `numericality` son:

```ruby
validates :points, numericality: { greater_than: 5 }
validates :points, numericality: { greater_than_or_equal_to: 5 }
validates :points, numericality: { equal_to: 5 }
validates :points, numericality: { less_than: 5 }
validates :points, numericality: { less_than_or_equal_to: 5 }
validates :points, numericality: { other_than: 5 }
```

### Longitud de una cadena

Utiliza la opción `length`:

```ruby
class Person < ApplicationRecord
  validates :name, length: { minimum: 2 }
  validates :bio, length: { maximum: 500 }
  validates :password, length: { in: 6..20 }
  validates :registration_number, length: { is: 6 }
end
```

Para ver la lista completa de validaciones te recomendamos la [guía oficial de Rails](http://guides.rubyonrails.org/active_record_validations.html).

