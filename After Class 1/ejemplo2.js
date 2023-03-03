function divir(n1, n2) {
    if (n2 == 0) {
        alert("No se puede dividir por cero")
        return 0;
    }
    return n1 / n2;
}
function calculadora(n1, n2, operador) {
    let resultado = 0;
    switch (operador) {
        case 1: resultado = n1 + n2;
            break;
        case 2: resultado = n1 - n2;
            break;
        case 3: resultado = n1 * n2;
            break;
        case 4: resultado = divir(n1, n2);
            break;
        default: return 0;
            break;
    }
    return resultado;
}
// Main principal
let opcion;
do {
    //tomar los datos
    let n1 = parseInt(prompt("Ingresa el primer numero"));
    let n2 = parseInt(prompt("Ingresa el segundo numero"));
    opcion = ParseInt(prompt(`Escoge una opcion 
    [1] Sumar
    [2] Restar
    [3] Multiplicar
    [4] Dividir
    [0] Salir`));
    //llamo a la funcion
    calculadora(n1, n2, opcion)

} while (opcion != 0);