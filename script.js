let qtdAtual = Number(prompt("Digite a quantidade atual"))
let qtdMax = Number(prompt("Digite a quantidade máxima"))
let qtdMin = Number(prompt("Digite a quantidade mínima"))
let qtdMedia = (qtdMax+qtdMin)/2

if (qtdAtual>=qtdMedia) {
    alert("Não efetuar compra , "+qtdMedia)
}else{
    alert("Efetuar compra, "+qtdMedia)
}