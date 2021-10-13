const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timer = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'DarkCyan', 'Aqua', 'SteelBlue', 'Fuchsia', 'Indigo']

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')

})

timeList.addEventListener('click', (event) => {

    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        startGame()
    }


})

board.addEventListener('click', (event) => {

    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircus()
    }

})


function startGame() {

    screens[1].classList.add('up')
    setInterval(decreessTime, 1000)
    createRandomCircus()
    setTime(time)

}

function decreessTime() {

    if (time === 0) {
        finishGame()
    } else {

        let current = --time;

        setTime(current)
    } 
        
}

function setTime(value) {

    if (value < 10) {
        value = `0${value}`
    }

    timer.innerHTML = `00:${value}`
}

function finishGame() {

    board.innerHTML = `<H1> Cчет: <span class="primary">${score} </span></H1>`
    timer.parentNode.classList.add('hide')

}

function createRandomCircus() {

    const circle = document.createElement('div')
    const size = getRandomNumber(10, 60)

    const {width, height} = board.getBoundingClientRect()

    const x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`

    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    circle.style.background = colors[getRandomNumber(0, colors.length - 1)]    

    board.append(circle)

}

function getRandomNumber(min, max) {

    return Math.round(Math.random()*(max - min) + min)

}


