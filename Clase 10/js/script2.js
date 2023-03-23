let btnLogin = document.getElementById("btnLogin");
let btnVaciarSessionStorage = document.getElementById("btnVaciarSessionStorage");
let btnVaciarTodo = document.getElementById("btnVaciarLocalStorage");
let checkRememberMe = document.getElementById("rememberMe");

function guardarDatos(storage) {
    let user = document.getElementById("emailAddress").value;
    let pass = document.getElementById("password").value;
    const usuario = {
        user: user,
        password: pass
    };
    storage.setItem("user", JSON.stringify(usuario));
}

function borrarDatos(storage) {
    storage.clear();
}

function borrarDatoUnico(storage, clave) {
    storage.removeItem(clave);
}

btnVaciarTodo.addEventListener("click", () => {
    borrarDatos(localStorage);
    borrarDatos(sessionStorage);
});

btnVaciarSessionStorage.addEventListener("click", () => {
    borrarDatos(sessionStorage);
});

btnLogin.addEventListener("click", () => {
    if (checkRememberMe.checked) {
        guardarDatos(localStorage);
    } else {
        guardarDatos(sessionStorage);
    }
});

window.onload = () => {
    let usuarioStorage = JSON.parse(localStorage.getItem("user"));
    console.log(usuarioStorage);
    if (usuarioStorage) {
        alert("Ya estas logueado");
    } else {
        alert("inicia sesion primero");
    }
}


