// recibir funciones por parametro
function aplicar(funcion, valor) {
    return funcion(valor); //doble(5) triple(5)
}

function doble(x) {
    return x * 2;
}

function triple(x) {
    return x * 3;
}

console.log(aplicar(doble, 5));//10
console.log(aplicar(triple, 5));//15

function porCadaUno(arr, fn) {
    for (const elem of arr) {
        fn(elem); // acumular(1)
    }
}
let total = 0;
function acumular(num) {
    total = total + num;
}

const numeros = [1, 2, 3, 4];
porCadaUno(numeros, console.log);
porCadaUno(numeros, acumular);
console.log(total);//10

function duplicar(num) {
    duplicado.push(e * 2);
}
const duplicado = [];
porCadaUno(numeros, (e) => {
    duplicado.push(e * 2);
});
//porCadaUno(numeros, duplicar);

console.log(duplicado);// 2, 4, 6, 8