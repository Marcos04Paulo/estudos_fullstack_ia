let alunos = ["Marcos", "Ana", "Carlos", "Sofia"];
let notas = [5, 8.5, 4, 9.5];

for(i = 0; i < alunos.length; i++){
  console.log("Aluno(a): " + alunos[i] + " | Nota: " + notas[i])

  if(notas[i] >= 7){
    console.log("Resultado: Aprovado.")
  }else if(notas[i] <=6.9 && notas[i] >= 5){
    console.log("Resultado: Recuperação.")
  }else{
    console.log("Resultado: Reprovado.")
  }
}