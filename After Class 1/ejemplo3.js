function validarDatos(dia, mes, hora) {
    let validar = true;
    if (isNaN(dia) || dia < 1 || dia > 31) {
        validar = false;
        alert("El dia es invalido");
    }
    if (isNaN(mes) || mes < 1 || mes > 12) {
        validar = false;
        alert("El mes es invalido");
    }
    if (isNaN(hora) || hora < 1 || hora > 23) {
        validar = false;
        alert("la hora es invalida");
    }
    return validar;
}

//pedir los datos de la cita
let nombre = prompt("Ingresa tu nombre");
let dia = prompt("Ingrese dia [1 -31]");
let mes = prompt("Ingrese Mes [1-12]");
let hora = prompt("Ingrese hora [0-23]");

if (validarDatos(dia, mes, hora)) {
    //calcular los precios
    let precioTotal = 0;
    let producto;
    while (producto != "fin") {
        producto = prompt("Ingresa el nombre del producto o 'fin' para salir");
        if (producto != "fin") {
            let precio = parseFloat(prompt("Ingrese el precio del producto"));
            if (!isNaN(precio)) {
                precioTotal += precio;
            }
        }
    }
    alert(`El precio total del carrito es: ${precioTotal}`);
    let cuotas = parseInt(prompt("ingrese la cantidad de cuotas [1-12]"));
    if (!isNaN(cuotas) && cuotas >= 1 && cuotas <= 12) {
        let precioCuota = precioTotal / cuotas;
        alert(`El plan de pago total de la cutota es de ${precioCuota}`)
    } else {
        alert("Las cuotas ingresadas son invalidas");
    }
}