var time = 5;
var clockId;
var questions = [{
    q: 'What is the key word to create a variable?',
    choices: ['HTML', 'CSS', 'var'],
    correct: 'var',
},
{
    q: 'What is the key word to create a variable?',
    choices: ['HTML', 'CSS', 'var'],
    correct: 'var',
}, {}, {}];

//Iterate the array of quesions

function startClock() {
    time--;

    if (time < 1) {
        clearInterval(clockId);
        time = 0;
    }

    clock.innerHTML = time;
}

const beginQuiz = () => {
    console.log('Hello world!!!');

    clockId = setInterval(startClock, 1000);
};

start.addEventListener('click', beginQuiz)