const titulos_masculino = ["Boy", "Man", "Guy", "Mr.", "Doctor", "El", "Professor", "Captain", "Agent", "The", "Lord", "Sgt.", "General"]

const titulos_femenino = ["Girl", "Woman", "Gal", "Miss", "Doctora", "Professora", "Capitana", "Agent", "The", "Sgt.", "Señorita"]

const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"]

const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"]

function ObtenerElementoDeArray(array) {
    let NumeroArrayRandom = Math.random() * array.length - 1;
    let NumeroArrayRandomRedondo = Math.round(NumeroArrayRandom);
    if (NumeroArrayRandomRedondo == -1) {
        NumeroArrayRandomRedondo = 0;
    }
    return array[NumeroArrayRandomRedondo];
}

function GeneraName(trigger) {
    let PrimerNombre;
    switch (trigger.target.id) {
        case "Chica":

            PrimerNombre = ObtenerElementoDeArray(titulos_femenino);

            break;

        case "Chico":

            PrimerNombre = ObtenerElementoDeArray(titulos_masculino);


            break;
    }


    let SegundoNombre = ObtenerElementoDeArray(adjetivos);
    let TercerNombre = ObtenerElementoDeArray(sustantivos);
    document.querySelector("#TextName").innerHTML = `<div><h2> ${PrimerNombre} ${SegundoNombre} ${TercerNombre}</h2></div>`;
}



document.querySelector("#Chico").addEventListener("click", GeneraName);
document.querySelector("#Chica").addEventListener("click", GeneraName);
