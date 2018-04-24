# Arquitectura

**Ruby on Rails** usa un concepto llamado [convención sobre configuración](http://es.wikipedia.org/wiki/Convención_sobre_Configuración) para que la estructura de todos los proyectos sea similar y escribamos menos código.

La desventaja de la [convención sobre configuración](http://es.wikipedia.org/wiki/Convención_sobre_Configuración) es que muchas cosas en Rails parecen magia para los principiantes.

Los componentes más importantes de **Ruby on Rails** son:

* El enrutador \(el archivo `config/routes.rb`\).
* Los controladores \(en `app/controllers`\).
* Las vistas \(en `app/views`\).
* ActiveRecord \(la capa de acceso a la base de datos\).
* La aplicación de consola.

## El enrutador

El **enrutador** es el componente que decide qué **controlador** y **método** va a procesar una petición HTTP.

El **enrutador** se configura en el archivo `config/routes.rb`.

Hay varias formas de definir las rutas. Veamos la más genérica:

```ruby
get '/products', to: 'products#index'
```

En este ejemplo estamos diciendo que cuando alguien haga una petición a `GET /products` el método `index` del controlador `ProductsController` \(ubicado en `app/controllers/products_controller.rb`\) es el que se va a encargar de procesar la petición.

Otra forma equivalente es utilizar el operador `=>` \(hashrocket\) de la siguiente forma:

```ruby
get '/products' => 'products#index'
```

No importa cuál forma utilices, lo importante es ser consistente en cada proyecto.

Por último, es posible omitir el controlador y el método **siempre y cuando la ruta tenga la forma **`/<controlador>/<método>`. Por ejemplo, la siguiente línea utilizará el método `index` del controlador `ProductsController`.

```ruby
get '/products/index'
```

## Los controladores

Los **controladores** son clases de Ruby que extienden `ApplicationController` y tienen métodos que son los que se van a encargar de procesar las peticiones HTTP.

```ruby
class ProductsController < ApplicationController
  def index
    render html: "<h1>Hola Mundo</h1>".html_safe
  end
end
```

En este ejemplo estamos renderizando el HTML `<h1>Hola Mundo</h1>`.

El método `html_safe` es necesario para decirle a Rails que no **escape** el código HTML.

## Las vistas

Al igual que en **Sinatra** podemos utilizar vistas para no tener que escribir todo el código HTML en el código Ruby.

Por convención Rails renderiza una vista por defecto que se debe encontrar en una ubicación específica y se debe llamar de una forma específica:

* El nombre del archivo debe ser igual al método seguido de `.html.erb` \(generalmente\).
* Se debe ubicar en la carpeta `app/views` dentro de una carpeta que se llame igual al controlador.

Por ejemplo, el método `index` del siguiente **controlador** va a intentar renderizar la vista `app/views/products/index.html.erb`:

```ruby
class ProductsController < ApplicationController
  def index
  end
end
```

### Pasando información del controlador a la vista

Al igual que con **Sinatra** cualquier variable de instancia va a ser visible en la vista. Por ejemplo, si en el controlador tenemos lo siguiente:

```ruby
class ProductsController < ApplicationController
  def index
    @name = "Pedro"
  end
end
```

Podemos utilizar esa información en la vista \(que debe estar ubicada en `app/views/products/index.html.erb`\) de la siguiente forma:

```text
<h1>Hola <%= @name %></h1>
```

## ActiveRecord

**ActiveRecord** es la capa que nos permite acceder y manipular la información de la base de datos sin necesidad de escribir \[SQL \(Structured Query Language\)\]\(SQL \(Structured Query Language\)\).

## La aplicación de consola

Una de las razones por las que **Ruby on Rails** es tan popular es que trae una poderosa aplicación de consola que nos permite, entre otras cosas, generar código a través de comandos llamados **generadores**.

En las siguientes secciones veremos estos componentes en más detalle.

