# Carga de Imágenes

Existen dos formas de cargar imágenes desde nuestra aplicación de React:

* Enviar la imagen a un backend para cargarla a un servicio de almacenamiento como [Cloudinary](https://cloudinary.com/), Dropbox o S3.
* Enviar la imagen directamente al servicio de almacenamiento (aunque para algunos servicios como S3 necesitamos un backend para generar un token).

En esta guía vamos a ver cómo cargar archivos directamente a [Cloudinary](https://cloudinary.com/) sin necesidad de pasar por el backend.

**Nota:** [Según Cloudinary](https://support.cloudinary.com/hc/en-us/articles/208335975-How-safe-secure-is-it-to-use-unsigned-upload-from-web-browsers-or-mobile-clients), aunque es posible que alguien copie el código y utilice nuestra cuenta para subir imágenes, en la práctica esto no es muy común que ocurra. Si esto es una preocupación sería mejor [cargar la imagen desde el backend](../express-ii/carga-de-imagenes.md) o [generar una firma de autenticación desde el backend](https://cloudinary.com/documentation/upload_images#generating_authentication_signatures). En esta guía vamos a hacer la carga directa.

Para continuar necesitas una cuenta en [Cloudinary](https://cloudinary.com/) y obtener los siguientes datos que encontrarás en el Dashboard (una vez ingreses a tu cuenta):

* El Cloud Name.
* El API Key.

También necesitas habilitar las cargas no firmadas en la configuración creando un [Upload Preset como se explica en esta sección de la documentación](https://cloudinary.com/documentation/upload_presets).

Para cargar una imagen a Cloudinary necesitas realizar dos pasos:

1. Agregar el campo tipo "file" y almacenar el archivo en el estado del componente.
2. Agregar un botón que cargue el archivo a Cloudinary.

Para el primer paso podemos agregar el campo de la siguiente manera:

```jsx
function App() {
  const [file, setFile] = useState(null);

  return (
    <>
      <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
    </>
  )
}
```

Ahora agregamos el botón y una función que va a cargar el archivo a [Cloudinary](https://cloudinary.com/). El ejemplo completo quedaría de la siguiente forma:

```jsx
function App() {
  const [file, setFile] = useState(null);

  const CLOUD_NAME = "CLOUD_NAME"
  const UPLOAD_PRESET = "UPLOAD_PRESET"

  const upload = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUD_NAME);
    const response = await fetch(`https://api.cloudinary.com/v1_1/${UPLOAD_PRESET}/upload`, 
        { method: "POST", body: data })
    const data = await response.json()
    console.log(data) // reemplazar con un mensaje de éxito o la acción deseada
  };

  return (
    <div className="App">
      <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
      <button onClick={upload}>Upload</button>
    </div>
  );
}
```

Para más información sobre la carga de imágenes en [Cloudinary](https://cloudinary.com/) te recomendamos [la documentación oficial](https://cloudinary.com/documentation/image_upload_api_reference).

### Crear una vista previa de la imagen antes de cargar

Es posible crear una vista previa de la imagen utilizando el método `URL.createObjectURL`:

```jsx
function App() {
  const [file, setFile] = useState(null)

  // ...

  return (
    <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
    { file ? <img alt="Preview" height="60" src={URL.createObjectURL(file)} /> : null }
    ...
  )
}
```

## Transformaciones

Una funcionalidad muy interesante de Cloudinary es que podemos realizar transformaciones a nuestras imágenes. Estas transformaciones son procesadas en los servidores de Cloudinary y tienen un costo (después de un generoso plan gratuito).

Algunas transformaciones posibles son las siguientes:

* Tamaño (escalar, limitar, llenar, cortar, etc.)
* Ubicar texto u otras imágenes como marcas de agua.
* Efectos, filtros y otras mejoras artísticas.
* Detección de caras.

La forma más fácil de realizar transformaciones es enviarlas como parte el URL de la imagen. Por ejemplo, si tenemos una imagen llamada `sample.jpg` podemos cambiar el tamaño a un ancho de 100px con la siguiente URL:

```
https://res.cloudinary.com/<cloud_name>/c_crop,w_100/sample.jpg
```

**Nota:** No olvides reemplazar `<cloud_name>` por el valor real.




