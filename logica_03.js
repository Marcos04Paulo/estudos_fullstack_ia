function verificandoParOuImpar(numero){
  if(numero % 2 === 0){
    console.log("O numero " + numero + " é Par")
  }else{
    console.log("O numero " + numero + " é Impar")
  }
}
verificandoParOuImpar(15)
verificandoParOuImpar(42)
verificandoParOuImpar(7)
verificandoParOuImpar(100)


function calcularMedia(nota1, nota2){
  let media = (nota1 + nota2) / 2
  console.log("A média é: " + media)
}
calcularMedia(8, 6)
calcularMedia(10, 9)