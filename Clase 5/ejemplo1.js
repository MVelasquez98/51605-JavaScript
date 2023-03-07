let nombre = "Matias Velasquez";
let edad = 24;
let calle = "Av Siempre viva 123";
let propiedad = "nacionalidad";

const persona1 = { nombre: nombre, edad: edad, direccion: calle, nacionalidad: "Argentina" };

function voyaHacerAlgo(propiedad) {
    console.log(persona1[propiedad]);
    /// persona1.propiedad esto no
}

//Tomar los datos
console.log(persona1.nombre);
console.log(persona1.edad);
console.log(persona1.nacionalidad);

console.log(persona1["nombre"]);
console.log(persona1["edad"]);
console.log(persona1["direccion"]);
console.log(persona1["pepito"]);
console.log(persona1[propiedad]);
console.log(voyaHacerAlgo(propiedad));

//Modificar los datos
persona1.nombre = "Juan Cruz";
persona1["edad"] = 25;
console.log(persona1.nombre);
console.log(persona1.edad);

