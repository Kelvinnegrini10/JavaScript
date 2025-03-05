let numero;

do {
    numero = parseFloat(prompt("Digite um número (digite 0 para sair):")); // Solicita um número
    if (numero !== 0) { 
        alert(`O dobro de ${numero} é ${numero * 2}.`); 
    }
} while (numero !== 0); 

alert("Programa encerrado.");



//B 

let nome;

do {
    nome = prompt("Digite um nome (ou 'sair' para terminar):");
    if (nome.toLowerCase() !== "sair") {
        alert(`Você digitou: ${nome}`);
    }
} while (nome.toLowerCase() !== "sair");

alert("Programa encerrado.");





