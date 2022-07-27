
async function HacerLlamadaPost() {
    const miBody = {
        "titulo": "Carlo Magno",
        "valoracion": "⭐⭐⭐⭐",
        "categoria": "histórica"
    }
    const bodyFormateadoAString = JSON.stringify(miBody);
    await fetch("https://62d4fcf2cd960e45d45ea776.mockapi.io/pelis", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: bodyFormateadoAString
    })
    // Hacer una petición get y hacer un console.log con todas las pelis
    try {

        const ResponseGET = await fetch("https://62d4fcf2cd960e45d45ea776.mockapi.io/pelis");
        const ResponseGETBody = await ResponseGET.text();
        const RespuestaParseada = JSON.parse(ResponseGETBody);
        console.log("muestra info recibida api:", ResponseGET)
        console.log("muestra info pasada a text:", ResponseGETBody)
        console.log("muestra de arrays:", RespuestaParseada);
    } catch (error) {
        console.log(error)
    }
}
HacerLlamadaPost();
