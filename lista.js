let NumeroAlunos = 5;
let ListaDeAlunos = ["Marina", "Frederico", "Victor", "Ismael", "Pablo", "Erick"];

//Utilizando FOR

for (let contador = 0; contador < ListaDeAlunos.length; contador++) {

    if (contador == 0) {
        console.log(contador + ": Zero: " + ListaDeAlunos[contador]); //Concatenaçâo

    } else if (contador % 2 == 1) {
        console.log(`${contador}: Ímpar: ${ListaDeAlunos[contador]}`); // Interpolaçâo
    } else {
        console.log(contador + ": Par: " + ListaDeAlunos[contador]);
    }
}


// Utilizando WHILE

let contador = 0;
while (contador < ListaDeAlunos.length) {

    if (contador == 0) {
        console.log(contador + ": Zero: " + ListaDeAlunos[contador]); //Concatenaçâo

    } else if (contador % 2 == 1) {
        console.log(`${contador}: Ímpar: ${ListaDeAlunos[contador]}`); // Interpolaçâo
    } else {
        console.log(contador + ": Par: " + ListaDeAlunos[contador]);
    }
    contador++
}

