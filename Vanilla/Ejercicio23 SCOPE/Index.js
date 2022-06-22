const precioMaxUsuario = prompt(`Cuanto dinero te quieres gastar como máximo:`)

function CalcularPrecio(PrecioBase, Cantidad) {
    const precio = PrecioBase * Cantidad;
    return precio; // Le digo a la funcion que escupa un resultado
}

// Me guardo en una nueva variable que guarde lo que la funcion escupe
const precioCalculado = CalcularPrecio(6, 4);

if (precioCalculado > precioMaxUsuario) {

}
