function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}
const persona1 = new Persona("MAtias Velasquez", 24, "Av 123");
const persona2 = new Persona("Soledad", 22, "AV 123");

console.log(persona1.nombre);
console.log(persona2.edad);