# Formularios

Los formularios nos permiten pedirle información a los usuarios.

Un formulario se crea con la etiqueta `<form>`:

```markup
<form>

</form>
```

Un formulario puede tener muchos elementos de entrada como campos de texto, casillas de verificación \(checkbox\), listas desplegables, botones de envío y muchos más. Veamos algunos de ellos:

## Campo de texto

Para definir un campo de texto utiliza la etiqueta `<input type="text">`.

```markup
<form>
  <input type="text">
</form>
```

## Campo de contraseña

Los campos de contraseña son similares a los campos de texto pero el texto se reemplaza automáticamente por asteriscos \(`*`\) cuando la persona escribe.

Para definir un campo de contraseña utiliza la etiqueta `<input type="password">`.

```markup
<form>
  <input type="password">
</form>
```

## Casilla de verificación \(checkbox\)

Para definir una casilla de verificación utiliza la etiqueta `<input type="checkbox">`:

```markup
<form>
  <input type="checkbox"> Acepto recibir información
</form>
```

## Botón de envío

El botón de envío, como su nombre lo indica, se utiliza para enviar la información que ha ingresado el usuario a un servidor remoto.

Para definir un botón de envío utiliza la etiqueta `<input type="submit" value="Enviar">`:

```markup
<form>
  <input type="submit" value="Enviar">
</form>
```

El atributo `value` define el texto del botón.

Para utilizar un botón de envío necesitas también definir al menos:

1. La URL del servidor al que quieres enviar la información en el atributo `action` .
2. Agregar un atributo `name` a todos los campos de entrada que quieres enviar al servidor.

Por ejemplo:

```markup
<form action="http://mi-empresa.com/contacto">
  <div>
    Nombre: <input type="text" name="nombre">
  </div>
  <div>
    Mensaje: <input type="text" name="mensaje">
  </div>
  <input type="submit" value="Enviar">
</form>
```

## Labels

Es buena práctica utilizar una etiqueta `<label>` para encerrar el texto que se va a mostrar para cada campo de entrada.

Para relacionar el `<label>` al campo de entrada debes:

* Agregar un atributo `id` al campo de entrada.
* Agregar un atributo `for` al `<label>` con el mismo valor del atributo `id` del campo de entrada.

Por ejemplo:

```markup
<form>
  <label for="nombre">Nombre:</label> <input type="text" id="nombre" name="nombre">
</form>
```

La ventaja de utilizar un label es que si hacen click sobre el label se va a enfocar automáticamente el campo de entrada. Esto es especialmente útil en casillas de verificación y botones de radio.

## Botones de radio

Para definir un botón de radio utiliza la etiqueta `<input type="radio">`:

```markup
<form>
  <input type="radio">
</form>
```

Los botones de radio son especialmente útiles para que el usuario escoja una única opción. Por ejemplo:

```markup
<form action="/accion">
  <div>
    <label for="masculino">Masculino</label>
    <input type="radio" name="genero" id="masculino" value="masculino">
  </div>
  <div>
    <label for="femenino">Femenino</label>
    <input type="radio" name="genero" id="femenino" value="femenino">
  </div>
  <div>
    <label for="otro">Otro</label>
    <input type="radio" name="genero" id="otro" value="otro">
  </div>
  <input type="submit" value="Enviar">
</form>
```

Fíjate en lo siguiente:

* El valor del atributo `name` es `genero` en todos los botones de radio.
* Cada botón de radio tiene un atributo `value` con un valor distinto.

Es decir, que al servidor va a llegar el `genero` con el valor del botón de radio que haya seleccionado el usuario \(`masculino`, `femenino` u `otro`\).

## Áreas de texto

Las áreas de texto son similares a los campos de texto pero pueden ser de múltiples líneas.

Para crear un área de texto se utiliza la etiqueta `<textarea>`:

```markup
<form>
  <textarea rows="5"></textarea>
</form>
```

**Nota:** a diferencia de la etiqueta `<input>`, la etiqueta `<textarea>` necesita una etiqueta de cierre.

## Lista de selección

Para crear una lista de selección utiliza la etiqueta `<select>`:

```markup
<form>
  <select name="genero">
    <option value="masculino">Masculino</option>
    <option value="femenino">Femenino</option>
  </select>
</form>
```

