---
layout: post
title: Dificultad de los grupos - Qatar 2022
---


Es bien sabido que el [Ranking FIFA de selecciones](https://www.fifa.com/es/fifa-world-ranking/men?dateId=id13603) tiene fallas estrucutrales que hacen que no refleje el poder actual de los equipos, ante esto existe una versión del [Ranking ELO](https://www.eloratings.net/) el cual si permite establecer cual selección se encuentra en un mejor nivel a partir de sus resultados y el nivel de los equipos contra los que los obtuvo.

Partiendo de esta premisa quise ver que tan fuertes son los equipos que conforman cada grupo para intentar identificar algún posible "grupo de la muerte" obteniendo el siguiente resultado:

[!Ranking ELO por grupos](https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/ELO_grupo.png)

Vale la pena aclarar que aún existen grupos que no estan totalmente definidos, en esos casos incluí todos los posibles equipos que pueden conformarlos.

Si bien no se identifica claramente un grupo teóricamente más difícil, si existe uno que destaca por el bajo poder de sus miembros: El grupo A, en el que "curiosamente" se encuentra Qatar.

Tambíen quise hacer el mismo ejercicio para los equipos clasificados por confederación obteniendo el siguiente resultado:

[!Ranking ELO por grupos](https://raw.githubusercontent.com/daniels13ca/daniels13ca.github.io/master/images/ELO_confederacion.png)

De ahí me surgió la idea de verificar el mito de "la clasificación CONMEBOL es la más dura del mundo", para ello tuve en cuenta la media de poder de los equipos clasificados y el porcentaje de selecciones que logran clasificar. Con lo cual construí la siguiente razón:

$$Dificultad = \frac{\text{Media Elo Clasificados}}{\text{Porc. que Clasifica}}$$ 

El resultado final es el siguiente:

| Confederación | % Clasif. | Media ELO  | Dificultad |
|---------------|-----------|------------|------------|
|OFC            | 7,14%     | 1558,00    | 218,12     |
|CAF            | 9,26%     | 1650,20    | 178,22     |
|CONCACAF       | 10,29%    | 1802,75    | 175,12     |
|AFC            | 11,96%    | 1664,29    | 139,19     |
|UEFA           | 23,64%    | 1927,27    | 81,50      |
|CONMEBOL       | 45,00%    | 1909,80    | 42,44      |
