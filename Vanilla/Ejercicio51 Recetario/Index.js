async function GuardaReceta() {
    const titulo = document.querySelector("#Titulo").value;
    const ingredientes = document.querySelector("#Ingredientes").value;
    const tiempo = document.querySelector("#Tiempo").value;
    const imagen = document.querySelector("#Imagen").value;
    const pasos = document.querySelector("#Pasos").value;
    const valoracion = document.querySelector("input[name=fav_value]:checked").value;

    const BodyReceta = {
        "titulo": titulo,
        "ingredientes": ingredientes,
        "tiempo": tiempo,
        "imagen": imagen,
        "pasos": pasos,
        "valoracion": valoracion,
    }
    const RecetaFormatString = JSON.stringify(BodyReceta);
    console.log(BodyReceta);
    console.log(RecetaFormatString);

    try {
        await fetch("https://62d4fcf2cd960e45d45ea776.mockapi.io/recetas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: RecetaFormatString,
        })
    } catch (error) {
        console.log(error)
    }


}
let ResponseRecetarioParse;

async function VerRecetas() {
    try {
        const ResponseRecetario = await fetch("https://62d4fcf2cd960e45d45ea776.mockapi.io/recetas")
        const ResponseRecetarioTxt = await ResponseRecetario.text();
        ResponseRecetarioParse = JSON.parse(ResponseRecetarioTxt);
        for (let i = 0; i < ResponseRecetarioParse.length; i++) {
            document.querySelector("#Tabla").innerHTML +=
                `<table class="table">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Plato</th>
                    <th scope="col">Tiempo</th>
                    <th scope="col">Valoración</th>
                    <th scope="col">Modificar</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td> 
                            <p>
                                "${ResponseRecetarioParse[i].titulo}"
                            </p>
                        
                        </td>

                        <td>"${ResponseRecetarioParse[i].tiempo}"</td>
                        <td>"${ResponseRecetarioParse[i].valoracion}"</td>
                        <td>
                            <button data-target="#ModalCambios" id="Modificar-${ResponseRecetarioParse[i].id}" type="button" class="btn btn-primary">Modificar</button>
                            <button id="Eliminar" type="button" class="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                
                </tbody>
          </table>`
            console.log(`Creando el boton Modificar-${ResponseRecetarioParse[i].id}`)
        }
        console.log("Hemos credo ya todos los botones!")
        for (let i = 0; i < ResponseRecetarioParse.length; i++) {
            document.querySelector(`#Modificar-${ResponseRecetarioParse[i].id}`).addEventListener("click", ModificaReceta);
            console.log(`Activando el boton Modificar-${ResponseRecetarioParse[i].id}`)
        }
    } catch (error) {
        console.log(error)
    }
}
async function ModificaReceta(trigger) {
    const TriggerID = trigger.target.id;
    const TargetIDSinPrefijo = TriggerID.replace("Modificar-", "")
    console.log(TargetIDSinPrefijo)
    const targetIDParseado = parseInt(TargetIDSinPrefijo);
    $('#ModalCambios').modal()
    document.querySelector("#ModalBodyCambios").innerHTML = `
        <div>
            <div id="FormName" class="input-group mb-3">
                <input value="${ResponseRecetarioParse[targetIDParseado - 1].titulo}" id="Titulo" type="text" class="form-control" placeholder="Introduce el nombre del plato" aria-label="Recipient's username" aria-describedby="basic-addon2">
            </div>

            <form>
                <div class="form-group" id="FormIngredientes">
                    <label for="Ingredientes">Introduce los ingredientes de la receta:</label>
                    <textarea class="form-control" id="Ingredientes" rows="5">"${ResponseRecetarioParse[targetIDParseado - 1].ingredientes}"</textarea>
                </div>
            </form>

            <div>
                <h5>Introduce el tiempo de cocinado en Horas, mínimo un minuto y máximo 24h:</h5>
                <input value="${ResponseRecetarioParse[targetIDParseado - 1].tiempo}" type=" number" id="Tiempo" min="0.01" max="24.00">
            </div>
            <div id="FormImg" class="input-group mb-3">
                <input value="${ResponseRecetarioParse[targetIDParseado - 1].imagen}" id="Imagen" type="text" class="form-control" placeholder="Introduce la imagen de la receta:" aria-label="Recipient's username" aria-describedby="basic-addon2">
            </div>

            <form>
                <div class="form-group" id="FormPasos">
                    <label for="Pasos">Introduce los pasos de la receta:</label>
                    <textarea class="form-control" id="Pasos" rows="5">"${ResponseRecetarioParse[targetIDParseado - 1].pasos}"</textarea>
                </div>
            </form>


            <div id="FormValoracion">
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
            </div>
    </div>`

    document.querySelector(`input[value="${ResponseRecetarioParse[targetIDParseado - 1].valoracion}"]`).checked = true;
    document.querySelector("#GuardarModificacion").addEventListener("click", EnviarModificacion());
    // 1. Identificar el botón que trigueó esta función
    // 2. Obtener el ID de la receta
    // 3. Abrir el modal
    // 4. Mostrar los valores actuales en el formulario
    // 5. Asociar EnviarModificacion al click del botón "Guardar cambios" del modal 
}

async function EnviarModificacion() {
    // 1. Coger los datos modificados
    // 2. Hacer la llamada PUT
    const titulo = document.querySelector("#Titulo").value;
    const ingredientes = document.querySelector("#Ingredientes").value;
    const tiempo = document.querySelector("#Tiempo").value;
    const imagen = document.querySelector("#Imagen").value;
    const pasos = document.querySelector("#Pasos").value;
    const valoracion = document.querySelector("input[name=fav_value]:checked").value;

    const BodyReceta = {
        "titulo": titulo,
        "ingredientes": ingredientes,
        "tiempo": tiempo,
        "imagen": imagen,
        "pasos": pasos,
        "valoracion": valoracion,
    }
    const RecetaFormatString = JSON.stringify(BodyReceta);

    try {
        await fetch("https://62d4fcf2cd960e45d45ea776.mockapi.io/recetas", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: RecetaFormatString,
        })
        console.log(`se ha actualizado la receta ${RecetaFormatString}`)
        VerRecetas();
    } catch (error) {
        console.log(error)
    }

}

VerRecetas();
const urlAsociada = window.location.pathname;
if (urlAsociada.includes("Formulario.html")) {
    document.querySelector("#Guardar").addEventListener("click", GuardaReceta);
}



















/* try {
        await fetch("https://62d4fcf2cd960e45d45ea776.mockapi.io/recetas", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

        }

    } catch (error) {
        console.log(error)
    }
    */