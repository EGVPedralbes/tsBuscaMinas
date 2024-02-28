class Juego{ 
    private tablero: Tablero;

    constructor(filas: number, columnas: number){
        this.tablero = new Tablero(filas, columnas);
    }
}