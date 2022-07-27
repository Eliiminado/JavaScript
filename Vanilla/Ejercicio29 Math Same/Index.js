
function Random() {
    const NumUsuario = document.querySelector("#NumUsuario").value;
    const NumUsuarioParse = parseInt(NumUsuario);


    if (!isNaN(NumUsuarioParse)) {

        let NumRandom = Math.random() * 10;
        let NumRandomRound = Math.round(NumRandom);

        if (NumRandomRound == NumUsuarioParse) {
            console.log(NumRandomRound)
            document.querySelector("#ResultadoFinal").innerHTML = `<div class="alert alert-info" role="alert"> Felicidades! Has acertado! El número random era: ${NumRandomRound} </div>`
        }
        else {
            document.querySelector("#ResultadoFinal").innerHTML = `<div class="alert alert-danger" role="alert">OOH...no has acertado, era ${NumRandomRound}</div>`

        }

    }
    else {
        document.querySelector("#ResultadoFinal").innerHTML = `<div class="alert alert-danger" role="alert">Introduce datos validos!</div>`

    }
}


document.querySelector("#GeneraNum").addEventListener("click", Random);