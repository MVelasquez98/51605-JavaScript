function buscarProducto(valorbuscado, propiedad) {
    const buscado = productos.filter(producto => producto[propiedad] == valorbuscado);
    return buscado;
}
const productos = [
    { id: 1, nombre: "Pan", marca: "Pan Bueno", precio: 200 },
    { id: 2, nombre: "Arroz", marca: "Gallo", precio: 300 },
    { id: 3, nombre: "Fideos", marca: "marolio", precio: 100 },
    { id: 4, nombre: "Pan", marca: "-pan barato", precio: 70 }
];

let valorbuscado = prompt("¿Cual es el nombre del producto buscado?");
let productosBuscados = buscarProducto(valorbuscado, "nombre");
let marcasDeProductosBuscados = productosBuscados.map(producto => `id:${producto.id} marca:${producto.marca}`);
let marcaBuscada = prompt(`Cual de las marcas te gustaria seleccionar:
                          ${JSON.stringify(marcasDeProductosBuscados)} (Ingrese el id)`);

const existe = productos.some(producto => producto.nombre == "Harina");// devolver un falso porque no existe
console.log(existe);

const baratos = productos.filter(producto => producto.precio <= 100);
console.log(baratos);

const listNombres = productos.map(producto => producto.nombre);
console.log(listNombres);

