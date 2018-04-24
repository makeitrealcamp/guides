# Gemas

A las librerías de Ruby se les conoce como **gemas**.

Las **gemas** te van a ayudar a escribir menos código.

El repositorio central de gemas es [RubyGems](https://rubygems.org/). Existen **gemas** para hacer georeferenciación \(p.e. [geocoder](https://rubygems.org/gems/geocoder)\), para manipular archivos de Excel \(p.e. [roo](https://rubygems.org/gems/roo)\), para generar datos ficticios \(p.e. [faker](https://rubygems.org/gems/faker)\), para hacer aplicaciones Web \(p.e. [sinatra](https://rubygems.org/gems/sinatra)\), entre miles de gemas más que puedes utilizar en tus proyectos.

Para instalar una **gema** en tu sistema de forma global utiliza el comando `gem install nombre_de_la_gema`. Por ejemplo, instala la gema `faker` con el siguiente comando:

```text
$ gem install faker
```

Para utilizar la **gema** debes **requerirla**, generalmente es el mismo nombre de la gema aunque hay casos en que no \(por eso es buena idea siempre ver la documentación de la **gema**\):

```text
$ irb
> require 'faker'
 => true
> Faker::Name.name
 => "Conner Roberts"
```

## Crear una gema

También puedes publicar tus propias gemas: [http://guides.rubygems.org/make-your-own-gem/](http://guides.rubygems.org/make-your-own-gem/).

## Utilizando Bundler

[https://blog.makeitreal.camp/manejo-de-dependencias-en-ruby-con-bundler/](https://blog.makeitreal.camp/manejo-de-dependencias-en-ruby-con-bundler/)

