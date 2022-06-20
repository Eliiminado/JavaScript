

function FiltrarPlatos(clave, valor) {
    let MenuUsuario = []

    for (let i = 0; i < Menu.length; i++) {
        if (Menu[i][clave] == valor) {
            MenuUsuario.push(Menu[i]["plato"]);

        }
    }
    alert(`Los platos a elegir son:${MenuUsuario}`);

}

FiltrarPlatos("kalorias", Kalorias)
FiltrarPlatos("tipo", TipoPlato)