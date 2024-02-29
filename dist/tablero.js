"use strict";
class Tablero {
    constructor(filas, columnas) {
        this.filas = filas;
        this.columnas = columnas;
        this.casillas = [];
        this.generateTablero(filas, columnas);
    }
    generateTablero(filas, columnas) {
        for (let i = 0; i < filas; i++) {
            this.casillas[i] = [];
            for (let j = 0; j < columnas; j++) {
                if (Math.random() < 0.2) {
                    this.casillas[i][j] = new Celda(true);
                }
                else {
                    this.casillas[i][j] = new Celda(false);
                }
            }
        }
    }
    checkNeighbours(cell, i, j) {
        let count = 0;
        for (let x = i - 1; x <= i + 1; x++) {
            for (let y = j - 1; y <= j + 1; y++) {
                if (x >= 0 && x < this.filas && y >= 0 && y < this.columnas) {
                    if (this.casillas[x][y].getBomb()) {
                        count++;
                    }
                }
            }
        }
        return count;
    }
    getTablero() {
        return this.casillas;
    }
    getFilas() {
        return this.filas;
    }
    getColumnas() {
        return this.columnas;
    }
}
