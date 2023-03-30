//Operador ++
let contador = 0;
contador = contador + 1;
contador += 1;
contador++;

//Operador Ternario
//condicion ? algo : otrocaso
const edadInput = document.getElementById("edad");
const btnEnviar = document.getElementById("enviar");
const btnComprar = document.getElementById("comprar");
const alerta = document.getElementById("alerta");

btnEnviar.addEventListener("click", (e) => {
    e.preventDefault();
    let edadUsuario = parseInt(edadInput.value);
    if (edadUsuario < 18) {
        alerta.innerHTML = `<p>No podes ingresar a ver la pelicula</p>`;
        alerta.classList = `negativo`;// si tengo que hacer más de una cosa la ternaria NO
    } else {
        alerta.innerHTML = `<p>Disfruta de la pelicula</p>`;
        alerta.classList = `positivo`;
    }
    // edadUsuario <18 ? alerta.innerHTML = `<p>No podes ingresar a ver la pelicula</p>`: alerta.innerHTML = `<p>Disfruta de la pelicula</p>`;
    //condicion ? (condicion? algo:otracosa) : otrocaso ESTO NO, SI SE PUEDE
});

let producto = {
    nombre: "Zapatillas",
    marca: "Converse",
    modelo: "Botitas",
    color: "rojo",
    talle: 41,
    stock: 0
};

btnComprar.addEventListener("click", (e) => {
    e.preventDefault();
    producto.stock > 0 ? alerta.innerHTML = `<p>Gracias por tu compra</p>` : alerta.innerHTML = `<p>Producto sin stock disponible</p>`;
    // producto.stock--; ESTO no se podria poner en el ternario
});

//operador AND(&&)

const carrito = [];//carrito["uvas",...]

// if (carrito.length == 0) {
//     console.log("Carrito esta Vacio");
// }

carrito.length == 0 && console.log("Carrito esta vacio");

const usuario = {
    nombre: "",
    contrasenia: "Pass123",
    edad: 25
};
// let registroUsuario;
// if (usuario.edad > 18) {
//     registroUsuario = new Date();
// }
const registroUsuario = (usuario.edad > 18) && new Date();
console.log(registroUsuario);

//Operador OR (||)
// let nombreUsuario= usuario.nombre;
// if (nombreUsuario == "") {
//     nombreUsuario = "Nombre de usuario inexistente"
// }
const nombreUsuario = usuario.nombre || "Nombre de usuario inexistente";
console.log(nombreUsuario);

const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
let puerto = null;
const PORT = puerto || 4000;

const usuario2 = null;
//const nuevoUsuario =null.nombre || "usuario inexistente"
//const nuevoUsuario =null || "usuario inexistente"
const nuevoUsuario = usuario2?.nombre || "usuario inexistente";

// const nuevoUsuario = "usuario inexistente";
// if (usuario2) {
//     nuevoUsuario = usuario2.nombre;
// }

const usuario3 = {
    nombre: "Matias",
    apellido: undefined,
    edad: 25,
    curso: "Javascript",
    deuda: 0
};
// 0 para || es falso
// 1 para || es verdadero
const deaudaUsuario = usuario3.deuda || "No hay deuda de usuario";
console.log(deaudaUsuario);
// 0 para ?? es verdadero
// 1 para ?? es verdadero
const deudaUsuarioNullshing = usuario3.deuda ?? "No hay deuda de usuario";
console.log(deudaUsuarioNullshing);

const estudiante4 = {
    nombre: "Matias",
    edad: 24,
    curso: "Javascript",
    telefono: {
        casa: "42350400",
        celular: "1234456789"
    }
}

let edadEstudiante = estudiante4.edad;
let { nombre, edad, curso, telefono: { celular } } = estudiante4;
console.log(nombre);
console.log(edad);

const item = {
    item_id: 10,
    product_name: "Smart TV Android 10",
    price_per_unit: 800000
};

let { item_id: id, product_name: nombreProducto, price_per_unit: precio } = item;
console.log(nombreProducto);

window.addEventListener("click", ({ x, y }) => {
    console.log(x, y);
})

const frutas = ["peras", "manzanas", "naranjas", "ananas", "palta"];

const [fruta1, fruta2, , fruta4] = frutas;
console.log(fruta1);
console.log(fruta2);
//console.log(fruta3);
console.log(fruta4);

const frutas2 = ["pomelo", "mandarina", "naranja"];
const frutas3 = ["cereza", "uva"];
const frutas4 = ["frutilla", "banana"];

const ensalada = [...frutas2, ...frutas3, ...frutas4];
console.log(ensalada);

const precios = [100, 200, 10, 20, 30, 40];
let minimo = Math.min(...precios);
console.log(minimo);

const usuarioBase = {
    nombre: "matias",
    edad: 24
};

const usuarioCurso = {
    nombreCurso: "Javascript",
    precio: 20000
};

const usuarioFinal = {
    ...usuarioBase,
    ...usuarioCurso
};
console.log(usuarioFinal);