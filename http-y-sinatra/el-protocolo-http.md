# El protocolo HTTP

El protocolo **HTTP** \(HyperText Transfer Protocol\) es quizá el protocolo más importante que debe conocer un desarrollador Web.

El protocolo **HTTP** es un documento que define las reglas de los mensajes que se intercambian entre los navegadores \(clientes\) y los servidores. El documento completo lo puedes encontrar en [http://www.rfc-base.org/txt/rfc-2068.txt](http://www.rfc-base.org/txt/rfc-2068.txt).

**HTTP** es un protocolo cliente-servidor, lo que significa que el cliente envía una petición al servidor y espera un mensaje de respuesta.

Cuando abres el navegador e ingresas a cualquier URL los pasos que ocurren son los siguientes:

1. El navegador abre una conexión con el servidor.
2. El navegador envía un mensaje **HTTP** \(a esto se le conoce como una petición\).
3. El servidor recibe el mensaje, lo interpreta siguiendo las reglas del protocolo y responde con otro mensaje \(la respuesta\) que puede ser el documento que se solicitó el usuario, o un error \(p.e. que el recurso no existe\).
4. El navegador cierra la conexión.

## Mensajes HTTP

Un mensaje **HTTP** \(no importa si es de petición o respuesta\) se compone de 3 partes:

* La primera línea \(que es diferente para la petición y la respuesta\).
* Encabezados.
* Una línea en blanco.
* El cuerpo \(opcional\)

### Ejemplo de mensaje de petición

```text
GET /index.html HTTP/1.1
Host: wikipedia.org
Accept: text/html
```

La primera línea se compone de un **verbo** \(en este caso GET\), una ruta a un recurso \(en este caso `/index.html`\) y la versión del protocolo \(en este caso `HTTP/1.1`\)

En este ejemplo tenemos dos encabezados: `Host` y `Accept`.

Este mensaje no tiene cuerpo.

### Ejemplo de mensaje de respuesta

```text
HTTP/1.1 200 OK
Server: wikipedia.org
Content-Type: text/html
Content-Lenght: 2026

<html>
  …
</html>
```

## Verbos

La primera línea de un mensaje **HTTP** de petición empieza con un **verbo** \(también se le conoce como **método**\). Los **verbos** definen la acción que se quiere realizar sobre el recurso. Los verbos más comunes son:

* **GET**: se utiliza para solicitar un recurso.
* **POST**: se utiliza para publicar un recurso.
* **PUT**: se utiliza para reemplazar un recurso.
* **DELETE**: se utiliza para eliminar un recurso.

Existen otros pero estos son los más comunes.

## Códigos de respuesta

La primera línea de un mensaje de respuesta tiene un código de 3 dígitos que le indica al cliente cómo interpretar la respuesta.

Los códigos de respuesta se dividen en cinco categorías dependiendo del dígito con el que inician:

* **1XX**: Información
* **2XX**: Éxito
* **3XX**: Redirección
* **4XX**: Error en el cliente
* **5XX**: Error en el servidor

## Encabezados

Los encabezados brindan información adicional sobre la petición o la respuesta. Los encabezados tienen la siguiente sintaxis:

```text
[nombre del encabezado]: [valor del encabezado]
```

## URL

Un **URL** \(Uniform Resource Locator\) se utiliza para ubicar un recurso en Internet. Los **URLs** no solo se pueden utilizar para el protocolo HTTP, se utilizan en muchos otros protocolos.

La siguiente imagen muestra las partes de un **URL** utilizando dos ejemplos:

![URL](https://s3.amazonaws.com/makeitreal/images/full-stack-curriculum/url.jpg)

### Esquema

El esquema define el protocolo a utilizar, para HTTP puede ser `http` o `https` \(el protocolo seguro de HTTP\).

### Host

La IP o el nombre del servidor que se quiere acceder \(p.e. 127.0.0.1, localhost, google.com, www.google.com.co, etc.\)

### Puerto

E puerto en el que está escuchando el servidor HTTP. Si se omite se asume que es el 80.

### Path

Define la ruta del recurso que se quiere acceder.

### Query String

Contiene información adicional para el servidor en forma de propiedades \(`atributo=valor`\). Las propiedades se separan por `&`.

### Fragmento

La referencia a una ubicación interna del documento.

## Recursos relacionados

* Ver el video de esta lección: [https://youtu.be/K589vqhuMm8](https://youtu.be/K589vqhuMm8).

