const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Qual distancia voce quer percorrer? (Km) ", (distancia) => {

  if (distancia <= 200){

    const valor = 0.50
    const corrida = distancia * valor
console.log(`O valor da sua corrida ficou em R$${corrida}`)
    
  }else{
    const valor = 0.45
    const corrida = distancia * valor
console.log(`O valor da sua corrida ficou em R$${corrida}`)
  }
   
    
    rl.close(); // fecha a interface após a captura dos dados
  });

