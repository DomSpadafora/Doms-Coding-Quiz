var time = 5;
var clockId;
//Create the 4 questions for the quiz.
var questions = [{
    q: 'What is the key word to create a variable?',
    choices: ['HTML', 'CSS', 'var', 'flexbox'],
    correct: 'var',
},
{
    q: 'Which coding language is considered the foundation/structure of a webpage?',
    choices: ['HTML', 'CSS', 'JavaScript', 'Python'],
    correct: 'HTML',
}, 
{
    q: 'A container object that holds a fixed number of values of a single type is?',
    choices: ['array', 'object', 'string', 'boolean'],
    correct: 'array',
}, 
{
    q: 'Which primitive type is an expression that evaluates to be either true or false?',
    choices: ['number', 'string', 'boolean', 'undefined'],
    correct: 'boolean',
}];

//Iterate the array of quesions.

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