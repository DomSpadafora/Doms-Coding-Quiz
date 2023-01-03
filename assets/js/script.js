var qI = 0;
var clockId;
var time = 60;
var score = 0;

//need to stop time and setup high score section

const startClock = () => {
    time--;

    if (time < 1) {
        clearInterval(clockId);
        time = 0;
    }

    clock.innerHTML = time;
}

const handleCorrect = () => {
    console.log('Correct!!!!')
    score +=25;
    correct.style.display = 'block'; 
    setTimeout(()=>correct.style.display = 'none', 1000)
    qI++;
    handleQuestions();
}

const handleIncorrect = () => {
    console.log('Incorrect!!!')
    time -=10;
    incorrect.style.display = 'block'; 
    setTimeout(()=>incorrect.style.display = 'none', 1000)
    qI++;
    handleQuestions();
}

const handleAnswers = answer => {
    answer==questions[qI].C ? handleCorrect() : handleIncorrect();
};

const handleQuestions = () => {
    let { Q, A } = questions[qI];
    main.innerHTML = `<h1>${Q}</h1><div id="answers"></div>`;

    A.forEach(ans => {
        answers.innerHTML += `<button onclick = "handleAnswers('${ans}')" class="answers">${ans}</button>`
    });
};

const beginQuiz = () => {
    
    
    handleQuestions();
    clockId = setInterval(startClock, 1000);
};

start.addEventListener('click', beginQuiz)