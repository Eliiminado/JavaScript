async function BuscaPelicula() {
    const tuclave = document.querySelector("#Nombre").value;
    const ResponseApi = await fetch("http://www.omdbapi.com/?apikey=[tuclave]&")
    const ResponseApiTxt = await ResponseApi.text();
    const ResponseApiParse = JSON.parse(ResponseApiTxt);
    console.log(ResponseApi)
    console.log(ResponseApiTxt)
    console.log(ResponseApiParse)

}

document.querySelector("#Guardar").addEventListener("click", BuscaPelicula);