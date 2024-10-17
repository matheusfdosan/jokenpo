const choose_screen = document.querySelector(".game-wrapper")
const result_screen = document.querySelector(".result-wrapper")
const user_selection = document.querySelector(".player-selection")
const machine_selection = document.querySelector(".house-selection")
const result_box = document.querySelector(".result-box")
const game_result = document.querySelector(".game-result")
const score_label = document.querySelector(".scoreboard__box--score")
let score = 0

// se machine_play for 0, significa Pedra
// se machine_play for 1, significa Papel
// se machine_play for 2, significa Tesoura

// Essa função executa comandos para mostrar o resultado do Jokenpo
function show_result(
  user_play,
  user_color,
  machine_play,
  machine_color,
  result
) {
  user_selection.classList.remove("is-winner")
  machine_selection.classList.remove("is-winner")
  choose_screen.style.display = "none"
  game_result.innerText = result
  result_screen.style.display = "grid"
  result_box.style.display = "flex"

  if (result === "You Win!") {
    user_selection.classList.add("is-winner")
  } else if (result === "You Lose!") {
    machine_selection.classList.add("is-winner")
  } else {
    user_selection.classList.remove("is-winner")
    machine_selection.classList.remove("is-winner")
  }

  user_selection.style.backgroundImage = `url(../images/icon-${user_play}.svg)`
  user_selection.style.borderColor = user_color
  user_selection.style.boxShadow = `inset 0 6px rgba(0, 0, 0, 0.2), 0 6px ${user_color}`

  machine_selection.style.backgroundImage = `url(../images/icon-${machine_play}.svg)`
  machine_selection.style.borderColor = machine_color
  machine_selection.style.boxShadow = `inset 0 6px rgba(0, 0, 0, 0.2), 0 6px ${machine_color}`
}

document.querySelector(".btn-play-again").addEventListener("click", () => {
  choose_screen.style.display = "flex"
  result_screen.style.display = "none"
  result_box.style.display = "none"
  game_result.innerText = ""
})

document.querySelector(".btn-reset").addEventListener("click", () => {
  score = 0
  score_label.innerText = "0"
})

// rock - #dc2e4e
// paper - #4865f4
// scissors - #ec9e0e

document.querySelector(".btn-rock").addEventListener("click", () => {
  let machine_play = Math.floor(Math.random() * 3)

  if (machine_play === 0) {
    console.log("Draw")
    show_result("rock", "#dc2e4e", "rock", "#dc2e4e", "Draw")
  } else if (machine_play === 1) {
    console.log("Pedra perde para Paper. Você Perdeu!")
    show_result("rock", "#dc2e4e", "paper", "#4865f4", "You Win!")
    score += 1
    score_label.innerText = score
  } else {
    // machine_play === 2
    console.log("Pedra quebra tesoura. Você Ganhou!")
    show_result("rock", "#dc2e4e", "scissors", "#ec9e0e", "You Lose!")
    score -= 1
    score_label.innerText = score
  }
})

document.querySelector(".btn-paper").addEventListener("click", () => {
  let machine_play = Math.floor(Math.random() * 3)

  if (machine_play === 0) {
    console.log("Papel embrulha Pedra. Você Ganhou!")
    show_result("paper", "#4865f4", "rock", "#dc2e4e", "You Win!")
    score += 1
    score_label.innerText = score
  } else if (machine_play === 1) {
    console.log("Empate")
    show_result("paper", "#4865f4", "paper", "#4865f4", "Draw!")
  } else {
    // machine_play === 2
    console.log("Papel perde para a Tesoura! Você Perdeu!")
    show_result("paper", "#4865f4", "scissors", "#ec9e0e", "You Lose!")
    score -= 1
    score_label.innerText = score
  }
})

document.querySelector(".btn-scissors").addEventListener("click", () => {
  let machine_play = Math.floor(Math.random() * 3)

  if (machine_play === 0) {
    console.log("Tesoura perde para a Pedra. Você Perdeu!")
    show_result("scissors", "#ec9e0e", "rock", "#dc2e4e", "You Lose!")
    score -= 1
    score_label.innerText = score
  } else if (machine_play === 1) {
    console.log("Tesoura corta o Papel. Você Ganhou!")
    show_result("scissors", "#ec9e0e", "paper", "#4865f4", "You Win!")
    score += 1
    score_label.innerText = score
  } else {
    // machine_play === 2
    console.log("Empate")
    show_result("scissors", "#ec9e0e", "scissors", "#ec9e0e", "Draw!")
  }
})
