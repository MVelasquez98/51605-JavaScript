class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}

const producto1 = new Producto("Gomitas Mogul", "500");
const producto2 = new Producto("Fideos", "300");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();
console.log(producto1)