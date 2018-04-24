# Creando una Web API

A través de un **Web API** puedes permitir a otras aplicaciones interactuar con tu aplicación.

**API**, por las siglas en Inglés **Application Programming Interface** es, en general, una forma en que un software interactúa con otro software, no necesariamente a través de HTTP. Por ejemplo, a través del [API de jQuery](http://api.jquery.com/) puedes realizar todo tipo de cosas interesantes en el navegador.

Un **Web API** es un tipo de **API** que utiliza el protocolo **HTTP** como forma de comunicación.

Todo lo que has visto hasta ahora te sirve para crear tus propias **Web API's**, la única diferencia es que en vez de recibir información de formularios y renderizar **HTML**, ahora nuestros controladores van a recibir y retornar **JSON**.

## Nuestro primer endpoint

A las URL's que van exponer funcionalidad de nuestra aplicación se les llama **endpoints**.

Por ejemplo, el siguiente controlador permite listar los artículos:

```ruby
class ArticlesController < ApplicationController
  def index
    articles = Articles.all
    render json: articles
  end
end
```

La línea más importante de este código es `render json: articles` que retorna los artículos en formato **JSON** en vez de renderizar una vista normal.

Nuestro archivo `config/routes.rb` tendría configurada la ruta de la siguiente forma:

```ruby
Rails.application.routes.draw do
  resources :tasks, only: [:index]
end
```

Fíjate que esto es igual a lo que ya habías visto antes. La única diferencia es retornar **JSON** en vez de renderizar la vista.

## Probando nuestro primer endpoint

Puedes probar este primer endpoint de varias formas:

1. Utilizando curl, que es una aplicación de la línea de comandos para hacer peticiones HTTP.
2. Descargando [Postman](https://www.getpostman.com/), que es una aplicación gráfica para hacer peticiones HTTP.
3. Haciendo la petición HTTP desde cualquier lenguaje de programación. En Ruby puedes utilizar una gema llamada [HTTParty](https://github.com/jnunemaker/httparty).
4. Cuando estás haciendo llamados GET puedes utilizar el navegador e ingresar la URL.

Veamos cada una de ellas.

### Curl

**Curl** viene instalado en la mayoría de distribuciones de Linux y en Mac. Si estás en Windows deberás instalarlo o utilizar alguna de las otras alternativas que vamos a ver.

Para hacer una petición a nuestro endpoint deberás **abrir otra ventana de la consola** \(recuerda que debes tener prendido el servidor\) y ejecutar el siguiente comando:

```text
$ curl http://localhost:3000/articles
```

El resultado puede variar dependiendo de los registros que tengas en tu aplicación, pero deberás ver una respuesta similar a la siguiente:

```text
[{"id":1,"title":"Artículo 1","body":"Cuerpo del artículo","published":false,"created_at":"2017-07-09T19:54:42.257Z","updated_at":"2017-07-09T19:54:42.257Z"},{"id":2,"title":"Artículo 2","body":"Cuerpo del artículo","published":true,"created_at":"2017-07-09T19:54:56.582Z","updated_at":"2017-07-09T19:54:56.582Z"}]
```

### Postman

Una vez que has descargado e instalado Postman puedes realizar una petición HTTP como se ven en la siguiente imagen:

![Postman](https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/postman-get-articles.jpg)

### HTTParty

Primero debes descargar la gema ejecutando:

```text
$ gem install httparty
```

Después abre IRB y ejecuta lo siguiente:

```text
$ irb
> require 'httparty'
 => true
> response = HTTParty.get("http://localhost:3000/articles")
  => ...
> response.parsed_response
 => [{"id"=>1, "title"=>"Artículo 1", "body"=>"Cuerpo del artículo", "published"=>false, "created_at"=>"2017-07-09T19:54:42.257Z", "updated_at"=>"2017-07-09T19:54:42.257Z"}, {"id"=>2, "title"=>"Artículo 2", "body"=>"Cuerpo del artículo", "published"=>true, "created_at"=>"2017-07-09T19:54:56.582Z", "updated_at"=>"2017-07-09T19:54:56.582Z"}]
```

### Con el navegador

Como nuestro **endpoint** sólo retorna **JSON** puedes abrir en tu navegador la URL `http://localhost:3000/articles` y verás la respuesta en formato **JSON**.

![Browser](https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/browser-get-articles.jpg)

Sin embargo, esto sólo es posible para llamados `GET`.

## Completando el API

Veamos ahora los endpoints de crear, editar y eliminar artículos:

```ruby
class ArticlesController < ApplicationController
  protect_from_forgery with: :null_session

  def index
    articles = Article.all
    render json: articles
  end

  def create
    article = Article.new(article_params)
    if article.save
      render json: article
    else
      render json: { errors: article.errors }, status: 422
    end
  end

  def update
    article = Article.find(params[:id])
    if article.update(article_params)
      render json: article
    else
      render json: { errors: article.errors }, status: 422
    end
  end

  def destroy
    article = Article.find(params[:id])
    article.destroy

    head :no_content
  end

  private
    def article_params
      params.require(:article).permit(:title, :body, :published)
    end
end
```

Fíjate la línea `protect_from_forgery with: :null_session` al principio de la clase. Esto es importante para que Rails no haga la verificación normal sobre los formularios y nos permita crear y editar artículos.

En `config/routes.rb` configuraríamos nuestras rutas así:

```ruby
Rails.application.routes.draw do
  resources :articles, only: [:index, :create, :update, :destroy]
end
```

Eso va a crear los siguientes **endpoints**:

```text
GET /articles
POST /articles
PATCH /articles/:id
DELETE /articles/:id
```

El primer **endpoint** lo probamos anteriormente de varias formas, veamos cómo podemos ahora probar los demás desde [HTTParty](https://github.com/jnunemaker/httparty).

Para crear un nuevo artículo podemos hacer la siguiente petición:

```ruby
HTTParty.post("http://localhost:3000/articles",
    body: { title: "Otro artículo", body: "El cuerpo", published: true }.to_json,
    headers: { "Content-Type" => "application/json" })
```

Para editar un artículo podemos hacer la siguiente petición asumiendo que existe el artículo con `id` 1:

```ruby
HTTParty.patch("http://localhost:3000/articles/1",
    body: { title: "Cambia", body: "Cambia el cuerpo", published: true }.to_json,
    headers: { "Content-Type" => "application/json" })
```

Para eliminar un artículo podemos hacer la siguiente petición asumiendo que existe el artículo con `id` 1:

```ruby
HTTParty.delete("http://localhost:3000/articles/1")
```

## Autenticación

Existen varias formas de asegurar un **API** pero una de las más comunes y fáciles de implementar es **HTTP Basic**, que fue una de las primeras formas de autenticación en la Web.

**Ruby on Rails** incluye un método llamado `authenticate_or_request_with_http_basic` para implementar **HTTP Basic**. Por ejemplo, podemos asegurar un controlador de la siguiente forma:

```ruby
class ProductsController < ApplicationController
  before_action :basic_auth

  # acá van todas las acciones

  private
    def basic_auth
      authenticate_or_request_with_http_basic do |user, password|
        # Verificar user y password. Por ejemplo (aunque no lo recomendamos):
        user == "german" && password == "test1234"
      end
    end
end
```

En la **línea 2** agregamos un `before_action` que va a ejecutar el método `basic_auth` antes de cada acción.

En la **línea 7** estamos definiendo el método que hace uso de `authenticate_or_request_with_http_basic` para verificar el usuario y la contraseña.

La **línea 9** es la que hace la validación. Sin embargo, en este ejemplo tenemos quemados los valores del usuario y la contraseña, más adelante vamos a ver cómo integrar Devise.

Si la autenticación falla se va a retornar un código `401 Unauthorized`.

**HTTP Basic** utiliza un encabezado llamado `Authorization` que incluye el nombre de usuario y el password en [Base64](https://en.wikipedia.org/wiki/Base64). Por ejemplo:

```text
Authorization: Basic QWxhZGRpbjpPcGVuU2VzYW1l
```

Aunque es posible generar este encabezado manualmente, la mayoría de herramientas y librerías HTTP ofrecen algún mecanismo para incluir las credenciales y generar el encabezado. Por ejemplo, en curl se utiliza la opción `--user` o `-u`:

```text
$ curl --user german:test1234 http://localhost:3000/products
```

### Integración con Devise

Puedes autenticar a los usuarios de Devise por **HTTP Basic** como lo explican en [este artículo](https://github.com/plataformatec/devise/wiki/How-To:-Use-HTTP-Auth-Basic-with-Devise).

Sin embargo, como decíamos anteriormente, no es buena idea utilizar la misma contraseña Web para el API. Una opción es utilizar una gema como [devise\_token\_auth](https://github.com/lynndylanhurley/devise_token_auth) o puedes implementarlo tu mismo\(a\) siguiendo estos pasos:

1. Debemos agregar un campo `auth_token` al modelo de Devise. Por ejemplo:

   ```text
    $ rails g migration add_auth_token_to_users auth_token
   ```

2. En el modelo `User` debemos generar el token cuando se crea el usuario utilizando un método que incluye Rails llamado `has_secure_token`:

   ```ruby
    class User < ApplicationRecord
      has_secure_token :auth_token

      ...
    end
   ```

3. Implementar el método que hace la verificación en `ApplicationController` \(de esa forma lo podemos utilizar desde varios controladores\)

   ```ruby
    def basic_auth
      authenticate_or_request_with_http_basic do |username, token|
        user = User.find_by_email(username)
        if user.auth_token == token
          sign_in user
        end
      end
    end
   ```

