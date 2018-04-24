# Tipos y operadores

En este capítulo vamos a hablar sobre cadenas de texto, números y booleanos \(verdadero o falso\), que son tipos de datos básicos en JavaScript, y cómo realizar algunas operaciones con ellos. Empecemos con las cadenas de texto.

## Cadenas de texto

Una cadena de texto es un conjunto de caracteres encerrados entre comillas simples \(`'`\) o dobles \(`"`\). Por ejemplo:

```javascript
"Texto entre comillas dobles"
'Texto entre comillas simples'
```

Aunque parece fácil, existen tres errores comunes al definir una cadena de texto para que los tengas en cuenta e intentes evitarlos:

1. Olvidarse de la comilla de cierre. Por ejemplo:

   ```text
   "Hola mundo
   ```

2. Cerrar la cadena con la comilla incorrecta \(p.e. abrir la cadena con comilla doble y cerrarla con comilla sencilla\). Por ejemplo:

   ```text
   "Hola mundo'
   ```

3. Insertar el mismo tipo de comillas dentro de la cadena de texto. Por ejemplo:

   ```text
   "Y él dijo: "Hola Mundo""
   'Hol'a mundo'
   ```

Para solucionar el último error \(punto 3\) podemos encerrar la primera cadena entre comillas simples y la segunda entre comillas dobles para que funcione:

```javascript
"Hol'a mundo"
'Y él dijo: "Hola mundo"'
```

**Recuerda:** Lo importante es que el texto no contenga la comilla que se utilizó para definir la cadena.

Pero ¿qué pasa si tenemos un texto con comillas simples y dobles? En ese caso tendríamos que utilizar el caracter de escape `\` como en el siguiente ejemplo:

```javascript
'Y \'él dijo\': "Hola mundo"'
```

O

```javascript
"Y 'él dijo': \"Hola mundo\""
```

En el primer ejemplo escapamos con `\` las comillas simples porque con esas fue que encerramos el texto, mientras que en el segundo ejemplo escapamos las comillas dobles porque con esas fue que encerramos el texto.

### Imprimiendo una cadena de texto

Para imprimir una cadena de texto en la línea de comandos \(o en la consola del navegador\) utilizamos `console.log` como hicimos en el capítulo anterior:

```javascript
console.log('Y \'él dijo\': "Hola mundo"');
```

Si guardas esa línea en un archivo llamado `strings.js` y lo ejecutas, el resultado debería ser el siguiente:

```text
$ node strings.js
Y 'él dijo': "Hola mundo"
```

### Concatenando cadenas

Es posible unir cadenas de texto con el operador `+`. Por ejemplo, abre la consola de Node.js y ejecuta lo siguiente:

```javascript
"Hola" + "Mundo" + "Cómo" + "Estás"
```

Deberías ver algo como esto:

```text
$ node
> "Hola" + "Mundo" + "Cómo" + "Estás"
HolaMundoCómoEstás
```

Fíjate que las palabras no se separan con espacio automáticamente, tenemos que agregar los espacios explícitamente:

```text
$ node
> console.log("Hola " + "Mundo " + "Cómo " + "Estás");
Hola Mundo Cómo Estás
```

Debes tener cuidado al concatenar cadenas y números.

En este momento la concatenación de cadenas no es muy útil porque hubiesemos podido escribir todo el texto `"Hola Mundo Cómo Estás"` dentro de una sola cadena, pero a medida que veamos otros conceptos se va a volver cada vez más importante.

## Números

Crea un nuevo archivo llamado `numbers.js` con el siguiente código:

```javascript
console.log(1 + 2)
console.log(3 * 4 + 5)
console.log(8 / 2)
```

Si lo ejecutas deberías ver algo así:

```text
$ node numbers.js
3
17
4
```

Fíjate en la segunda línea del ejemplo. JavaScript sigue el mismo estandar que en matemáticas, y por lo tanto la multiplicación se ejecuta primero que la suma. Puedes cambiar el comportamiento con paréntesis. Por ejemplo, cambia la operación de la segunda línea por `3 * (4 + 5)`. El resultado ahora debería ser `27`.

A diferencia de las cadenas de texto, los números **no** se encierran entre comillas de ninún tipo \(de lo contrario JavaScript los trata como texto y no como números\). Por ejemplo, abre la consola de Node.js y escribe `"1" + "2"`. El resultado ya no es `3`, es la cadena de texto `"12"`:

```text
$ node
> "1" + "2"
'12'
```

**Debes tener cuidado al concatenar cadenas y hacer sumas**, porque los dos utilizan el mismo operador `+`. Por ejemplo, intenta lo siguiente en la consola de Node.js:

```text
$ node
> "1 + 2 es " + 1 + 2
'1 + 2 es 12'
> "1 + 2 es " + (1 + 2)
'1 + 2 es 3'
```

En el primer ejemplo JavaScript toma la cadena `"1 + 2 es "` y la concatena con `"1"`, luego concatena el `"2"`, y el resultado es `"1 + 2 es 12"`.

En el segundo ejemplo JavaScript realiza primero la operación `(1 + 2)`, que da `3`, y luego concatena la cadena `"1 + 2 es "` con ese `3`, por eso es que el resultado es ahora `"1 + 2 es 3"`.

### Valores y expresiones booleanas

Existen dos valores booleanos en programación: verdadero \(`true`\) y falso \(`false`\). Abre la consola de Node.js, escribe `true` y oprime Enter, después escribe `false` y oprime Enter. El resultado debe ser el siguiente:

```text
$ node
> true
true
> false
false
```

También es posible escribir **expresiones** que evalúen a `true` o `false`. Escribe ahora las siguientes expresiones en la consola de Node.js:

* `5 > 3`
* `5 >= 3`
* `4 < 4`
* `4 <= 4`
* `2 === 2`
* `2 !== 2`

El resultado debería ser el siguiente:

```text
$ node
> 5 > 3
true
> 5 >= 3
true
> 4 < 4
false
> 4 <= 4
true
> 2 === 2
true
> 2 !== 2
false
> "ruby" === "javascript"
false
> "ruby" !== "javascript"
true
```

A los operadorres `<`, `>`, `<=`, `>=`, `===`, `!==` se les llama **operadores lógicos** y se utilizan para crear expresiones que se evalúan a un valor booleano: verdadero \(`true`\) o falso \(`false`\).

En JavaScript existe el operador `==` y el `===` \(así como el `!=` y `!==`\). Veamos dos ejemplos para explicar la diferencia:

```text
$ node
> 1 == "1"
true
> 1 === "1"
false
```

En los dos ejemplos estamos comparando el número `1` con la cadena de texto `"1"`. En la mayoría de lenguajes esto sería `false` porque son tipos diferentes, estamos comparando un número con una cadena de texto. Pero el `==` realiza una conversión de tipos primero y después evalúa la igualdad.

**Nota:** Hoy el `==` y el `!=` se consideran mala práctica y de ahora en adelante utilizaremos el `===` y `!==` para hacer comparaciones.

