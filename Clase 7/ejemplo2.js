// Funciones que retornan funciones
function suma(a) {
    return function (b) {
        return (a + b);
    }
}

let suma5 = suma(5);// 5 + b
let suma10 = suma(10); // 10 + b

console.log(suma10(2));//12
console.log(suma5(2));//7

function mayorQue(a) {
    return (a, b) => b > a;
}

let mayor10 = mayorQue(10); // b > 10;

console.log(mayor10(12));//true
console.log(mayor10(5));//false

function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b;
    } else if (op == "restar") {
        return (a, b) => a - b;
    }
}

let sumaF = asignarOperacion("sumar");
let resta = asignarOperacion("restar");

console.log(sumaF(4, 6));//10
console.log(resta(10, 5));//5