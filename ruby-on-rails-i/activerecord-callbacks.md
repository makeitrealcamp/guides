# ActiveRecord - Callbacks

Los **callbacks** son métodos que se invocan en ciertos momentos del ciclo de vida de un modelo: cuando se crea, cuando se actualiza, cuando se elimina, etc.

## Definiendo callbacks

Para definir un callback debes realizar dos pasos:

1. Registrar el **callback**.
2. Escribir el método que se va a ejecutar cuando ocurra el **callback**.

Por ejemplo, si queremos imprimir "Artículo creado" después de que se cree un artículo haríamos lo siguiente:

```ruby
class Article < ApplicationRecord
  after_crate :print_message

  private
    def print_message
       puts "Artículo creado!"
    end
end
```

En este caso el método `print_message` se va a ejecutar después de que un artículo sea creado:

```text
$ rails c
> Article.create(name: "Primer artículo")
Artículo creado!
```

## ¿Para qué sirven los callbacks?

Los callbacks se pueden utilizar para toda clase de tareas:

* Enviar correos
* Actualizar campos calculados.
* Llamar a servicios externos.
* Crear otros registros en otras tablas.

Entre muchos otros!

## Callbacks disponibles

Existe una gran variedad de callbacks que puedes utilizar en tus modelos. Los más importantes son:

| Nombre | ¿Cúando se ejecuta |
| --- | --- |
| before\_create | Antes de crear el registro |
| after\_create | Después de crear el registro |
| before\_update | Antes de actualizar el registro |
| after\_update | Después de actualizar el registro |
| before\_save | Antes de crear o actualizar |
| after\_save | Después de crear o actualizar |
| before\_destroy | Antes de eliminar el registro |
| after\_destroy | Después de eliminar el registro |
| before\_validation | Antes de que se valide el registro |
| after\_validation | Después de que se valida el registro |

## Deteniendo la operación

Si cualquier `before_` callback retorna `false` o lanza una excepción, la operación se cancela.

Los `after_` callbacks solo pueden detener la operación lanzando una excepción.

Se recomienda lanzar `ActiveRecord::Rollback` o `ActiveRecord::RecordInvalid`.

