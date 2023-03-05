//Variaveis para alterar as telas
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

//Função para alterar as telas
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

//Variaveis dos botões
const btnFirstTry = document.querySelector("#btnFirstTry")
const btnTryAgainJames = document.querySelector("#btnTryAgainJames")

//Eventos dos botões
btnFirstTry.addEventListener("click", handleClickFirstMessage)
btnTryAgainJames.addEventListener("click", handleClickNewMessage)

//Funções dos botões
function handleClickFirstMessage(event) {
  event.preventDefault()
  toggleScreen()
}
function handleClickNewMessage() {
  let phrase = phrases[Math.floor(Math.random() * phrases.length)]
  document.querySelector(".cookieMessage").textContent = phrase
  toggleScreen()
}

let phrases = [
  "As coisas funcionam melhor para aqueles que fazem o melhor de como as coisas funcionam!",
  "Se você não valoriza seu tempo, nem os outros irão. Pare de doar seu tempo e talentos!",
  "Amanha é um dia melhor que hoje.",
  "O ser capaz mora perto da necessidade.",
  "Estar decidido(a), acima de qualquer coisa, é o segredo do êxito.",
  "Inovação distingue um líder de um seguidor.",
  "Capacidade de saber cada vez mais sobre cada vez menos, até saber tudo sobre nada.",
  "Bem-aventurados aqueles que podem dar sem lembrar e levar sem esquecer.",
  "Não deixe o que você não pode fazer interferir com o que você pode fazer.",
  "Não levante sua voz, melhore seu argumento!",
  "A falha é o tempero que dá ao sucesso o seu.",
]
