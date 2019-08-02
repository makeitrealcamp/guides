# Creando una Web API

A través de un **Web API** puedes permitir a otras aplicaciones interactuar con tu aplicación.

**API**, por las siglas en Inglés **Application Programming Interface** es, en general, una forma en que un software interactúa con otro software, no necesariamente a través de HTTP. Por ejemplo, a través del [API de jQuery](http://api.jquery.com/) puedes realizar todo tipo de cosas interesantes en el navegador.

Un **Web API** es un tipo de **API** que utiliza el protocolo **HTTP** como forma de comunicación.

Todo lo que has visto hasta ahora te sirve para crear tus propias **Web API's**, la única diferencia es que en vez de recibir información de formularios y renderizar **HTML**, ahora nuestros controladores van a recibir y retornar **JSON**.

## Nuestro primer endpoint

A las URL's que van exponer funcionalidad de nuestra aplicación se les llama **endpoints**.

Por ejemplo, la siguiente ruta permite listar los libros:

```javascript
app.get("/api/books", async (req, res) => {
  const books = await Book.find({});
  res.json(books);
});
```

Este código es muy similar al que ya habíamos visto con la diferencia que ahora, en vez de retornar HTML vamos a retornar JSON.



## Identificando las peticiones

Para identificar las peticiones debemos guardar el id del usuario en una cookie cuando ingrese su usuario y contraseña. Vamos a utilizar [JSON Web Tokens](https://github.com/auth0/node-jsonwebtoken), que es una forma de garantizar que la información que vamos a almacenar en la cookie fue generada por nuestro servidor.

El primer paso es agregar la librería a nuestro proyecto:

```
$ yarn add jsonwebtoken
```

El siguiente paso es requerir la librería y utilizarla para generar el token firmado que vamos a almacenar en la cookie.

```javascript
var jwt = require("jsonwebtoken");

app.post("/login", function(req, res) {  
  jwt.sign({ userId: 1 }, "secretcode", (err, token) => {
    res.cookie("token", token, { httpOnly: true });
  });
});
```

Para autenticar las peticiones podemos crear un middleware que redireccione al usuario al formulario de login si no existe el token o es inválido:

```javascript
const requireUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.redirect("/login");
  } else {
    jwt.verify(token, "secretcode", (err, decoded) => {
      if (err) {
        res.clearCookie("token");
        return res.redirect("/login");
      }
      next();
    });
  }
};
```

Y por último, podemos utilizar el middleware en las rutas que necesiten autenticación:

```javascript
app.get("/", requireUser, (req, res) => {
  res.render("index");
});
```
