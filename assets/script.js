const startButton = document.getElementById('start')
const clockTime = document.getElementById('clock-time')
const quizText = document.getElementById('quiztext')
const scores = document.getElementById('scoreboard')
const aButtons = document.getElementsByClassName('answerbutton')
const trueButton = document.getElementById('truebutton')
const falseButton = document.getElementById('falsebutton')
let score = 0
var time = 60
let indexNumber = 0
let userAnswer = Boolean(undefined)


const questions = [
    {question: 'blepity blep blep bloop', answer: false },
    {question: 'zweeee bop bop bop bop bada', answer: false },
    {question: 'yooooo yooooo ixnay hohummity', answer: true },
    {question: 'ooopum doopum beeeeeep', answer: true },
    {question: 'beeep beeep booop bepede boop', answer: true },
    {question: 'ummmm bah wah! ummm bah hah hah!', answer: false }
]

// randomizes question order
let randomQuestions = questions.sort(() => Math.random() - .5)

function quizStart() {
    aButtons[0].style.visibility = 'visible';
    aButtons[1].style.visibility = 'visible';
    quizText.innerText = questions[0].question; 
}

function nextQuest() {
        ++indexNumber;
        quizText.innerText = questions[indexNumber].question;
}
   
function truthin() {
    let userAnswer = true;
    console.log(userAnswer);
    judge();
    nextQuest();
}

function falsin() {
    let userAnswer = false;
    console.log('uhhh... ' + userAnswer);
    judge();
    nextQuest();
}

function judge() {
    if (questions[indexNumber].answer === userAnswer) {
        console.log('judge says ' + questions[indexNumber].answer);
        console.log('user guess: ' + userAnswer);
        ++score;
        console.log('score: ' + score);
    } else {
        console.log('judge says ' + questions[indexNumber].answer);
        console.log('user guess: ' + userAnswer);
        let time = (time - 10);
        console.log('time: ' + time);
    }
}

function clock() {
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
    quizText.innerText = 'You will have 60 seconds to answer some questions... \nWrong answers will cost you time. \nGood luck!';
    setTimeout(clock, 3000);
    setTimeout(quizStart, 5000);
}

startButton.addEventListener('click', kickoff)
trueButton.addEventListener('click', truthin)
falseButton.addEventListener('click', falsin)



