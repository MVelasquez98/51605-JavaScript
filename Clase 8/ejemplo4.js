const productos = [{ id: 1, nombre: "Arroz", precio: 200 }, { id: 2, nombre: "Pan", precio: 300 }, { id: 3, nombre: "Coca", precio: 500 }];

for (const producto of productos) {
    let comidas = document.createElement("div");
    comidas.innerHTML = `<h3> ID: ${producto.id}</h3><p>Nombre producto: ${producto.nombre}</p><b> Precio: $${producto.precio}</b>`;
    document.body.appendChild(comidas);
}

let contenedor = document.querySelector("#contenedor3 p");
console.log(contenedor.innerHTML);

let comidas = document.querySelectorAll(".comida");
console.log(comidas);
