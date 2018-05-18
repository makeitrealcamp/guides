# Autenticación

En este capitulo vamos a ver cómo almacenar las contraseñas de los usuarios, y cómo utilizar JWT (JSON Web Tokens) y  cookies para identificar las peticiones HTTP.

Recuerda que HTTP es un protocolo sin estado, lo que quiere decir que el servidor Web no mantiene un registro de quién está visitando una página.

## Almacenando las contraseñas

Para almacenar las contraseñas en la base de datos se recomienda utilizar un paquete llamado [bcrypt](https://github.com/kelektiv/node.bcrypt.js) para encriptar las contraseñas.

El primer paso es instalar el paquete con npm o Yarn. Por ejemplo con Yarn:

```
$ yarn add bcrypt
```

Para encriptar una contraseña utiliza el método `hash`:

```javascript
var bcrypt = require('bcrypt');

bcrypt.hash("alguna-contraseña", 10).then(function(hash) {
  // almacena la contraseña en la base de datos
})
```

Para verificar si una contraseña es correcta utiliza el método `compare`:

```javascript
bcrypt.compare("alguna-contraseña", hash).then(function(res) {
  // res == true
});

bcrypt.compare("otra-contraseña", hash).then(function(res) {
  // res == false
});
```

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
