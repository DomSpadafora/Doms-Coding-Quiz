var qI = 0;
var clockId;
var time = 60;
var score = 0;

//need to stop time and setup high score

const startClock = () => {
    time--;

    if (time < 1) {
        clearInterval(clockId);
        time = 0;
    }

    clock.innerHTML = time;
}

//functionality when correct answer has been selected
const handleCorrect = () => {
    console.log('Correct!!!!');
    correct.style.display = 'block'; 
    setTimeout(()=>correct.style.display = 'none', 1000)
    qI++;
    handleQuestions();
}

//functionality when incorrect answer has been selected
const handleIncorrect = () => {
    console.log('Incorrect!!!')
    time -=10;
    incorrect.style.display = 'block'; 
    setTimeout(()=>incorrect.style.display = 'none', 1000)
    qI++;
    handleQuestions();
}
//create function for answering the questions
const handleAnswers = answer => {
    answer==questions[qI].C ? handleCorrect() : handleIncorrect();
};

//create function for pulling in the questions to webpage
const handleQuestions = () => {
    let { Q, A } = questions[qI];
    main.innerHTML = `<h1>${Q}</h1><div id="answers"></div>`;

    A.forEach(ans => {
        answers.innerHTML += `<button onclick = "handleAnswers('${ans}')" class="answers">${ans}</button>`
    });
};


//If all questions have been answered and time is left on the clock.???
const endQuiz = () => {
    console.log('end of quiz')
}

const beginQuiz = () => {

    handleQuestions();
    clockId = setInterval(startClock, 1000);
};

//adding event listener
start.addEventListener('click', beginQuiz)