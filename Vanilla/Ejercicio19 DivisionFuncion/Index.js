function dividir(Num) {

    if (!isNaN(Num)) {
        const NumParse = parseInt(Num)
        let resultado = NumParse / 100;
        alert(`El resultado de la división es: ${resultado}`);
    }
}

let Num = prompt(`Introduce un numero a dividir entre 100:`);
dividir(Num);

