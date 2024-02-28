"use strict";
class Celda {
    constructor(bomb) {
        if (bomb) {
            this.isBomb = true;
        }
        else {
            this.isBomb = false;
        }
        this.isFlag = false;
        this.isRevealed = false;
    }
    getCelda() {
        return this;
    }
    setRevealed() {
        this.isRevealed = true;
    }
    setFlag() {
        this.isFlag = !this.isFlag;
    }
    getRevealed() {
        return this.isRevealed;
    }
    getFlag() {
        return this.isFlag;
    }
    getBomb() {
        return this.isBomb;
    }
}
