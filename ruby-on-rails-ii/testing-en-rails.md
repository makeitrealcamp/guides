# Testing en Rails

Por defecto **Ruby on Rails** utiliza Minitest para crear pruebas automatizadas.

En la carpeta `test` de cada proyecto encontrarás las siguientes carpetas y archivos:

* `controllers` - contiene las pruebas para los controladores.
* `fixtures` - define los datos iniciales para las pruebas.
* `helpers` - contiene las pruebas para los helpers.
* `integration` - contiene las pruebas de integración.
* `mailers` - contiene las pruebas de emails.
* `models` - contiene las pruebas de modelos.
* `test_helper.rb` - la configuración de Minitest.

## Ambiente de testing

Rails trae tres ambientes, cada uno con su base de datos independiente y su archivo de configuración independiente: **development**, **test** y **production**:

* El archivo de configuración de **test** es: `config/environments/test.rb`.
* En el Gemfile, las gemas que estén en el grupo **test** solo están disponibles en ese ambiente.
* En el archivo `config/database.yml` se encuentra la configuración de la base de datos de pruebas bajo la llave **test**.

## Pruebas de modelos

Al crear un modelo con `rails g model`, se crean también:

* Un archivo de prueba en la carpeta `test/models` \(p.e. `article_test.rb`\).
* Un archivo para definir los datos iniciales en `test/fixtures` \(p.e. `articles.yml`\).

Lo principal que se debe probar en los modelos es:

* Validaciones.
* Scopes.
* Métodos con lógica.

Veamos un ejemplo de pruebas de modelo:

```ruby
require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  test "article is not created without a title" do
    article = Article.new
    assert_not article.save
  end

  test ".word_count returns the correct number of words" do
    article = Article.new(body: “Hola mundo. Esto es una prueba!”)
    assert_equal 6, article.word_count
  end

  test "published scope only returns published articles" do
    articles = Article.published
    assert_equal 1, articles.length

    assert_equal articles(:published).id, articles[0].id
  end
end
```

## Fixtures

Son archivos, escritos en formato YAML, que utiliza Rails para poblar la base de datos antes de ejecutar los tests. Existe un **fixture** por modelo.

Por ejemplo, si tenemos un modelo `Author`, debemos agregar los fixtures en `test/fixtures/authors.yml`:

```text
pedro:
  email: pedro@gmail.com
  name: Pedro Perez
```

En este ejemplo estamos definiendo **un registro** que llamamos `pedro` con valores para las columnas `email` y `name`.

Ahora, en las pruebas, nos podemos referir a ese registro como `authors(:pedro)`. Por ejemplo:

```ruby
test "pedro has the expected email" do
  assert_equal "pedro@gmail.com", authors(:pedro).email
end
```

Puedes agregar varios registros en un mismo archivo. Por ejemplo, si tenemos un modelo `Article` podemos crear varios registros en `test/fixtures/articles.yml`:

```text
published:
  title: Prueba 1
  body: Cuerpo 1
  published: true

unpublished:
  title: Prueba 2
  body: Cuerpo 2
  published: false
```

En este caso nos podemos referir a cada registro de la siguiente forma:

```ruby
articles(:published)
articles(:unpublished)
```

### Definiendo relaciones

En los **fixtures** puedes definir relaciones entre los modelos. Por ejemplo, si tenemos un modelo `Article` que pertenece a un `Author`, los podemos relacionar de la siguiente forma.

En el archivo `authors.yml`:

```text
pedro:
  email: pedro@gmail.com
  name: Pedro Perez
```

En el archivo `articles.yml` podemos relacionar el autor utilizando el nombre del registro:

```text
published:
  author: pedro
  title: Prueba 1
  body: Cuerpo 1
  published: true
```

Si la relación de `Author` y `Article` fuera una relación muchos a muchos se haría de la siguiente forma:

```text
published:
  author: pedro, pablo, luis
  title: Prueba 1
  body: Cuerpo 1
  published: true
```

La principal regla sobre los fixtures es nunca definir los `id`s directamente, Rails se encarga de eso automáticamente.

## Pruebas de controlador

Las pruebas de controlador se encuentran en la carpeta `test/controllers`.

En este tipo de pruebas se **simula** una petición HTTP como si viniera del navegador.

Lo principal que se debe probar en los controladores es:

* La seguridad. Que los usuarios sólo puedan ingresar a los recursos a los que tienen permisos.
* Que cada acción del controlador retorne lo que esperamos.
* Que las acciones de crear, editar y eliminar, creen editen y eliminen correctamente los registros.
* Que las acciones de crear, editar y eliminar, no creen, editen o eliminen cuando la información que se les pasa no es valida.

Ejemplo que se encontraría en `test/controllers/articles_controller_test.rb`:

```ruby
require 'test_helper'

class ArticlesControllerTest < ActionDispatch::IntegrationTest
  test "get index: is successful" do
    get articles_path
    assert_response :success
  end

  test "post create: creates an article"
    assert_difference 'Article.count', 1 do
      post articles_path, params: { article: { body: "El cuerpo", published: false, title: "El título" } }
    end

    assert_redirected_to article_url(Article.last)
  end
end
```

### Métodos disponibles

La clase `ActionDispatch::IntegrationTest`, de la cuál extienden las pruebas de controlador, exponen los métodos `get`, `post`, `patch`, `put` y `delete` para hacer las pruebas de controladores.

Ejemplos:

```ruby
get "/articles"
get articles_path
get articles_path, params: { query: "batman" },
    headers: { "HTTP_AUTHORIZATION" => "..." }
```

Igual para los demás métodos.

### Assertions adicionales

Los siguientes son assertions adicionales que ofrece la clase `ActionDispatch::IntegrationTest`, de la cuál extienden las pruebas de controlador:

* `assert_difference`: verifica que una expresión \(p.e. `Articles.count`\) haya cambiado por una diferencia definida. Por ejemplo:

  ```ruby
    assert_difference 'Articles.count', 2 do
      Article.create(title: "Título 1", body: "Cuerpo", published: true)
      Article.create(title: "Título 2", body: "Cuerpo", published: false)
    end
  ```

* `assert_response`: verifica que la respuesta a una petición HTTP tenga el código de respuesta esperado. Puedes pasarle el código especifico \(p.e. 200\) o alguna de las siguientes símbolos:
  * `:success` - el código de respuesta está en el rango de 200 a 299 \(exitoso\).
  * `:redirect` - el código de respuesta está en el rango de 300 a 399 \(redirección\).
  * `:missing` - el código de respuesta fue 404.
  * `:error` - el código de respuesta está en el rango de 500 a 599 \(error del servidor\).
* `assert_redirected_to`: verifica que la petición haya sido redireccionada a determinada ruta.

### Assertions para las vistas

Existen dos formas que puedes utilizar para verificar que la vista contenga el contenido y los elementos que esperamos.

La primera forma es utilizar el método `body` que trae, como una cadena de texto \(string\), todo el resultado. Por ejemplo:

```ruby
get articles_path
assert body.include?("Título 1")
```

Una mejor forma es utilizar el método `assert_select` que recibe un selector y, opcionalmente, un texto:

```ruby
get articles_path
assert_select "table.articles"
assert_select "h1", "Artículos"
```

## Integración con Devise

Para configurar [Devise](https://github.com/plataformatec/devise) en Minitest agrega lo siguiente al final del archivo `test/test_helper.rb`:

```ruby
class ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers
end
```

Ahora podemos utilizar el método `sign_in` en nuestras pruebas. Por ejemplo, en `test/controllers/articles_controller_test.rb`:

```ruby
test "get index is successful if user is authenticated" do
  sign_in users(:pedro)

  get articles_path
  assert_response :success
end
```

## Envío de emails

El envío de emails se puede probar de forma aislada \(pruebas unitaria\) o dentro de nuestras otras pruebas \(pruebas de integración\).

El objetivo de las pruebas relacionadas con emails es asegurarse de que:

* Los emails están son creados y enviados.
* El contenido del email es el correcto \(asunto, para, de, cuerpo, etc.\).
* Los emails correctos se están enviando en los momentos correctos.

### Pruebas unitarias

Cuando creas un email utilizando el generador de Rails se crea un nuevo archivo en la carpeta `test/mailers`. Por ejemplo para una clase `UserMailer` vas a encontrar un archivo llamado `user_mailer_test.rb`.

Veamos un ejemplo de lo podríamos probar en ese archivo:

```ruby
require 'test_helper'

class UserMailerTest < ActionMailer::TestCase
  test "invite" do
    # Guardamos el email para futuros assertions
    email = UserMailer.create_invite('me@example.com',
                                     'friend@example.com', Time.now)

    # Enviar el email y verificar que fue encolado
    assert_emails 1 do
      email.deliver_now
    end

    # Verificar que el contenido es el esperado
    assert_equal ['me@example.com'], email.from
    assert_equal ['friend@example.com'], email.to
    assert_equal 'You have been invited by me@example.com', email.subject
    assert_equal read_fixture('invite').join, email.body.to_s
  end
```

Primero llamamos la clase `UserMailer` para enviar el email. Luego verificamos si el email es enviado utilizando el assertion `assert_emails`. Por último verificamos que el `from`, `to`, `subject` y el `body` sean los esperados.

Fíjate que la última línea de la prueba utiliza un método llamado `read_fixture`. Esto se utiliza para guardar la respuesta que esperamos dentro de un archivo, que en este caso debería llamarse `invite` y estar ubicado en la carpeta `test/fixtures/user_mailer/`:

```text
Hola friend@example.com,

Has sido invitado.

Saludos!
```

### Pruebas de integración

Cuando algún controlador o modelo envía emails, queremos verificar que efectivamente sean enviados. Para eso utiliza el método `ActionMailer::Base.deliveries`, que retorna **un arreglo** de emails que se han enviado en la prueba:

```ruby
require 'test_helper'

class UserControllerTest < ActionDispatch::IntegrationTest
  test "invite friend" do
    assert_difference 'ActionMailer::Base.deliveries.size', +1 do
      post invite_friend_url, params: { email: 'friend@example.com' }
    end
    invite_email = ActionMailer::Base.deliveries.last

    assert_equal "Has sido invitado por me@example.com", invite_email.subject
    assert_equal 'friend@example.com', invite_email.to[0]
    assert_match(/Hola friend@example.com/, invite_email.body.to_s)
  end
end
```

## Pruebas de aceptación con Capybara

Las pruebas de aceptación son las _más completas_ pero al mismo tiempo las _más lentas_.

Son lentas porque corren sobre un navegador. Por defecto se utiliza un emulador de un navegador, pero es posible ejecutarlas sobre Chrome o Firefox.

Las pruebas de aceptación se crean en la carpeta `test/integration/`.

Para crear pruebas de integración se utiliza una gema llamada [Capybara](https://github.com/teamcapybara/capybara) que trae métodos para manipular el navegador como `visit`, `click_link` y `fill_in`. Por ejemplo:

```ruby
test "user can register" do
  visit root_path
  click_link "Registrarse"

  fill_in "Email", with: "test@example.com"
  fill_in "Contraseña", with: "test1234"
  click_button "Registrarse"

  assert_equal articles_path, current_path
end
```

La sugerencia es utilizar pruebas de aceptación para las funcionalidades críticas de la aplicación únicamente, y sólo el escenario normal en cada prueba.

### Configuración

Para configurar [Capybara](https://github.com/teamcapybara/capybara) debes incluir la gema en el grupo `test` de tu `Gemfile`. Por ejemplo:

```ruby
group :test do
  gem 'capybara'
end
```

En el archivo `test/test_helper.rb` debes agregar la siguiente línea después de los demás `require`:

```ruby
require 'capybara/rails'
```

También debes incluir la siguiente línea dentro de la clase `ActionDispatch::IntegrationTest`:

```ruby
include Capybara::DSL
```

### Métodos útiles

Para navegar utiliza el método `visit`:

```ruby
visit "/articles"
visit articles_path
```

Para hacer click sobre links o botones:

```ruby
click_link "Texto del Link"
click_link "id-del-link"

click_button "Texto del Botón"
click_button "id-del-botón"

click_on "Guardar" # puede ser link o botón
```

Para interactuar con formularios:

```ruby
fill_in 'First Name', with: 'John'

check 'A checkbox'
uncheck 'A checkbox'

choose 'A radio button'

select 'Option', from: 'Select box'
unselect 'Option', from: 'Select box'

attach_file 'Image', '/path/to/image.jpg'
```

Para verificar si existe el contenido o algún elemento:

```ruby
has_content?("Hola mundo")
has_no_content?("Hola mundo")

has_css?(".mi-selector")
has_no_css?(".mi-selector")
```

Para buscar elementos:

```ruby
find("#mi-selector").click

find_field("Nombre").value
find_field(id: "name").value
```

Para limitar las acciones o las búsquedas:

```ruby
within("#my-modal") do
  fill_in "Name", with: "Pedro"
end
```

