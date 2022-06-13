const Numeromes = prompt("Introduce un numero del 1 al 12 para saber que mes le representa:")
const mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

if (Numeromes < 13 && Numeromes > 0) {
    alert("El mes asociado con tu numero es: " + mes[Numeromes - 1]);
}
else {
    alert("Introduce un numero del 1 al 12!!! No sirven letras.")
}


