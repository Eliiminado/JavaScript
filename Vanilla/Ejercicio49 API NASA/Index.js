async function MostrarImagen() {

    MyDay = document.querySelector("#InputFecha").value;
    console.log(MyDay)
    // Obtener los datos de la API
    try {
        const ResponsApiNasa = await fetch(`https://api.nasa.gov/planetary/apod?api_key=yeNUFAuBvnsZ3RycD64gWlWDNceslnB4QOfVRhDc&date=${MyDay}`)
        // Convertirlo en texto
        ResponsApiNasaTxt = await ResponsApiNasa.text();
        console.log(ResponsApiNasaTxt)
        // Parsearlo
        ResponsApiNasaParse = JSON.parse(ResponsApiNasaTxt);
        console.log(ResponsApiNasaParse)
        // Inyectarlo
        document.querySelector("#ImagenUniverso").innerHTML = `<img id="ResponsImg" src="${ResponsApiNasaParse.hdurl}" ></img>`
    } catch (error) {
        console.log(error)
        document.querySelector("#Error").innerHTML = "<h5><span class= badge badge-danger> No esta llegando la petición al servidor. intentalo otra vez.</span></h5>"

    }
}

let MyDay;
document.querySelector("#Enviar").addEventListener("click", MostrarImagen);