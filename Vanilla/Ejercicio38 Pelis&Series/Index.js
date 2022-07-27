
function Valorar() {

    NumElementos = document.querySelector("#NumElementos").value;
    if (!isNaN(NumElementos)) {
        for (i = 0; i < NumElementos; i++) {
            document.querySelector("#FormNum").innerHTML = "";
            document.querySelector("#Btn").innerHTML = "";

            document.querySelector("#Formulario2").innerHTML = `<div class="input-group mb-3">
            <input id="NameElement" type="text" class="form-control"
                placeholder="Introduce el nombre de la series o pelicula"
                aria-label="Recipient's username" aria-describedby="basic-addon2">
            </div>`;

            TipoContenido = document.querySelector("#Formulario3").innerHTML = `<div <p>Es una serie o una pelicula?</p>
              <input type="radio" id="serie" name="fav_content" value="serie">
              <label for="html">serie</label><br>
              <input type="radio" id="peli" name="fav_content" value="peli">
              <label for="css">pelicula</label><br>
        
            
            </div>`;

            document.querySelector("#Formulario4").innerHTML =
                ` <div>
                    <p>Valora con corazones:</p>
                      <input type="radio" id="1heart" name="fav_value" value="Valoración:💙">
                      <label for="html">💙</label><br>
                      <input type="radio" id="2heart" name="fav_value" value="Valoración:💚💚">
                      <label for="css">💚💚</label><br>
                      <input type="radio" id="3heart" name="fav_value" value="Valoración:💛💛💛">
                      <label for="css">💛💛💛</label><br>
                      <input type="radio" id="4heart" name="fav_value" value="Valoración:🧡🧡🧡🧡">
                      <label for="css">🧡🧡🧡🧡</label><br>
                      <input type="radio" id="5heart" name="fav_value" value="Valoración:❤️❤️❤️❤️❤️">
                      <label for="css">❤️❤️❤️❤️❤️</label><br>

                </div>`

        }
        document.querySelector("#Save").innerHTML =
            `<div a href="#" id="SaveContent" class="btn btn-lg btn-info"><span
                class="glyphicon glyphicon-fast-backward"></span>Guarda el Numero</a>
            </div >`

        document.querySelector("#SaveContent").addEventListener("click", Save);
        console.log(contenido);


    }
}
function Save() {

    let NombreContenido = document.querySelector("#NameElement").value;
    let TipoContenido = document.querySelector("input[name=fav_content]:checked").value;
    let ValoracionContenido = document.querySelector("input[name=fav_value]:checked").value;

    const Objeto = {
        "nombre": NombreContenido,
        "tipo": TipoContenido,
        "valoración": ValoracionContenido,
    }
    contenido.push(Objeto);
    ImprimirRanking();

    document.querySelector("#NameElement").value = "";
    document.querySelector("input[name=fav_content]").checked = "";
    document.querySelector("input[name=fav_value]").checked = "";


}

function ImprimirRanking() {
    document.querySelector("#Ranking").innerHTML = "";
    for (let i = 0; i < contenido.length; i++) {
        document.querySelector("#Ranking").innerHTML +=
            ` <ul class="list-group">
                <li class="list-group-item">
                    <div class="col-4"> 
                        ${contenido[i].nombre}
                    </div>
                    <div class="col-4"> 
                       ${contenido[i].tipo}
                    </div>
                    <div class="col-4"> 
                        ${contenido[i].valoración}
                    </div>
                </li>
            
            </ul>`
    }
}

let NumElementos;
let contenido = [];
document.querySelector("#VerificarNum").addEventListener("click", Valorar);


































