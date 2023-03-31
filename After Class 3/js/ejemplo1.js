const productos =
    [
        { id: 1, nombre: "GuayMallen", precio: 200 },
        { id: 2, nombre: "Capitan del Espacio", precio: 500 },
        { id: 3, nombre: "Oreo", precio: 500 },
        { id: 4, nombre: "Jorgito", precio: 300 },
    ];
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

//almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
//almacenar todo el arreglo de productos
guardarLocal("listaProductos", JSON.stringify(productos));

const listaProductos = JSON.parse(localStorage.getItem("listaProductos"));
listaProductos.push({ id: 5, nombre: "Escolar", precio: 100 })
console.log(listaProductos);