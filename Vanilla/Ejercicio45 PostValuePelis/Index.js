
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
                    <a href="#" id="pelicula-${RankingOrdenado[i].id}" class="btn btn-lg btn-info Actualizar"><span
                    class="glyphicon glyphicon-fast-backward"></span>Actualizar datos</a>
                </li>
            </ul>`
            console.log(`Creando el botón #pelicula-${RankingOrdenado[i].id}`)
        }
        console.log(`Ya están todos los botones creados!`)
        for (let i = 0; i < RankingOrdenado.length; i++) {
            document.querySelector(`#pelicula-${RankingOrdenado[i].id}`).addEventListener("click", ActualizarPeliculaApi)
            console.log(`Activando el botón #pelicula-${RankingOrdenado[i].id}`)
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

// Función para actualizar datos - UPDATE/PUT
async function ActualizarPeliculaApi(trigger) {
    console.log(trigger.target.id)
    const targetId = trigger.target.id;
    const id = targetId.replace('pelicula-', '');
    const NombrePelicula = document.querySelector("#Nombre").value;
    const ValoracionPelicula = document.querySelector("input[name=fav_value]:checked").value;
    const nuevosDatos = {
        "titulo": NombrePelicula,
        "valoracion": ValoracionPelicula,
        "categoria": Categoria
    }
    const nuevosDatosString = JSON.stringify(nuevosDatos);
    await fetch(`https://62d4fcf2cd960e45d45ea776.mockapi.io/pelis/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: nuevosDatosString
        })
    VerRanking()
}



document.querySelector("#Guardar").addEventListener("click", GuardaValoracion);
document.querySelector("#Tipo").addEventListener("click", SelecionarTipo);
