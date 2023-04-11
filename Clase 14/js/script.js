console.log("Inicio del programa");
setTimeout(() => {
    console.log("Soy un console.log asyncronico")
}, 2000);
console.log("Fin del programa");
let btn = document.getElementById("btn");
let foto = document.querySelector(".foto");

let tiempo = 2500;
btn.onclick = () => {
    foto.classList.add('visible');
    setTimeout(() => {
        foto.classList.remove('visible');
    }, tiempo)
};

function moverse() {
    console.log("Soy subzero y me estoy moviendo mientras espero");
}
setTimeout(function timeout() {
    console.log("Fight!")
}, 3000);

moverse();
let contador = 0;
let interval = 1000;
const intervalo = setInterval(() => {
    console.log('tic');
    console.log(`Contador: ${contador}`);
    contador++;
    contador > 5 && clearInterval(intervalo);
}, interval);

const fin = setTimeout(() => {
    console.log("Fin");
}, 2000);
// clearTimeout(fin);
let cont = 10;
if (cont > 6) {
    clearTimeout(fin);
}

setTimeout(() => {
    //cerrarSesion();
}, 1000000);

setInterval(() => {
    //renovarToken();
}, 30000);

const eventoFuturo = () => {
    return new Promise((resolve, reject) => {
        //cuerpo de la promesa
    });
};

console.log(eventoFuturo());

let hamburguesa = true;
let noHayHamburguesa = false;

const pedirHamburguesa = (respuesta) => {
    return new Promise((resolve, reject) => {
        if (respuesta) {
            resolve('veni a retirar tu hamburguesa que esta lista');
        } else {
            reject('No hay mas cheddar');
        }
    });
};
console.log(pedirHamburguesa(hamburguesa));
// console.log(pedirHamburguesa(noHayHamburguesa));


pedirHamburguesa(noHayHamburguesa)
    .then((respuesta) => { console.log(respuesta) })
    .catch((error) => { console.error(error) })
    .finally(() => { console.log("Gracias vuelva pronto") });

//Ejemplo de la vida "real"

const DB = [{ id: 1, nombre: "Cafe", precio: 200 },
{ id: 2, nombre: "flat white", precio: 250 },
{ id: 3, nombre: "lagrima", precio: 100 },
{ id: 4, nombre: "Capuccion", precio: 300 },
{ id: 5, nombre: "Cortado", precio: 400 }];

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DB);
        }, 2000);
    });
};

let listaProductos = document.getElementById("productos");
let btnProductos = document.getElementById("btnProductos");
let btnCarrito = document.getElementById("btnCarrito");
let carritoHtml = document.getElementById("prodCarrito");

let carrito = [];

const renderProductos = array => {
    array.forEach(element => {
        let nodoLi = `<li>${element.nombre} $${element.precio}</li>
        <button class='agregar' id='${element.nombre}'>Agregar</button>`;
        listaProductos.innerHTML += nodoLi;
    });
};

btnProductos.addEventListener("click", () => {
    pedirProductos().then(response => {
        renderProductos(response);
    }).then(() => {
        const btnAgregar = document.querySelectorAll("button.agregar");
        btnAgregar.forEach(element => {
            element.onclick = () => {
                carrito.push(element.id);
            };
        });
    });
});

btnCarrito.addEventListener("click", () => {
    carritoHtml.innerHTML = "";
    carrito.forEach(element => {
        let nodoLi = `<li>${element} agregado al carrito</li>`;
        carritoHtml.innerHTML += nodoLi;
    });
});
