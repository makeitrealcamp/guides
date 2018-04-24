# Primeros pasos con Sinatra

Para instalar Sinatra:

```text
$ gem install sinatra
```

Si estás utilizando Bundler incluye la gema en el `Gemfile`:

```text
gem "sinatra"
```

Después debes ejecutar:

```text
$ bundle install
```

Crea un archivo `app.rb` \(o como lo quieras nombrar\) con el siguiente código:

```ruby
require 'sinatra'

get '/' do
  'Hello world!'
end
```

Y ejecútalo con:

```text
$ ruby myapp.rb
```

Abre tu navegador en [http://localhost:4567](http://localhost:4567)

## Utilizando vistas

```ruby
get '/' do
  erb :index
end
```

La línea `erb :index` renderiza el archivo `views/index.erb`. Crea ese archivo con el siguiente contenido:

```text
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hola Sinatra</title>
</head>
<body>
  <h1>Mi primera aplicación Web con Sinatra!</h1>
</body>
</html>
```

Podemos mezclar código Ruby en el HTML utilizando `<%` y `%>`:

```text
...
  <% 100.times do %>
    <h1>Mi primera aplicación Web con Sinatra!</h1>
  <% end %>
...
```

## Utilizando templates

Puedes utilizar un layout para no tener que repetir el mismo código en todos los archivos ERB. Crea un archivo `views/layout.erb` con el siguiente contenido:

```text
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hola Sinatra</title>
</head>
<body>
  <%= yield %>
</body>
</html>
```

Ahora modifica `views/index.erb` para que solo contenga lo que va dentro de `<body>`:

```text
<% 100.times do %>
  <h1>Mi primera aplicación Web con Sinatra!</h1>
<% end %>
```

## Pasando información del controlador a la vista

Cuando defines una **variable de instancia** en la ruta, esa variable va a estar disponible en la vista. Por ejemplo:

```ruby
get '/' do
  @name = "Pedro"
  erb :index
end
```

Y ahora podemos utilizar la variable `@name` en la vista:

```text
<h1>Hola <%= @nombre %></h1>
```

Para imprimir información en pantalla desde el código Ruby utilizamos el igual cuando abrimos la etiqueta `<%=` y `%>`.

**Atención:** Si omites el `=` no va a aparecer nada en pantalla.

