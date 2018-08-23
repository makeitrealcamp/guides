# Carga de imágenes

Hasta la versión 5.1 de **Ruby on Rails**, la forma más fácil de implementar carga de imágenes, y de archivos en general, es con alguna gema como [CarrierWave](https://github.com/jnicklas/carrierwave), [Paperclip](https://github.com/thoughtbot/paperclip) o [Dragonfly](http://markevans.github.com/dragonfly/).

Sin embargo, desde la versión 5.2, **Ruby on Rails** incluye una módulo para cargar archivos llamado **ActiveStorage**.

En este capítulo vamos a mostrar primero cómo configurar [Paperclip](https://github.com/thoughtbot/paperclip), que es quizá la gema más popular. Luego hablaremos de **ActiveStorage**.

Por defecto [Paperclip](https://github.com/thoughtbot/paperclip) almacena la imagen de forma local pero más adelante veremos cómo almacenarla en servicios externos.

## ImageMagick

Independiente de si utilizas una gema o **ActiveStorage** vas a necesitar instalar [ImageMagick](https://www.imagemagick.org/script/index.php), una herramienta que permite manipular imágenes.

Para instalar [ImageMagcik](https://www.imagemagick.org/script/index.php) en Ubuntu (or any Debian base Linux distribution) utiliza el siguiente comando:

```
$ sudo apt-get install imagemagick -y
```

En Mac la forma más fácil es a través de [Homebrew](https://brew.sh/):

```
$ brew install imagemagick
```

En Windows ... estás por tu cuenta amigo (mentira, queda pendiente esta parte ;)

## Paperclip (Rails 5.1 y anterior)

El primer paso es incluir la gema en tu `Gemfile`:

```ruby
gem "paperclip", "~> 6.0.0"
```

Y ejecutar `bundle install`.

## Uso

Para agregar imágenes a tus modelos debes realizar varios pasos que vamos a ver a continuación.

### Agregar los campos al modelo

Para agregar una imagen a un nuevo modelo a través del generador de Rails utiliza el tipo `attachment` sobre el campo que va a contener la información de la imagen:

```
$ rails generate model product name image:attachment
```

En este ejemplo llamamos el campo `image` pero lo puedes llamar como quieras. [Paperclip](https://github.com/thoughtbot/paperclip) genera los siguientes campos en el modelo:

```
image_file_name
image_file_size
image_content_type
image_updated_at
```

Para agregar una imagen a un modelo existente debes ejectuar el siguiente comando (asumiendo que el modelo se llama `Product` y el campo para la imagen se va a llamar `image`):

```
$ rails generate paperclip product image
```

### Configurando el modelo

En el modelo debes agregar `has_attached_file` como en el siguiente ejemplo:

```ruby
class Product < ApplicationRecord
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
```

En este ejemplo estamos creando dos estilos para la imagen: `medium` y `thumb`. Cada estilo tiene unas dimensiones dependiendo del contexto en el que se vaya a mostrar.

Por defecto debemos valirdar el tipo de contenido o, de lo contrario, [Paperclip](https://github.com/thoughtbot/paperclip) genera un error.

### Agregando la imagen al formulario

En el formulario para crear y editar productos debes agregar el campo y asegurarte que el formulario tenga la opción de `multipart`:

```erb
<%= form_for @product, html: { multipart: true } do |form| %>
  <%= form.file_field :image %>
  <%= form.submit %>
<% end %>
```

En el controlador debes permitir el nuevo campo `image`:

```ruby
def create
  @product = Product.create(product_params)
end

private
  def product_params
    params.require(:product).permit(:image)
  end
```

### Mostrando la imagen en una vista

Para mostrar la imagen utiliza alguna de las siguientes opciones:

```
<%= image_tag @product.image.url %>
<%= image_tag @product.image.url(:medium) %>
<%= image_tag @product.image.url(:thumb) %>
```

La primera muestra la imagen original y las demás son los estilos que definiste en el modelo.

### Verificando si existe la imagen

Existen dos formas de verificar si la imagen existe:

* Utilizando los método `file?` and `present?` que verifican si el campo `image_file_name` (asumiendo que el campo se llama `image`) está presente.

* Utilizando el método `exists?` que va a verificar si la imagen existe (si utilizas un servicio externo este método puede tomar un tiempo hasta que hace la petición al servicio).

### Eliminando una imagen

Para eliminar una imagen define el campo en `nil` y guarda el objeto:

```ruby
@product.image = nil
@product.save
```

### Validaciones

Para validar que la imagen esté presente utiliza:

```ruby
validates_attachment :image, presence: true
```

Para validar el tamaño utiliza:

```ruby
validates_attachment :image, size: { less_than: 1.megabytes }
```

Por último, puedes unir todas las validaciones (incluyendo la del tipo de contenido) en una sola validación:

```ruby
validates_attachment :image, presence: true,
  content_type: { content_type: /\Aimage\/.*\z/ },
  size: { in: 0..10.kilobytes }
```

### Almacenamiento

Por defecto [Paperclip](https://github.com/thoughtbot/paperclip) viene con 3 adaptadores de almacenamiento:

* Archivo. Es el adaptador por defecto que almacena la imagen localmente en la carpeta `public/system/` de la aplicación.
* [Amazon S3](https://aws.amazon.com/s3/)
* [Fog](http://fog.io/)

También puedes usar Dropbox a través de la gema [paperclip-dropbox](https://github.com/janko-m/paperclip-dropbox).

En esta sección vamos a ver la configuración en [Amazon S3](https://aws.amazon.com/s3/), que es una de las más populares. Para eso vas a necesitar una cuenta en AWS y crear un bucket (un directorio) en S3 (región "us-east-1") antes de continuar.

El primer paso es configurar la gema en el `Gemfile`:

```ruby
gem 'aws-sdk-s3', '~> 1.9', '>= 1.9.1'
```

Luego, en `config/environments/development.rb`, antes del último `end` agrega la siguiente configuración:

```ruby
config.paperclip_defaults = {
  storage: :s3,
  s3_credentials: {
    bucket: "<nombre_del_bucket>",
    preserve_files: true,
    s3_region: "us-east-1"
    }
  }
```

**Nota:** Si quieres configurar [Amazon S3](https://aws.amazon.com/s3/) en producción modificarías `config/environments/production.rb`.

Por último, crea un archivo `config/initializers/aws.rb` con el siguiente contenido reemplazando los valores que están entre `<` y `>`:

```ruby
Aws.config.update({
  credentials: Aws::Credentials.new("<AWS_ACCESS_KEY_ID>", "<AWS_SECRET_ACCESS_KEY>")
})
```

Una recomendación es utilizar la gema [Figaro](https://github.com/laserlemon/figaro) para utilizar variables de entorno.

## ActiveStorage (Rails 5.2 y superior)

El primer paso para utilizar **ActiveStorage** es ejecutar los siguientes comandos:

```
$ rails active_storage:install
$ rails db:migrate
```

Esos comandos crean dos tablas: `active_storage_blobs` and `active_storage_attachments`.

### Configurando el modelo

Para asociar un archivo a un modelo utilizamos `has_one_attached` seguido del nombre que le queremos dar a nuestro archivo. Por ejemplo:

```ruby
class Report < ApplicationRecord
  has_one_attached :screenshot
end
```

Si queremos asociar varios archivos utilizamos `has_many_attached`:

```ruby
class Product < ApplicationRecord
  has_many_attached :images
end
```

### Agregando la imagen al formulario

En el formulario para crear y editar productos debes agregar el campo y asegurarte que el formulario tenga la opción de `multipart`:

```erb
<%= form_for @product, html: { multipart: true } do |form| %>
  <%= form.file_field :image %>
  <%= form.submit %>
<% end %>
```

En el controlador debes permitir el nuevo campo `image`:

```ruby
def create
  @product = Product.create(product_params)
end

private
  def product_params
    params.require(:product).permit(:image)
  end
```

### Mostrando la imagen en una vista

Para mostar la imagen utilizamos el método preview:

```erb
<%= image_tag product.image.preview(resize_to_limit: [100, 100]) %>
```

### Verificando si existe una imagen

Para determinar si una imagen existe utiliza el método `attached?`:

```ruby
product.image.attached?
```

### Eliminando una imagen

Para eliminar una imagen de un modelo utiliza el método `purge`:

```ruby
product.image.purge
```

### Validaciones

**ActiveStorage** no incluye validaciones para las imágenes, así que debemos implementar nuestra propia validación. Por ejemplo, para validar que un archivo exista y sea una imagen utilizaríamos el siguiente código:

```ruby
class Product < ApplicationRecord
  has_one_attached :image

  validate :image_validator

  private
    def image_validator
      if !image.attached?
        errors.add(:image, "is required")
      elsif image.content_type.in?(%w(image/png image/jpeg))
        errors.add(:image, 'must be an image')
      end
    end
end
```

### Almacenamiento

Por defecto **ActiveStorage** almacena la información localmente en una carpeta de tu computador. Sin embargo, al igual que con [Paperclip](https://github.com/thoughtbot/paperclip), esto es configurable para cada uno de los ambientes (desarrollo, producción y pruebas).

Para usar [Amazon S3](https://aws.amazon.com/s3/) vas a necesitar una cuenta en AWS y crear un bucket (un directorio) en S3 (región "us-east-1") antes de continuar.

El primer paso es configurar el servicio en el archivo `config/storage.yml`:

```yml
amazon:
  service: S3
  access_key_id: <%= ENV['aws_key']%>
  secret_access_key: <%= ENV['aws_secret'] %>
  region: us-east-1
  bucket: <nombre_del_bucket>
```

**Nota:** estamos utilizando variables de entorno para almacenar las llaves de AWS.

Ahora, en la carpeta `config/environments/` ubica el ambiente para el que deseas configurar AWS (`development.rb` o `production.rb`) y modifica la opción `config.active_storage.service` con el valor `:amazon`:

```ruby
config.active_storage.service = :amazon
```

Por último, no olvides agregar la siguiente línea al `Gemfile`:

```ruby
gem "aws-sdk-s3", require: false
```

Y ejecutar `bundle install`.
