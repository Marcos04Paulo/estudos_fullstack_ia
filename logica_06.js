let users = [
  {nome: "Marcos", cargo: "Desenvolverdor", ativo: true},
  {nome: "Ana", cargo: "Designer", ativo: false},
  {cargo: "Gerente", ativo: true, nome: "Carlos"}
]

// console.log("O primeiro user é: " + users[0].nome);

for(i=0; i < users.length; i++){
  if(users[i].ativo === true){
    console.log(users[i].nome +  " tem permissão de acesso.")
  }else{
    console.log(users[i].nome +  " está BLOQUEADO.")
  }
}