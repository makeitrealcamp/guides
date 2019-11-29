# Context

El API de **contexto** nos permite compartir valores y funcionalidades a través del árbol de componentes sin necesidad de usar `props`.

## Creando un contexto

Para crear un **contexto** hay que usar la función `React.createContext`. `React.createContext` recibe como argumento el valor predeterminado del **contexto**.

Es posible crear tantos **contextos** como sea necesario.

```javascript
const Context = React.createContext({ count: 0, setCount: () => {} });
```

Al crear un **contexto** se crea un objeto que consta de dos partes, `Context.Provider` y `Context.Consumer`.

## Context Provider

El **Context.Provider** es un componente que recibe un `prop` `value` que serán los valores a compartir. Todos los componentes renderizados dentro de este componente tendran acceso a los **valores** del **contexto**.

```javascript
const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <Context.Provider
      value={{
        count,
        setCount
      }}
    >
      <Component>
    </Context.Provider>
  );
}
```

Los valores del **contexto** en este caso serían `count` y `setCount` creados previamente usando el **hook** `useState`. Tanto `Component` como sus hijos van a poder acceder a estos valores.

## Consumir los valores del contexto

Al consumir un **contexto**, React busca el `Provider` más cercano para consumir su **valor**. En caso de no encontrar un `Provider`, el valor será el valor predeterminado al crear el **contexto**. Existen 3 formas de consumir los valores contexto:

### Context Consumer

`Consumer` es el componente que nos permite consumir los valores del **contexto** usando una técnica llamada `Render Props`.

Este método se puede usar tanto en componentes **clase** como en componentes **función**.

```javascript
const Component = () => {
  return (
    <Context.Consumer>
      {(value) => {
        return (
          <div>
            <span>{value.count}</span>
            <button
              type="button"
              onClick={() => value.setCount(value.count + 1)}
            >
              Click
            </button>
          </div>
        );
      }}
    <Context.Consumer>
  )
}
```

`Render Props` renderiza una función en vez de un **componente** y recibe como argumento los valores del **contexto**.

Para aprender más sobre **Render Props** visita la guía oficial de [Render Props](https://es.reactjs.org/docs/render-props.html).

### useContext hook

Es posible consumir los valores del **contexto** y almacenar los valores en una variable usando el hook `useContext`. `useContext` recibe como argumento el **contexto** que se desea consumir.

Usando este método es posible consumir varios **contextos** desde un mismo componente.

```javascript
const Component = () => {
  const context = useContext(Context);

  return (
    <div>
      <span>{context.count}</span>
      <button
        type="button"
        onClick={() => context.setCount(context.count + 1)}
      >
        Click
      </button>
    </div>
  )
}
```

### Método estatico contextType

La última forma de consumir los valores de un **contexto** es usando el método **estático** `contextType`.

Este método solo está disponible para componentes **clase** y solo es posible consumir un **contexto** a la vez.

```javascript
class Component extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div>
        <span>{this.context.count}</span>
        <button
          type="button"
          onClick={() => this.context.setCount(this.context.count + 1)}
        >
          Click
        </button>
      </div>
    );
  }
}

// Otra manera de definir métodos estáticos

class Componente extends React.Component {
  render() {
    return (
      <div>
        <span>{this.context.count}</span>
        <button
          type="button"
          onClick={() => value.setCount(this.context.count + 1)}
        >
          Click
        </button>
      </div>
    );
  }
}

Component.contextType = Context
```

Para una guía completa de los hooks visita la guía oficial de [Context](https://es.reactjs.org/docs/context.html).
