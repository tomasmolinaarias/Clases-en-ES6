export class Cliente {
    constructor(Nombre, Impuesto) {
        this.Nombre = Nombre;
        this.Impuesto = Impuesto
    }
    //SETTER
    set setImpuesto(Impuesto) {
        this.Impuesto = Impuesto;
    }
    set setNOMBRE(Nombre) {
        this.Nombre = Nombre
    }
    //GETTER
    get getImpuesto() {
        return this.Impuesto
    }
    get getNombre() {
        return this.Nombre
    }

    // Calcularimpuesto = () => ((this.Impuesto.getmontoBrutoA - this.Impuesto.getDeduciones) * 0.21)
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Cliente.prototype.Calcularimpuesto = function () {
    return ((this.Impuesto.getmontoBrutoA - this.Impuesto.getDeduciones) * 0.21)
}