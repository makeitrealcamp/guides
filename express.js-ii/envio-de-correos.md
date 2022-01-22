# Envío de Correos

Para enviar correos electrónicos desde nuestras aplicaciones necesitamos un proveedor como [SendGrid](https://sendgrid.com/), [MailGun](https://www.mailgun.com/) o [Gmail](https://gmail.com/) (no recomendado para producción), entre otros.

En esta guía vamos a ver cómo funciona [Nodemailer](https://nodemailer.com/) (la librería más popular) utilizando [SendGrid](https://sendgrid.com/) como proveedor.

**Nota:** Para seguir esta guía vas a necesitar crear una cuenta en [SendGrid](https://sendgrid.com/) y crear un API Key.

## Nodemailer

[Nodemailer](https://nodemailer.com/) utiliza [SMTP (Simple Mail Transfer Protocol)](https://es.wikipedia.org/wiki/Protocolo_para_transferencia_simple_de_correo) para el envío de correos y se puede utilizar con cualquier proveedor.

La ventaja de utilizar [Nodemailer](https://nodemailer.com/) es que es fácil cambiar de proveedor si es necesario. La desventaja es que no podemos utilizar las características adicionales que ofrecen algunos proveedores como plantillas y programación de correos, entre otros.

El primer paso para utilizar [Nodemailer](https://nodemailer.com/) es instalar la librería:

```
$ npm install nodemailer
```

El siguiente paso es requerirla, crear un transporte (depende del proveedor que se utilice) y después utilizar el método `sendMail` para enviar el correo. En el siguiente ejemplo vamos a utilizar un transporte falso que simula el envío del correo (ideal para desarrollo y pruebas):

```javascript
const express = require("express")
const nodemailer = require("nodemailer")

const app = express()

app.post("/sendEmail", async (req, res) => {
  const transporter = await createFakeTransporter()

  const email = await transporter.sendMail({
    from: '"Pedro Perez" <pedro@example.com>',
    to: "maria@example.com, juan@example.com",
    subject: "Hola ✔", // Asunto
    text: "Hola Mundo", // Contenido plano (texto)
    html: "<strong>Hola Mundo</strong>", // Contenido HTML
  })

  // Vista previa del correo (sólo para el transporte falso de pruebas)
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(email))

  res.json({ id: email.id })
})

async function createFakeTransporter() {
  let testAccount = await nodemailer.createTestAccount()

  return nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  })
}

app.listen(3000)
```

### Utilizando el transporte de Sendgrid

Para utilizar [SendGrid](https://sendgrid.com/) sólo debemos reemplazar el transporte. El primer paso es instalar la librería [`nodemailer-sendgrid-transport`](https://github.com/sendgrid/nodemailer-sendgrid-transport):

```
$ npm install nodemailer-sendgrid-transport
```

Y ahora debemos crear el transporte para enviar el email modificando el código anterior:

```javascript
// ... requerir express y crear el app
const nodemailer = require("nodemailer")
const sgTransport = require('nodemailer-sendgrid-transport');

app.post("/sendEmail", (req, res) => {
  const transporter = await createSendGridTransporter()
  const email = await transporter.sendMail(...)
})

async function createSendGridTransporter() {
  const options = {
    auth: {
      api_key: 'SENDGRID_API_KEY' // Reemplazar por el API KEY
    }
  }

  return nodemailer.createTransport(sgTransport(options));
}

// ...
```

**Nota:** No publiques tu API Key en repositorios de Git públicos o SendGrid bloqueará tu cuenta para evitar usos indebidos. Utiliza alguna librería como [`dotenv`](https://github.com/motdotla/dotenv) y una variable de entorno para almacenarla.

### Plantillas

Escribir todo el código HTML del email dentro de nuestro código puede ser muy engorroso. Existen varias soluciones de plantillas como [Handlebars](https://handlebarsjs.com/) que permiten separar el código HTML del JavaScript. Sin embargo, una solución simple es usar las plantillas literales de JavaScript en otro archivo que contenga todas las plantillas de nuestros correos.

Creemos un archivo llamado `templates.js` que exporte funciones para cada una de las plantillas. Por ejemplo:

```javascript
exports.welcomeEmail = function(name) {
  return `
    <h1>Hola ${name},</h1>
    <p><strong>Bienvenido ...</strong></p>
  `
}

exports.recoverPasswordEmail = function(token) {
  // retorna el HTML de recuperar contraseña
}
```

Recuerda que todos los estilos CSS deben ser en línea, es decir, dentro del atributo `style` de cada elemento. Si quieres separar el CSS del HTML te recomendamos [esta librería](https://www.npmjs.com/package/inline-css). Su uso está por fuera del alcance de esta guía pero encontrarás varios ejemplos en el enlace.

### Archivos adjuntos

Para enviar archivos adjuntos desde Nodemailer sólo debes agregar la llave `attachments` al mensaje con un arreglo de objetos. Cada objeto representa un archivo adjunto:

```javascript
let message = {
  ...
  attachments: [
    { // podemo pasar un string
      filename: 'text1.txt',
      content: 'hello world!'
    },
    { // o la ruta de un archivo, entre otras opciones
      path: '/path/to/file.txt'
    }
  ]
}
```

Para ver otras formas de adjuntar cada archivo y más opciones te recomendamos ver [la documentación de Nodemailer](https://nodemailer.com/message/attachments/).

## SendGrid (librería oficial)

Veamos ahora como enviar correos utilizando la [librería oficial de SendGrid](https://github.com/sendgrid/sendgrid-nodejs/tree/main/packages/mail). El primer paso es instalarla con el siguiente comando:

```
$ npm install @sendgrid/mail
```

Para enviar correos utilizamos el método `send`:

```javascript
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('SENDGRID_API_KEY');

async function send() {
  const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'El asunto del mensaje',
    text: 'Contenido del mensaje como texto plano',
    html: '<strong>Contenido del mensaje como HTML</strong>',
  };

  try {
    await sgMail.send(msg)
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
}

send()
```

**Nota:** No publiques tu API Key en repositorios de Git públicos o SendGrid bloqueará tu cuenta para evitar usos indebidos. Utiliza alguna librería como [`dotenv`](https://github.com/motdotla/dotenv) y una variable de entorno para almacenarla.

### Correos programados

Al utilizar la librería oficial de SendGrid podemos aprovechar funcionalidades únicas como envío de correos programados agregando la llave `send_at` al mensaje. Por ejemplo, para enviar un correo 5 minutos en el futuro podemos agregar lo siguiente al construir el mensaje:

```javascript
const time = Math.round((new Date()).getTime() / 1000) // UNIX Timestamp
const msg = {
  // ... ver ejemplo anterior
  send_at: time + 300 // 300 segundos = 5 minutos
};
```

**Nota:** Actualmente SendGrid sólo permite programar correos hasta 72 horas en el futuro.

### Plantillas

SendGrid ofrece una funcionalidad que permite crear plantillas con variables que se reemplazarán al hacer el envío. Esto permite separar el diseño del código para que personas no técnicas puedan modificar el texto o elementos gráficos (utilizando un editor gráfico) sin necesidad de hacer cambios sobre el proyecto.

Para crear una plantilla accede a tu cuenta de [SendGrid en la Web](https://sendgrid.com/) e ingresa a la opción **Email API -> Dynamic Templates** del menú principal. Debes crear una plantilla asignándole un nombre y después crear una primera versión (puedes crear varias versiones de la misma plantilla).

Para el contenido del correo puedes empezar a partir de alguno de los diseños predefinidos o desde cero. SendGrid incluye un editor gráfico pero también puedes manipular el HTML y CSS directamente si es necesario.

Las variables se insertan con doble corchete (`{{ }}`), por ejemplo, `{{name}}` o `{{credits}}` dentro del texto del correo.

Cada plantilla tiene un identificador único que se debe incluir al enviar el correo. 

Por ejemplo, asumiendo que tenemos una plantilla con identificador `d-12345` con dos variables `name` y `credits`, podríamos utilizar el siguiente código para enviar un mensaje reemplazando la variable `name` por `Pedro Perez` y `credits` por `15000`:

```javascript
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('SENDGRID_API_KEY');

async function send() {
  try {
    const msg = {
      from: 'test@example.com',
      personalizations: [
        {
          to: 'test@example.com',
          dynamic_template_data: {
            name: "Pedro Perez",
            credits: 15000
          }    
        }
      ],
      template_id: "d-12345",
    };
    
    await sgMail.send(msg)
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  } 
}

send()
```

En este ejemplo tenemos una llave `personalizations` donde vamos a incluir el valor de las variables para cada destinatario en la llave `dynamic_template_data`. Fíjate también en la llave `template_id` que se debe reemplazar con el verdadero identificador de la plantilla que se quiera usar.