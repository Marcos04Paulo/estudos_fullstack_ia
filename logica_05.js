let aluno = {
  nome: "Marcos",
  idade: 38,
  curso: "FullStack",
  notas: [8, 7.5, 9],
  ativo: true
};

console.log("Nome do aluno: " + aluno.nome)
console.log("Curso matriculado: " + aluno.curso)
console.log("Primeira Nota: " + aluno.notas[0]) // Observe que neste, navegamos dentro o objeto e no array dentro do objeto.

if(aluno.ativo === true){
  console.log("O cadastro do aluno está ativo")
}else{
  console.log("O cadastro do aluno está inativo")
}