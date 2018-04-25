# Sass y Bootstrap

[Sass](http://sass-lang.com/) es un preprocesador de CSS.

[Sass](http://sass-lang.com/) ofrece varias ventajas sobre CSS como:

* Variables
* Reglas anidadas
* Importación de archivos y parciales
* Reutilización de código con mixins y herencia
* Operadores matemáticos y lógicos
* Condicionales e iteraciones

Para aprender más sobre [Sass](http://sass-lang.com/) te recomendamos [este video de Make it Real](https://youtu.be/OaX0Jg88t8s).

## Bootstrap 3

Los pasos para configurar Bootstrap 3 son los siguientes:

1. Incluye la gema en el `Gemfile`:

   ```text
    gem 'bootstrap-sass', '~> 3.3.7'
   ```

2. Ejecuta `bundle install`.
3. Cambia la extensión del archivo `app/assets/stylesheets/application.css` por `.scss`.
4. Reemplaza el contenido de `app/assets/stylesheets/application.scss` por lo siguiente:

    ```css
    // "bootstrap-sprockets" must be imported before "bootstrap" and "bootstrap/variables"
    @import "bootstrap-sprockets";
    @import "theme";
    @import "bootstrap";
    ```

5. Crea el archivo `app/assets/stylesheets/theme.scss` en donde vas a poder sobrescribir las variables de Bootstrap, por ejemplo:

    ```css
    $font-size-base:                   16px;
    $text-color:                       #303030;
    ```

Para ver la lista de variables que puedes sobrescribir sigue [este enlace](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss).

## Bootstrap 4

Los pasos para configurar Bootstrap 4 son los siguientes:

1. Incluye la gema al final del `Gemfile`:

   ```text
   gem 'bootstrap', '~> 4.1'
   ```

2. Ejecuta `bundle install`.
3. Cambia la extensión del archivo `app/assets/stylesheets/application.css` por `.scss`.
4. Reemplaza el contenido de `app/assets/stylesheets/application.scss` por lo siguiente:

   ```css
    @import "theme";
    @import "bootstrap";
   ```

5. Crea el archivo `app/assets/stylesheets/theme.scss` en donde vas a poder sobrescribir las variables de Bootstrap, por ejemplo:

   ```css
    $text-color:                       #303030;
    `
   ```

Para ver la lista de variables que puedes sobrescribir sigue [este enlace](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss).

Eso es todo lo que necesitas para empezar a trabajar con Bootstrap en tus proyectos.
