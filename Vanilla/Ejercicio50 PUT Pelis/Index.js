
// Funcion para ordenar el array de peliculas por corazones
function OrdenarPeliculas(peli1, peli2) {
    // peli = cad uno de los objetos del array de peliculas
    // peliculas = [{"titulo": "El rey leon", "valoracion": "💛💛💛"}]
    // peli1 = {"titulo": "El rey leon", "valoracion": "💛💛💛"}
    // peli2 = {"titulo": "El libro de la selva", "valoracion": "❤️❤️❤️❤️❤️"}
    // peli1.valoracion = "❤️❤️❤️❤️❤️"
    return peli2.valoracion.length - peli1.valoracion.length
}


async function VerRanking() {
    try {
        document.querySelector("#Ranking").innerHTML = `
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>`;

        const ResponseRanking = await fetch("https://62d4fcf2cd960e45d45ea776.mockapi.io/pelis")
        const ResponseRankingTxt = await ResponseRanking.text();
        const RankingParseado = JSON.parse(ResponseRankingTxt);

        const RankingOrdenado = RankingParseado.sort(OrdenarPeliculas);

        document.querySelector("#Ranking").innerHTML = "";

        for (let i = 0; i < RankingOrdenado.length; i++) {
            document.querySelector("#Ranking").innerHTML +=
                ` <ul class="list-group">
                <li class="list-group-item">
                    <div class="col-4"> 
                        ${RankingOrdenado[i].titulo}
                    </div>
                    <div class="col-4"> 
                       ${RankingOrdenado[i].categoria}
                    </div>
                    <div class="col-4"> 
                        ${RankingOrdenado[i].valoracion}
                    </div>
                    <a href="#" id="pelicula-${RankingOrdenado[i].id}" class="btn btn-lg btn-info"><span
                                    class="glyphicon glyphicon-fast-backward"></span>Guarda la valoración</a>
                </li>

            </ul>`
            console.log(`Creando pelicula-${RankingOrdenado[i].id}`)
        }
        for (let i = 0; i < RankingOrdenado.length; i++) {
            document.querySelector(`#pelicula-${RankingOrdenado[i].id}`).addEventListener("click", ActualizarDatos)

        }


    } catch (error) {
        // Codigo para mostrar un alert al usuario
        // Mirar ejemplo del otro dia (paises)
        console.log(error)
        document.querySelector("#Error").innerHTML = `<h5><span class="badge badge-danger"> El ranking no se esta actualizando. Intentaló de nuevo</span></h5>`
    }
}

VerRanking();

let Categoria;

function SelecionarTipo(trigger) {
    Categoria = trigger.target.text
}

async function GuardaValoracion() {
    const NombrePelicula = document.querySelector("#Nombre").value;
    const ValoracionPelicula = document.querySelector("input[name=fav_value]:checked").value;
    const bodyAPI = {
        "titulo": NombrePelicula,
        "valoracion": ValoracionPelicula,
        "categoria": Categoria
    }
    const PeliculaFormateadaAString = JSON.stringify(bodyAPI);
    try {
        await fetch("https://62d4fcf2cd960e45d45ea776.mockapi.io/pelis", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: PeliculaFormateadaAString

        })
    } catch (error) {
        document.querySelector("#Error").innerHTML = `<h5><span class="badge badge-danger"> Tu pelicula no se esta enviando al servidor. Intentalo de nuevo</span></h5>`
    }
    VerRanking();
}

// Funcion para actualizar datos

async function ActualizarDatos(trigger) {
    // Averiguar el id del boton que trigueó esta funcion
    const TargetID = trigger.target.id;
    // Quitar prefijo del targetID
    const TargetIDSinPrefijo = TargetID.replace("pelicula-", "")
    // Pillar los valores del formulario
    const NombrePelicula = document.querySelector("#Nombre").value;
    const ValoracionPelicula = document.querySelector("input[name=fav_value]:checked").value;
    const nuevosDatos = {
        "titulo": NombrePelicula,
        "valoracion": ValoracionPelicula,
        "categoria": Categoria
    }
    // Stringifear los datos
    const nuevosDatosString = JSON.stringify(nuevosDatos);
    // Se los mandamos al servidor
    try {
        await fetch(`https://62d4fcf2cd960e45d45ea776.mockapi.io/pelis/${TargetIDSinPrefijo}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: nuevosDatosString,

            })
        // Refrescamos el ranking
        VerRanking();
    } catch (error) {
        console.log(error)
        document.querySelector("#Error").innerHTML = `<h5><span class="badge badge-danger"> Los datos no se están actualizando. Intentalo otra vez.</span></h5>`
    }

}

document.querySelector("#Guardar").addEventListener("click", GuardaValoracion);
document.querySelector("#Tipo").addEventListener("click", SelecionarTipo);
