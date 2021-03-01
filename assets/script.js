const startButton = document.getElementById('start')
const clockTime = document.getElementById('clock-time')
const quizText = document.getElementById('quiztext')
startButton.addEventListener('click', kickoff)


 function clock() {
    let time = 12;
    let countdown = setInterval(() => {
        if (time >= 10) {
            clockTime.innerText = time;
            console.log(time);
            time--;
        } else if (time <= 9 && time != 0) {
            clockTime.innerText = '0'+ time;
            console.log(time);
            time--;        
        } else {
            time = 0;
            clockTime.innerText = '00';
            console.log('fuck');
            clearInterval(countdown);
            }
    }, 1000)
}

function kickoff() {
    startButton.style.visibility='hidden';
    quizText.innerText = 'You will have 60 seconds to answer some questions... \nWrong answers will cost you time and self-esteem. \nGood luck!';
    setTimeout(clock, 1000);
    clearTimeout(kickoff);
}



// function scorekeeper()

// function quiz()

