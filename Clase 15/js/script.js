//https://http.cat/ Códigos de estado de petición (con gatitos)
//https://github.com/public-apis/public-apis +1400 APIs
//https://jsonformatter.curiousconcept.com/# formateador para archivos json
//https://openweathermap.org/current API del clima

//peticion GET
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data));

//peticion POST

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
        title: 'title test',
        body: 'body test',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => response.json())
    .then(data => console.log(data));

const APIKEY = 'b81385fefdba9b444da4eab9735021d4';
const tempValor = document.getElementById("temp");
const tempDescripcion = document.getElementById("desc");
let divContainer = document.getElementById("cardContainer");
const btnMostrar = document.getElementById("mostrar");

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(ubicacion => {
        let lat = ubicacion.coords.latitude;
        let long = ubicacion.coords.longitude;
        console.log(lat, long);
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let temp = (data.main.temp).toFixed(1);
                tempValor.textContent = `${temp} °C`;
                let descripcion = data.weather[0].description;
                tempDescripcion.textContent = descripcion;
            });
    });
}

const crearTarJeta = (array) => {
    divContainer.innerHTML = '';
    array.forEach(element => {
        let card = `<div class='card'>
        <img src=${element.imagen} class='card-img-top'>
        <div class='card-body ${element.categoria}'>
        <h5 class='card-title'>${element.nombre}</h5>
        <p class='card-text'>$ ${element.precio}</p>
        <a href='#' class='btn btn-primary'>Comprar</>
        </div>
        </div>`;
        divContainer.innerHTML += card;
    });
};

const usarJson = async () => {
    let response = await fetch('./js/data.json');
    let productos = await response.json();
    console.log(productos);
    crearTarJeta(productos);
};

btnMostrar.onclick = usarJson;



























