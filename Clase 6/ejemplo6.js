const productos = [];
function agregarProducto(nombre, precio) {
    productos.push(new Producto(nombre, precio))
}
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
agregarProducto("Mogul", "500");
agregarProducto("Oreo", "200");

for (const producto of productos) {
    producto.sumaIva();
}