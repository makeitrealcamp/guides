# Modificando DataFrames

¿Cuando vamos a necesitar modificar un DataFrame? Una razón importante para la modificación es cuando necesitamos añadir una nueva entrada a la tabla, que normalmente se denomina fila. A veces necesitamos actualizar una fila específica, o incluso varias filas, en un dataframe.

En Pandas, las columnas son similares a las columnas que se usan en las bases de datos SQL.  Nos permiten tener valores similares que caen bajo diferentes columnas. Una modificación común de un DataFrame es añadir una nueva columna si estamos ampliando el DataFrame para incluir más columnas y añadir más información.

## Añadiendo una columna

Es posible que queramos añadir nueva información o realizar un cálculo basado en los datos que ya tenemos. Una forma de añadir una nueva columna es dando una lista de la misma longitud que el DataFrame existente. Supongamos que somos dueños de una ferretería y tenemos un DataFrame que contiene información de inventario:


```python
df = pd.DataFrame([
    [1, '3 inch screw', 0.5, 0.75],
    [2, '2 inch nail', 0.10, 0.25],
    [3, 'hammer', 3.00, 5.50],
    [4, 'screwdriver', 2.50, 3.00]
],
columns=['Product ID', 'Description', 'Cost of Manufacture', 'Price']
)
```

Parece que la cantidad de cada producto en nuestro almacén ha desaparecido! Usemos el siguiente código para añadir esa información a nuestro DataFrame.

```python
df['Quantity'] = [100, 150, 50, 35]
print(df)

#     Product ID   Description  Cost of Manufacture  Price  Quantity
# 0           1  3 inch screw                 0.5   0.75       100
# 1           2   2 inch nail                 0.1   0.25       150
# 2           3        hammer                 3.0   5.50        50
# 3           4   screwdriver                 2.5   3.00        35
```

¿Podemos añadir la columna en una posicion especifica del DataFrame? Si. Especificando el index y usando `insert()`. Por ejemplo, si queremos que `Quantity` quede en la tercera columna (posicion-index 2), hacemos lo siguiente:

```python
# df.insert(position, "new-column", data)
df.insert(2, Quantity, [100, 150, 50, 35])
```

## Añadiendo columnas

Tambien podemos añadir una columna que tendra el mismo valor para todas las filas. Supongamos que todos los productos estan en inventario, podemos hacer esto:

```python
df['In stock'] = True
print(df)

#     Product ID   Description  Cost of Manufature  Price  Quantity  In stock
# 0           1  3 inch screw                 0.5   0.75       100      True
# 1           2   2 inch nail                 0.1   0.25       150      True
# 2           3        hammer                 3.0   5.50        50      True
# 3           4   screwdriver                 2.5   3.00        35      True
```

Finalmente podemos añadir una columna que corra un funcion sobre las columnas. Por ejemplo si queremos una nueva columna con los impuestos

```python
df['Sales Tax'] = df.Price * 0.075
print(df)

#     Product ID   Description  Cost of Manufature  Price  Quantity  In stock  \
# 0           1  3 inch screw                 0.5   0.75       100      True   
# 1           2   2 inch nail                 0.1   0.25       150      True   
# 2           3        hammer                 3.0   5.50        50      True   
# 3           4   screwdriver                 2.5   3.00        35      True   
#
# Sales Tax  
# 0    0.05625  
# 1    0.01875  
# 2    0.41250  
# 3    0.22500  

```

¿Podemos correr opraciones entre mas de dos columnas de un dataframe? Si. De hecho no hay limite en que cantidad de columnas puedes correr funciones. Por ejemplo si tenemos 3 columnas: `price`, `tax` y `quantity` podemos hacer algo como esto:

```python
df['Total'] = (df.Price + (df.Price * df['Sales Tax'])) * df.Quantity
print(df)

#     Product ID   Description  Cost of Manufature  Price  Quantity  In stock  \
# 0           1  3 inch screw                 0.5   0.75       100      True   
# 1           2   2 inch nail                 0.1   0.25       150      True   
# 2           3        hammer                 3.0   5.50        50      True   
# 3           4   screwdriver                 2.5   3.00        35      True   
#
# Sales Tax       Total  
# 0    0.05625   79.218750  
# 1    0.01875   38.203125  
# 2    0.41250  388.437500  
# 3    0.22500  128.625000
```

## Corriendo operaciones en columnas

A menudo queremos añadir una columna que está relacionada con las columnas existentes, pero que requieren un cálculo más complejo que multiplicar o sumar. Por ejemplo tenemos el siguiente dataframe:

```python
df = pd.DataFrame([
    ['JHON SMITH', 'john.smith@gmail.com'],
    ['jane Doe', 'jdoe@gmail.com'],
    ['Jos schomo', 'joe@gmail.com']
],
columns=['Name', 'Email'])
```

Es un poco rara la capitalización de las letras en cada fila. Nosotros queremos hacerlo más consistente cambiando todas las letras a mayúsculas. Podemos usar la función `apply` para cada valor en una columna en particular.

```python
df['Name'] = df['Name'].str.upper()
print(df)

#   Name                 Email
# 0  JHON SMITH  john.smith@gmail.com
# 1    JANE DOE        jdoe@gmail.com
# 2  JOS SCHOMO         joe@gmail.com
```

## Renombrando columnas

Es posible que tengamos que cambiar el nombre de una columna por otro que haga que los datos sean más claros para los usuarios.  Por ejemplo, si tuviéramos un dataframe con información sobre las películas, y el nombre de la columna para los títulos de las películas se llamara simplemente "nombre", esto podría no ser obvio. Podríamos renombrar la columna a algo más claro como "movie_title".

Cuando obtenemos los datos de otras fuentes, normalmente vamos a querer cambiar los nombres de las columnas. Podamos cambiar los nombres de las columnas todas a la vez con el método .columns. pero tenga cuidado porque podríamos no etiquetar bien las columnas si lo hacemos en el orden incorrecto


```python
df = pd.DataFrame({
    'name': ['john', 'andrea', 'juliana', 'daniel'],
    'age': [23, 25, 33, 34]
})

df.columns = ['First Name', 'Age']
print(df)

#   First Name  Age
# 0       john   23
# 1     andrea   25
# 2    juliana   33
# 3     daniel   34
```

También podemos renombrar columnas de forma individual usando el método `.rename`. Pasando un diccionario con los argumentos: `{'old_column_name1': 'new_column_name1', 'old_column2': 'new_column2'}`

```python
df = pd.DataFrame({
    'name': ['john', 'andrea', 'juliana', 'daniel'],
    'age': [23, 25, 33, 34]
})

df.rename(columns={
    'name': 'First Name',
    'age': 'Age'
}, inplace=True)

print(df)

# First Name  Age
# 0       john   23
# 1     andrea   25
# 2    juliana   33
# 3     daniel   34
```

## Eliminando columnas

Se puede utilizar el metodo `drop()` para eliminar una columna en especifico y debemos especificar el eje con `axis=1`

```python
df.drop(['Age'], axis=1, inplace=True)
print(df)

#   First Name
# 0       john
# 1     andrea
# 2    juliana
# 3     daniel
```
