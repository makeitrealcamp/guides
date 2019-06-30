# Web Sockets

Web Sockets es una tecnología que permite a los navegadoress recibir información del servidor y actualizarse en tiempo real, sin necesidad de refrescar la página.

La forma en que funciona Web Sockets es que el navegador, a través de JavaScript, abre una conexión HTTP con el servidor y **mantiene esa conexión abierta** para que el servidor pueda enviarle información al navegador en cualquier momento (el cliente también puede enviarle información al servidor a través de esta conexión).

Para que Web Sockets funcione se debe escribir código tanto en el cliente (con JavaScript o CoffeeScript) como en el servidor (p.e. con Ruby).

Rails 5 introduce [Action Cable](https://guides.rubyonrails.org/action_cable_overview.html), un módulo que facilita la implementación de WebSockets en nuestras aplicaciones.

## Conceptos básicos

Antes de empezar a trabajar con Action Cable debes conocer los siguientes conceptos:

* **Connection:** representa la conexión HTTP entre el cliente y servidor, generalmente se abre una única conexión por sesión (por pestaña del navegador).
* **Channel:** los canales son lo equivalente a los controladores en Rails, nos permiten organizar la comunicación entre el servidor y los clientes.
* **Subscription:** los clientes realizan subscripciones a los canales de los cuáles les interesa recibir información.

## Nuestro primer canal

Lo primero que debemos pensar en nuestras aplicaciones es qué **canales** vamos a necesitar crear.

Por ejemplo, si estamos creando un sistema de chat con "cuartos" donde varias personas pueden interactuar en un mismo cuarto, podríamos pensar en un canal llamado `Room` que represente cada cuarto que se cree. Cuando un usuario ingresa a un cuarto se suscribe al canal de ese cuarto para recibir los mensajes de otras personas.

Para crear un canal se puede utilizar el siguiente generador para canales:

```
$ rails generate channel room
```

El comando anterior crea dos archivos:

* `app/channels/room_channel.rb` - nos permite configurar el canal y recibir información del cliente desde el servidor.
* `app/assets/javascripts/channels/room.coffee` - crea la conexión al canal y nos permite enviar y recibir información al servidor (desde el cliente).

Ahora podemos empezar a enviar información del servidor al cliente y viceversa!

**Nota:** Con el comando anterior se crea un único canal al que todos los clientes se van a conectar automáticamente. Más adelante vamos a ver cómo pasarle parámetros a los canales.

### Enviando información al cliente (desde el servidor)

Para enviar un mensaje a todos los clientes conectados a un canal utilizamos el método `ActionCable.server.broadcast` desde cualquier canal, controlador, modelo o helper:

```ruby
data = { message: "Hola Amigos", user: "pedro0553" }
ActionCable.server.broadcast("RoomChannel", data)
```

**Nota:** Estas líneas **no** las puedes ejecutar desde `rails console` ni desde un background job. Para hacerlo debes utilizar Redis como vamos a ver el final de este capítulo.

### Recibiendo información en el cliente

Para recibir información en el cliente se debe modificar el archivo que fue generado para el cliente cuando se creó el canal, en nuestro ejemplo `app/assets/javascripts/channels/room.coffee`:

```coffeescript
App.room = App.cable.subscriptions.create "RoomChannel",
  connected: ->

  disconnected: ->

  received: (data) ->
    console.log(data); # acá recibimos la información
```

El método `received` se llama cada vez que se recibe un mensaje del servidor. En este caso estamos haciendo un `console.log` pero acá podemos, por ejemplo, modificar el HTML para mostrar el mensaje.

### Enviando información al servidor (desde el cliente)

Para enviar información al servidor utilizamos el método `send` sobre el canal desde cualquier archivo JavaScript (o CoffeeScript). En nuestro ejemplo anterior sería de la siguiente forma:

```javascript
App.room.send({ message: "Hola a todos", user: "miguel8734" });
```

Estamos utilizando `App.room` porque así se llama la variable en `app/assets/javascripts/channels/room.coffee`.

### Recibiendo información en el servidor

Para recibir información en el servidor se debe modificar el archivo que fue generado para el servidor cuando se creó el canal, en nuestro ejemplo `app/channels/room_channel.rb`:

```ruby
class RoomChannel < ApplicationCable::Channel
  def subscribed
  end

  def unsubscribed
  end

  def received(data)
    puts data # acá recibimos la información del cliente
  end
end
```

El método `received` se llama cada vez que recibimos información del cliente.

## Parametrizando los canales

Nuestro ejemplo anterior no es muy útil porque sólo soporta un "cuarto". Generalmente queremos que los canales soporten parámetros (p.e. el id o el nombre del cuarto en nuestra aplicación de chat).

Para soportar parámetros en nuestros canales debemos modificar tanto el servidor como el cliente.

En el servidor vamos a modificar el método `subscribed` de nuestro canal en `app/channels/room_channel.rb`:

```ruby
class RoomChannel < ApplicationCable::Channel
  def subscribed
    stream_from "room-#{params[:name]}"
  end
end
```

El método `stream_from` nos permite nombrar el canal y utilizar parámetros en el nombre.

En el cliente vamos a modificar la forma en que nos suscribimos al canal en `app/assets/javascripts/channels/room.coffee`:

```coffeescript
App.room = App.cable.subscriptions.create { channel: "RoomChannel", name: "micuarto" },
  connected: ->

  disconnected: ->

  received: (data) ->
    console.log(data); # acá recibimos la información
```

En vez de pasarle un string al método `create` le vamos a pasar un objeto que tiene el canal y cualquier parámetro adicional que necesitemos (en este caso el `name` con valor `"micuarto"`).

Sin embargo, no queremos que siempre se conecte al cuarto `micuarto`, así que lo mejor sería encapsular el código de la suscripción en una función que podamos llamar desde otra parte de nuestro código JavaScript. Modifiquemos `room.coofee`:

```coffeescript
window.subscribeToRoom = (room) => {
  App.room = App.cable.subscriptions.create { channel: "RoomChannel", name: room },
    connected: ->

    disconnected: ->

    received: (data) ->
      console.log(data); # acá recibimos la información
}
```

Y más adelante en nuestro código (p.e. cuando la persona entre a un cuarto):

```coffeescript
subscribeToRoom("micuarto");
```

**Nota:** En este ejemplo hemos almacenado la función en `window`, quizá una mejor práctica es almacenarla en `App` o en otro objeto para no contaminar el contexto global.

## Identificando las conexiones

En la mayoría de aplicaciones vamos a necesitar identificar cada conexión (p.e. para saber qué usuario es).

Para identificar las conexiones vamos a modificar el archivo `app/channels/application_cable/connection.rb`:

```ruby
module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = User.find_by(id: cookies.encrypted[:user_id])
    end
  end
end
```

En este ejemplo estamos identificando la conexión utilizando una variable `current_user` que inicializamos en el método `connect` (es decir, cuando se abre la conexión con el servidor). Fíjate que es necesario acceder a las **cookies** para encontrar el `id` del usuario.

**Nota:** Ojalá más adelante integren Action Cable con Devise para no tener que hacer este paso manualmente y que la autenticación funcione como funciona en los controladores!

## Comunicación entre procesos

Para desplegar en producción (p.e. en Heroku) o para probar desde `rails console` debes instalar y utilizar [Redis](https://redis.io/).

Por defecto, la configuración de Action Cable se encuentra en el archivo `config/cable.yml`, que se puede configurar de la siguiente manera:

```
development:
  adapter: async

test:
  adapter: async

production:
  adapter: redis
  url: redis://10.10.3.153:6381
  channel_prefix: appname_production
```

El adaptador `async` es para desarrollo y testing, no para producción. Este adaptador no permite la comunicación entre procesos.

El adaptador `redis` se recomienda para producción y si quieres probar el `broadcast` desde `rails console` o desde un background job.
