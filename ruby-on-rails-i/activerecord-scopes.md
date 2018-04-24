# ActiveRecord - Scopes

Los **scopes** te permiten definir consultas frecuentes como métodos que puedes invocar sobre los modelos o asociaciones.

Para definir un **scope** utiliza el método `scope` en la clase del modelo pasando la consulta que quieres que se ejecute cuando utilizan el **scope**:

```ruby
class Article < ApplicationRecord
  scope :published, -> { where(published: true) }
end
```

Esto es equivalente a utilizar un método de clase:

```ruby
class Article < ApplicationRecord
  def self.published
    where(published: true)
  end
end
```

Para utilizar el **scope** lo invocas sobre la clase `Article` o sobre alguna asociación:

```ruby
published_articles = Article.published

# asumiendo que existe un modelo User que tiene una asociación a Article
user = User.first
published_articles = user.articles.published
```

Los **scopes** se pueden encadenar. Por ejemplo, si tenemos dos **scopes** en nuestra clase `Article`:

```ruby
class Article < ApplicationRecord
  scope :published, -> { where(published: true) }
  scope :popular, -> { where('views > ?', 10) }
end
```

Los puedes encadenar de la siguiente forma:

```ruby
articles = Article.published.popular
```

## Argumentos

Los **scopes** pueden recibir argumentos.

Por ejemplo:

```ruby
class Article < ApplicationRecord
  scope :created_before, -> (time) { where("created_at < ?", time) }
end
```

Un **scope** con argumentos se invoca como si fuera un método de clase:

```ruby
Article.created_before(Time.zone.now)
```

Recuerda que el **scope** se puede escribir también como un método de clase:

```ruby
class Article < ApplicationRecord
  def self.created_before(time)
    where("created_at < ?", time)
  end
end
```

