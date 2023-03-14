// Abstraccion
console.log("Hola Mundo");
console.log("Hola alumnos");
console.log("Hola profesores");

function hola(sujeto) {
    console.log(`Hola ${sujeto}`);
}

hola("Mundo");
hola("alumnos");
hola("profesores");

function imprimir(numero) {
    for (let i = 0; i <= numero; i++) {
        console.log(i);
    }
}

imprimir(5);
imprimir(10);