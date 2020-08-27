let score = 0
let playerName = ''
let displayRules = false

function compare (userChoice) {
  let pcChoice = Math.random()
  if (pcChoice < 0.34) {
    pcChoice = 0
    document.getElementById("bot").innerHTML = `<i class="far fa-hand-rock fa-10x"></i>`
  } else if (pcChoice <= 0.67) {
    pcChoice = 1
    document.getElementById("bot").innerHTML = `<i class="far fa-hand-paper fa-10x"></i>`
  } else {
    pcChoice = 2
    document.getElementById("bot").innerHTML = `<i class="far fa-hand-scissors fa-10x"></i>`
  }

  if (userChoice === pcChoice) document.getElementById("result").innerText = `It's a tie`
  else if (userChoice === 0) {
    if (pcChoice === 1) handleLoss()
    else handleWin()
  }
  else if (userChoice === 1) {
    if (pcChoice === 2) handleLoss()
    else handleWin()
  }
  else if (userChoice === 2) {
    if (pcChoice === 0) handleLoss()
    else handleWin()
  }
  document.getElementById("score").innerText = score
}

function handleWin () {
  document.getElementById("result").innerText = `${playerName} won`
  score = score + 1
}

function handleLoss () {
  document.getElementById("result").innerText = `Bot won`
  if (score > 0) score = score - 1
}

function openModal () {
  document.getElementById("namePrompt").classList.add("is-active")
}

function startGame (guest) {
  if (guest) {
    playerName = 'Guest'
  } else {
    playerName = document.getElementById("playerName").value
    if (playerName.length < 1) playerName = 'Guest'
  }
  document.getElementById("namePrompt").classList.remove("is-active")
  document.getElementById("player").innerText = playerName
}
