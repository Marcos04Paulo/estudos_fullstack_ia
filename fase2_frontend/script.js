// 1. Capturando os elementos da tela e guardando na memória
let textoStatus = document.getElementById('status');
let btn = document.getElementById('btnAnalisar');

// 2. Criando a função que vai alterar a tela
//A função AGORA é async, para podermos usar o await dentro dela
async function executarAcao() {
  // 1. Feedback visual imediato (Executa na hora)
  textoStatus.innerText = "Analisando dados do usuário..."
  textoStatus.style.color = "blue"

  // 2. A pausa (O seu sistema pede algo para a "IA" e espera 3seg.)
  let respostaServidor = await simularEnvio()

  // 3. A atualização visual (Só executa APÓS os 3seg. passarem)
  textoStatus.innerText = respostaServidor
  textoStatus.style.color = "green"
}

// 3. Adicionando um "Ouvinte de eventos" ao botão
//Quando o usuário clicar no botão, ele chama a função executarAcao
btn.addEventListener("click", executarAcao);

function simularEnvio(dados){
  console.log("Servidor: Processando envio de dados...")
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve("Os dados do usuário foram analisados com sucesso.")
    }, 3000) //3 segundos de atraso
  })
}