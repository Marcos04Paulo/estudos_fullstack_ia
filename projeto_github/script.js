const search = document.getElementById("search")
const btn = document.getElementById("btnSearch")
const feedBack = document.getElementById("feedback")
const imgPerfil = document.getElementById("img")
const nomeUsuario = document.getElementById("userName")
const bioUsuario = document.getElementById("bio")
const repoUsuario = document.getElementById("repository")


async function buscarPerfil() {
  // 1. Adicionamos o .trim() para limpar espaços em branco acidentais.
  let searchUser = search.value.trim();

  // validação
  if(searchUser === ""){
    feedBack.innerText = "Erro: Digite um nome de usuário."
    feedBack.style.color = "red";
    return
  }

  //preparando API
  feedBack.innerText = "Buscando usuário..."
  feedBack.style.color = "#58A6FF"

  //Limpando Input
  search.value = ""

  try{
    // 2. Isolamos a URL em uma variável e a imprimimos nos console ANTES de buscar.
    let urlExata = "https://api.github.com/users/" + searchUser
    console.log("O JS está tentando acessar: ", urlExata)
    // let resposta = await fetch("[https://api.github.com/users/](https://api.github.com/users/)" + searchUser);

    // 3. Passamos a variável limpa para o fetch
    let resposta = await fetch(urlExata)

    if(resposta.status === 404){
      throw new Error("Usuário não encontrado.")
    }

    let dados = await resposta.json()
    console.log(dados)

    feedBack.innerText = "Usuário encontrado!"
    feedBack.style.color = "#238636"

    // iteração com objeto
    imgPerfil.src = dados.avatar_url
    nomeUsuario.innerText = dados.name || "Nome não informado"
    bioUsuario.innerText = dados.bio || "Este usuário não possui biografia."
    repoUsuario.innerText = dados.public_repos + " repositórios públicos"


  }catch(erro){
    feedBack.innerText = erro.message
    feedBack.style.color = "red"
  }
}
btn.addEventListener("click", buscarPerfil);