function SumarNum(Num1, Num2) {

    if (!isNaN(Num1) && !isNaN(Num2)) {

        const Num1Parse = parseInt(Num1)
        const Num2Parse = parseInt(Num2)
        let Resultado = Num1Parse + Num2Parse;

        alert(`La suma de tus números es: ${Resultado}`);
    }

}

let Num1 = prompt(`Intruduce el primer número a sumar:`);

let Num2 = prompt(`Introduce el segundo número:`);

SumarNum(Num1, Num2);


