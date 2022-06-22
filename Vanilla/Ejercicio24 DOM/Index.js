/*document.querySelector("#Text").innerHTML = "<button>Hola</button>"*/
function Saludar() {
    const Nom = document.querySelector("#NombreUsuario").value;

    if (Nom == "Eli") {
        document.querySelector("#Texto").innerHTML = `<p>Hola ${Nom}!!</p>`
        document.querySelector("#Gif").innerHTML = `<img src="https://cdn.elgrupoinformatico.com/Noticias/2018/11/tindergif8-480x270.gif">`
    }
    else {
        document.querySelector("#DogHungry").innerHTML = `<img src="https://c.tenor.com/zJ683oEwUq8AAAAd/hungry-dog.gif">`
    }
}

document.querySelector("#trigger").addEventListener("click", Saludar);