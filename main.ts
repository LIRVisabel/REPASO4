import { Punto } from './punto';


let puntoA: Punto = new Punto (2 , 9);
let puntoB: Punto = new Punto (41, 11);
console.log("Muestra toString...................................");
console.log(puntoA.toString());

console.log("distancia al origen...............................");
console.log(puntoB.distanciaAlorigen());

console.log("Calculo de la distancia...........................");
console.log(puntoA.calcularDistancia(new Punto(10,5)));

console.log("Calculo del cuadrante.............................");
console.log("Cuadrante" + puntoB.calcularCuadrante());
console.log("Cuadrante" + new Punto (-10, 5).calcularCuadrante);

console.log("Calculo del punto mas cercano.....................");
let arrayP: Punto[] =[
                new Punto (10,20),
                new Punto (100,200),
                new Punto (75, 20),
                ];
console.log(puntoA.calcularMasCercano(arrayP));



