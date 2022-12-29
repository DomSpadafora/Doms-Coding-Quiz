var time = 5;
var clockId;

function startClock(){
    time --;

    if(time<1) {
        clearInterval(clockId);
        time=0;
    }

    clock.innerHTML=time;  
}

const beginQuiz = ()=>{
    console.log('Hello world!!!') ;

    clockId = setInterval(startClock, 1000);
};

start.addEventListener('click',beginQuiz)