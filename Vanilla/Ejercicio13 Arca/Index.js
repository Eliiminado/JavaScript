const TodosAnimales = ["pavo", "ratón", "humano", "perro", "vaca", "conejo"];
let ArcaNoe = [];
let NoLive = [];

for (let i = 0; i <= TodosAnimales.length; i++) {

    if (i % 2 == 0) {
        ArcaNoe.push(TodosAnimales[i]);

    }
    else {
        NoLive.push(TodosAnimales[i]);

    }
}
alert(`Los animales que se salvan son: ${ArcaNoe}`);
alert(`Los animales que se mueren son:${NoLive}`);