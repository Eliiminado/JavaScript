const palabra = prompt(`Introduce una palabra:`);
let palabravacia = "";

for (let i = 0; i <= palabra.length - 1; i++) {

    if (i % 2 == 0) {
        palabravacia += palabra[i];
    }


}
alert(`Tu palabra es ${palabravacia}`);