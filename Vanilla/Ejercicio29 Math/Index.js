
function Random() {
    const NumMax = document.querySelector("#NumMax").value;
    if (!isNaN(NumMax)) {

        let NumRandom = Math.random() * NumMax;
        console.log(NumRandom)
        let NumRandomRound = Math.round(NumRandom);
        document.querySelector("#ResultadoFinal").innerHTML = `<div class="alert alert-info" role="alert"> El número aleatorio es ${NumRandomRound} </div>`
    }
    else {
        document.querySelector("#ResultadoFinal").innerHTML = `<div class="alert alert-danger" role="alert">Introduce datos validos!</div>`

    }
}


document.querySelector("#GeneraNum").addEventListener("click", Random);