const Menu = [
    {
        "plato": "ensalada",
        "vegano": true,
        "carnivoro": false,
        "tipo": "principal",
        "compartir": true,
        "calorias": 365,
    },
    {
        "plato": "gazpacho",
        "vegano": true,
        "carnivoro": false,
        "tipo": "principal",
        "compartir": false,
        "calorias": 250,
    },
    {
        "plato": "tequeños",
        "vegano": false,
        "carnivoro": true,
        "tipo": "principal",
        "compartir": true,
        "calorias": 500,
    },
    {
        "plato": "arroz con curry y pollo",
        "vegano": false,
        "carnivoro": true,
        "tipo": "segundo",
        "compartir": false,
        "calorias": 850,
    },
    {
        "plato": "Lasaña de berenjena",
        "vegano": true,
        "carnivoro": false,
        "tipo": "segundo",
        "compartir": false,
        "calorias": 650,
    },
    {
        "plato": "Marmitako",
        "vegano": false,
        "carnivoro": true,
        "tipo": "segundo",
        "compartir": false,
        "calorias": 850,
    },
    {
        "plato": "Coulant",
        "vegano": false,
        "carnivoro": true,
        "tipo": "postre",
        "compartir": false,
        "calorias": 450,
    },
    {
        "plato": "Keffir con fruta",
        "vegano": true,
        "carnivoro": false,
        "tipo": "postre",
        "compartir": false,
        "calorias": 250,
    },
    {
        "plato": "Tiramisu",
        "vegano": false,
        "carnivoro": true,
        "tipo": "postre",
        "compartir": false,
        "calorias": 450,
    },
]

// Defino la función
function FiltrarPlatos(clave, valor) {
    let MenuUsuario = []

    for (let i = 0; i < Menu.length; i++) {
        if (Menu[i][clave] == valor) {
            MenuUsuario.push(Menu[i]["plato"]);

        }
    }
    alert(`Los platos a elegir son:${MenuUsuario}`);
}


const TipoPlato = prompt(`Que tipo de plato te apetece? Tal vez un principal o un segundo? Quizás un postre?`)
if (TipoPlato == "principal" || TipoPlato == "segundo" || TipoPlato == "postre") {

    // Llamo a la función
    FiltrarPlatos("tipo", TipoPlato);

}
else {
    alert(`Porfavor introduce un tipo de plato valido :p`);
}

const Kalorias = prompt(`Cuantas calorias quieres consumir? Entre 250 kcal y 850 kcal.`);
if (!isNaN(Kalorias)) {

    FiltrarPlatos("calorias", Kalorias);
}
else {
    alert(`Porfavor introduce un tipo de plato valido :p`);
}