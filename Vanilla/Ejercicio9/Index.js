const nombres = ["Paula", "Juan", "Jose", "Eli"];
const wanted = prompt(`introduce la persona que buscara:`);

for (let i = 0; i <= nombres.length; i++) {
    if (nombres[i] == wanted) {
        alert(`Has encontrado a ${wanted}`);
    }
}