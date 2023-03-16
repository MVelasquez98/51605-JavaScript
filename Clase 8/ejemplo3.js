let contenedor = document.getElementById("contenedor");
let div = document.createElement("div");
div.innerHTML = "<h1>Ahora soy un titulo</h1>"
contenedor.append(div);

let contenedor2 = document.getElementById("contenedor2");
contenedor2.remove();

let comidas = document.getElementsByClassName("comida");
comidas[1].remove();

let nombre = document.getElementById("nombre");
let edad = document.getElementById("edad");

nombre.value = "homero simpson";
edad.value = 23;

let personas = document.getElementById("personas");
const personasArray = ["Juan", "Pepe", "Cruz", "Mariano"];
for (const persona of personasArray) {
    let li = document.createElement("li");
    li.innerHTML = persona;
    personas.appendChild(li);
}