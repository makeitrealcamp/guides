# Primeros pasos

El primer paso para utilizar **git** es instalar la aplicación de consola. También existe una aplicación de escritorio mantenida por Github que permite trabajar con **git** de forma gráfica. Sin embargo, en estas guías sólo vamos a trabajar con la aplicación de consola.

## Instalación

Es posible que ya tengas la aplicación de consola de **git** en tu máquina, para verificar ejecuta el siguiente comando desde la consola:

```
git --version
```

Te debería aparecer la versión que tengas instalada. Si aparece un mensaje diciendo que el comando no fue encontrado es porque aún no está instalado.

**Nota:** Si estás en Mac y aún no tienes instalado **git** te va a pedir que lo instales.

### Linux

Si estás en una distribución basada en Debian (p.e. Ubuntu) ejecuta el siguiente comando para instalar la aplicación de consola de **git**:

```
sudo apt install git-all
```

Si estás en una distribución basada en Fedora (p.e. RHEL o CentOS) ejecuta el siguiente comando:

```
sudo dnf install git-all
```

### MacOS

La forma más fácil de instalar **git** en Mac es ejecutando el comando `git --version` y seguir las instrucciones.

### Windows

La forma más fácil de instalar **git** en Windows es descargándolo de la [página oficial](https://git-scm.com/) y seguir las instrucciones.

## Configurando el nombre y correo

Lo primero que debes hacer después de que has instalado **git** es configurar el nombre y correo que se va a utilizar para firmar cada **commit** que hagas. Utiliza los comandos `git config --global user.name <name>` y `git config --global user.email <email>`.

Por ejemplo, si tu nombre fuera "Pedro Perez" utilizarías el siguiente comando:

```text
git config --global user.name Germán Escobar
```

Y asumiendo que el correo es "pedro.perez@gmail.com" utilizarías el siguiente comando:

```text
git config --global user.email pedro.perez@gmail.com
```

## Configurando el editor de texto

Otro cambio que recomendamos realizar en la configuración es la del editor de texto que **git** va a utilizar para modificar los mensajes de **commits**. Por defecto **git** utiliza un editor de texto para la consola llamado [Vim](https://www.vim.org/) que no es muy fácil de utilizar.

Para configurar [VSCode](https://code.visualstudio.com/) como el editor de texto por defecto ejecuta el siguiente comando:

```
git config --global core.editor "code --wait"
```

Para configurar [Atom](https://atom.io/) como el editor de texto por defecto ejecuta el siguiente comando:

```
git config --global core.editor "atom --wait"
```

Esos son los editores más populares actualmente pero si usas alguno diferente puedes buscar en Internet cómo configurarlo en **git**.
