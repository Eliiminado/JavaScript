
const numero = prompt("Introduce un numéro del 1 al 7");
const numparseado = parseInt(numero);

/*switch (numparseado) {
    case 1:
        alert(`Tu dia de la semana es Lunes`);
        break;
    case 2:
        alert(`Tu dia de la semana es Martes`);
        break;
    case 3:
        alert(`Tu dia de la semana es Miercoles`);
        break;
    case 4:
        alert(`Tu dia de la semana es Jueves`);
        break;
    case 5:
        alert(`Tu dia de la semana es Viernes`);
        break;
    case 6:
        alert(`Tu dia de la semana es Sabado`);
        break;
    case 7:
        alert(`Tu dia de la semana es Domingo`);
        break;
    default:
        alert(`El número introducido no es valido`);
        break;
}*/

const DiasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
alert(DiasSemana[numparseado - 1]);
