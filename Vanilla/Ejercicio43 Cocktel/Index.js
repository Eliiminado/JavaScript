async function ObtenerCocktel() {

    let IngredienteUsuario = document.querySelector("#IngredienteUsuario").value;

    try {
        const InfoCocktel = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${IngredienteUsuario}`);
        const InfoCocktelProcesado = await InfoCocktel.text();
        const InfoCoctelParse = JSON.parse(InfoCocktelProcesado);
        ArrayDeCocteles = InfoCoctelParse.drinks;

        document.querySelector("#Error").innerHTML = "";
        document.querySelector("#CartaBebidas").innerHTML =
            `<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner" id="Inyecta">
                    
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a> 
                
                </div>`
        InyectaCocteles();


    } catch (error) {
        console.log(error)
        document.querySelector("#Error").innerHTML = `<h5><span class="badge badge-danger"> Error en la petición de información. Introduce datos validos</span></h5>`


    }
    function InyectaCocteles() {
        for (let i = 0; i < ArrayDeCocteles.length; i++) {
            // Necesitamos que solamente haya 1 con la clase "active"
            let clasesDelElemento;
            if (i == 0) {
                clasesDelElemento = "carousel-item active";
            } else {
                clasesDelElemento = "carousel-item";
            }
            document.querySelector("#Inyecta").innerHTML += `
                <div class="${clasesDelElemento}">
                    <img class="d-block w-100" src="${ArrayDeCocteles[i].strDrinkThumb}" alt="${ArrayDeCocteles[i].strDrink}">
                <h3 id="NameCoctel">"${ArrayDeCocteles[i].strDrink}"</h3>
                </div>`

        }
    }
}
let ArrayDeCocteles;
document.querySelector("#Buscar").addEventListener("click", ObtenerCocktel);