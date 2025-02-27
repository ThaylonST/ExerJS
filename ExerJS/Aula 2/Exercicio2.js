const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Digite um ano: ", (ano) => {

if(ano%4==0){
  console.log(`O seu ano ${ano}, é bissexto!`);
}else{
  console.log(`O seu ano ${ano}, não é bissexto!`);
}
  

  rl.close(); // fecha a interface após a captura do dado
});