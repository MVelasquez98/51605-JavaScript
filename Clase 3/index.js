let nombre = prompt("Ingresa un nombre");
while (nombre != "ESC") {
    switch (nombre) {
        case "ana": alert("Hola ana");
            break;
        case "JUAN CRUZ": alert("Hola juan cruz");
            break;
        default: alert("Quien sos?");
    }
    nombre = prompt("Ingresa un nombre");
}