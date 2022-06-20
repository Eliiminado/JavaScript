function VerifyNum(Numeros) {
    const NumParse = []
    for (let i = 0; i <= Numeros.length; i++) {
        NumParse.push(parseInt(Numeros[i]));
    }


    if (NumParse[0] == NumParse[1]) {
        alert(`Tu primer número ${NumParse[0]} y el segundo ${NumParse[1]} són iguales`)
    }
    else {
        alert(`Tu primer número ${NumParse[0]} y el segundo ${NumParse[1]} són diferentes`)
    }
    if (NumParse[1] == NumParse[2]) {
        alert(`Tu segundo número ${NumParse[1]} y el tercero ${NumParse[2]} són iguales`)
    }
    else {
        alert(`Tu segundo número ${NumParse[1]} y el tercero ${NumParse[2]} són diferentes`)
    }
}
/*
let Numeros = [];
for (let i = 0; i <= 2; i++) {
    const numero = prompt(`Introduce el número:`);

    Numeros.push(numero);
}
*/
const lista = prompt(`Introduce 3 numeros separados por comas:`);
const Numeros = lista.split(",")
VerifyNum(Numeros);



