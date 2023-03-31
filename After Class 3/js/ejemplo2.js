const productos =
    [
        { id: 1, nombre: "GuayMallen", precio: 200 },
        { id: 2, nombre: "Capitan del Espacio", precio: 500 },
        { id: 3, nombre: "Oreo", precio: 500 },
        { id: 4, nombre: "Jorgito", precio: 300 },
    ];
localStorage.setItem("listaProductos", JSON.stringify(productos));

class Producto {
    constructor(obj) {
        this.nombre = obj.nombre.ToUpperCase();
        this.precio = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}

const listaProductos = JSON.parse(localStorage.getItem("listaProductos"));
const listaProductosMapeados = []
for (const producto of listaProductos) {
    listaProductosMapeados.push(new Producto(producto));
}

for (const producto of listaProductosMapeados) {
    producto.sumaIva();
}
//En la vida real esto viene de una BD
const usuarios = [
    { user: "matias", pass: "12344" },
    { user: "juancho", pass: "hola123" },
];
let inputUser = "matias"; //imaginemos que viene del DOM
let inputuPass = "matias"; //imaginemos que viene del DOM
let usuario = usuarios.find(u => u.user == inputUser && u.pass == inputuPass);
if (usuario) {
    //UN dato sensible en la vida real no deberia estar en el storage
    localStorage.setItem("usuario", JSON.stringify(usuario));
} else {
    alert("No estas registrado");
}

window.onload = () => {
    let usuario = localStorage.getItem("usuario");
    if (usuario) {
        //muestro pagina de logueo
        window.location.href=""
        window.open("url", "_self");
    } else {
        //le aviso que no esta logeado
    }
}

