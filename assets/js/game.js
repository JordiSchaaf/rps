let score = 0
let indicator = 1
let playerName = ''
let gameMode = 0
let botScore = 0

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
}

function handleWin () {
  document.getElementById("result").innerText = `${playerName} won`
  score++
  if (gameMode === 0) {
    document.getElementById("score").innerText = score
  } else if (gameMode === 1) {
    document.getElementById(`score${indicator}`).innerHTML = '<i class="far fa-check-circle"></i>'
    indicator++
    if (score === 3) finishGame(playerName)
  }
}

function handleLoss () {
  document.getElementById("result").innerText = `Bot won`
  if (gameMode === 0) {
    if (score > 0) score--
    document.getElementById("score").innerText = score
  } else if (gameMode === 1) {
    botScore++
    document.getElementById(`score${indicator}`).innerHTML = '<i class="far fa-times-circle"></i>'
    indicator++
    if (botScore === 3) finishGame('Bot')
  }
}

function finishGame (winner) {
  document.getElementById("finishGame").classList.add("is-active")
  document.getElementById("resultHeader").innerText = `${winner === 'Bot' ? 'Try again!' : 'Congratulations!'}`
  document.getElementById("resultText").innerText = `${winner} won the game`
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
  startEndless()
}

function playAgain () {
  document.getElementById("finishGame").classList.remove("is-active")
  startBOF()
}

function startEndless () {
  document.getElementById('endless').style.color = "#e60000"
  document.getElementById('bof').style.color = "#000000"
  document.getElementById('scoreField').innerHTML = 'Score: <span id="score">0</span>'
  gameMode = 0
  score = 0
}

function startBOF () {
  document.getElementById('endless').style.color = "#000000"
  document.getElementById('bof').style.color = "#e60000"
  document.getElementById('scoreField').innerHTML = `
    <span id="score1"><i class="far fa-circle"></i></span>
    <span id="score2"><i class="far fa-circle"></i></span>
    <span id="score3"><i class="far fa-circle"></i></span>
    <span id="score4"><i class="far fa-circle"></i></span>
    <span id="score5"><i class="far fa-circle"></i></span>
  `
  gameMode = 1
  score = 0
  botScore = 0
  indicator = 1
}