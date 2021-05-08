# Múltiples tablas

Para esta sección usaremos los siguientes datasets:

* orders2.csv = https://drive.google.com/file/d/1lkfPhOFDNYmoR4aEBxq1XSFZbljvWQ0k/view?usp=sharing
* customers.csv = https://drive.google.com/file/d/1jarSrOk55_ErMrFUY3Y9oKMtVMj92lqw/view?usp=sharing
* products.csv = https://drive.google.com/file/d/1HrYp6mbj0bw5c6Ibn3PeCcuo6TTlazl8/view?usp=sharing

Descargarlos y los importamos de la siguiente manera:

```python
orders = pd.read_csv('orders2.csv')
products = pd.read_csv('products.csv')
customers = pd.read_csv('customers.csv')

print(orders)
print(products)
print(customers)
```

Aquí podría surgir una pregunta: ¿Es posible que haya valores duplicados en la columna id de un dataframe? Si. No es como SQL que tiene llaves primarias. No existe un equivalente a llaves primarias en un dataframe de pandas. Sin embargo, hay varias maneras de lidiar con ello. Una manera es eliminar los duplicados de una columna específica con `drop_duplicates`

```python
df.drop_duplicates(subset=['column_name'])
```

La otra forma es resetear los índices como ya vimos también. Usando `reset_index()`

## Inner merge
Igual que en SQL podemos hacer un inner join con Pandas usando el método `.merge`. El método `.merge` busca las columnas que son comunes entre dos data frames y luego mira las filas donde esos valores de las columnas son iguales. Luego combina las columnas que hacen match en una sola fila en una nueva tabla.

```python
new_df = pd.merge(orders, customers)
print(new_df)
```

Hagamos algunos ejercicios más con otros dataframes antes de continuar usando los importados.

Dados los siguientes dataframes:

```python
sales = pd.DataFrame({
  'month': ['January', 'February', 'March', 'April', 'May', 'June'],
  'revenue': [300, 290, 310, 325, 475, 495]
})

targets = pd.DataFrame({
  'month': ['January', 'February', 'March', 'April', 'May', 'June'],
  'target': [310, 270, 300, 350, 475, 500]
})
```

usted necesita analizar las ventas. Creemos un nuevo data frame llamado `sales_vs_targets` el cual contiene el inner join entre `sales` y `targets`

```python
sales_vs_targets = pd.merge(sales, targets)
print(sales_vs_targets)
```

La empresa quiere saber los meses en que alcanzaron sus objetivos (`targets`) de ventas (`revenue`). Para ello seleccionamos las filas de `sales_vs_targets` donde `revenue` es mayor a `target`. Guárdelo en una variable llamada `lo_logramos`

```python
lo_logramos = sales_vs_targets[sales_vs_targets.revenue > sales_vs_targets.target]
print(lo_logramos)
```

## Inner merge II

Volvamos a los datos que importamos al principio. Adicional a usar `pd.merge`, cada data frame tiene su propio método `merge`. Si queremos hacer merge entre `orders` y `customers`, podemos usar:

```python
new_df = orders.merge(customers)

print(new_df)
```

Esto produce el mismo data frame que sí hemos llamado `pd.merge(orders, customers)`. Usamos la última sintaxis generalmente cuando estamos haciendo merge en más de dos dataframes, a los que llamamos encadenar los comandos. Miremos un ejemplo:

```python
big_df = orders.merge(customers).merge(products)
print(big_df)
```

Este comando hizo merge primero entre `orders` y `customers` y luego ese resultado (nuevo data frame) le hace merge con `products`.

¿Es importante el orden del merge? Si. El orden de los merge afectan el orden de las filas y columnas del data frame resultante. Cuando usamos el método `merge()` se preservará el orden de las llaves de la izquierda.

`df1.merge(df2).merge(df3)` => preservará el orden del `df1` cuando hace el merge con el `df2`. E igual será preservado cuando haga merge con `df3`

Sin embargo, si ese orden no nos interesa mantenerlo, podemos hacer algo como:

`df3.merge(df1).merge(df2)` => mismo resultado con diferente orden.

## Merge en columnas específicas
En el anterior ejemplo de `products` y `orders` ambos tenían una columna llamada `product_id`. Sin embargo, normalmente cada tabla tiene es una columna llamada simplemente `id`. El `id` puede significar algo diferente en cada tabla, y esto podría generarnos un error al hacer merge. Una forma que tenemos para solucionar esto es con el método `.rename` para renombrar las columnas de nuestro merge.

En el siguiente ejemplo vamos a renombrar la columna `id` por `customer_id`, así `orders` y `customers` tienen una columna en común para el merge

```python
pd.merge(orders, customers.rename(columns={'id': 'customer_id'}))
```

Hagamos ahora un merge sobre `orders` y `products` usando `rename`. Guardemos el resultado en la variable `orders_products` e imprímala

```python
orders_products = pd.merge(orders, products.rename(columns={'id': 'product_id'}))

print(orders_products)
```

Pregunta: Es la columna `id` similar a los primary keys de SQL? Son similares, pero la funcionalidad no es la misma que para SQL. En SQL las primary key proveen un “constraint” (validación) en donde los valores de esa columna deben ser únicos. Y dará un error si no lo son. En Pandas no hay en sí una primary key constraint, y la columna con el `id` puede tener valores duplicados

Entonces cuando trabajemos con dataframes necesitamos asignarle a la columna algo como “actúe como primary key” y prevenir valores duplicados en esa columna

### Mismatched Merges

Anteriormente vimos que siempre las columnas hacen match, pero qué pasa si no? Imaginemos que nuestra tabla `product` está desactualizada y no tiene el producto más nuevo: “Product 5”. Que pasara en este caso? Lo que sucederá es simplemente que este nuevo producto no será incluido en el data frame resultante. Recuerden que es un inner merge igual a SQL, y sólo retorna valores que hacen match

## Outer Merge
Ya vimos que perdemos datos si hay filas que no hacen match. Supongamos que dos empresas se van a fusionar. Cada una tiene un listado de clientes, pero con algunos datos diferentes. La compañía A tiene nombre e email. Y la B tiene nombre y teléfono. Así mismo tienen algunos clientes en común, pero otros son diferentes

Si queremos combinar los datos sin perder los datos de ambas empresas, usamos un “Outer merge”. Incluirá todas las filas de ambas tablas, incluso si no hacen match. Los valores faltantes se reemplazan con `None` o `nan`

```python
pd.merge(company_a, company_b, how='outer')
```

## Left Merge

Supongamos que queremos identificar cuáles consumidores no tienen el teléfono. Podríamos querer una lista de todos los consumidores que tienen email, pero no tienen `phone`. Podemos hacer esto corriendo un Left Merge. Los left incluyen todas las filas de la primera tabla (left) pero solo las filas de la segunda tabla (right) que hacen match con la primera tabla.

En este caso el orden SÍ importa, porque la primera tabla será la de la izquierda

```python
pd.merge(company_a, company_b, how='left')
```

## Right Merge

Es exactamente lo opuesto al left merge. Aquí la tabla final va a contener todas las filas de la tabla de la derecha, pero solo las filas de la primera con las que haga match

## Concatenando DataFrames

Algunas veces un dataset es subdividido en múltiples tablas. Por ejemplo, las tenemos divididas en múltiples archivos CSV, así cada download es pequeño. Cuando necesitamos reconstruir un único DataFrame desde múltiples y pequeños DataFrames podemos usar este método:

```python
pd.concat([df1, df1, df3 ...])
```

Este método sólo funcionará si todas las columnas son las mismas en todos los dataframes.
