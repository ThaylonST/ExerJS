const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Quanto voce tem na sua carteria hoje em reais? ", (n) => {

  const dolar = parseFloat(n)/5.50

    

    

    console.log(`Com esse valor, voce pode comprar ${dolar} dolares`);
  
    
    rl.close(); // fecha a interface após a captura dos dados
  });

