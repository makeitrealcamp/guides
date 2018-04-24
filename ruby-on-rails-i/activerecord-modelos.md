# ActiveRecord - Modelos

**ActiveRecord** es la capa que nos permite acceder y manipular la información de la base de datos sin necesidad de escribir \[SQL \(Structured Query Language\)\]\(SQL \(Structured Query Language\)\).

El concepto más importante de **ActiveRecord** es el **modelo**. Un **modelo** es una clase de Ruby que representa una tabla en la base de datos:

```ruby
class Product < ActiveRecord::Base
end
```

Por convención, el nombre de la tabla es el mismo nombre del **modelo** pero sin capitalizar y en plural \(`products` en este caso\).

En el **modelo** no se definen las columnas de la tabla explícitamente, **ActiveRecord** las toma de la tabla directamente.

## Nuestro primer modelo

Aunque es posible crear la tabla y el modelo manualmente, es más fácil utilizar el generador `rails generate model` desde la línea de comandos.

Por ejemplo, para crear un modelo `Product` con los campos `name`, `description` y `price` ejecuta el siguiente comando:

```text
$ rails generate model Product name description:text price:decimal
```

* Puedes escribir `generate` ó, más corto, `g`.
* El nombre del modelo puede estar en minúscula o capitalizado. Si tiene varias palabras como Product Order puedes escribir `product_order` o `ProductOrder`.
* Los campos se separan por **espacio**.
* Puedes definir el tipo del campo utilizando `:` seguido del tipo de datos \(sin espacios!\).
* Los tipos más comunes son: `string`, `text`, `integer`, `decimal`, `date`, `time`, `datetime`, `boolean` y `references`.
* Si el tipo es `string` puedes definir la longitud con llaves al final: `string{10}`
* Si omites el tipo del campo se asume que es `string{255}`.
* Los campos `id` \(llave primaria\), `created_at` y `updated_at` se crean de forma automática, no hay necesidad de especificarlos en el comando.

El **comando anterior** va a crear varios archivos, entre esos:

* El modelo \(La clase `Product`\) en `app/models/product.rb`.
* Un archivo en `db/migrate` con las instrucciones para crear la tabla. A esto se le conoce como una **migración**.

Para crear la tabla debes ejecutar:

```text
$ rails db:migrate
```

Nuestro primer modelo ha sido creado!

## Utilizando nuestro modelo

Con un modelo podemos listar, crear, modificar y eliminar registros de la tabla que representa. A esto se le conoce como el **CRUD** por las siglas \(**C**reate, **R**ead, **U**pdate, **D**elete\)

### Creando un registro

```ruby
arroz = Product.new(name: "Arroz", description: "...", price: 12000)
arroz.save
`
```

Existe una forma equivalente pero más corta:

```ruby
arroz = Product.create(name: "Arroz", description: "...", price: 12000)
```

### Actualizando registros

```ruby
product = Product.find(1)
product.name = "Leche"
product.save
```

Una forma equivalente pero más corta es la siguiente:

```ruby
product = Product.find(1)
product.update(name: "Leche")
```

También es posible actualizar varios registros a la vez utilizando `update_all`:

```ruby
# actualiza el precio de todos los productos a 1000
Product.update_all(price: 1000)
```

### Eliminando registros

```ruby
product = Product.find(1)
product.destroy
```

### Listando registros

```ruby
# retorna una colección con todos los productos
products = Product.all
```

```ruby
# retorna el primer usuario, también existe el método .last
product = Product.first
```

```ruby
# retorna el producto con id 1
product = Product.find(1)
```

```ruby
# retorna el primer producto con nombre Arroz
product = Product.find_by(name: "Arroz")
```

Otra forma equivalente de hacer lo anterior es:

```ruby
# retorna el primer producto con nombre arroz
product = Product.where(name: "Arroz").take
```

El método `where` se utiliza para hacer consultas complejas y retorna una colección de registros. \(Por eso nos toca hacer el `take` en el ejemplo anterior, `take` obtiene el primer elemento de la colección.

`where` también puede recibir una cadena para crear consultas más complejas:

```ruby
expensive_products = Product.where("price > 5000")
```

Por temas de seguridad \(especialmente cuando las condiciones vienen de los usuarios\) y por rendimiento se recomienda cambiar el ejemplo anterior por lo siguiente:

```ruby
expensive_products = Product.where("price > ?", 5000)
```

Los signos de interrogación se van a reemplazar por los siguientes argumentos del `where` en el orden en el que aparecen.

### Ordenando registros

Puedes utilizar el método `order` para ordenar los registros por alguna columna.

Por ejemplo, para ordenar todos los productos por fecha de creación:

```ruby
products = Product.all.order(:created_at)
```

Si los queremos de forma descendente:

```ruby
products = Product.all.order(created_at: :desc)
```

### Limitar el número de registros

Puedes utilizar el método `limit` y `offset` para limitar el número de registros y saltar algunos respectivamente.

Por ejemplo, para traer máximo 5 productos:

```ruby
products = Product.limit(5)
```

Para traer máximo 5 productos pero saltar los primeros 30:

```ruby
products = Product.limit(5).offset(30)
```

### Iterando sobre los registros

```ruby
products = Product.all
products.each do |product|
  puts product.name # o lo que quieras hacer con cada producto
end
```

## Errores comunes

Quizá el error más común es utilizar `Product` \(capitalizado\) cuando debes utilizar `product` \(sin capitalizar\) y viceversa.

En general, `product` sin capitalizar sólo lo utilizas si has creado una variable con ese nombre. Por ejemplo:

```ruby
product = Product.first # eso guarda el primer producto en la variable product
```

Si quieres acceder a la información que está `product` o modificarlo utilizarías `product` sin capitalizar:

```ruby
puts product.name
product.update(name: "Leche")
```

### Métodos que invocas sobre la clase

Los siguientes son los métodos más comunes que invocas directamente sobre la clase, algunos retornan un único registro, otros una colección de registros:

```ruby
Product.all # retorna una colección
Product.first # retorna un único registro
Product.last # retorna un único registro
Product.find(3) # retorna un único registro
Product.find_by(name: "algo") # retorna un único registro
Product.where(name: "algo") # retorna una colección
```

### Métodos que invocas sobre un registro

Asumiendo que primero ejecutamos:

```ruby
product = Product.first
```

Los métodos que generalmente vas a invocar sobre una instancia \(que representa un registro\) son:

```ruby
product.name # los campos de la tabla
product.name = "algo"
product.save
product.update(name: "algo")
product.destroy
```

