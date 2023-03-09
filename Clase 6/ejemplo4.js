const numeros = [1, 2, 3, 4, 5];
console.log(numeros.length);

const palabras = ["hola", "holi", "hi"];
palabras.push("hola voce");//Al final
palabras.unshift("Bonacera");// Agregar al principio
console.log(palabras.length);

for (let i = 0; i < palabras.length; i++) {
    console.log(palabras[i]);
}

palabras.push("ciao");
console.log(palabras.length);
//eliminando ultimo elemento
palabras.pop()
console.log(palabras);
//eliminando primer elemento
palabras.shift();
console.log(palabras);

const array1 = ["Juan", "Pepe", "Cruz", "Diaz", "Juan Carlos"];
console.log(array1);
//devolver una copia de una parte del array
console.log(array1.slice(1, 3)); //dos indices
//eliminar elementos
array1.splice(0, 2) //indice inicial, cant elementos
console.log(array1);
//une un array en un string por medio de un separador
console.log(array1.join(" - "));
//busqueda de indice
const perros = ["Bulldog", "Caniche", "Golden", "Labrador"];
const gatos = ["Persa", "Egipcio", "Siames"];
const mascotas = perros.concat(gatos);
console.log(mascotas);
console.log(perros.indexOf("Persa"));
//validar si existe el elemento
console.log(gatos.includes("Persa"));
perros.reverse();
console.log(perros);


