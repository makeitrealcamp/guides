# Layouts y rendering

Por defecto todas las vistas utilizan el layout ubicado en `app/views/layouts/application.html.erb`.

Dentro de ese archivo `application.html.erb` vas a encontrar la palabra `yield`. En esa línea es la que se reemplaza por el contenido de cada vista.

## Cambiando el layout

Existen varias formas de cambiar el layout que se va a utilizar al renderizar una vista:

### 1. Creando un layout que se llame igual al controlador

Por defecto Rails busca un archivo en `app/views/layouts` que se llame igual al controlador.

Por ejemplo, si el controlador es `pages_controller.rb`, Rails busca el archivo `app/views/layouts/pages.html.erb` y utiliza ese archivo como layout para todas las acciones de ese controlador.

De lo contrario utiliza `application.html.erb`.

### 2. Cambiando el layout en el controlador

Puedes definir el layout que van a utilizar todas las acciones de un controlador de la siguiente forma:

```ruby
class PagesController < ApplicationController
  layout "mi_layout"

  ...
end
```

La línea `layout "mi_layout"` le está diciendo a Rails que utilice el archivo `app/views/layouts/mi_layout.html.erb` como layout de todas las acciones de ese controlador.

Puedes agregar condiciones para que el layout solo aplique a algunas acciones o excluya otras. Por ejemplo, con la siguiente línea el layout `mi_layout.html.erb` sólo va a aplicar a las acciones `index` y `new` del controlador.

```ruby
layout "mi_layout", only: [:index, :new]
```

También puedes excluir acciones. La siguiente línea utilizará el layout `mi_layout.html.erb` para todas las acciones exceptuando `index`:

```ruby
layout "mi_layout", except: [:index]
```

Puedes evitar que las acciones de un controlador utilicen un layout con la siguiente línea:

```ruby
layout false
```

### 3. Cambiando el layout en una acción

También es posible cambiar el layout de una acción particular utilizando `render` \(del que vamos a hablar en detalle más adelante\):

```ruby
class PagesController < ApplicationController
  def index
    render layout: "mi_layout"
  end
end
```

Cuando se llame esta acción se va a utilizar el layout `app/views/layouts/mi_layout.html.erb` para renderizar la vista `app/views/pages/index.html.erb`.

Para evitar que se utilice un layout para renderizar la vista utilizarías:

```ruby
class PagesController < ApplicationController
  def index
    render layout: false
  end
end
```

## Renderizando y redireccionando

Por defecto, cuando se ejecuta la acción de un controlador, Rails renderiza una vista **que se llame igual a la acción \(al método\) y se encuentre en una carpeta que se llame igual al controlador** dentro de `app/views`.

Por ejemplo, cuando se ejecute la acción `index` del controlador `pages_controller.rb` por defecto se va a intentar renderizar la vista `app/views/pages/index.html.erb`.

Puedes cambiar ese comportamiento de varias formas:

### 1. Utilizando `render`

El método `render` lo utilizamos antes para cambiar el layout. Sin embargo, también lo puedes utilizar para renderizar HTML o una vista diferente.

Para renderizar HTML:

```ruby
class PagesController < ApplicationController
  def index
    render html: "<h1>Hola Mundo</h1>"
  end
end
```

Para renderizar una vista diferente:

```ruby
class PagesController < ApplicationController
  def index
    render "mi_vista" # también funciona: render :mi_vista
  end
end
```

En este caso, en vez de intentar renderizar `app/views/pages/index.html.erb` se va a renderizar `app/views/pages/mi_vista.html.erb`.

Si la vista se encuentra en otra carpeta puedes utilizar:

```ruby
render "products/index" # renderiza app/views/products/index.html.erb
```

Por defecto Rails utiliza el código de respuesta `200 OK` pero puedes cambiarlo con la opción `status`:

```ruby
render status: 200
# render status: :ok
```

Cada código tiene su símbolo correspondiente, puedes encontrar la lista completa en [este enlace](http://guides.rubyonrails.org/layouts_and_rendering.html#the-status-option).

### 2. Utilizando `redirect_to` para redireccionar

Para redireccionar a otra ruta de tu aplicación o a un sitio externo utiliza el método `redirect_to`. Por ejemplo, la siguiente línea redireccionaría al usuario a `/products`:

```ruby
redirect_to products_path
```

Para redireccionar a un sitio externo simplemente utiliza la URL del sitio de la siguiente forma:

```ruby
redirect_to "http://www.google.com/"
```

