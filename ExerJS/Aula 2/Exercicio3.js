const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Escreva seu nome: ", (nome) => {

  rl.question("Informe seu ano de nascimento: ", (data) => {
    
    const anoAtual = 2025
    const idade = anoAtual - data

    if (idade < 18) {
      const anos = 18 - idade
      console.log(`${nome}, seu alistamento será daqui ${anos} anos.`)
    } else {
      const anos = idade - 18
      console.log(`${nome}, seu alistamento foi há ${anos} anos.`)
    }

    
    
    rl.close(); // fecha a interface após a captura dos dados
  });
});
