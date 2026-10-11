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
  
  if(textoDigitado === ""){
    resposta.innerText = "Erro: O campo pergunta não pode estar vazio."
    resposta.style.color = "red"
  }else{
    resposta.innerText = "IA processando..."
    resposta.style.color = "blue"
  }

  let respostaServidor = await simuladorRespostaIA(textoDigitado)

  resposta.innerText = respostaServidor
  resposta.style.color = "green"
}

btn.addEventListener("click", enviarPrompt)