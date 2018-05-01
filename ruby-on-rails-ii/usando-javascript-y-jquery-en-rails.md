# Usando JavaScript \(y jQuery\) en Rails

## Instalación

**jQuery** viene incluído por defecto en la versión **5.0.x** o inferior de **Ruby on Rails**.

Desde la versión **5.1** debes instalarlo utilizando la gema [jquery-rails](https://github.com/rails/jquery-rails) o un manejador de paquetes llamado [Yarn](https://yarnpkg.com/en/).

La forma más fácil es utilizar la gema. Sin embargo, si quieres utilizar [Yarn](https://yarnpkg.com/en/) puedes seguir estos pasos:

1. Instala [Yarn](https://yarnpkg.com/en/) del siguiente enlace: [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install).
2. Desde la consola ejecuta `yarn install jquery`.
3. Agrega la dependencia en `app/assets/javascripts/application.js`:

   ```text
    //= require rails-ujs
    //= require turbolinks
    //= require jquery
    //= require_tree .
   ```

## CoffeeScript

Por defecto Ruby on Rails utiliza [CoffeeScript](http://coffeescript.org/), un lenguaje que Rails convierte automáticamente a **JavaScript**.

Cada vez que creas un controlador se crea un archivo en `app/assets/javascripts` con el nombre del controlador y la extensión `.coffee`.

Si quieres utilizar **JavaScript** puedes cambiar la extensión del archivo a `.js`.

Para deshabilitar [CoffeeScript](http://coffeescript.org/) por completo simplemente remueve la gema `coffee-rails` del `Gemfile`.

[CoffeeScript](http://coffeescript.org/) es un lenguaje muy interesante que está por fuera del alcance del curso pero que puedes investigar por tu propia cuenta iniciando por la [página oficial](http://coffeescript.org/).

## Uso

Existen varias partes donde puedes escribir tu código **JavaScript** en Ruby on Rails: al final de cada vista, en el archivo `.js` de cada controlador o utilizando **vistas de JavaScript**.

### Al final de cada vista

La forma más fácil de utilizar **jQuery** en tu aplicación es incluir el código **JavaScript** al final de cada vista. Por ejemplo:

```markup
<button class="show-btn">Mostrar alerta</button>

<script>
  $('.show-btn').on('click', function() {
    alert("Esta es una prueba");
  });
</script>
```

Sin embargo, esta forma no es muy recomendada porque estamos mezclando el código HTML y ERB con el código **JavaScript**.

### En el archivo `.js`

La forma en que recomendamos incluir el código **JavaScript** de tu aplicación es en el archivo `.js` que se crea para cada controlador.

Sin embargo, es importante entender lo siguiente: **Ruby on Rails empaqueta todos los archivos **`.js`** en un solo archivo y ese archivo solo se carga la primera vez que el usuario entra a la aplicación**, lo que presenta varios retos a la hora de escribir tu código JavaScript.

Lo que recomendamos es crear una función constructora en el archivo `.js` e invocarla desde la vista en la que lo necesitas.

Por ejemplo, imagina que tenemos un controlador `ProductsController` y necesitamos ubicar un código en la vista `index.html`.

Primero, en el archivo `.js` crearíamos una función constructora llamada `ProductsView`:

```javascript
function ProductsView() {
  $('.show-btn').on('click', function() {
    alert("Esto es una prueba");
  });
}
```

Y en la vista la invocaríamos de la siguiente forma:

```markup
<button class="show-btn">Mostrar alerta</button>

<script>
  new ProductsView();
</script>
```

De esa forma sólo se ejecuta el código **JavaScript** necesario en la vista y no debemos preocuparnos por esperar a que el DOM esté cargado.

## Vistas de JavaScript

Rails hace muy fácil hacer llamados AJAX a tu aplicación y actualizar la página sin necesidad de refrescarla utilizando **vistas de JavaScript**.

Puedes agregarle `remote: true` a cualquier `link_to`, `button`, `form_for` o `form_tag` para indicarle a Rails que esto debe ser un llamado AJAX. Por ejemplo:

```text
<%= link_to "Mostrar alerta", products_path, remote: true %>
```

Y después crear una vista con extensión `.js.erb`.

Por ejemplo, como en el link anterior estamos llamando `products_path`, es decir, el `index` de `ProductsControllers`, crearíamos una vista `app/views/products/index.js.erb` con contenido JavaScript:

```javascript
alert("Hola Mundo!");

// borremos todos los párrafos
$('p').remove();
```

En [este post de Make it Real](https://blog.makeitreal.camp/modales-bootstrap-ruby-on-rails/) aprenderás a utilizar esta técnica para mostrar formularios dentro de modales de Bootstrap.

## Turbolinks

[https://blog.makeitreal.camp/turbolinks/](https://blog.makeitreal.camp/turbolinks/)
