let nomeAluno = "Marcos"
let notaFinal = 8.0

console.log("anlisando o aluno " + nomeAluno)
console.log("Nota Obtida " + notaFinal)

if(notaFinal >= 7.0){
  console.log("Resultado: Aprovado.")
}else if(notaFinal <= 6.9 && notaFinal >= 5.0){
  console.log("Resultado: Recuperação")
}else{
   console.log("Resultado: Reprovado")
}