const bichas = [
    {
        "nombre": "Farah",
        "peso": 13,
        "color": "Blanco y negro",
    },

    {
        "nombre": "Paprika",
        "peso": 3,
        "color": "Naranjita",
    }
]
const PesoUsuario = prompt(`Introduce un peso mínimo:`);
for (let i = 0; i <= bichas.length; i++) {
    if (bichas[i]["peso"] < PesoUsuario) {
        alert(`${bichas[i]["nombre"]} aun puedes comer más!:) `)
    }
}

