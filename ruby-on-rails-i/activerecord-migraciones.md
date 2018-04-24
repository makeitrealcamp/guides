# ActiveRecord - Migraciones

Las migraciones nos permiten hacer cambios sobre el esquema de la base de datos de forma iterativa y consistente.

Una migración es un archivo que se crea dentro de la carpeta `db/migrate` y que contiene instrucciones para modificar el esquema de la base de datos \(crear tablas, agregar columnas, eliminar columnas, eliminar tablas, etc.\).

Cuando creas un **modelo** desde la línea de comandos con el generador de Rails, automáticamente se crea una **migración** con las instrucciones para crear la tabla.

Sin embargo, también puedes crear migraciones desde cero \(para agregar, remover o cambiar columnas de una tabla generalmente\).

## Creando una migración

La forma más fácil de crear una migración es desde la línea de comandos:

```text
$ rails generate migration <nombre_de_la_migración>
```

Por ejemplo, para crear una migración vacía y agregar un campo `published_at` a la tabla `products` podemos ejecutar el siguiente comando:

```text
$ rails generate migration AddPublishedAtToProducts
```

El archivo que se generaría en `db/migrate` tendría lo siguiente:

```ruby
class AddPublishedAtToProducts < ActiveRecord::Migration[5.0]
  def change
  end
end
```

Si la migración es de la forma "AddXXXToYYY" seguido de una lista de columnas y su tipo, la migración va a tener las instrucciones para agregar ese o esos campos.

Por ejemplo, podemos agregar los campos `published` de tipo `boolean` y `published_at` de tipo `datetime` de la siguiente forma:

```text
$ rails generate migration AddPublishedColumnsToProducts published:boolean published_at:datetime
```

Y eso va a generar la siguiente migración:

```ruby
class AddPublishedColumnsToProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :published, :boolean
    add_column :products, :published_at, :datetime
  end
end
```

De forma similar podemos generar una migración para remover una columna si la migración es de la forma "RemoveXXXFromYYY":

```text
$ rails generate migration RemovePublishedAtFromProducts published_at:datetime
```

Al ejecutar el comando generaría la siguiente migración:

```ruby
class RemovePublishedAtFromProducts < ActiveRecord::Migration[5.0]
  def change
    remove_column :products, :published_at, :datetime
  end
end
```

## Ejecutando y reversando migraciones

Para ejecutar las migraciones pendientes ejecuta el siguiente comando en la consola:

```text
$ rails db:migrate
```

Para reversar la última migración ejecuta el siguiente comando:

```text
$ rails db:rollback
```

Para conocer el estado de las migraciones ejecuta:

```text
$ rails db:migrate:status
```

## Instrucciones

Una **migración** no es más que una serie de **instrucciones** escritas en Ruby para modificar el esquema de la base de datos.

Las **instrucciones** se escriben en el método `change` de la migración.

Las **instrucciones** más comunes son: agregar una columna, remover una columna, renombrar una columna y cambiar el tipo de una columna.

### Agregando una columna

Utiliza el método `add_column` para agregar una columna. Como mínimo debes pasarle 3 argumentos: la **tabla** a la que quieres agregarle la columna, el **nombre de la columna** y el **tipo de datos**. Por ejemplo:

```ruby
add_column :products, :published, :boolean
```

`add_column` recibe un cuarto argumento, un hash de opciones, allí puedes pasarle otras opciones, por ejemplo:

```ruby
add_column :products, :published, :boolean, default: false, null: false
add_column :products, :code, :string, limit: 50
```

Para agregar una columna que hace referencia a otra tabla utiliza `add_reference`. Por ejemplo:

```ruby
add_reference :products, :category, foreign_key: { on_delete: :cascade }
```

### Eliminando una columna

Utiliza el método `remove_column` pasándole los mismos argumentos que `add_column`. Por ejemplo:

```ruby
remove_column :products, :published_at, :datetime
```

### Cambiando el nombre de una columna

Utiliza el método `rename_column` para cambiar el nombre de una columna. Por ejemplo, para cambiar el nombre de la columna `published_at` por `published_date`:

```ruby
rename_columna :products, :published_at, :published_date
```

### Cambiando el tipo de datos de una columna

Para cambiar el tipo de datos y otras opciones utiliza el método `change_column`. Como mínimo debes pasarle el nombre de la tabla, el nombre de la columna y el nuevo tipo. Por ejemplo:

```ruby
change_column :products, :published_date, :date
change_column :products, :published, :string, limit: 80
```

Puedes conocer todos los métodos que puedes utilizar como instrucciones en [este enlace](http://api.rubyonrails.org/v5.1.1/classes/ActiveRecord/ConnectionAdapters/SchemaStatements.html).

## Usando `reversible`

Todos los métodos que hemos visto hasta ahora \(`add_column`, `remove_column`, etc.\) son **reversibles**.

Los métodos reversibles saben cómo volver a su estado anterior en caso de que se reverse la migración con `rails db:rollback`.

Algunas migraciones pueden requerir un procesamiento complejo que Active Record no sabe cómo reversar.

Puedes utilizar el método `reversible` para escribir código que se va a ejecutar al migrar y reversar independientemente:

```ruby
class ExampleMigration < ActiveRecord::Migration[5.0]
  def change
    reversible do |dir|
      dir.up do
        puts "Esto se imprime cuando hacen la migración únicamente"
      end

      dir.down do
        puts "Esto se imprime cuando reversan la migración únicamente"
      end
    end
  end
end
```

El método `reversible` es útil para hacer migraciones de datos \(p.e. cuando creas una nueva columna y debes actualizar todos los registros\) o para ejecutar código SQL especial.

Es posible que ahora no necesites esta funcionalidad pero es bueno que sepas que existe!

