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
};

//functionality when correct answer has been selected
const handleCorrect = () => {
    correct.style.display = 'block'; 
    setTimeout(()=>correct.style.display = 'none', 1000);
};

//functionality when incorrect answer has been selected
const handleIncorrect = () => {
    time -=10;
    clock.innerHTML = time;
    incorrect.style.display = 'block'; 
    setTimeout(()=>incorrect.style.display = 'none', 1000);
};
//create function for answering the questions
const handleAnswers = answer => {
    answer==questions[qI].C ? handleCorrect() : handleIncorrect();
    qI++;
    handleQuestions();
};

//create function for pulling in the questions to webpage
const handleQuestions = () => {
    if(qI == questions.length) return endQuiz();

    let { Q, A } = questions[qI];
    main.innerHTML = `<h1>${Q}</h1><div id="answers"></div>`;

    A.forEach(ans => {
        answers.innerHTML += `<button onclick = "handleAnswers('${ans}')" class="answers">${ans}</button>`
    });
};

const handleInitials = () => {
    let name = document.getElementById('initials').value
    if(!name) return alert('Need intials')

    let store = localStorage.scores ? JSON.parse(localStorage.scores) : [];
    store.push({initials:name,score:time});
    localStorage.scores = JSON.stringify(store);
    window.location = 'highscore.html'
};

//If all questions have been answered and time is left on the clock. Need to end quiz and score
const endQuiz = () => {
    clearInterval(clockId);
    main.innerHTML = `
        <div id="initialsDiv">
            <h1>All Done!!!</h1>
            <h4>Your score: ${time}</h4>
            <h4>Enter your initials:</h4> 
            <input id='initials' placeholder="AAA"></input>
            <br>
            <button onclick="handleInitials()">Done</button>
        </div>
    `;
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
