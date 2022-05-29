---
layout: post
title: Instalación de Spark y "Hola Mundo" en Pyspark
---

El objetivo de este tutorial es mostrar el paso a paso para la instalación de un ambiente Spark (incluyendo Pyspark) en Windows 10/11 utilizando [WSL](https://es.wikipedia.org/wiki/Windows_Subsystem_for_Linux), y la creación de un primer ejemplo sencillo de su utilización.

## Instalación de Ubuntu sobre WSL

1. Abrir **Características de Windows** y habilitar las siguientes:

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_1.png" alt="Spark 1"/>

Luego de aceptar, se solicitará reiniciar al sistema.

1. En **Windows Store** buscar **Ubuntu** e instalar la versión **20.04.4 LTS**

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_2.png" alt="Spark 2"/>

Al terminar la instalación y abrir Ubuntu aparecerá el siguiente error:

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_3.png" alt="Spark 3"/>

3. Abrir la página http://aka.ms/wsl2kernel y descargar el siguiente archivo:

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_4.png" alt="Spark 4"/>

Luego de instalarlo, volver a lanzar Ubuntu. En este punto instalarán algunas actualizaciones y a continuación pedirá definir el usuario y la contraseña root:

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_6.png" alt="Spark 6"/>

Se puede validar que la instalación este correcta utilizando los comandos `ls` y `pwd`:

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_6.png" alt="Spark 6"/>

Salir de ubuntu con `exit`

4. Iniciar de nuevo Ubunto y sin cerrarlo abrir una consola de **Power Shell**, en está última utilizar el comando `wsl -l -v` para ver que versión de WSL se esta corriendo por defecto:

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_7.png" alt="Spark 7"/>

En caso que sea la versión 1 escribir `wsl --set-default-version 2`:

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_8.png" alt="Spark 8"/>

Cerrar Ubuntu para aplicar los cambios.

## Instalación de Spark

Luego de tener correctamente congifurado el sistema operativo, se procede a instalar Spark mediante los siguientes comandos:

1. *Actualizar CLI:* `sudo apt update -y`

Pedirá la contraseña previamente definida para el usuario root.

2. *Instalar Java*: `sudo apt install default-jre`

En todos los momentos en los que pida confirmación, está se da con `Y`

3. *Instalar el JRE:* `sudo apt install openjdk-11-jre`

4. *Instalara la JDK:* `sudo apt install openjdk-11-jdk`

En este punto se puede validar la versión instalada de Java con el comando:

`java –version`

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_9.png" alt="Spark 9"/>

5. *Ingresar en modo superusuario:* `sudo su`

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_10.png" alt="Spark 10"/>

6. *Crear carpeta de instalación:* `mkdir –p /opt/spark`

7. *Ubicarse en esa carpeta:* `cd /opt/spark`
   
8. *Instalar wget:* `sudo apt install wget`
   
9. *Descargar Spark:* `wget https://dlcdn.apache.org/spark/spark-3.2.1/spark-3.2.1-bin-hadoop3.2.tgz` (Este paso toma un tiempo considerable dependiendo del ancho de banda disponible)

Se puede verificar que el archivo se haya descargado en la carpeta correcta con `ls`

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_11.png" alt="Spark 11"/>

10. *Descomprimir el archivo:* `tar xvf spark-3.2.1-bin-hadoop3.2.tgz`

11. Salir de la carpeta actual con `cd` y verificar que se encuentre un archivo `.bashrc` con `ls -al`

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_12.png" alt="Spark 12"/>

12. *Anañadir variables de entorno:* Abrir [nano](https://es.wikipedia.org/wiki/GNU_Nano) con `nano .bashrc`, ir hasta el final desplazandose con las flechas y con `Crtl+V` pegar lo siguiente:

`export SPARK_HOME=/opt/spark/spark-3.2.1-bin-hadoop3.2`

`export PATH=$PATH:$SPARK_HOME/bin`

Salir de nano con `Ctrl+X`, guardar los cambios con  `Y` y `Enter`

13. *Validar la modificación del archivo:* `cat .bashrc`

14. *Recargar el archivo .bashrc*: `source .bashrc`

En este punto ya se tiene instalado Spark, se puede verificar con el comando `spark-shell`

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_13.png" alt="Spark 13"/>

Al ejecutarlo se entrará en una consola de [Scala](https://es.wikipedia.org/wiki/Scala_(lenguaje_de_programaci%C3%B3n))

De la cual se sale con `:q`

## Instalación de Pyspark

1. *Instalar Python 3:* `sudo apt install python3`

2. *Instalar PIP:* `sudo apt install python3-pip`

En todos los momentos en los que pida confirmación, esta se da con `Y`. Este paso toma algunos minutos.

3. *Anañadir variables de entorno:* Abrir [nano](https://es.wikipedia.org/wiki/GNU_Nano) con `nano .bashrc`, ir hasta el final desplazandose con las flechas y con `Crtl+V` pegar lo siguiente:


`export PYSPARK_PYTHON=/usr/bin/python3`

Salir de nano con `Ctrl+X`, guardar los cambios con  `Y` y `Enter`

4. *Validar la modificación del archivo:* `cat .bashrc`

5. *Recargar el archivo .bashrc*: `source .bashrc`

6. *Instalar Pyspark:* Mediante el comando `sudo pip install pyspark`

7. *Recargar el archivo .bashrc*: `source .bashrc`

Ahora se puede validar la instalación con el comando `pyspark`

A diferencia de la ocasión anterios se ingresará a una consola Pthon:

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_14.png" alt="Spark 14"/>

`Ctrl+D` para salir.

## Integración con Visual Studio Code

**Prerequisitos:** Tener instalado:
- Anaconda
- Visual Studio Code con las extensiones:
  - Python
  - Jupyter
  - Remote – WSL

1. En la consola de Ubuntu ejecutar el comando `code .` y agregar esta carpeta como segura:

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_15.png" alt="Spark 15"/>

En caso que no aparezca la terminal, teclear `Ctrl+Ñ`. Se verá que se esta en el entorno linux y se tiene la consola corresponiente.

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_16.png" alt="Spark 16"/>

Crear un carpeta llamada `HolaMundo` y ubicarse en ella:

<img src="https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/Spark_17.png" alt="Spark 17"/>

## Integración con Visual Studio Code

En esta carpeta crear el archivo `HolaMundo.ipynb` e instalar las extensiones que recomiende.

