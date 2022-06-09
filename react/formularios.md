# Formularios

Para trabajar con campos de entrada en React debes mantener sincronizado el valor de cada campo con el estado del componente. Esto requiere un poco más de código en comparación a otros frameworks pero está alineado con la filosofía de React: que todos los cambios al estado sean explícitos.

Veamos el siguiente código:

```javascript
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState("")

  function updateName(e) {
    setName(e.target.value);
  }
  
  return (
    <div>
      <input type="text" value={name} onChange={updateName} />
    </div>
  );
}
```

El primer paso es inicializar el estado. En este caso vamos a tener un único campo de entrada que va a almacenar un nombre:

```javascript
const [name, setName] = useState("")
```

El siguiente paso es mantener sincronizado el campo el estado. Para eso necesitamos definir el campo de la siguiente forma:

```javascript
<input type="text" value={name} onChange={updateName} />
```

El valor de este campo va a ser `name` y cuando cambie vamos a llamar al método `updateName` que se va a encargar de actualizar el estado con el nuevo valor:

```javascript
function updateName(e) {
  setName(e.target.value);
}
```

La ventaja es que si queremos utilizar el valor en cualquier otro método simplemente necesitamos obtener el valor del estado. Veamos un ejemplo con un botón que al hacerle click utiliza el valor del campo de entrada para mostrar una alerta:

```javascript
function App() {
  // ... el estado

  function saluda() {
    alert(`Hola ${name}!`);
  }

  return (
    <div>
      <input type="text" ... />
      <button onClick={saluda}>Saluda</button>
    </div>
  );
}
```

Al hacer click sobre el botón se va a llamar el método `saluda` que utiliza el estado `name` para mostrar la alerta. No es necesario obtener el valor directamente del campo de entrada.
