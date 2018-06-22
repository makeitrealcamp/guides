# Action creators

Los **action creators** son funciones que retornan **acciónes** (los objetos que se le pasan al `dispatch` del **store**). Son opcionales pero se considera una buena práctica crearlos.

Generalmente las **acciones** tienen una llave `type` que define el tipo de acción que se quiere invocar sobre la **función reductora**. Por ejemplo:

```javascript
store.dispatch({
  type: "NEW_TASK",
  task: task
});
```

Con un **action creator**, en vez de pasarle la **acción** directamente al `dispatch`, crearíamos una función que va a construir la **acción**. Por ejemplo:

```javascript
const newTask = task => {
  return {
    type: "NEW_TASK",
    task: task
  }
}
```

Y el `dispatch` lo invocaríamos de la siguiente forma:

```javascript
store.dispatch(newTask(task));
```

Las ventajas son las siguientes:

1. Hacen el código más fácil de leer.
2. Evitan tener las cadenas de texto del `type` quemadas por todo el código.
3. Facilitan conocer los parámetros que necesita la acción.
4. Permiten agregar lógica adicional (esto va a ser muy importante más adelante cuando hablemos de los middlewares).

{% youtube %} https://www.youtube.com/watch?v=5ewsUa1nfiU {% endyoutube %}
