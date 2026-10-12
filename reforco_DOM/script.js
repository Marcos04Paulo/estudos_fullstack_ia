// Simulador de catraca e banco de dados
function simularAutenticador(){
  return new Promise(function(resolve){
    setTimeout(function(){
      // O servidor devolve um objeto após 2seg.
      resolve({autorizado: true, nome:"Marcos"})
    }, 2000)
  })
}

const visor = document.getElementById("visor")
const btn = document.getElementById("btnDesbloq")

async function verificarAcesso() {
  visor.innerText = "Verificando Credenciais..."
  visor.style.color = "orange"
  
  let respostaServidor = await simularAutenticador();

  if(respostaServidor.autorizado === true){
    visor.innerText = "Acesso Liberado"
    visor.style.color = "green"
  }else{
    visor.innerText = "Acesso Negado"
    visor.style.color = "red"
  }
}

btn.addEventListener("click", verificarAcesso)