const Animales = [
    {
        "name": "elefante",
        "peso": 5000,
    },
    {
        "name": "perra",
        "peso": 20,
    },
    {
        "name": "ballena",
        "peso": 20000,
    },
    {
        "name": "hormiga",
        "peso": 0.001,
    },
]
for (let i = 0; i <= Animales.length; i++) {
    if (Animales[i]["name"] == "perra") {
        alert(`La ${Animales[i]["name"]} y su peso es ${Animales[i]["peso"]}`);

    }
    if (Animales[i]["peso"] >= 1000) {
        alert(`Animales grandes: ${Animales[i]["name"]}`);

    }
}
