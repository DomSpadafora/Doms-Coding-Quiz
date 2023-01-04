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
        endQuiz();
        
    }

    clock.innerHTML = time;
}

//functionality when correct answer has been selected
const handleCorrect = () => {
    console.log('Correct!');
    correct.style.display = 'block'; 
    setTimeout(()=>correct.style.display = 'none', 1000)
    qI++;
    // check if we answer all questions 
    if (qI >= questions.length) {
    // what happens if we have answered all the questions??
        endQuiz()
    } else {
        handleQuestions(); 
    }
}

//functionality when incorrect answer has been selected
const handleIncorrect = () => {
    console.log('Incorrect!')
    time -=10;
    incorrect.style.display = 'block'; 
    setTimeout(()=>incorrect.style.display = 'none', 1000)
    qI++;
    if (qI >= questions.length) {
        endQuiz()
    } else {
        handleQuestions(); 
    }
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
    //need to stop the clock at end of quiz

    //need to set the score
    //enter initials to log for high score
    console.log('end of quiz')
}

const beginQuiz = () => {
    //function to bring in questions and answers to page
    handleQuestions();
    //begins the clock
    clockId = setInterval(startClock, 1000);
};

//adding event listener
start.addEventListener('click', beginQuiz)