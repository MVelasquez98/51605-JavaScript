const persona1 = { nombre: "Matias", edad: 24, direccion: "Av 123", nacionalidad: "Argentina" };
// operador in para revisar si existe la clave en el objeto
console.log("nombre" in persona1);
console.log("ciudad" in persona1);

//operador in en un for
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}
