const btnSaludoGenerico = document.getElementById("generico"),
    btnSaludoPersonalizado = document.getElementById("personalizado"),
    btnPrueba = document.getElementById("prueba"),
    titulo = document.querySelector(".codertitulo"),
    caja = document.querySelector(".embajada"),
    nombre = document.querySelector("#inputNombre"),
    password = document.querySelector("#inputPassword");

function saludarGenerico() {
    alert("Hola!")
}

function saludarPersonalizado(nombre) {
    alert(`Hola ${nombre}`);
}

//primera opcion es usar el addEventListenener
btnSaludoGenerico.addEventListener('click', saludarGenerico);

let evento = "click";
btnSaludoGenerico.addEventListener(evento, saludarGenerico);

//segunda opcion utilizar propiedad on (click,onchange...etc)
btnSaludoPersonalizado.onclick = () => {
    saludarPersonalizado("Matias");
}
///btnSaludoGenerico.addEventListener('click', saludarPersonalizado("Matias")); ESTO NOOO!
btnPrueba.onclick = () => {
    saludarPersonalizado("Hola coders");
    for (let i = 0; i < 10; i++) {
        alert(i);
    }
}

//Eventos de Mouse

btnPrueba.onmousemove = () => {
    console.log("Pasaste el mouse por aca");
};

caja.onmouseover = () => {
    caja.style.backgroundImage = "url('./img/estados.jpg')";
}

caja.onmouseout = () => {
    caja.style.backgroundImage = "url('./img/australia.jpg')";
}

//Trabajando con nodos en input radio
let radios = document.querySelectorAll('input[type="radio"]');
console.log(radios);

//ESTO NOOOOO
// radios.addEventListener("click",()=>{
//     console.log("Hiciste click en el radio");
// })

for (const radio of radios) {
    radio.addEventListener("click", () => {
        console.log(`Hiciste click en el radio ${radio.value}`);
    });
}

// Ejemplo aplicado
function cambiarImagen(elemento, source) {
    elemento.src = source;
}

const botellas = [{
    id: 1,
    nombre: 'Botella rosa',
    color: 'rosa',
    url: './img/rosa.webp'
}, {
    id: 2,
    nombre: 'Botella verde',
    color: 'verde',
    url: './img/verde.webp'
}, {
    id: 3,
    nombre: 'Botella Naranja',
    color: 'naranja',
    url: './img/naranja.webp'
},
{
    id: 4,
    nombre: 'Botella Azul',
    color: 'azul',
    url: './img/azul.webp'
}];

let fotoBotellas = document.getElementById("imgBotellas");
radios.forEach(item => {
    item.addEventListener("click", () => {
        let colorRadio = item.value;
        let variante = botellas.find(botella => botella.color == colorRadio);
        cambiarImagen(fotoBotellas, variante.url);
    });
});

//Eventos por teclado
nombre.addEventListener('keydown', () => {
    console.log(nombre.value);
});

//Evento onchange input
password.onchange = () => {
    console.log(password.value)
};

//Informacion del evento
password.addEventListener('keypress', (evento) => {
    let codCaracter = evento.charCode;
    if (codCaracter != 0) { //chequeo si el caracter no es nulo
        if (codCaracter < 97 || codCaracter > 122) {// verificar si el codigo ascci no corresponde a una minuscula
            evento.preventDefault();
            alert("Solo podes ingresar una minuscula");
        }
    }
});

//evento submit
let btnRegistrar = document.getElementById("registrar");
btnRegistrar.onclick = (evento) => {
    evento.preventDefault();
    console.log("Te registraste existosamente");
};




