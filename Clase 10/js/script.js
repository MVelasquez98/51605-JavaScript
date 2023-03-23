//crear las claves y valor en el local storage
localStorage.setItem("nombre", "Matias");
localStorage.setItem("apellido", "Velasquez");
localStorage.setItem("edad", 25);
localStorage.setItem("esMayor", true);

//sobrescribe cuando pongo misma clave
localStorage.setItem("nombre", "Juan");

//usar info del form para guardar en el storage
let emailUsuario = document.getElementById("emailAddress");
let passwordUsuario = document.getElementById("password");
let btnLogin = document.getElementById("btnLogin");

//capturo el evento y guardo el mail en el local storage
// btnLogin.addEventListener("click", () => {
//     localStorage.setItem("email", emailUsuario.value);
// });

//recuperando info del storage
let nombre = localStorage.getItem("nombre");
let edadUsuario = localStorage.getItem("edad");
console.log(nombre);
console.log(edadUsuario);

sessionStorage.setItem("edad", 28);
//para saber cuantas claves estan almacenadas
console.log(sessionStorage.length);

//En el local storage Todo se almacena como string
localStorage.setItem("peso", 64.5);
let peso = parseFloat(localStorage.getItem("peso"));
console.log(peso + 1);//concatena en vez de sumar sino parseo

//obetener valor correcto del bool
localStorage.setItem("esDarkMode", false);
let modo = localStorage.getItem("esDarkMode") == "true";
console.log(modo);

//
localStorage.setItem("cantCuotas", [3, 6, 9, 12]);
console.log(localStorage.getItem("cantCuotas"));///"3,6,9,12" "hola"
console.log(localStorage.getItem("cantCuotas").split(","));
let cantCuotas = localStorage.getItem("cantCuotas").split(',');
for (let i = 0; i < cantCuotas.length; i++) {
    cantCuotas[i] = parseInt(cantCuotas[i]);
}
console.log(cantCuotas);

//
btnLogin.addEventListener("click", () => {
    localStorage.setItem("email", emailUsuario.value);
    localStorage.setItem("pass", password.value);
});

//esto se deberia traer de una bd o api
let passGuardada = "milanesa";
if (passGuardada == localStorage.getItem("pass")) {
    alert("Pasa maquina");
}

// recorrer las claves y valores del storage
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    console.log(`Clave: ${clave} Valor: ${valor}`);
}

localStorage.removeItem("peso");
// localStorage.clear();

// almacenar objetos en local storage
let matias = {
    nombre: "Matias Velasquez",
    edad: 25,
    esAlto: false
};
// localStorage.setItem("user", matias); ESTO NOOOOO!
// console.log(localStorage.getItem("user"))

//Usando JSON
localStorage.setItem("user", JSON.stringify(matias));
console.log(localStorage.getItem("user"));

let usuarioRecuperado = localStorage.getItem("user");
console.log(JSON.parse(usuarioRecuperado));

let textoJSON = '{"id":1,"nombre":"arroz","precio":240}';
console.log(JSON.parse(textoJSON));

let gustosHelados = ["pistacho", "mascarpone", "menta granizada", "limon"];
localStorage.setItem("helados",JSON.stringify(gustosHelados));
console.log(JSON.parse(localStorage.getItem("helados")));









