# Manipulación de archivos

La manipulación de archivos en Ruby es relativamente fácil a comparación de otros lenguajes. Sin embargo, existen varias formas de hacer lo mismo, así que veremos las más comunes.

## Leer de un archivo

```ruby
puts File.read("path/al/archivo")
```

Para obtener las líneas en un arreglo:

```ruby
arr = IO.readlines(file_path)
```

## Verificar si un archivo existe

```ruby
if File.file?("path/al/archivo")
  # código si el archivo existe
else
  # código si el archivo no existe
end
```

## Escribir a un archivo

```ruby
File.write(file, content)
```

```ruby
File.open('path/to/file', 'w') { |file| file.write("content") }
```

