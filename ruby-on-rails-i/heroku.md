# Heroku

[Heroku](https://heroku.com/) es un servicio que nos permite publicar nuestras aplicaciones en Internet sin necesidad de preocuparnos por configurar servidores, instalar Ruby on Rails, configurar la base de datos, etc.

[Heroku](https://heroku.com/) tiene un plan gratuito que, aunque tiene algunas limitaciones, es más que suficiente para empezar. También existen planes pagos para aplicaciones en producción que necesiten más procesamiento y/o memoria; puedes consultar los precios en [esta página](https://www.heroku.com/pricing).

Si aún no tienes una cuenta en [Heroku](https://heroku.com/), ingresa a la [página principal](https://heroku.com/) y crea una.

## Heroku CLI

Una vez que tengas una cuenta en [Heroku](https://heroku.com/) debes descargar el [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli), una aplicación para la línea de comandos que te permitirá interactuar con [Heroku](https://heroku.com/). En [este enlace](https://devcenter.heroku.com/articles/heroku-cli) encontrarás las instrucciones para descargarla e instalarla.

Una vez que la hayas instalado verifica la instalación ejecutando el siguiente comando:

```
$ heroku --version
```

Deberías ver `heroku/x.y.z` en el resultado.

Por último ejecuta el siguiente comando para autenticarte:

```
$ heroku login
```

Ingresa el email y contraseña que utilizaste para crear tu cuenta en Heroku.

## Preparando la aplicación

Si creaste la aplicación sin especificar `--database=postgresql` vas a tener que agregar la gema `pg` a tu proyecto de Rails. Edita tu `Gemfile` y cambia la siguiente línea:

```ruby
gem 'sqlite'
```

Por esta otra:

```ruby
gem 'pg'
```

**Nota:** Es recomendable también utilizar PostgreSQL en desarrollo para evitar errores que puedan surgir en producción por la diferencia en la base de datos. Sin embargo, si quieres seguir utilizando SQLite en desarrollo agrega la gema `pg` al grupo `production` y la gema `sqlite` al grupo `development` y `test`:

```ruby
group :development, :test do
  gem 'sqlite'
end

group :production do
  gem 'pg'
end
```

Reinstala las dependencias ejecutando:

```
$ bundle install
```

Por último haz commit ejecutando los siguientes comandos:

```
$ git add .
$ git commit -m 'Prepare app for Heroku deployment'
```

## Desplegando la aplicación

Para desplegar la aplicación primero debes crear la aplicación en Heroku ejecutando el siguiente comando:

```
$ heroku create
```

Y desplegarla con el siguiente comando:

```
$ git push heroku master
```

Este proceso toma algún tiempo, pero lo importante es que al final salga algo parecido a lo siguiente:

```
remote: Verifying deploy... done.
To https://git.heroku.com/un-nombre-extrano.git
 * [new branch]      master -> master
```

Corre las migraciones con el siguiente comando:

```
$ heroku run rails db:migrate
```

Y reinicia la aplicación con este comando:

```
$ heroku restart
```

Por último ejecuta el siguiente comando para visitar tu aplicación:

```
$ heroku open
```
