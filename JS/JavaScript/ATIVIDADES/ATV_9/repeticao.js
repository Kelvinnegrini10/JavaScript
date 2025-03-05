let n = 1

while (n <= 10){
    console.log(n);
    n++
    
}

//B

let senha;


while (senha !== "1234") {
    senha = prompt("Digite a senha:"); 
    if (senha !== "1234") {
        alert("Senha incorreta. Tente novamente."); 
    }
}

alert("Senha correta! Acesso concedido."); 









