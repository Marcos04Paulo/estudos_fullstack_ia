// 1. Base de dados Simulada (Array de Objetos)
let candidatos = [
  {nome: "Marcos", nota: 8.5, ativo: true},
  {nome: "Ana", nota: 6, ativo: true},
  {nome: "Carlos", nota: 9.2, ativo: false},
  {nome: "Sofia", nota: 7.5, ativo: true}
]

// 2. Simulador de Servidor (Não altere esta função)
function simularEnvio(dados){
  console.log("Servidor: Processando envio de dados...")
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve("Servidor: Os candidatos aprovados foram registrados com sucesso no banco de dados da IA.")
    }, 3000) //3 segundos de atraso
  })
}

// verificar aprovados
function filtrarAprovados(lista){
  return lista.filter(function (item){
    return item.ativo === true && item.nota >= 7
  })
}

// aplicando async na triagem
async function executarTriagem() {
  let aprovados = filtrarAprovados(candidatos)
  console.log(aprovados)
  
  let respostaServidor = await simularEnvio(aprovados)
  console.log(respostaServidor)
}

executarTriagem()