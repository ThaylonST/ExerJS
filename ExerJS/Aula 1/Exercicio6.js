const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Digite um Numero: ", (n) => {

  const sucessor = parseInt(n)+1
  const antecessor = parseInt(n)-1
    

    

    console.log(`Seu sucessor é: ${sucessor}`);
    console.log(`Seu antecessor é: ${antecessor}`);
    
    rl.close(); // fecha a interface após a captura dos dados
  });

