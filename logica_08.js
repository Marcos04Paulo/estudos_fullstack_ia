// 1. Fábrica que simula uma chamada de IA. Ela retorna uma Promessa (Promise).
function consultarIA(pergunta){
  console.log("Enviando pergunta: " + pergunta);
  return new Promise(function(resolve){
    //setTimeout cria um atraso artificial
    setTimeout(function(){
      resolve("Resposta gerada para: " + pergunta)
    }, 3000) //2000 milissegundos = 2 segundos
  })
}

// 2. Para usar o 'await', a função DEVE ter a palavra 'async' antes de ser declarada
async function iniciarChat() {
  console.log("Iniciando sistema...")
  
  //o comando 'await' trava a execução do código nesta linha até a IA responder
  let respostaUm = await consultarIA("O que é o universo?")
  console.log("IA diz: " + respostaUm)

  let respostaDois = await consultarIA("Sua segunda pergunta aqui.")
  console.log("IA diz: " + respostaDois)
}

// 3. Executando o sistema
iniciarChat()