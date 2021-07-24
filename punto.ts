export class Punto 
{
    private x: number;
    private y: number;

    //Definición de constructor
    constructor (coorX: number , coorY: number)
    {
        this.x = coorX;
        this.y = coorY
    }

    //Métodos
    public getX(): number
    {
        return this.x;
    };
    public getY(): number
    {
        return this.y;
    };
    public setX(x:number): void
    {
        this.x = x
    };
    public setY(y: number):void
    {
        this.y = y
    };
    public toString(): string
    {
        let coord: string = "(" + this.getX() + "," + this.getY ()+")";
        return coord;
    };
    public distanciaAlorigen(): number
    {
        const origen = new Punto (0,0);
        let distancia: number = 0;
        distancia = 
            parseFloat(
                    (
                        Math.sqrt(
                                Math.pow((origen.getX()- this.getX()),2)
                                + Math.pow((origen.getY()- this.getY()),2)
                        )
                    ).toFixed(2)
            );
            return distancia;
    };
    public calcularDistancia(nPunto: Punto): number
    {
        let distancia: number =0;
        distancia =
            parseFloat(
                (
                    Math.sqrt(
                        Math.pow((nPunto.getX()- this.getX()),2)
                        + Math.pow ((nPunto.getY()- this.getY()),2)
                        )
                ).toFixed(2)
                );
                return distancia;
    };
    public calcularCuadrante():number
    {
        let cuadrante:number = 0;
        let coorX = this.getX();
        let coorY = this.getY();

        if(coorX>0)
        {
            coorY>0 ? cuadrante = 1
                    : cuadrante = 4
        }
        else
        {
            coorY>0 ? cuadrante = 2
            : cuadrante = 3
        }
        return cuadrante;
    };
    public calcularMasCercano(arrPuntos:Punto[]):Punto
    {
        let masCercano:Punto = new Punto(0,0);
        let indiceCercano:number = null;
        let minDistancia:number = 0;
        let distancias:number[] = [];

        for(let i=0; i<arrPuntos.length; i++)
        {
            let p = this.calcularDistancia(arrPuntos[i]);
            distancias.push(p);
        }

        distancias.forEach(function(valor,i)
            {
                  if(i!=0)
                {
                    if(valor<minDistancia )
                        {
                        minDistancia = valor;
                        indiceCercano = i;  
                        }      
                }
                else
                {
                minDistancia = valor;
                indiceCercano = i;
                }
            })
        
        masCercano = arrPuntos[indiceCercano];
        
        return masCercano;
    };

}