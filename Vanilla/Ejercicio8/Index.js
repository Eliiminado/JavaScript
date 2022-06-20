let numero = prompt(`Adivina un numero`);

do {
    numero = prompt(`No es correcto, adivina un numero otra vez...`);
}
while (numero != 7)

alert(`Ese si es correcto! Felicidades!`)