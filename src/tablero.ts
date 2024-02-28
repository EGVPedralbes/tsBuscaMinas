class Tablero {
    private casillas: Celda[][];
    private filas: number;
    private columnas: number;

    constructor(filas: number, columnas: number) {
        this.filas = filas;
        this.columnas = columnas;
        this.casillas = [];
        this.generateTablero(filas, columnas);

    }

    private generateTablero(filas: number, columnas: number) {
        for (let i = 0; i < filas; i++) {
            this.casillas[i] = [];
            for (let j = 0; j < columnas; j++) {
                if (Math.random() < 0.2) {
                    this.casillas[i][j] = new Celda(true);
                } else {
                    this.casillas[i][j] = new Celda(false);
                }
            }
        }
    }

    public getTablero(): Celda[][] {
        return this.casillas;
    }
    public getFilas(): number {
        return this.filas;
    }
    public getColumnas(): number {
        return this.columnas;
    }
}
