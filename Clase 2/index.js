let nombre = prompt("Ingresa tu nombre");

if (nombre == "Matias" || nombre == "matias" || nombre == "MATIAS") {
    console.log(`El nombre es ${nombre}`);
    console.log("El nombre es " + nombre);
} else if (nombre == "") {
    alert("El nombre esta vacio");
} else {
    alert("El nombre no es matias");
}