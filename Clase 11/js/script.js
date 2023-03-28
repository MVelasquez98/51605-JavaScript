// arreglo para almacenar libros
let catalogo = [];

//elementos del dom a utilizar
const inputTitulo = document.getElementById("inputTitle");
const inputAutor = document.getElementById("inputAuthor");
const inputAnio = document.getElementById("inputYear");
const inputUrl = document.getElementById("inputSourceURL");
const textAreaResumen = document.getElementById("textareaSummary");
const selectValoracion = document.getElementById("selectRating");
const selectGenero = document.getElementById("selectCategory");
const btnAgregar = document.getElementById("btnAdd");
const contTarjetas = document.getElementById("cardContainer");

//clase constructora para el libro 
class Libro {
    //metdodo constructor
    constructor(titulo, autor, genero, urlImagen, anio, valoracion, id) {
        this.titulo = titulo.toUpperCase();
        this.autor = autor.toUpperCase();
        this.genero = genero;
        this.resumen;
        this.anio = parseInt(anio);
        this.valoracion = parseInt(valoracion);
        this.id = id;
        if (urlImagen == "") {
            this.urlImagen = "https://via.placeholder.com/500x500/d9d2fa/403f3f.jpg?text=Portada+no+disponible";
        } else {
            this.urlImagen = urlImagen;
        }
    }
    //metodos propios de Libro
    asignarId(array) {
        this.id = array.length;
    }

    asignarPortada(url) {
        this.urlImagen = url;
    }

    valorar(raiting) {
        this.valoracion = raiting;
    }

    agregarResumen(resumen) {
        this.resumen = resumen;
    }
}

function guardarLibro(catalogo) {
    const libro = new Libro(inputTitulo.value, inputAutor.value, selectGenero.value, inputUrl.value, inputAnio.value, selectValoracion.value);
    if (textAreaResumen.value != "") {
        libro.agregarResumen(textAreaResumen.value);
    } else {
        libro.agregarResumen("El resumen no esta disponible");
    }
    catalogo.push(libro);
    libro.asignarId(catalogo);
}

function guardarEnStorage(catalogo) {
    localStorage.setItem('catalogoLibros', JSON.stringify(catalogo));
}

function crearTarjetas(arrayElementos, contenedorHtml) {
    contenedorHtml.innerHTML = "";
    for (const elemento of arrayElementos) {
        let divColTarjeta = document.createElement("div");
        divColTarjeta.className = "col";
        divColTarjeta.innerHTML =
            `<div class="card h-100 bg-light" id="${elemento.id}">
        <h4 class="card-header">${elemento.titulo}</h4>
        <img src="${elemento.urlImagen}" alt="Portada del libro ${elemento.titulo}"/> 
         <div class="card-body">
           <h6 class="card-text fst-italic">Autor</h6>
           <p class="card-text">${elemento.autor}</p>
           <h6 class="card-text fst-italic">Resumen</h6>
           <p class="card-text">${elemento.resumen}</p>
           <h6 class="card-text fst-italic">Año</h6>
           <p class="card-text">${elemento.anio}</p>
         </div>
         <div class="card-footer">
           <span>${elemento.valoracion} puntos</span>
         </div>
        </div>`;
        contenedorHtml.append(divColTarjeta);
    }
}

btnAgregar.onclick = (e) => {
    e.preventDefault();
    guardarLibro(catalogo);
    guardarEnStorage(catalogo);
    crearTarjetas(catalogo, contTarjetas);
};

window.onload = () => {
    catalogo = JSON.parse(localStorage.getItem("catalogoLibros"));
    if (catalogo != null) {
        crearTarjetas(catalogo, contTarjetas);
    } else {
        catalogo = [];
    }
}

//busqueda de un libro
const selectCriterio = document.getElementById("selectCriteria");
const inputBusqueda = document.getElementById("inputSearch");

function buscar(array, criterio, input) {
    //libro[autor]
    //libro[titulo]
    return array.filter((item) => item[criterio].includes(input));
}

inputBusqueda.addEventListener("input", () => {
    let criterio = selectCriterio.value;
    if (criterio == "Elegí un criterio de búsqueda") {
        selectCriterio.style.border = "solid red 2px";
        inputBusqueda.value = "";
    } else {
        selectCriterio.style.border = "";
        let cadena = (inputBusqueda.value).toUpperCase();
        crearTarjetas(buscar(catalogo, criterio, cadena), contTarjetas);
    }
    inputBusqueda.onblur = () => {
        inputBusqueda.value = "";
    };
});

