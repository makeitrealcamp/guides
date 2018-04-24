# Cookies y sesión

## Cookies

**HTTP** es un protocolo sin estado. Cada petición es completamente independiente de otra y no hay forma de compartir información entre las peticiones.

Las **cookies** nos permiten almacenar información en el navegador del usuario. Piensa en las **cookies** como un hash de Ruby.

Las **cookies** son enviadas al servidor en cada petición.

Para leer las **cookies** en **Sinatra** utiliza `request.cookies` que retorna un hash.

Para crear o actualizar una **cookie** utiliza el método `set_cookie` del objeto `response`:

```ruby
response.set_cookie("<cookie_name>", value: "<cookie_value>")`
```

Puedes asignarle una fecha de expiración a la **cookie**:

```ruby

```

## Sesiones Web

Una **sesión** Web es el tiempo que dura un visitante en nuestra aplicación antes de cerrar la pestaña, navegar a otra página, o estar inactivo por cierto tiempo.

Una **sesión** inicia cuando el visitante ingresa por primera vez a un sitio o aplicación Web, o después de que ese mismo visitante ha finalizado una sesión previa.

Generalmente se define que la **sesión** termina después de 30 minutos de inactividad del visitante.

El objetivo de definir este concepto de **sesión** es poder almacenar información que sobrevive las peticiones HTTP de un visitante.

La **sesión** generalmente involucra una **cookie** con una fecha de expiración de 30 minutos.

Cada vez que el visitante hace una petición HTTP la **cookie** se actualiza para extender la **sesión**.

Cuando han pasado más de 30 minutos de inactividad la **cookie** expira y la próxima vez que el visitante ingrese se va a crear una nueva **sesión**.

La información de la **sesión** es como un hash de Ruby que se puede almacenar en diferentes sitios como:

* En una cookie.
* En una base de datos.
* En memoria.

