const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Digite o 1° Numero: ", (n1) => {

  rl.question("Digite o 2° numero ", (n2) => {
    

    
    const n3 = parseInt(n1) + parseInt(n2);
    console.log(`Resultado: ${n3}`);
    
    rl.close(); // fecha a interface após a captura dos dados
  });
});
