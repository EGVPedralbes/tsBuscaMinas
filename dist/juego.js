"use strict";
class Juego {
    constructor(filas, columnas) {
        this.tablero = new Tablero(filas, columnas);
    }
    createTable() {
        let table = document.createElement("table");
        for (let i = 0; i < this.tablero.getFilas(); i++) {
            let row = document.createElement("tr");
            for (let j = 0; j < this.tablero.getColumnas(); j++) {
                let cell = document.createElement("td");
                cell.textContent = "[]";
                cell.id = "cell-" + i + "-" + j;
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        table.id = "gameTable";
        return table;
    }
}
