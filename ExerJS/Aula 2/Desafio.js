const readline = require("readline"); // importa o módulo readline

// cria uma interface de leitura para entrada e saída de dados
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// pedindo para que o usuário informe seu nome e captura o dado
rl.question("Informe o tamanho do 1° segmento de reta: ", (t1) => {
rl.question("Informe o tamanho do 2° segmento de reta: ", (t2) => {
rl.question("Informe o tamanho do 3° segmento de reta: ", (t3) => {

  t1 = parseFloat(t1);
  t2 = parseFloat(t2);
  t3 = parseFloat(t3);

    
    
    if (t1 + t2 > t3 && t1 + t3 > t2 && t2 + t3 > t1){

  
       

      console.log(`Sim, é possivel formar um triangulo usando tres segmentos de ${t1},${t2},${t3}m`)
    }else{
      console.log(`Não, não é possivel formar um triangulo usando segmentos de ${t1},${t2},${t3}m`)
    }


    
    
    rl.close(); // fecha a interface após a captura dos dados
    });
  });
});
