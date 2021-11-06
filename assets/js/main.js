import {
    Impuesto
} from "./impuestos.js"
import {
    Cliente
} from "./cliente.js"
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let impuesto1 = new Impuesto(100, 10);
let impuesto2 = new Impuesto(300, 1);
let impuesto3 = new Impuesto(250, 2);

let cliente1 = new Cliente('juan', impuesto1)
let cliente2 = new Cliente('pedro', impuesto2)
let cliente3 = new Cliente('luis', impuesto3)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(cliente1)
console.log(cliente2)
console.log(cliente3)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(cliente1.Calcularimpuesto())
console.log(cliente2.Calcularimpuesto())
console.log(cliente3.Calcularimpuesto())