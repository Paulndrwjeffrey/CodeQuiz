const startButton = document.getElementById('start')
const clockTime = document.getElementById('clock-time')
const quizText = document.getElementById('quiztext')
const scores = document.getElementById('scoreboard')
const answerButtons = document.getElementsByClassName('answerbuttons')
const aButton = document.getElementById('abutton')
const bButton = document.getElementById('bbutton')
let score = 0
var userAnswer = ''
var scoreboard = []
var indexNumber = 0
var time = 60

const questions = [
    {
        question: 'The toBeach() method takes you to your closest body of water.',            
        answer: 'b'
    },
    {
        question: '"&&" is a logical operator meaning "neither"', 
        answer: 'b'
    },
    {
        question: '[] == ![]', 
        answer: 'a'
    },
    {
        question: 'undefined is more of a philosophy than a condition', 
        answer: 'b'
    },
    {
        question: '!!"false" === !!"true"', 
        answer: 'a'
    },
    {
        question: '"NAN" means "NOT A NUMBER', 
        answer: 'a'
    },
    {
        question: 'Javascript uses dynamic typing.',
        answer: 'a'
    },
    {
        question: 'It\'s happening again.',
        answer: 'a'
    },
    {
        question: '"++" means double-plus',
        answer: 'b'
    },
    {
        question: 'Thunder only happen when it\'s raining',
        answer: 'b'
    },
]
// So you know the answers..
console.log(questions);

// Randomizes question order
let randomQuestions = questions.sort(() => Math.random() - .5)
console.log(randomQuestions);

// First question
function quizStart() {
    aButton.style.visibility = 'visible';
    bButton.style.visibility = 'visible';
    quizText.innerText = questions[indexNumber].question;
} 


function nextQuest() {
    ++indexNumber;
    if (indexNumber < questions.length) {
        quizText.innerText = questions[indexNumber].question; 
    } else {
        
    }
} 

function clock() {
    let countdown = setInterval(() => {
        if (time >= 10) {
            clockTime.innerText = time;
            time--;
        } else if (time <= 9 && time >= 0) {
            clockTime.innerText = '0'+ time;
            time--;     
        } else if (time <= 0) {
            clockTime.innerText = '00';
            gameOver();
            clearInterval(countdown);
        }
    }, 1000) 
}

function itsA() {
    let userAnswer = 'a'
    if (userAnswer == questions[indexNumber].answer) {
       ++score;
       correct();
    } else {
       wrong();
    }
   }


function itsB() {
    let userAnswer = 'b'
    if (userAnswer == questions[indexNumber].answer) {
       ++score;
       correct();
    } else {
       wrong();
    }
   }

function correct() {
    quizText.innerText = 'CORRECT!';
    setTimeout(nextQuest, 750);
}

function wrong() {
    quizText.innerText = 'WRONG!';
    console.log(time);
    time -= 20;
    console.log(time);
    setTimeout(nextQuest, 750);
}

function kickoff() {
    startButton.style.display = 'none';
    quizText.innerText = 'You have 60 seconds to answer some questions... \nWrong answers will cost you time. \nGood luck!';
    setTimeout(clock, 3000);
    setTimeout(quizStart, 3000);

} 
function writeScore() {
    let yrScore = (score * 666);
    let inits = prompt('PLEASE ENTER YR INITIALS');
    scoreboard.push(inits + ' - ' + yrScore);
    console.log(scoreboard);
    printScore();
}

function printScore() {
   quizText.innerText = 'scores ' + scoreboard;
}


function gameOver() {
    quizText.innerText = 'GAME OVER';
    aButton.style.visibility = 'hidden';
    bButton.style.visibility = 'hidden';
    startButton.style.display = 'unset';
    startButton.innerText = '-RESTART-';
    indexNumber = 0;
    time = 60;
    console.log(time);
    setTimeout(writeScore, 1000);
} 

startButton.addEventListener('click', kickoff)
aButton.addEventListener('click', itsA)
bButton.addEventListener('click', itsB)
scores.addEventListener('click', printScore)
