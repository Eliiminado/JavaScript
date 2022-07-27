async function ObtenerInformacion() {
    const InfoPais = await fetch("https://restcountries.com/v2/name/spain")
    const InfoPaisProcesado = await InfoPais.text()
    const InfoPaisParseado = JSON.parse(InfoPaisProcesado);
    console.log("ñaa", InfoPaisProcesado)
    console.log("aquí", InfoPaisParseado)
    //alert(InfoPaisParseado[0])
    alert(`La capital es: ${InfoPaisParseado[0].capital}`)

}
ObtenerInformacion();