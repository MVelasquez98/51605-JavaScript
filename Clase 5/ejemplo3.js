function Persona(objeto) {
    this.nombre = objeto.nombre;
    this.edad = objeto.edad;
    this.calle = objeto.calle;
}
const persona1 = new Persona({ nombre: "MAtias Velasquez", edad: 24, calle: "Av 123" });
const persona2 = new Persona({ nombre: "Soledad", edad: 22, calle: "AV 123" });

console.log(persona1.nombre);
console.log(persona2.edad);