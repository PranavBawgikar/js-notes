let score = JSON.parse(localStorage.getItem('score')) // Converting back to JavaScript object from JSON

if(!score) { // is equal to score === null
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    }
}

updateScoreElement()

function playGame(playerMove) {
    const computerMove = pickComputerMove()
    let result = ''
    
    if(playerMove === 'Scissors'){
        if(computerMove === 'Rock') {
            result = 'You Lose.'
        } else if (computerMove === 'Paper') {
            result = 'You Win.'
        } else {
            result = 'Tie.'
        }
    } else if(playerMove === 'Paper') {
        if(computerMove === 'Rock') {
            result = 'You Win.'
        } else if (computerMove === 'Scissors') {
            result = 'You Lose.'
        } else {
            result = 'Tie.'
        }
    } else if(playerMove === 'Rock') {
        if(computerMove === 'Paper') {
            result = 'You Lose.'
        } else if (computerMove === 'Scissors') {
            result = 'You Win.'
        } else {
            result = 'Tie.'
        }
    }

    if(result === 'You Win.') {
        score.wins += 1
    } else if(result === 'You Lose.') {
        score.losses += 1
    } else {
        score.ties += 1
    }

    // Saving the score on localStorage so that every time the page refreshes, the score doesn't refresh
    localStorage.setItem('score', JSON.stringify(score)) // Converting the object to string since the 'setitem' method only accepts strings

    updateScoreElement()

    document.querySelector('.result').innerHTML = result
    document.querySelector('.moves').innerHTML = `You picked ${playerMove}.\nComputer picked ${computerMove}.`
}

function updateScoreElement() {
    document.querySelector('.gameScore').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

function pickComputerMove() {
    const randomNumber = Math.random()

    let computerMove = ''

    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper'
    } else {
        computerMove = 'Scissors'
    }
    return computerMove
}