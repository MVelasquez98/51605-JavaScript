//metodos de busqueda y transformacion
const numeros = [1, 2, 3, 4, 5, 6];

numeros.forEach((num) => {
    console.log(num);
});

const cursos = [{ nombre: 'JS', precio: 30000 }, { nombre: 'React JS', precio: 25000 }, { nombre: 'Diseño UX/UI', precio: 50000 }, { nombre: 'Desarrollo Web', precio: 70000 }];
const resultado = cursos.find((e) => e.nombre == "JS");
const resultado1 = cursos.find((e) => e.nombre == "HTML");

const elemento = cursos.some((e) => e.nombre == "JS");// true
const elemento2 = cursos.some((e) => e.nombre == "HTML"); //false

console.log(resultado);
console.log(resultado1);//undefined
console.log(elemento);
console.log(elemento2);

const cursosDeJS = cursos.filter((curso) => curso.nombre.includes('JS'));
const cursosFilter = cursos.filter((curso) => curso.precio < 20000);
//array.filter(fn)
console.log(cursosDeJS);
console.log(cursosFilter);

const nombres = cursos.map((curso) => curso.nombre);
console.log(nombres);

const actualizado = cursos.map((curso) => {
    return {
        nombre: curso.nombre,
        precio: curso.precio * 1.25
    }
});
console.log(actualizado);

const nume = [1, 2, 3, 4];
const total = nume.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(total);

const ordAsc = nume.sort((a, b) => a - b);
const ordDesc = nume.sort((a, b) => b - a)

console.log(ordAsc);
console.log(ordDesc);

cursos.sort((a, b) => {
    if (a.nombre > b.nombre) {
        return 1;
    }
    if (a.nombre < b.nombre) {
        return -1;
    }
    return 0; //a es igual a b
});

