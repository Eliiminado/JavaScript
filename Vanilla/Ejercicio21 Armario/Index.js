function EncontrarRopa(Armario, Prenda) {
    for (let i = 0; i <= Armario.length; i++) {
        if (Prenda == Armario[i]) {
            alert(`Tu prenda es ${Armario[i]} esta en la posición ${i}`);

        }
    }

}
let Armario = []
const lista = prompt(`Introduce las prendas de tu armario separado por comas:`);
Armario = lista.split(", ");
const Prenda = prompt(`Introduce la prenda que quieres encontrar:`);
EncontrarRopa(Armario, Prenda);