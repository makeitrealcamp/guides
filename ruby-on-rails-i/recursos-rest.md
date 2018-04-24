# Recursos REST

REST es una forma particular de **definir las rutas HTTP** para hacer el CRUD de los **modelos** en nuestra aplicación Web.

A los **modelos** también se les conoce como **recursos**.

Por ejemplo, las rutas para hacer el CRUD de un **modelo** `Product` serían las siguientes:

| Verbo | Path | Controlador\#Acción | Descripción |
| --- | --- | --- | --- |
| GET | /products | products\#index | muestra la lista de productos |
| GET | /products/new | products\#new | muestra el formulario para crear un producto |
| POST | /products | products\#create | crea un nuevo producto |
| GET | /products/:id | products\#show | muestra los detalles de un producto |
| GET | /products/:id/edit | products\#edit | muestra el formulario para editar un producto |
| PATCH/PUT | /products/:id | products\#update | actualiza un producto |
| DELETE | /products/:id | products\#destroy | eliminar un producto |

## Definiendo las rutas de un recurso

Para definir las rutas de un recurso en `config/routes.rb` se utiliza la palabra `resources`:

```ruby
resources :products
```

La línea anterior es equivalente a las siguientes 8 rutas:

```ruby
get "/products", to: "products#index"
get "/products/new", to: "products#new"
post "/products", to: "products#create"
get "/products/:id", to: "products#show"
get "/products/:id/edit", to: "products#edit"
put "/products/:id", to: "products#update"
patch "/products/:id", to: "products#update"
delete "/products/:id", to: "products#destroy"
```

Para actualizar un recurso podemos utilizar el verbo `PUT` o `PATCH`.

## Utilizando el generador de recursos

Así como desde la consola podemos generar un modelo y un controlador, existe un generador que nos permite crear un recurso, que genera el modelo y el controlador.

Por ejemplo, para generar el recurso de productos, es decir, el modelo `Product` y el controlador `ProductsController` utilizaríamos el siguiente comando:

```text
$ rails g resources products name  description:text price:decimal
```

Ese comando genera, entre otros, lo siguiente:

* El modelo `Product` en `app/models/product.rb`
* La migración que se va a utilizar para crear la tabla.
* El controlador en `app/controllers/products_controller.rb`
* El archivo `products.scss` en `app/assets/stylesheets/`.
* El archivo `products.coffee` en `app/assets/javascripts/`.
* La línea `resources :products` en `config/routes.rb`.

No olvides correr la migración:

```text
$ rails db:migrate
```

## El controlador y las vistas de un recurso

El controlador de un recurso está compuesto de las siguientes acciones \(métodos\):

* `index` para mostrar la lista de registros.
* `show` para mostrar los detalles de un registro.
* `new` para mostrar el formulario de creación.
* `create` para crear un registro.
* `edit` para mostrar el formulario de edición.
* `update` para actualizar un registro.
* `destroy` para eliminar un registro.

Veamos cómo se implementaría cada una de estas acciones para un modelo `Product`.

### Listando registros

El método `index` en el controlador `ProductsController` quedaría de la siguiente forma:

```ruby
def index
  @products = Product.all
end
```

Y la vista en `app/views/products/index.html.erb`:

```text
<h1>Productos</h1>
<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Descripción</th>
      <th>Precio</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <% @products.each do |product| %>
      <tr>
        <td><%= product.name %></td>
        <td><%= product.description %></td>
        <td><%= product.price %></td>
        <td>
          <%= link_to "Mostrar", product %>
          <%= link_to "Editar", edit_product_path(product) %>
          <%= link_to "Eliminar", product, method: :delete, data: { confirm: "¿Estás seguro de eliminar este producto?" } %>
        </td>
      </tr>
    <% end %>
  </tbody>
</table>
```

### Mostrando los detalles de un registro

El método `show` quedaría de la siguiente forma:

```ruby
def show
  @product = Product.find(params[:id])
end
```

Y la vista en `app/views/products/show.html.erb` quedaría de la siguiente forma:

```text
<h1>Detalles del Producto</h1>
<div>Nombre: <%= @product.name %></div>
<div>Descripción: <%= @product.description %></div>
<div>Precio: <%= @product.price %></div>
```

### Mostrando el formulario de creación

La creación de un registro se divide en dos: la ruta que muestra el formulario y la ruta que inserta el registro en la base de datos cuando alguien llena el formulario.

Para mostrar el formulario se utiliza el método `new` que se implementaría de la siguiente forma:

```ruby
def new
  @product = Product.new
end
```

Y la vista en `app/views/products/new.html.erb` sería la siguiente:

```text
<%= form_for @product do |f| %>
  <div>
    <%= f.label :name %><br>
    <%= f.text_field :name %>
  </div>
  <div>
    <%= f.label :description %><br>
    <%= f.text_area :description %>
  </div>
   <div>
    <%= f.label :price %><br>
    <%= f.number_field :price %>
  </div>

  <div>
    <%= f.submit %>
  </div>
<% end %>
```

### Creando un registro

Para crear el registro necesitamos implementar el método `create` y un método de ayuda `product_params`:

```ruby
def create
  @product = Product.new(product_params)
  if @product.save
    redirect_to products_path
  else
    render :new
  end
end

private
  def product_params
    params.require(:product).permit(:name, :description, :price)
  end
```

La razón por la que tuvimos que crear ese método de ayuda es por un tema de seguridad. Ese método está filtrando la información que queremos que se pueda cambiar directamente. A esto se le conoce como **strong parameters**.

No necesitamos una vista para esta acción.

### Mostrando el formulario de edición

Para mostrar el formulario de editar se utiliza el método `edit` que se implementaría de la siguiente forma:

```ruby
def edit
  @product = Product.find(params[:id])
end
```

Y la vista en `app/views/products/edit.html.erb` sería la siguiente:

```text
<%= form_for @product do |f| %>
  <div>
    <%= f.label :name %><br>
    <%= f.text_field :name %>
  </div>
  <div>
    <%= f.label :description %><br>
    <%= f.text_area :description %>
  </div>
   <div>
    <%= f.label :price %><br>
    <%= f.number_field :price %>
  </div>

  <div>
    <%= f.submit %>
  </div>
<% end %>
```

El formulario de edición es igual al de creación, así que una buena práctica es moverlo a un partial `_form.html.erb`.

### Actualizando un registro

Para actualizar el registro necesitamos implementar el método `update` y el método de ayuda `product_params` que ya creamos previamente:

```ruby
def update
  @product = Product.find(params[:id])
  if @product.update(product_params)
    redirect_to products_path
  else
    render :edit
  end
end
```

No necesitamos una vista para esta acción.

### Eliminando un registro

Para eliminar un registro necesitamos implementar el método `destroy`:

```ruby
def destroy
  product = Product.find(params[:id])
  product.destroy

  redirect_to products_path
end
```

## Limitando las acciones

Para limitar las rutas y acciones de un recurso utiliza la opción `only` o `except` de `resources` en `config/routes.rb`:

```ruby
resources products, only: [:index, :new, :create]
resources articles, except: [:destroy]
```

En este caso, para **products** sólo se generarían 3 rutas: la de listar, la de mostrar el formulario y la de crear.

Para **resources** se generarían todas excepto la de eliminar.

## Notificaciones

Para mostrar notificaciones de éxito al crear, editar y eliminar registros utilizando el `flash`.

Por ejemplo, para mostrar una notificación de éxito al eliminar un producto:

```ruby
def destroy
  product = Product.find(params[:id])
  product.destroy

  flash[:notice] = "El producto ha sido eliminado exitosamente"
  redirect_to products_path
end
```

El `notice` también se puede agregar directamente sobre el `redirect_to`:

```ruby
redirect_to products_path, notice: "El producto ha sido eliminado exitosamente"
```

### Mostrando las notificaciones

Puedes agregar el siguiente código donde quieres que aparezcan los mensajes de flash en el layout `app/views/layouts/application.html.erb`:

```text
<% flash.each do |name, msg| -%>
  <%= content_tag :div, msg, class: name %>
<% end -%>
```

## Filtros

Puedes ejecutar métodos que se ejecutan **antes** o **después** de una acción de un controlador utilizando `before_action` y `after_action`.

Por ejemplo, podemos verificar si los usuarios ya están autenticados con un `before_action`:

```ruby
class ApplicationController < ActionController::Base
  before_action :require_login

  private
    def require_login
      unless logged_in?
        flash[:error] = "You must be logged in to access this section"
        redirect_to new_login_url # halts request cycle
      end
    end
  end
```

Si haces un `render` o `redirect_to` en un `before_action` la acción no se ejecuta.

Los filtros son heredados, así que si defines el filtro en `ApplicationController` se va a ejecutar en todos los controladores de la aplicación.

### Limitando el alcance de los filtros

Puedes limitar las acciones a las que aplica un filtro utilizando las opciones `only` o `except`.

Por ejemplo:

```ruby
before_action :require_login, only: [:new, :create]
before_action :require_login, except: [:index]
```

