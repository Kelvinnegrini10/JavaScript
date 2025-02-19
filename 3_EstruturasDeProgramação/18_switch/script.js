let nome = "Lanche";
let esc = prompt("Escolha algo do cardapio")
switch(esc){
    case "Lanche":
        console.log("Escolheu lanche");
    case "Pizza":
        console.log("Escolheu pizza");
    case "Brigadeiro":
        console.log("Escolheu Brigadeiro");
        break;
        default:
            console.log("Não encontrei nada do que gosto");
            break
            
}