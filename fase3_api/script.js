let btn = document.getElementById("btnConselho")
let txt = document.getElementById("txtConselho")

async function buscarConselho() {
  try{
    // 1. Feedback visual
    txt.innerText = "Conectando ao servidor externo..."
    txt.style.color = "blue"
    
    // 2. Fazendo a requisição real pela internet (O pedido para o garçom (API))
    // Fetch() busca os dados na url fornecida. Como depende de rede, usamos await
    let resposta = await fetch("https://api.adviceslip.com/advice");

    // 3. Convertendo a resposta bruta em JSON (linguagem que o JS entende)
    // Extrair o JSON do pacote de rede também demora milissegundos, então também exige await.
    let dados = await resposta.json()

    // 4. Exibindo os dados na tela.
    // A API devolve um objeto estruturado assim: {slip: {id: 1, advice: "texto"}}
    txt.innerText = dados.slip.advice;
    txt.style.color = "black"
  }catch(erro){
  txt.innerText = "Falha na conexão com o servidor."
  txt.style.color = "red"
  }
}

btn.addEventListener("click", buscarConselho)