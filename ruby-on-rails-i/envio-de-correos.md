# Envío de correos

El componente que se encarga de los envíos de correos en Rails es **Action Mailer**.

El primer paso para poder enviar correos en Rails es crear un **mailer**.

Así como los controladores, los **mailers** involucran varios archivos, así que es mejor utilizar el generador que trae Rails.

Por ejemplo, para crear un **mailer** llamado `UserMailer` que agrupe los correos que les vamos a enviar a los usuarios se utiliza el siguiente comando que crea varios archivos:

```text
$ rails generate mailer UserMailer
create  app/mailers/user_mailer.rb
invoke  erb
create    app/views/user_mailer
invoke  test_unit
create    test/mailers/user_mailer_test.rb
create    test/mailers/previews/user_mailer_preview.rb
```

El componente principal del **mailer** es la clase `UserMailer` que se se encuentra en el archivo `app/mailers/user_mailer.rb`:

```ruby
class UserMailer < ApplicationMailer
end
```

Cada método de la clase se va a convertir en un correo. Por ejemplo, creemos un nuevo correo de bienvenida:

```ruby
class UserMailer < ApplicationMailer
  def welcome_email(user)
    @user = user
    mail(to: @user.email, subject: 'Bienvenido a mi super sitio!')
  end
end
```

La primera línea del método `welcome_email` está creando una variable de instancia para la vista. La segunda línea renderiza y envía el correo.

### Creando la vista del email

Así como con los controladores, las vistas de los emails deben ir en una ubicación definida y se deben llamar igual al **método**.

Por ejemplo, para el método `welcome_email` debemos crear un archivo llamado `welcome_email.html.erb` dentro de la carpeta `app/views/user_mailer/`:

```text
<h1>Bienvenido a mi sitio <%= @user.name %></h1>
```

El layout por defecto se encuentra en `app/views/layouts/mailer.html.erb`.

Podemos crear también una versión de texto para los clientes de correo que aún no soportan HTML \(aunque la realidad es que hoy en día la mayoría soporta HTML\):

```text
Bienvenido a mi sitio <%= @user.name %>
========================================
```

Cuando llamas el método `mail` desde `welcome_controller` Action Mailer va a detectar las dos vistas \(HTML y texto\) y las va a enviar para que cada cliente de correo decida cuál mostrar.

### Invocando el mailer

Para enviar el email desde otra parte de la aplicación invocas el método sobre la clase directamente y lo envías con `deliver_now` o `deliver_later`. Por ejemplo:

```ruby
UserMailer.welcome_email(user).deliver_later
```

La diferencia entre `deliver_now` y `deliver_later` es que este último envía el mensaje de forma asincrónica, pero para eso debes tener configurado [Active Job](http://guides.rubyonrails.org/active_job_basics.html).

## Configurando el ambiente de desarrollo

En desarrollo no queremos que los emails lleguen realmente a su destino, simplemente saber que están funcionando.

La forma más fácil que hemos encontrado es con una gema llamada [Letter Opener](https://github.com/ryanb/letter_opener) que permite visualizar los correos en el navegador.

Para configurar [Letter Opener](https://github.com/ryanb/letter_opener):

1. Agrega la gema al `Gemfile`:

   ```ruby
    gem "letter_opener", group: :development
   ```

2. Ejecuta `bundle install`.
3. Configura el modo de envío en `config/environments/development.rb` \(busca la línea y asegúrate que quede como la siguiente\):

   ```ruby
    config.action_mailer.delivery_method = :letter_opener
   ```

Eso es todo. La próxima vez que se envíe un email se abrirá una nueva pestaña del navegador con el email.

## Configurando el ambiente de producción

Lo más recomendado para producción es utilizar un servicio como [MailGun](https://www.mailgun.com/), [Postmark](https://postmarkapp.com/), [SendGrid](http://sendgrid.com/) o uno parecido.

## Utilizando URLs en las vistas de los emails

Si vas a incluir vínculos a tu aplicación en los emails es importante que utilices los helpers que terminan en `_url` en vez de `_path` \(es decir, `root_url` en vez de `root_path`\) para que Action Mailer genere toda la URL al sitio.

Sin embargo, lo anterior presenta un problema y es decirle a Rails cuál es el dominio en donde va a estar alojada la aplicación.

Para eso hay varias alternativas pero quizá la más fácil sea configurar cada uno de los ambientes con el `host` correspondiente.

Por ejemplo, en `config/environments/development.rb` y `config/environments/test.rb`:

```ruby
config.action_mailer.default_url_options = { host: "localhost:3000" }
```

En `config/environments/production.rb`:

```ruby
config.action_mailer.default_url_options = { host: "midominio.com" }
```

