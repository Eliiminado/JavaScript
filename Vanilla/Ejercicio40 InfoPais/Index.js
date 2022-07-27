async function ObtenerListaPaisesYCrearBotones() {

    let Paises = await fetch(`https://restcountries.com/v3.1/all`)
    let PaisesProcesados = await Paises.text();
    let PaisesParseados = JSON.parse(PaisesProcesados);
    document.querySelector()

}
async function BuscarCapital() {
    UsuarioPais = document.querySelector("#PaisUsuario").value;
    try {
        const InfoPais = await fetch(`https://restcountries.com/v2/name/${UsuarioPais}`);
        const InfoPaisProcesado = await InfoPais.text()
        const InfoPaisParseado = JSON.parse(InfoPaisProcesado);
        document.querySelector("#Resultado").innerHTML = `<div><h5>La capital de ${UsuarioPais} es ${InfoPaisParseado[0].capital}</h5></div>`
    } catch {

        document.querySelector("#Error").innerHTML = `<h5><span class="badge badge-danger"> Error en la petición de información. Introduce datos validos</span></h5>`
    }
}

let UsuarioPais;
document.querySelector("#Buscar").addEventListener("click", BuscarCapital);
