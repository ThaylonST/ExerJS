const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Digite a 1° nota: ", (n1) => {

  rl.question("Digite a 2° nota  ", (n2) => {
    

    
    const soma = parseInt(n1) + parseInt(n2);
    const media = parseInt(soma) /2;
    console.log(`Resultado: ${media}`);
    
    rl.close(); // fecha a interface após a captura dos dados
  });
});
