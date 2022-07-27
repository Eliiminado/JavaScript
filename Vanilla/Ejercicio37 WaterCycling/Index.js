function Drink(HorasUsuario) {
    HorasUsuario = document.querySelector("#Input").value;
    if (!isNaN(HorasUsuario)) {
        let NeedDrink = HorasUsuario * 0.5;
        document.querySelector("#Resultado").innerHTML = `<div class="alert alert-success" role="alert"> Debes beber ${NeedDrink} </div>`
    }
    else {
        document.querySelector("#Resultado").innerHTML = `<div class="alert alert-danger" role="alert">Introduce datos validos!</div>`
    }
}


let HorasUsuario;
document.querySelector("#Calcula").addEventListener("click", Drink);

