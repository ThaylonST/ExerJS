const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Digite seu salario atual: ", (n1) => {


    

    
 
    const aumento = parseInt(n1)*1.15;
   const novoSalario = parseFloat(aumento)+parseFloat(n1)
    console.log(`Seu salario sera de: R$${novoSalario}`);
 
    
    rl.close(); // fecha a interface após a captura dos dados
  });

