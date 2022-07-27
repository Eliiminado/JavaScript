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

function RandomFood() {
    let NumRandom = Math.random() * Menu.length - 1;
    let NumRandomRound = Math.round(NumRandom);
    document.querySelector("#ResultadoFinal").innerHTML = `<div class="alert alert-info" role="alert"> Hoy vas a comer: ${Menu[NumRandomRound].plato} </div>`
}
document.querySelector("#RandomFood").addEventListener("click", RandomFood);