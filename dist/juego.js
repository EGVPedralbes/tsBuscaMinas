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
                cell.style.backgroundImage = `url(img/square.gif)`;
                cell.style.backgroundSize = "cover";
                cell.style.width = "5vw";
                cell.style.height = "5vw";
                cell.id = "cell-" + i + "-" + j;
                row.appendChild(cell);
            }
            table.appendChild(row);
        }
        table.id = "gameTable";
        return table;
    }
    addEventListeners() {
        var _a, _b;
        (_a = document.getElementById("gameTable")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (event) => {
            let cell = event.target;
            if (cell) {
                let bgImage = cell.style.backgroundImage;
                if (bgImage === `url("img/square.gif")`) {
                    checkCell(cell);
                }
            }
        });
        (_b = document.getElementById("gameTable")) === null || _b === void 0 ? void 0 : _b.addEventListener("contextmenu", (event) => {
            event.preventDefault();
            let cell = event.target;
            if (cell) {
                let bgImage = cell.style.backgroundImage;
                let id = cell.id.split("-");
                let i = id[1];
                let j = id[2];
                this.tablero.getTablero()[parseInt(i)][parseInt(j)].setFlag();
                if (bgImage === `url("img/square.gif")`) {
                    cell.style.backgroundImage = `url("img/flag.png")`;
                }
                else {
                    if (bgImage === `url("img/flag.png")`) {
                        cell.style.backgroundImage = `url("img/square.gif")`;
                    }
                }
                if (this.tablero.checkWin()) {
                    setTimeout(() => {
                        alert("Ganaste");
                        location.reload();
                    }, 100);
                }
            }
        });
        const checkCell = (cell) => {
            let id = cell.id.split("-");
            let i = id[1];
            let j = id[2];
            let bgImage = cell.style.backgroundImage;
            if (bgImage === `url("img/square.gif")`) {
                cell.style.backgroundImage = this.tablero.reveal(parseInt(i), parseInt(j));
                let newbgImage = cell.style.backgroundImage;
                if (newbgImage === 'url("img/mina.png")') {
                    for (let x = 0; x < this.tablero.getFilas(); x++) {
                        for (let y = 0; y < this.tablero.getColumnas(); y++) {
                            let cell = document.getElementById("cell-" + x + "-" + y);
                            let image = this.tablero.reveal(x, y);
                            if (image === 'url(img/mina.png)') {
                                cell.style.backgroundImage = image;
                            }
                        }
                    }
                    setTimeout(() => {
                        alert("Perdiste");
                        location.reload();
                    }, 100);
                    // this.tablero.lost();
                }
                else {
                    if (newbgImage === 'url("img/Minesweeper_0.gif")') {
                        for (let x = parseInt(i) - 1; x <= parseInt(i) + 1; x++) {
                            for (let y = parseInt(j) - 1; y <= parseInt(j) + 1; y++) {
                                if (x >= 0 && x < this.tablero.getFilas() && y >= 0 && y < this.tablero.getColumnas()) {
                                    let cell = document.getElementById("cell-" + x + "-" + y);
                                    let bgImage = cell.style.backgroundImage;
                                    if (bgImage === `url("img/square.gif")`) {
                                        checkCell(cell);
                                    }
                                }
                            }
                        }
                    }
                    if (this.tablero.checkWin()) {
                        setTimeout(() => {
                            alert("Ganaste");
                            location.reload();
                        }, 100);
                    }
                }
            }
        };
    }
}
