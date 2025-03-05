for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

//B
const numero = (prompt("Digite um número para ver a sua tabuada:"));
if ((numero)) {
    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
} else {
    console.log("Por favor, insira um número válido.");
}



