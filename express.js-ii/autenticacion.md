# Autenticación

En este capitulo vamos a ver cómo almacenar las contraseñas de los usuarios, y cómo identificar las peticiones HTTP.

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

Para identificar las peticiones debemos guardar el `id` del usuario en la **sesión** cuando este se autentique.

El primer paso es asegurarte que hayas instalado y configurado la librería  [cookie-session](https://github.com/expressjs/cookie-session) como se muestra en el capítulo de [Cookies y sesión de Express I](../express.js/cookies-y-sesion.md).

El siguiente paso es agregar el `id` del usuario a la **sesión**. Por ejemplo, si tu ruta de autenticación es `POST /login` y si estás utilizando [Mongoose](http://mongoosejs.com/):

```javascript
app.post("/login", function(req, res) {  
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.authenticate(email, password);
    if (user) {
      req.session.userId = user._id; // acá guardamos el id en la sesión
      return res.redirect("/");
    } else {
      res.render("/login", { error: "Wrong email or password. Try again!" });
    }
  } catch (e) {
    return next(e);
  }
});
```

El método `authenticate` del modelo `User` sería el siguiente:

```javascript
const UserSchema = new mongoose.Schema({ // ... });

UserSchema.statics.authenticate = async (email, password) => {
  // buscamos el usuario utilizando el email
  const user = await mongoose.model("User").findOne({ email: email });

  if (user) {
    // si existe comparamos la contraseña
    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) reject(err);
        resolve(result === true ? user : null);
      });
    });
    return user;
  }

  return null;
};
```

[bcrypt](https://github.com/kelektiv/node.bcrypt.js) no soporta aún `async/await` así que en la línea 9 estamos envolviendo el código que hace la verificación en una **promesa**.

Por último, para identificar las peticiones HTTP creamos un **middleware** que verifica si la sesión tiene un `userId` y carga al usuario:

```javascript
const requireUser = async (req, res, next) => {
  const userId = req.session.userId;
  if (userId) {
    const user = await User.findOne({ _id: userId });
    res.locals.user = user;
    next();
  } else {
    return res.redirect("/login");
  }
}
```

Ahora, en todas las rutas que requieran autenticación podemos agregar este **middleware**. Por ejemplo:

```javascript
app.get("/", requireUser, (req, res) => {
  res.render("index");
});
```

Para ver un ejemplo completo de autenticación de usuarios con **Express.js** y **MongoDB** te recomendamos ver la aplicación que se encuentra en [este repositorio de Github](https://github.com/makeitrealcamp/node-auth-example).
