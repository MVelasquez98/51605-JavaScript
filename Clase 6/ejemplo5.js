const objeto1 = { id: 1, nombreProducto: "Mogul", precio: 500 };
const producto2 = { id: 2, nombreProducto: "Oreo", precio: 450 };
const productos = [objeto1, producto2];
productos.push({ id: 3, nombreProducto: "Alfajor", precio: 300 });

for (const producto of productos) {
    console.log(`${producto.nombreProducto} $ ${producto.precio}`)
}