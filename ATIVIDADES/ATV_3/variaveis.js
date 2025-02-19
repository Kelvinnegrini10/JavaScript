{
    let gols = 1000;  // 'let' é declarado dentro de um bloco, então só é acessível dentro desse bloco
    console.log(gols);  // Funciona dentro do bloco
  }
  
  console.log(gols);  // Erro! 'gols' não está acessível aqui, porque está fora do bloco onde foi declarado.
  

var nome = "Kelvin";  // 'var' também permite que você altere o valor da variável, mas tem escopo de função.
console.log(nome);

const pi = "3.14";  // 'const' define uma variável cujo valor não pode ser alterado após a atribuição. Tem escopo de bloco.
console.log(pi);


