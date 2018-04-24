# Primeros pasos

A **Ruby on Rails** se le llama un **framework** porque es un grupo de gemas que requieren una estructura de carpetas específica para funcionar \(en pocas palabras es más complejo que una librería\).

**Ruby on Rails** viene con una **aplicación para línea de comandos** que te va permitir realizar tareas frecuentes muy rápidamente acelerando el tiempo de desarrollo.

## Instalación

Para instalar **Ruby on Rails** ejecuta el siguiente comando:

```text
$ gem install rails
```

Para verificar que quedó bien instalado deberías poder correr el siguiente comando sin error:

```text
$ rails -v
```

## Crea tu primera aplicación

Para crear tu primera aplicación ejecuta el comando `rails new <nombre_de_la_app>`. Por ejemplo, para crear una aplicación llamada **blog** ejecutaríamos:

```text
$ rails new blog
```

Esto va a crear una carpeta llamada **blog** en la ubicación donde te encuentres en ese momento.

Ingresa a la carpeta ejecutando:

```text
$ cd blog
```

Inicia el servidor ejecutando `rails server` o `rails s` :

```text
$ rails server
```

Ingresa en tu navegador a [http://localhost:3000/](http://localhost:3000/). Deberías ver la pantalla inicial de Rails!

## Crea tu primera ruta

Ruby introduce el concepto de **controladores** que se encargan de procesar las peticiones HTTP.

Las rutas se definen en el archivo `config/routes.rb`.

Los controladores se encuentra en la carpeta `app/controllers` y son clases de Ruby con métodos que contienen el código que se debe ejecutar cuando una ruta coincida.

Las vistas se almacenan en `app/views`.

Para crear un controlador llamado `Welcome` con una acción index ejecuta el siguiente comando:

```text
$ rails generate controller Welcome index
```

Rails va a crear varios archivos incluyendo el controlador \(`app/controllers/welcome_controller.rb`\), la vista \(`app/views/welcome/index.html.erb`\), y va a agregar una ruta a `config/routes.rb`.

Abre el archivo `app/views/welcome/index.html.erb` y reemplaza el código que se encuentra allí por lo siguiente:

```text
<h1>Hola, Rails!</h1>
```

Prende nuevamente el servidor e ingresa desde tu navegador a [http://localhost:3000/welcome/](http://localhost:3000/welcome/). Te debería aparecer "Hola, Rails!".

### Definiendo la página de inicio

Modifica el archivo `config/routes.rb` agregando la línea `root 'welcome#index'`. Debería quedar de la siguiente forma:

```ruby
Rails.application.routes.draw do
  get 'welcome/index'

  root 'welcome#index'
end
```

Ahora ingresa a [http://localhost:3000/](http://localhost:3000/). Debería aparecer "Hola, Rails!" nuevamente.

