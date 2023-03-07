function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = () => { console.log(`Hola soy ${this.nombre}`) };
}
const persona1 = new Persona("MAtias Velasquez", 24, "Av 123");
const persona2 = new Persona("Soledad", 22, "AV 123");

persona1.hablar();
persona2.hablar();