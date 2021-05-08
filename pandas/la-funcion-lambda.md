# La función Lambda

La función lambda es una forma de definir una función en una sola línea de código. Usualmente se la asignamos a una variable

```python
add_two = lambda my_input: my_input + 2

print(add_two(3)) #5
print(add_two(100)) # 102
print(add_two(-2)) # 0
```

¿Como trabaja?:
* la función es guardada en una variable llamada `add_two`
* `lambda` declara que esta es una función `lambda` (es como declarar el `def` de la función normal de python)
* `my_input` es lo que pasamos como parámetro de la función
* `my_input + 2` es lo que crearemos con el `return`

```python
mylambda = lambda x: (x * 2) + 3

print(mylambda(5)) #13
```

la función lambda funciona con todo tipo de variables no solo con integers!

```python
stringlambda = lambda x: x.lower()

print(stringlambda("Hola Mundo!")) # hola mundo!
```

## Sentencias `if` con Lambda
Podemos hacer los lambdas más complejos usando una forma modificada de la sentencia `if`. Supongamos que queremos pagar a los trabajadores medio tiempo por las horas extras (cualquier trabajo de más de 40 horas por semana). la siguiente función convertirá el número de horas en medio tiempo utilizando una sentencia `if`

hagamos primero el ejercicio con una función "normal" de python

```python
def myfunction(x):
    if x > 40:
        return 40 + (x - 40) * 1.50
    else:
        return x

print(myfunction(43)) #44.5
```

Hagamos lo mismo, pero ahora con la función Lambda de python

```python
myfunction = lambda x: 40 + (x - 40 ) * 1.50 if x > 40 else x

print(myfunction(43)) #44.5
```

En términos generales la sintaxis es la siguiente:

```python
variable = lambda x: [SALIDA SI ES TRUE] if [CONDICIONAL] else [SALIDA SI ES FALSE]
```

## Aplicando Lambda a una columna
En pandas normalmente usamos lambdas para correr funciones complejas sobre columnas. Tenemos este dataframe:

```python
df = pd.DataFrame([
    ['JHON SMITH', 'john.smith@gmail.com'],
    ['jane Doe', 'jdoe@yahoo.com'],
    ['Jos schomo', 'joe@outlook.com']
],
columns=['Name', 'Email'])
```

Ahora supongamos que queremos crear una columna que contenga el proveedor del email de cada email address. recuerde que para esto podemos usar el método `split` de python. Algo como esto: `('john@gmail.com').split('@')[-1]` y retornará `'gmail.com'`, o sea el proveedor de email. Queremos hacer esta operación sobre cada elemento de una columna de pandas.

```python
df['Email Provider'] = df.Email.apply(
    lambda x: x.split('@')[-1]
)

print(df)

#     Name                 Email Email Provider
# 0  JHON SMITH  john.smith@gmail.com      gmail.com
# 1    jane Doe        jdoe@yahoo.com      yahoo.com
# 2  Jos schomo       joe@outlook.com    outlook.com
```

## Aplicando lambdas en una fila

También podemos hacer operaciones sobre múltiples columnas a la vez. Si usamos `apply` sin especificar una columna y añadimos el argumento axis=1 el input a la función lambda será la fila completa no una columna. Recordemos que para acceder a los valores de una fila usamos la sintaxis `row.colum_name` o `row["column_name"]`

```python
df = pd.DataFrame([
    ['Manzana', 1.00, 'No'],
    ['Leche', 4.20, 'No'],
    ['Papel', 5.00, 'Yes'],
    ['Bombilla', 3.75, 'Yes']
],
columns =['Item', 'Price', 'Is taxed?'])
```

Queremos añadir el precio con los impuestos por cada fila, necesitaremos revisar dos columnas: `price` e `Is taxed?`

* Si `Is taxed?` es `Yes`, lo multiplicamos por `7.5% (1.075)`
* Si `Is taxed?` es `No`, dejamos el precio sin multiplicar

```python
df['Price with Tax'] = df.apply(
    lambda row: row['Price'] * 1.075 if row['Is taxed?'] == 'Yes' else row['Price'],
    axis = 1
)

print(df)

#     Item  Price Is taxed?  Price with Tax
# 0   Manzana   1.00        No         1.00000
# 1     Leche   4.20        No         4.20000
# 2     Papel   5.00       Yes         5.37500
# 3  Bombilla   3.75       Yes         4.03125
```
