/*Ejercicio:
 ### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂
 
 Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. 
 Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones 
 de Sabor, Presentación y Dificultad para cada torta. Al final, debes determinar qué torta 
 tiene el mayor puntaje. Y si hay empate? 🤔 En ese caso, informaremos que se produjo un 
 empate (no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate,
  solo basta con indicar que se produjo empate si al menos existe uno).
 
 ## Funciones a implementar:
 calcularPuntaje(sabor, presentacion, dificultad):
 Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma 
 de esos números (el puntaje total del pastel).
 
 determinarGanador():

 Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita 
 las puntuaciones de cada uno de ellos y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.*/


import * as rs from 'readline-sync'


 // variable para el puntaje total
 let i : number;
 const CONCURSANTES : number = rs.questionInt ("ingrese la cantidad de concursantes: ");  //la cantidad de cocursantes no cambia, por eso es una constante
 let puntuacionPresentacion : number 
 let puntuacionSabor: number
 let puntuacionDificultad : number
 let puntuacion : string

//no se como hacer para no repetir el código de for y while. 

let calcularPuntaje = (CONCURSANTES : number) : void => {
    for(i = 1 ; i <= CONCURSANTES; i++){
        do{
        puntuacionSabor = rs.questionInt ("ingrese la puntuacion del sabor: "); 
        if (puntuacionSabor > 5 ) {
            console.log ("ingrese un puntaje menor o igual a 5");
        }    
    }while (puntuacionSabor > 5);
            console.log ("puntaje registrado");
       
        do{
        puntuacionPresentacion = rs.questionInt ("ingrese la puntuacion de la presentacion: "); 
        if (puntuacionPresentacion > 5 ) {
            console.log ("ingrese un puntaje menor o igual a 5");
        }     
    }while (puntuacionPresentacion > 5)
            console.log ("puntaje registrado");
            
        do{
        puntuacionDificultad = rs.questionInt ("ingrese la puntuacion de la dificultad: ");
        if (puntuacionDificultad > 5 ) {
            console.log ("ingrese un puntaje menor o igual a 5");
        }
    }while (puntuacionDificultad > 5)
            console.log ("puntaje registrado");

        let total: number  = puntuacionSabor + puntuacionPresentacion + puntuacionDificultad;
        console.log(`el puntaje para el concursante ${i} es: ${total}`);
}
}

calcularPuntaje(CONCURSANTES); 


/*no se como hacer para seleccionar los ganadores. No se como dejar guardado los puntajes para seleccionar el mayor puntaje.
Haber escrito todo esto sin ayuda, ya es un gran logro :) */
