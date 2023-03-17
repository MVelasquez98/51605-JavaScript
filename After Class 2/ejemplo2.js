const listaProductos = []
let cantidad = 5;

do {
    let nombre = prompt("Ingresa un nombre del producto:");
    let precio = prompt("Ingresa precio del producto:");
    const producto = { id: listaProductos.length, nombre: nombre, precio: precio }
    listaProductos.push(producto);

} while (listaProductos.length != cantidad);

console.log(listaProductos);