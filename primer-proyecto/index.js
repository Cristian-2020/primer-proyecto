// Bucles

// ==============================================================
// 1- Bucle For

/* for (let i=0; i<10; i++) {
    console.log("Valor de I: " + i);
}

let numero = parseInt(prompt("¿Qué número quieres iterar?"));
for (let i=1; i<11; i++) {
    console.log(numero + " x " + i + " = " + (numero*i));
} */

$(document).ready(function(){
    $("#btn_enviar").click(() => {
        iterar($("#numero").val());
    })
})

/* function iterar(numero) {
    for (let i = 1; i < 11; i++) {
        if (i == 5) {
            continue;
        }
        console.log(numero + " x " + i + " = " + (numero*i));
    }
} */

let dias = ["Lunes","Martes","Miércoles","Jueves","Viernes"];
/* for (let i = 0; i < dias.length; i++) {
    console.log("Valor de la posición " + i + " = " + dias[i]);
} */

// ==============================================================
// 2- Bucle For in
/* for (i in dias) {
    console.log("Valor de la posición " + i + " = " + dias[i]);
} */

// ==============================================================
// 3- Bucle For of
/* for (let dia of dias) {
    console.log(dia);
} */

// ==============================================================
// 4- Bucle forEach
/* dias.forEach((dia,index) => {
    console.log("Valor de la posición " + index + " = " + dia);
}) */

// ==============================================================
// 5- Bucle While
let x = 10;
let tope = 10;
/* while (x < tope) {
    console.log("Valor de x = " + x);
    x++;
}
 */
// ==============================================================
// 5- Bucle Do While
do {
    console.log("Valor de x = " + x);
    x++;
} while (x < 10);
