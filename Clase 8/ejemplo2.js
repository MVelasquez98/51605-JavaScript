let div = document.getElementById("app");
let p = document.getElementById("parrafo1");
console.log(div.innerHTML);
console.log(p.innerHTML);

let paises = document.getElementsByClassName("paises");
console.log(paises[0].innerHTML);
console.log(paises[1].innerHTML);
console.log(paises[2].innerHTML);
console.log(paises[3].innerHTML);

let parrafos = document.getElementsByTagName("p");
console.log(parrafos[0].innerHTML);
console.log(parrafos[1].innerHTML);
console.log(parrafos[2].innerHTML);

for (const pais of paises) {
    console.log(pais.innerHTML);
}

p.innerText = "Hola alumnos de coder";
