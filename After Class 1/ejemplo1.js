let resultado = 0;
function validarNumero(n) {
    if (n >= 1 && n <= 1000) {
        resultado += n;
    }else{
        console.log("El numero no es valido")
    }
}
let n1 = parseInt(prompt("Ingrese numero 1"));
validarNumero(n1);
let n2 = parseInt(prompt("Ingrese numero 2"));
validarNumero(n2);
console.log(resultado);