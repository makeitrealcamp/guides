# Rutas

En **Sinatra** las rutas se definen utilizando el **verbo** \(en minúscula\) seguido del **path** y recibe un bloque de Ruby con el código que se quiere ejecutar cuando una petición coincide con el **verbo** y el **path**.

```ruby
get '/' do
  .. show something ..
end

post '/' do
  .. create something ..
end

put '/' do
  .. replace something ..
end

patch '/' do
  .. modify something ..
end

delete '/' do
  .. annihilate something ..
end
```

Desafortunadamente, desde los navegadores solo podemos realizar peticiones de tipo `GET` y `POST` \(formularios\).

Para realizar peticiones con `PUT`, `PATCH`, `DELETE`, etc. podemos utilizar curl, Postman o algún lenguaje de programación \(como Ruby!\).

La primera ruta que coincide con la petición es la que se ejecuta.

Las rutas que tienen un slash al final son diferentes de las que no lo tienen:

```text
get '/foo' do
  # No coincide con "GET /foo/"
end
```

## Escribiendo el cuerpo, código de respuesta y los encabezados

Lo que retornes en cada ruta se va a convertir en el mensaje HTTP de respuesta. Puedes devolver:

* Un **string** que se va a convertir en el cuerpo de la respuesta.
* Un **número** con el código de respuesta \(200, 404, etc.\)
* Un **arreglo con dos elementos**: el código de respuesta y el cuerpo de la respuesta.
* Un **arreglo con tres elementos**: el código de respuesta, un hash con los encabezados y el cuerpo de la respuesta.

Si retornas sólo un **string** el código de respuesta es **200 OK**.

También existen los métodos `body`, `status` y `headers` que te permiten escribir el cuerpo, código de respuesta y los encabezados respectivamente, pero lo que se recomienda es definir esta información en lo que retorne el bloque.

El siguiente ejemplo:

```ruby
get '/' do
  [200, { "Content-Type" => "text/html" }, "Hola Mundo"]
end
```

Es equivalente a:

```ruby
get '/' do
  status 200
  headers "Content-Type" => "text/html"
  body "Hola Mundo"
end
```

## Query string

El **query string** es el conjunto de propiedades que van después del signo de interrogación \(`?`\) de un URL. **Sinatra** automáticamente convierte las propiedades en el hash `params`.

Por ejemplo, si quieres obtener el valor de una propiedad llamada `name` utilizarías `params[:name]`:

```ruby
get '/greet' do
  "Hola #{params[:name]}"
end
```

Los valores siempre se retornan como cadenas de texto. Si esperas un número debes convertirlo manualmente. Por ejemplo:

```ruby
get '/age-in-5-years' do
  age = params[:age].to_i
  "Tu edad en 5 años será: #{age + 5}"
end
```

## Variables de path

Puedes utilizar variables en las rutas que puedes obtener a través del hash `params`:

```ruby
get '/hello/:name' do
  # coincide con "GET /hello/juan" and "GET /hello/pedro"
  # params['name'] is 'juan' or 'pedro'
  "Hello #{params['name']}!"
end
```

## El objeto request

En tu código puedes utilizar el objeto `request` para acceder a toda la información de la petición HTTP:

```text
request.url  # retorna el URL completo

request.request_method  # GET, POST, PUT, etc.  
request.path  # el path del URL
request.host  # el host del URL
request.port  # el port
request.scheme  # http o https
request.query_string  # todo lo que va después de ? en la URL

request.body  # el cuerpo del mensaje (si tiene)
request.ip  # la IP desde donde se hizo la petición

request.accept  # el valor del encabezado Accept
request.user_agent  # el valor del encabezado User-Agent
request.referrer  # el valor del encabezado Referrer
request.content_type # el valor del encabezado Conten-Type
```

**Nota:** Si deseas obtener el valor de otro encabezado tienes que utilizar el objeto `env`, pasar el encabezado a mayúscula y agregarle el prefijo `HTTP_`. Por ejemplo:

```ruby
env['HTTP_X_HEADER']  # Retorna el valor del encabezado X_Header
```

