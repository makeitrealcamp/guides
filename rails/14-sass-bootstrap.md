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

Lo que generalmente recomiendo es ingresar a la [documentación de la gema para Ruby on Rails](https://github.com/twbs/bootstrap-sass#a-ruby-on-rails) y seguir las instrucciones. Sin embargo, las copiamos acá como referencia.

1. Incluye la gema en el `Gemfile`:

    ```
    gem 'bootstrap-sass', '~> 3.3.6'
    ```

2. Ejecuta `bundle install`.

3. Cambia la extensión del archivo `app/assets/stylesheets/application.css` por `.scss`.

4. Reemplaza el contenido de `app/assets/stylesheets/application.scss` por lo siguiente:

    ```scss
    // "bootstrap-sprockets" must be imported before "bootstrap" and "bootstrap/variables"
    @import "bootstrap-sprockets";
    @import "theme";
    @import "bootstrap";
    ```

5. Crea el archivo `app/assets/stylesheets/theme.scss` en donde vas a poder sobrescribir las variables de Bootstrap, por ejemplo:

    ```scss
    $font-size-base:                   16px;
    $text-color:                       #303030;
    ````

Para ver la lista de variables que puedes sobrescribir sigue [este enlace](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss).

## Bootstrap 4

Lo que generalmente recomiendo es ingresar a la [documentación de la gema para Ruby on Rails](https://github.com/twbs/bootstrap-rubygem#a-ruby-on-rails) y seguir las instrucciones. Sin embargo, las copiamos acá como referencia.

**Nota:** Las instrucciones acá presentadas son para Bootstrap 4, si quieres trabajar con Bootstrap 3 debes seguir las instrucciones en [este enlace](https://github.com/twbs/bootstrap-sass#a-ruby-on-rails).

1. Incluye la gema al final del `Gemfile`:

    ```
    gem 'bootstrap', '~> 4.0.0.beta'
    ```

2. Ejecuta `bundle install`.

3. Cambia la extensión del archivo `app/assets/stylesheets/application.css` por `.scss`.

4. Reemplaza el contenido de `app/assets/stylesheets/application.scss` por lo siguiente:

    ```scss
    @import "theme";
    @import "bootstrap";
    ```

5. Crea el archivo `app/assets/stylesheets/theme.scss` en donde vas a poder sobrescribir las variables de Bootstrap, por ejemplo:

    ```scss
    $text-color:                       #303030;
    ````

Para ver la lista de variables que puedes sobrescribir sigue [este enlace](https://github.com/twbs/bootstrap-sass/blob/master/assets/stylesheets/bootstrap/_variables.scss).

Eso es todo lo que necesitas para empezar a trabajar con Bootstrap en tus proyectos.
