function Comparar(Num1, Num2) {

    if (Num1 > Num2) {
        alert(`El primer numero ${Num1} es mayor que el segundo ${Num2}`)
    }
    if (Num1 == Num2) {
        alert(`El primer numero ${Num1} y que el segundo ${Num2} són iguales`)
    }
    else {
        alert(`El primer numero ${Num1} es menor que el segundo ${Num2}`)
    }
}

const Num1 = prompt(`Introduce el primer número a comparar:`);
let Num2;
if (!isNaN(Num1)) {
    Num2 = prompt(`Introduce el segundo número a comparar:`);
}
else {
    alert(`Introduce un número valido.`);
}

Comparar(Num1, Num2);

