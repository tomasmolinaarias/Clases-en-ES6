export class Impuesto {
    constructor(MontoBrutoA, Deduciones) {
        this.MontoBrutoA = MontoBrutoA;
        this.Deduciones = Deduciones;
    }
    //SETTER
    set setmontoBrutoA(MontoBrutoA) {
        this.MontoBrutoA = MontoBrutoA
    }
    set setDeduciones(Deduciones) {
        this.Deduciones = Deduciones
    }
    //GETTER
    get getmontoBrutoA() {
        return this.MontoBrutoA
    }
    get getDeduciones() {
        return this.Deduciones
    }
}