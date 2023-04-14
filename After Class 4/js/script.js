//https://hp-api.onrender.com/api/characters
let cardContainer = document.getElementById('cardContainer');
const btnSearch = document.getElementById("search");
const selectCasa = document.getElementById('casa');
function filterCasa(array) {
    let casa = selectCasa.value;
    if (!casa) {
        return array;
    } else {
        return array.filter(item => item.house == casa);
    }
}

function createHTML(array) {
    cardContainer.innerHTML = "";
    array.forEach(personaje => {
        let card = `<div class='col'>
        <div class='card h-100'>
        <img src='${personaje.image}' class='card-img-top'/>
        <div class='card-body'>
        <h5 class='card-title'>${personaje.name}</h5>
        <p class='card-text'>Casa: ${personaje.house}</p>
        <p class='card-text'>Genero: ${personaje.gender == 'male' ? 'masculino' : 'femenino'}</p>
        <p class='card-text'>Actor interprete: ${personaje.actor}</p>
        </div>
        </div>
        </div>`;
        cardContainer.innerHTML += card;
    });
}

async function bringData() {
    //request-> peticion
    //response -> respuesta
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    const data = await response.json();
    console.log(data);
    createHTML(data);
}

btnSearch.addEventListener('click', () => {
    bringData();
    //almacenar esa data en el storage, para evitar pegarle siempre a la api para filtrar algo
    //filterCasa
});
