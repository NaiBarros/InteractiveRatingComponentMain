let botao1 = document.getElementById('botao1')
let botao2 = document.getElementById('botao2')
let botao3 = document.getElementById('botao3')
let botao4 = document.getElementById('botao4')
let botao5 = document.getElementById('botao5')
let botaoSubmit = document.getElementById('submit')
let numeroSelecionado
let meuCard = document.getElementById('meuCard')

function clicarBotao(numeroBotao) {
  if (numeroBotao === 1) {
    botao1.classList.add("selecionado")
    botao2.classList.remove("selecionado")
    botao3.classList.remove("selecionado")
    botao4.classList.remove("selecionado")
    botao5.classList.remove("selecionado")
  }

  if (numeroBotao === 2) {
    botao1.classList.remove("selecionado")
    botao2.classList.add("selecionado")
    botao3.classList.remove("selecionado")
    botao4.classList.remove("selecionado")
    botao5.classList.remove("selecionado")
  }

  if (numeroBotao === 3) {
    botao1.classList.remove("selecionado")
    botao2.classList.remove("selecionado")
    botao3.classList.add("selecionado")
    botao4.classList.remove("selecionado")
    botao5.classList.remove("selecionado")
  }

  if (numeroBotao === 4) {
    botao1.classList.remove("selecionado")
    botao2.classList.remove("selecionado")
    botao3.classList.remove("selecionado")
    botao4.classList.add("selecionado")
    botao5.classList.remove("selecionado")
  }

  if (numeroBotao === 5) {
    botao1.classList.remove("selecionado")
    botao2.classList.remove("selecionado")
    botao3.classList.remove("selecionado")
    botao4.classList.remove("selecionado")
    botao5.classList.add("selecionado")
  }

  numeroSelecionado = numeroBotao
}

function enviaAvaliacao() {
  if (numeroSelecionado === null || numeroSelecionado === undefined) {

    return
  }

  meuCard.innerHTML = `
  <h1> You selected ${numeroSelecionado} out of 5 </h1> 
  `

}