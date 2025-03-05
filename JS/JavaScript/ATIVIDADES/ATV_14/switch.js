
const numero = (prompt("Digite um número de 1 a 7:"));

// Verifica se o número é válido
if (numero >= 1 && numero <= 7) {
    let diaDaSemana;

    // Usa switch para mapear o número para o dia da semana
    switch (numero) {
        case 1:
            diaDaSemana = "Domingo";
            break;
        case 2:
            diaDaSemana = "Segunda-feira";
            break;
        case 3:
            diaDaSemana = "Terça-feira";
            break;
        case 4:
            diaDaSemana = "Quarta-feira";
            break;
        case 5:
            diaDaSemana = "Quinta-feira";
            break;
        case 6:
            diaDaSemana = "Sexta-feira";
            break;
        case 7:
            diaDaSemana = "Sábado";
            break;
    }

    alert(`O número ${numero} corresponde a: ${diaDaSemana}`);
} else {
    alert("Número inválido! Por favor, digite um número de 1 a 7.");
}

//B

let cor = prompt("Informe uma cor:"); 
let texto;

cor = cor.toLowerCase();

switch (cor) {
    case "vermelho":
        texto = "Essa cor é bem chamativa!";
        break;
    case "azul":
        texto = "Essa cor é mais fria.";
        break;
    case "verde":
        texto = "VAII VERDÃO!";
        break;

}

alert(texto); 


