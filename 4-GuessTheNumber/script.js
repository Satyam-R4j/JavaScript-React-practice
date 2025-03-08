let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame)
{
    submit.addEventListener('click', function (e)
    {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess)
{
    if (isNaN(guess) ||guess < 1 || guess > 100)
    {
        alert('Please enter a valid number between 1 and 100')
    }
    else
    {
        prevGuess.push(guess)
        if (numGuess === 10)
        {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }
        else
        {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
    if (guess === randomNumber)
    {
        displayMessage(`You guessed it Right`)
        endGame()
    }
    else if (guess < randomNumber)
    {
        displayMessage(`Number is TOO Low`)
    }
    else
    {
        displayMessage(`Number is TOO High`)
    }
}

function displayGuess(guess)
{
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${10 - numGuess + 1} guesses remaining`
}

function displayMessage(message)
{
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame()
{
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame()
{
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function ()
    {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTM = ''
        remaining.innerHTML = `${10} guesses remaining`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML = ''
        playGame = true
    })
}
