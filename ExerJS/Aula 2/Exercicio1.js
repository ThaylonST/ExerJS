

const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Qual a velocidade do seu carro?: ", (velocidade) => {
  
    const limite = 80
    if (velocidade >= limite){
        const exesso = velocidade - limite
        const multa = exesso * 5

        console.log(`Voce foi multado no valor de R$${multa}, por estar a ${exesso}KM/H acima do limite de velocidade `);
    } else{
        console.log(`Voce esta á ${velocidade}KM/H, dentro do limite de velocidade`);
    }
  

  rl.close(); // fecha a interface após a captura do dado
});