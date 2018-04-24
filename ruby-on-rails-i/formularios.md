# Formularios

Aunque es posible crear manualmente los formularios para crear y editar recursos, Rails trae unos métodos de ayuda que te van a permitir reutilizar y escribir menos código.

## Formularios asociados a modelos

Para crear un formulario asociado a un modelo utiliza `form_for`. Por ejemplo, asumiendo que estamos creando el formulario para la siguiente acción new:

```ruby
def new
  @product = Product.new
end
```

Podemos utilizar `form_for` para crear un formulario asociado al modelo `@product` en la vista:

```text
<%= form_for @product do |f| %>
  Acá van los campos del formulario
<% end %>
```

Si `@product` es un nuevo registro se crea un formulario a la ruta `POST /products`.

Si `@product` ya está persistido en la base de datos se crea un formulario a la ruta `PATCH /products/:id`.

Eso quiere decir que podemos reutilizar el mismo código tanto para crear como para actualizar los registros.

### Campos de entrada

Rails viene con unos métodos de ayuda para crear los campos del formulario. Aunque es posible crearlos manualmente con HTML, los métodos se encargan del nombramiento y asociar el campo al valor que está en el modelo.

```ruby
<%= form_for @product do |f| %>
  <div>
    <%= f.label :name %>
    <%= f.text_field :name %>
  </div>
  <%= f.submit %>
<% end %>
```

Los campos se crean utilizando la variable que se le pasó en el bloque del `form_for`, en este caso `f`.

`label` se utiliza para crear una etiqueta `<label>` asociada al campo.

`text_field` se utiliza para crear una etiqueta de tipo `<input type="text">`.

`submit` se utiliza para crear un botón de submit `<input type="submit">` cuyo texto puede ser "Create Product" o "Update Product" dependiendo si el registro está ya creado o no.

Otros campos de entrada incluyen:

* `text_area` - crea un área de texto:

  ```text
    <%= f.text_area :description, rows: 20 %>
  ```

* `check_box` crea una caja de selección:

  ```text
    <%= f.check_box :paid %>
  ```

* `date_field`
* `password_field`
* `radio_button` - crea un botón de radio:

  ```text
    <%= f.radio_button :gender, "male" %>
    <%= f.radio_button :gender, "female" %>
    `
  ```

* `hidden_field` - crea un campo oculto
* `email_field` - crea un campo de email
* `url_field` - crea un campo de URL
* `collection_select` - crea una lista desplegable

  ```text
    <%= f.collection_select(:city_id, City.all, :id, :name) %>
  ```

## Formularios no asociados a modelos

En algunas ocasiones vas a querer crear formularios que no están asociados a ningún modelo. Por ejemplo, para crear un formulario de búsqueda.

Para eso existe el método de ayuda `form_tag` y los campos que terminan en `_tag`:

```text
<%= form_tag("/search", method: "get") do %>
  <%= label_tag(:q, "Search for:") %>
  <%= text_field_tag(:q) %>
  <%= submit_tag("Search") %>
<% end %>
```

Si quieres aprender más sobre formularios de búsqueda y cómo implementaros te recomendamos este post en el blog de Make it Real: [https://blog.makeitreal.camp/formularios-de-busqueda-en-rails/](https://blog.makeitreal.camp/formularios-de-busqueda-en-rails/)

