function calculadora(n1, n2, operador) {
    let resultado = 0;
    switch (operador) {
        case "+": resultado = n1 + n2;
            break;
        case "-": resultado = n1 - n2;
            break;
        case "*": resultado = n1 * n2;
            break;
        case "/": resultado = n1 / n2;
            break;
        default: return 0;
            break;
    }
    return resultado;
}

let resultado = calculadora(4, 5, "+");
console.log(resultado);