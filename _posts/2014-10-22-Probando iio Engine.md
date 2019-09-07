---
layout: post
title: Probando iio Engine
---

Existen diferentes motores de juegos de video desde los más complejos como [Unity](https://es.wikipedia.org/wiki/Unity_(motor_de_videojuego)) hasta otros muchos más sencillos que son librerías de JavaScript; en esta ocasión he decidido implementar un juego utilizando un framework para HTMLL y Javascript.

![iio 1](https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/iio1.png)

El framework escogido es [iio Engine](http://iioengine.com/), entre otras cosas por ser totalmente gratuito y por pesar tan solo 47 KB. Luego de dedicarle algunas horas este fue el resultado que obtuve:

*(Hacer clic en la imagen para dirigirse al sitio del juego)*

[![iio 2](https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/ii2.png)](https://daniels13ca.itch.io/dionaea-attack)

El juego en general es algo muy básico (especialmente con assets muy simples y bastante feo en general). Sin embargo permite llegar a algunas conclusiones:

**Pros:**

* No es necesario instalar nada, basta con descargar un .js y tener un editor de texto.
* Incluyendo otras librerías de Javascript se puede hacer multiplataforma (por ejemplo el módulo touch de [zepto](https://zeptojs.com/)).
* Si se tienen conocimiento previos de programación el tiempo de aprendizaje es mínimo, solo es necesario leer un poco la documentación de la librería.
* Es totalmente gratuito.

**Contras:**

* Es necesario tener conocimientos de programación.
* No soporta juegos 3D.
* No tiene herramientas que permitan modificar algunas características de los assets.