const startButton = document.getElementById('start')
const clockTime = document.getElementById('clock-time')
const quizText = document.getElementById('quiztext')
const scores = document.getElementById('scoreboard')
const aButtons = document.getElementsByClassName('answerbutton')
const trueButton = document.getElementById('truebutton')
const falseButton = document.getElementById('falsebutton')
let score = 0

const questions = [
    {question: 'Javascript is fun.', answer: false },
    {question: 'This quiz is dope.', answer: false },
    {question: 'Curtis Mayfield\'s face should be on the 100 dollar bill.', answer: false },
    {question: 'Paddington loves marmalade.', answer: true },
    {question: 'La la means I love you.', answer: true },
    {question: 'Thunder only happens when it\'s raining.', answer: false }
]

function quizStart() {
    aButtons[0].style.visibility = 'visible';
    aButtons[1].style.visibility = 'visible';
    quizText.innerText = questions[0].question; 
}

function evaluate() {

}

function clock() {
    let time = 60;
    let countdown = setInterval(() => {
        if (time >= 10) {
            clockTime.innerText = time;
            time--;
        } else if (time <= 9 && time != 0) {
            clockTime.innerText = '0'+ time;
            time--;        
        } else {
             time = 0;
            clockTime.innerText = '00';
            clearInterval(countdown);
//show score? ---->
        }
    }, 1000)
}
    
function kickoff() {
    startButton.style.display = 'none';
    quizText.innerText = 'You will have 60 seconds to answer some questions... \nWrong answers will cost you time and self-esteem. \nGood luck!';
    setTimeout(clock, 3000);
    setTimeout(quizStart, 5000);
}

startButton.addEventListener('click', kickoff)
trueButton.addEventListener('click', evaluate)
falseButton.addEventListener('click', evaluate)