
/*for (let contador = 1; contador < 13; contador++) {
    if (contador < 5) {
        alert(`${contador} Ovejitas `)
    }
    if (contador > 4) {
        alert(`${contador} Lobos `)
    }
}*/
/*const frutas = ["fresa", "melón", "kiwi", "paragüayo", "tomate", "sandia"]

for (let contador = 0; contador < frutas.length; contador++) {
    alert(`${frutas[contador]}`);
}*/
/*const numeros = [];
for (let i = 1; i <= 100; i++) {
    numeros.push(i)
    alert(`El numero es ${i}`);
}
alert(`El array es ${numeros}`);*/
const numpares = [];
const numimpar = [];
for (let i = 0; i < 51; i++) {
    if (i % 2 == 0) {
        numpares.push(i);
    }
    else {
        numimpar.push(i);
    }
}

alert(`Los pares son: ${numpares}`);
alert(`Los numeros impares son: ${numimpar}`);
