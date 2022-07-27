async function ObtenerChistes() {
    const ChuckNorris = await fetch("https://api.chucknorris.io/jokes/random")
    const ChuckNorrisProcesado = await ChuckNorris.text()
    const ChuckNorrisParseado = JSON.parse(ChuckNorrisProcesado);
    console.log(ChuckNorrisParseado)
    alert(ChuckNorrisParseado.value)
}
ObtenerChistes();