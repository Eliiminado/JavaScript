const TipoGradosUsuario = prompt("Introduce si quieres convertir tu temperatura en Celsius o Fahrenheit")
const TipoGrados = ["Celsius", "Fahrenheit"]
const GradoUsuario = prompt("Introduce los grados que quieras convertir:")
const Numeroparseado = parseInt(GradoUsuario);

/*if (TipoGradosUsuario == Celsius) {
    alert(`Tus grados Fahrenheit en Celsius son: ${GradoUsuario - 32 / 1.8}`);

}
if (TipoGradosUsuario == Fahrenheit) {
    alert(`Tus grados Celsius en Fahrenheit son: ${GradoUsuario * 1.8 + 32}`);
}
else {
    alert(`Introduce valores validos`);
}*/
switch (TipoGradosUsuario) {
    case "Celsius":
        alert(`Tus grados Fahrenheit en Celsius son: ${(Numeroparseado - 32) / 1.8}`);
        break;
    case "Fahrenheit":
        alert(`Tus grados Celsius en Fahrenheit son: ${Numeroparseado * 1.8 + 32}`);
        break;
    default:
        alert(`Introduce un caracter valido!!`);
        break;
}








