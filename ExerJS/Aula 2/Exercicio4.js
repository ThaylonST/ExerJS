const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Escreva seu nome: ", (nome) => {

  rl.question("Informe seu sexo(1 para masculino - 2 para feminino): ", (sexo) => {
    
    rl.question("Informe o valor da sua compra: R$", (compra) => {

    
    
    if (sexo==1){
     const desconto= compra * 0.05
     const novoValor = compra - desconto
       

      console.log(`${nome}, o valor da sua compra ficou R$${novoValor}, com 5% de desconto! `)
    }else if (sexo == 2){

      const desconto= compra * 0.13
     const novoValor = compra - desconto
       

      console.log(`${nome}, o valor da sua compra ficou R$${novoValor}, com 13% de desconto! `)
  
    }else{
      console.log(`ERRO: Voce digitou um numero invalido`)
    }


    
    
    rl.close(); // fecha a interface após a captura dos dados
    });
  });
});
