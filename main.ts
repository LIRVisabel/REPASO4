import { Punto } from './punto'
import { Triangulo } from './triangulo';

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

//TEST DE LA CLASE TRIANGULO
console.log("PRUEBA DE LA CLASE TRIANGULO.....................");
let ptriangulo: Triangulo = new Triangulo (
                new Punto(10, 30),
                new Punto ( -40,-20),
                new Punto (15, 25),
            );

console.log("PRUEBA DE GET Y SETS....................................");
console.log(ptriangulo.print());
ptriangulo.setV1(new Punto (15, 30));
ptriangulo.setV2(new Punto (55, -10));
ptriangulo.setV3(new Punto ( -20, 40));
console.log("nuevos vertices"+ ptriangulo.print());

console.log("PRUEBA CALCULO DE LONGITUDES-LADOS.......................");
console.log(ptriangulo.calcularLongitudLados());

console.log("Lado 1: "+ new Punto(25,10).calcularDistancia(new Punto(120,50)) );
console.log("Lado 2: "+ new Punto(120,50).calcularDistancia(new Punto(-100,200)));
console.log("Lado 3: "+ new Punto(-100,200).calcularDistancia(new Punto(10,70)));