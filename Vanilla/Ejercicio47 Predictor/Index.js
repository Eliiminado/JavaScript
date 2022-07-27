async function CalculaEdadXNombre() {
    try {
        const NameUsuario = document.querySelector("#Nombre").value;
        const ResponseApiEdad = await fetch(`https://api.agify.io/?name=${NameUsuario}`)
        const ResponseApiTxtEdad = await ResponseApiEdad.text();
        const ResponseApiEdadParse = JSON.parse(ResponseApiTxtEdad);

        const ResponsApiGenero = await fetch(`https://api.genderize.io/?name=${NameUsuario}`)
        const ResponsApiGenerotxt = await ResponsApiGenero.text();
        const ResponsApiGeneroParse = JSON.parse(ResponsApiGenerotxt);

        const ResponsApiNacionalidad = await fetch(`https://api.nationalize.io/?name=${NameUsuario}`)
        const ResponsApiNacionalidadTxt = await ResponsApiNacionalidad.text();
        console.log(ResponsApiNacionalidadTxt)
        const ResponsApiNacionalidadParse = JSON.parse(ResponsApiNacionalidadTxt)
        console.log("aqui sale el parse", ResponsApiNacionalidadParse)

        document.querySelector("#Respuesta").innerHTML = `<h2>Tu edad según tu nombre ${NameUsuario} es ${ResponseApiEdadParse.age}.<br>
        Tu sexo sería: ${ResponsApiGeneroParse.gender} ,con una probabilidad de ${ResponsApiGeneroParse.probability}%</h2>`

        for (let i = 0; i < ResponsApiNacionalidadParse.country.length; i++) {
            document.querySelector("#RespuestaNacionalidad").innerHTML += `<h2>Tiene procedencia de ${ResponsApiNacionalidadParse.country[i].country_id} con una probabilidad de ${ResponsApiNacionalidadParse.country[i].probability}%</h2>`
            console.log("aqui sale el origen", ResponsApiNacionalidadParse.country[i].country_id)
            console.log("aqui sale la probabilidad", ResponsApiNacionalidadParse.country[i].probability)
        }

    } catch (error) {
        console.log(error)
        document.querySelector("#Error").innerHTML = `< h5 > <span class="badge badge-danger"> Tu nombre no se encuentra en el servidor. Escribelo bien y intentalo otra vez.</span></h5 > `
    }

}

document.querySelector("#Buscar").addEventListener("click", CalculaEdadXNombre);
