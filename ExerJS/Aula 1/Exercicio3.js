const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Escreva seu nome: ", (nome) => {

  rl.question("Informe seu salário: ", (salario) => {
    
    console.log(`O funcionário ${nome} recebe R$${salario} por mês.`);
    
    rl.close(); // fecha a interface após a captura dos dados
  });
});
