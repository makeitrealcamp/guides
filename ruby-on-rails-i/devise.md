# Autenticación con Devise

[Devise](https://github.com/plataformatec/devise) es una gema que facilita la implementación de la  autenticación en nuestras aplicaciones.

Los pasos para configurar [Devise](https://github.com/plataformatec/devise) son los siguientes:

1. Agregar la gema al `Gemfile`:

    ```ruby
    gem 'devise'
    ```

2. Ejecuta `bundle install` para instalarla.

3. Ejecuta el generador de [Devise](https://github.com/plataformatec/devise):

    ```
    $ rails generate devise:install
    ```

4. El siguiente paso es crear el modelo de o de los usuarios de la aplicación, generalmente `User`:

    ```
    $ rails generate devise User
    ```

5. Ejecuta `rails db:migrate` para correr las migraciones.

## Rutas que crea Devise

Asumiendo que el usuario es `User`, [Devise](https://github.com/plataformatec/devise) crea, entre otras, las siguientes rutas:

| Ruta  | Descripción |
| --- | --- |
| `GET /users/sign_up` | Formulario de registro |
| `POST /users` | Registrarse |
| `GET /users/sign_in` | Formulario de login |
| `POST /users/sign_in` | Login |
| `DELETE /users/sign_out` | Salir |

Para ver el listado completo ejecuta `rails routes`. Las demás rutas son, en su mayoría, para el manejo de contraseñas (recuperar, cambiar, etc).

## Filtros y helpers de controlador

[Devise](https://github.com/plataformatec/devise) crea algunos métodos de ayuda y filtros para que puedas manejar la autenticación en tu aplicación.

Asumiendo que tu usuario se llama `User`, el filtro que puedes agregar sobre los controladores que quieres proteger es el siguiente:

```ruby
before_action :authenticate_user!
```

Los métodos de ayuda a los que vas a tener acceso en los controladores y vistas son los siguientes:

| Método | Descripción |
| --- | --- |
| `user_signed_in?` | Retorna `true` si el usuario está autenticado, `false` de lo contrario |
| `current_user` | Retorna el usuario que está autenticado o `nil` |
| `user_session` | Retorna la sesión del usuario |

## El modelo de usuario

Asumiendo que al usuario lo llamaste `User` al generarlo, el modelo que genera [Devise](https://github.com/plataformatec/devise) es el siguiente:

```ruby
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
```

Este es un modelo normal pero utiliza el método `devise` que recibe una serie de módulos que puedes activar o desactivar.

Los módulos que vienen activados son los siguientes:

| Módulo | Descripción |
| --- | --- |
| `database_authenticatable` | Los usuarios se van a poder autenticar con un nombre de usuario y contraseña almacenado en la base de datos. |
| `registereable` | Los usuarios van a poder registrarse, actualizar y eliminar su perfil. |
| `recoverable` | Los usuarios van a poder recuperar su contraseña |
| `rememberable ` | Habilita la opción "Recordarme" en el login |
| `trackable` | Habilita el seguimiento al usuario (de dónde se autenticó, cuantas veces, de qué IP, etc.) |
| `validatable` | Valida el email y el password |  

## Modificando las vistas

Por defecto no vas a ver vistas ni controladores de [Devise](https://github.com/plataformatec/devise) en tu aplicación. Sin embargo, si quieres modificarlos puedes decirle a [Devise](https://github.com/plataformatec/devise) que los genere.

Para generar las vistas utiliza el siguiente comando:

```
$ rails generate devise:views
```

Para generar los controladores utiliza el siguiente comando:

```
$ rails generate devise:views users
```

De esta forma puedes modificar las vistas y cambiar funcionalidad de [Devise](https://github.com/plataformatec/devise).
