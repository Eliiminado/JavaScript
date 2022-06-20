const animals = ["Ajolote", "Mandril", "Oso polar", "Mono dorado de nariz chata", "Lemur"];

const TuAnimal = prompt(`Introduce un animal en peligro de extinción:`);

for (i = 0; i <= animals.length; i++) {
    if (TuAnimal == animals[i]) {
        alert(`Tu animal es el numero: ${i}`)
    }
}