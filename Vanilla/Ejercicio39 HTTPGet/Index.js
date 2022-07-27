async function ObtenerDatos() {
    // 1. Se reciben los datos
    const ditto = await fetch("https://pokeapi.co/api/v2/pokemon/ditto") // GET
    console.log(ditto);
    // console.log("Datos recibidos")
    // Cuando se han recibido, se procesan
    // const dittoProcesado = await ditto.text()
    // Cuando se han procesado, se loggean
    // console.log(dittoProcesado)
}

ObtenerDatos();
