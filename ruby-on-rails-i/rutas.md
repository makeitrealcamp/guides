# Rutas

Las rutas se definen en el archivo `config/routes.rb`.

La ruta debe especificar:

* El **verbo HTTP**.
* El **path**.
* El **controlador** y el **método \(acción\)** que se van a encargar de procesar la petición que coincida.

Por ejemplo, la siguiente ruta:

```ruby
get '/welcome/index', to: 'welcome#index'
```

tiene los siguientes elementos:

* Utiliza el verbo `GET`.
* Utiliza el path `/welcome/index`
* El método `index` del controlador `welcome_controller.rb` se va a encargar de procesar la acción.

Otras formas de definir la misma ruta son:

```ruby
get '/welcome/index' => 'welcome#index'
get '/welcome/index' # Rails infiere el controlador y el método de la ruta
```

## Variables de path

Al igual que con **Sinatra** es posible definir variables en las rutas que después podemos obtener el hash `params`. Por ejemplo:

```ruby
get '/hello/:name', to: "welcome#hello"
```

En el controlador utilizamos el hash `params` para obtener la variable `:name`:

```ruby
class WelcomeController < ApplicationController
  def hello
    @name = params[:name]
  end
end
```

**Nota:** Aunque en la vista también podemos acceder el hash `params`, en general se recomienda pasar la información a través **variables de instancia**.

## Nombrando las rutas

Es posible darle un nombre a cada ruta para no tener que usar el path \(p.e. `/welcome/index`\) en vínculos y redireccionamientos.

El nombre se le da con la opción `as` como se muestra en el siguiente ejemplo:

```ruby
get '/welcome/index', to: 'welcome#index', as: "welcome"
```

De esa forma, ahora podemos utilizar el nombre seguido de `_path` o `_url` \(p.e. `welcome_path` o `welcome_url`\).

```ruby
welcome_path # /welcome/index
welcome_url  # http://localhost:3000/welcome/index
```

En general utiliza `_path` a menos de que estés compartiendo un link en correos o quieras mostrar el URL completo.

Puedes usar el nombre de la ruta en vínculos así:

```text
<a href="<%= welcome_path %>">Ir al Home</a>
```

De hecho Rails viene con un método de ayuda que vamos a ver más adelante llamado `link_to` que te permite crear vínculos de la siguiente forma:

```text
<%= link_to "Ir al home", welcome_path %>
```

Esta última es la forma en la que se recomienda hacer vínculos internos en la aplicación.

## Listando las rutas

Si quieres ver una lista de todas las rutas de la aplicación puedes utilizar el comando `rails routes` desde la consola \(o `rake routes` si estás utilizando una versión de Rails menor a la 5\):

```text
$ rails routes
       Prefix Verb URI Pattern              Controller#Action
welcome_index GET  /welcome/index(.:format) welcome#index
```

El `Prefix` es el nombre de la ruta. Por defecto Rails le pone un nombre a la ruta así no hayamos utilizado `as`.

