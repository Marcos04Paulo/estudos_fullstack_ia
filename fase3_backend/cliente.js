// 1. Captura tag HTML (DOM)
const btn = document.getElementById("btnConecta")
const visor = document.getElementById("visor")

// 2. função assíncrona (Conecta o servido com o cliente)
async function conectaCliente() {
  
  try{

    let resposta = await fetch("http://127.0.0.1:8000/")

    let dados = await resposta.json()
    console.log(dados)

    visor.innerText = dados.mensagem
    visor.style.color = "green"

  }catch(erro){
    visor.innerText = erro.message
    visor.style.color = "red"
  }

}
btn.addEventListener("click", conectaCliente);