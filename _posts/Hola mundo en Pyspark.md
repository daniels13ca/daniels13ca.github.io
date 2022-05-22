# Hola Mundo en pyspark

El objetivo de este tutorial es mostrar el paso a paso para la instalación de un ambiente Spark (y pyspark) en Windows 10/11 utilizando WSL y la creación de un primer ejemplo sencillo de su utilización.

## Instalación de Ubuntu sobre WSL

1. Abrir **Características de Windows** y habilitar las siguientes:

Imagen_1

Luego de aceptat se solicitará reiniciar al sistema.

2. En **Windows Store** buscar **Ubuntu** e instalar la versión **20.04.4 LTS**

Imagen_2

Luego de la instalación, al abrirla aparecerá el siguiente error:

Imagen_3

3. Abrir la página http://aka.ms/wsl2kernel y descargar el siguiente archivo:

Imagen_4

Luego de instalarlo, volver a lanzar Ubuntu. En este punto instalará algunas actualizaciones y a continuación pedirá definir el usuario y la contraseña root:

Imagen_5

Se puede validar que la instalación este correcta utilizando los comandos `ls` y `pwd`:

Imagen_6

Salir de ubuntu con `exit`

4. Iniciar de nuevo Ubunto y sin cerrarlo abrir una consola de **Power Shell**, en está última utilizar el comando `wsl -l -v` para ver que versión de WSL se esta corriendo por defecto:

Imagen_7

En caso que sea la versión 1 escribir `wsl --set-default-version 2`:

Imagen_8

Cerrar Ubuntu para aplicar los cambios.

## Instalación de Spark

`sudo apt update -y`

Pide la contraseña previamente definida

`sudo apt install default-jre`

y se le da **Y**

`sudo apt install openjdk-11-jre`
`sudo apt install openjdk-11-jdk`

y se le da **Y**

`java –version`

Imagen_9

`sudo su`

Imagen_10

`mkdir –p /opt/spark`
`cd /opt/spark`
`sudo apt install wget`
`wget https://dlcdn.apache.org/spark/spark-3.2.1/spark-3.2.1-bin-hadoop3.2.tgz`

va a descargar hadoop y se demora un buen tiempo

`ls`

Imagen_11

`tar xvf spark-3.2.1-bin-hadoop3.2.tgz`

`cd`

`ls -al`

Imagen_12

`nano .bashrc`

vamos al final con las flechas y pegamos con crtl+v

`export SPARK_HOME=/opt/spark/spark-3.2.1-bin-hadoop3.2`
`export PATH=$PATH:$SPARK_HOME/bin`

cerramos con `Ctrl+X` guardamos con  `Y` y `Enter`

`cat .bashrc`

`source .bashrc`

`spark-shell`

Imagen_13


`:q` para salir de **Scala**

## Instalación de Pyspark

`sudo apt install python3`

`sudo apt install python3-pip`

y darle `Y`

se demora un poco

`nano .bashrc`

vamos al final con las flechas y pegamos con `Ctrl+V`

`export PYSPARK_PYTHON=/usr/bin/python3`

cerramos con `Ctrl+X` guardamos con `Y` y `Enter`

`cat .bashrc`

`source .bashrc`

`sudo pip install pyspark`

se demora un poco

`source .bashrc`

`pyspark`

Imagen_14

`Ctrl+D` para salir

## Integración con Visual Studio Code

tener instalado anaconda, visual studio code con extensiones:

- Python
- Jupyter
- Remote – WSL


ahora con en la consola de ubuntu:
`code .`

Imagen_15

en caso que no aparezca la terminal darle `Ctrl+Ñ`

se verá que se esta en el entorno linux y se tiene la consola corresponiente

Imagen_16

Crear un carpeta llamada `HolaMundo` y ubicarse en ella:

Imagen_17

en esta carpeta crear el archivo HolaMundo.ipynb e instalar las extensiones que recomiende

