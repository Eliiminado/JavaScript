/* alert("Eres lo que mas amo en este mundo")*/
const edad = prompt("Introduce tu edad");
if (edad > 0 && edad < 100 && !isNaN(edad)) {

    if (edad > 18) {
        alert(`Eres mayor de edad`)
    }
    else {
        alert(`Eres un bebesote`)
    }
}

else {
    alert(`No puedes tener menos de 0 años o mayor de 100. Tampoco puede tener letras por edad.`)
}

// alert("Tu edad es:" + edad);
/*alert(`Tienes ${edad} años`);*/