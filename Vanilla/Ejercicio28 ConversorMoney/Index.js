function aDolar(DineroParse) {

    ResultadoFinal = DineroParse * 1.05;
    return ResultadoFinal;
}
function aEuro(DineroParse) {

    ResultadoFinal = DineroParse / 0.95;
    return ResultadoFinal;
}

function Calcular(trigger) {

    const Dinero = document.querySelector("#Dinero").value;
    let ResultadoFinal;


    if (!isNaN(Dinero)) {
        const DineroParse = parseInt(Dinero);
        console.log(trigger.target.id)
        switch (trigger.target.id) {

            case "aDolar":
                ResultadoFinal = aDolar(DineroParse);
                break;

            case "aEuro":
                ResultadoFinal = aEuro(DineroParse);
                break;
        }

        document.querySelector("#ResultadoFinal").innerHTML = `<div class="alert alert-info" role="alert"> Tu conversión es de: ${ResultadoFinal} </div>`

    }
    else {
        document.querySelector("#ResultadoFinal").innerHTML = `<div class="alert alert-danger" role="alert">Introduce datos validos!</div>`
    }
}

document.querySelector("#aDolar").addEventListener("click", Calcular);
document.querySelector("#aEuro").addEventListener("click", Calcular);