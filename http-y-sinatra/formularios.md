# Formularios

Los formularios nos permiten pedirle información a los usuarios. Por ejemplo, puedes crear un formulario que pida el nombre del usuario y envíe esa información a `POST /hello`:

```markup
<form action="/hello" method="post">
  <label for="name"><input type="text" id="name" name="name">
  <button type="submit">Enviar</button>
</form>
```

* El atributo `method` de la etiqueta `<form>` puede ser `get` o `post`.
* El atributo `action` de la etiqueta `<form>` define el path o el URL a donde se quiere enviar la información del formulario.
* `<label>` se utiliza para mostrar una etiqueta para el campo de entrada. El atributo `for` debe tener el `id` del campo al que se quiere relacionar.
* El atributo `name` del campo de entrada \(en este caso el campo de texto\) define la llave que se va a utilizar para enviar al servidor.
* El botón se utiliza para enviar el formulario \(el `type="submit"` es importante!\).

## Definiendo la ruta

La ruta se debería definir de la siguiente forma \(si el method es `post`\):

```ruby
post '/hello' do

end
```

La información de cada campo viene en el hash `params`:

```ruby
post '/hello' do
  "Hola #{params[:name]}"
end
```

## Otros campos de entrada

Además de los campos de texto existen otro elementos que nos permiten capturar información del usuario.

Recuerda que el atributo `id` se utiliza para identificar el elemento en el documento y `name` para definir la llave con la que se va a enviar al servidor.

### Un campo de contraseña

Es parecido a un campo de texto pero no muestra los caracteres:

```markup
<input type="password" name="password">
```

En HTML5 ahora existen muchos más tipos de campos como `email`, `url`, `number` y `date`, entre otros.

### Un área de texto

Un área de texto es como un campo de texto pero de varias líneas:

```markup
<textarea name="message" rows="10">Acá va el texto inicial</textarea>
```

### Una lista desplegable

```markup
<select name="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

## Un botón de radio

```markup
<input type="radio" name="gender" value="male" checked> Male<br>
<input type="radio" name="gender" value="female"> Female<br>
<input type="radio" name="gender" value="other"> Other
```

En este caso se envía al servidor el `value` de la opción seleccionada.

### Un campo de selección \(checkbox\)

```markup
<input type="checkbox" name="terms" value="accep"> Acepto los términos y condiciones
```

