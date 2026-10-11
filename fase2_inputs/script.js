function simuladorRespostaIA(textoDoUsuario){
  return new Promise((resolve) => {
    setTimeout(function(){
      resolve("Processamento concluido. Você perguntou: '" + textoDoUsuario + "'.")
    }, 2500)
  })
}

const pergunta = document.getElementById("campoPergunta")
const btn = document.getElementById("btnEnviar")
let resposta = document.getElementById("areaResposta")

async function enviarPrompt() {
  let textoDigitado = pergunta.value
  
  // 1. Cláusula de guarda (validação)
  if(textoDigitado === ""){
    resposta.innerText = "Erro: O campo pergunta não pode estar vazio."
    resposta.style.color = "red"
    return //O return vazio encerra a função AQUI. nada abaixo desta linha será executado.
  }//else{
  //   resposta.innerText = "IA processando..."
  //   resposta.style.color = "blue"
  // }
  // 2. Limpando o campo (Minha Observação 2)
  pergunta.value = "";

  // 3. Caminho feliz (procesamento assíncrono)
  resposta.innerText = "IA processando..."
  resposta.style.color = "blue"

  let respostaServidor = await simuladorRespostaIA(textoDigitado)

  resposta.innerText = respostaServidor
  resposta.style.color = "green"
}

btn.addEventListener("click", enviarPrompt)