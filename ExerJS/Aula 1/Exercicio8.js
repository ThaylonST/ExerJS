const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Digite a altura: ", (n1) => {

  rl.question("Digite a largura: ", (n2) => {
    

    
    const area = parseInt(n1)* parseInt(n2);
    const litros = parseInt(area)/2;
   
    console.log(`Area a ser pintada: ${area}`);
    console.log(`Ira precisar de  ${litros}L de tinta`);
    
    rl.close(); // fecha a interface após a captura dos dados
  });
});
