let nombre = "matias velasquez"; //variable global

function saludar() {
    let nombre = "soledad"; //variable local
    console.log(`Hola ${nombre}`);
}

console.log(nombre);
saludar();