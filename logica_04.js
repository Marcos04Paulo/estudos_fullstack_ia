function multiplicar(n1, n2){
  let calculo = n1 * n2
  return calculo
}

let resultadoMultiplacacao = multiplicar(5, 4);
console.log("O resultado retornado é: " + resultadoMultiplacacao);


function calcularMedia(nota1, nota2){
  let result = (nota1 + nota2) / 2
  return result
}

function verificarAprovacao(media){
  if(media >= 7){
    return "Aprovado"
  }else{
    return "Reprovado"
  }
}

let minhaMedia = calcularMedia(8,6)
let minhaSituacao = verificarAprovacao(minhaMedia)

console.log("Média final: " + minhaMedia);
console.log("Situação final: " + minhaSituacao);