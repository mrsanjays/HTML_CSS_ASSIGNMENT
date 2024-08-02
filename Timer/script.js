let timer;
let isRunning = false;
let sec = 0;
let min=0;
let hour = 0;
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const startButton = document.getElementById('startButton');

const resetButton = document.getElementById('resetButton');

function updateTimerDisplay(hours,minutes, seconds) {

    hoursSpan.innerText = String(hours).padStart(2,'0');
    minutesSpan.innerText = String(minutes).padStart(2, '0');
    secondsSpan.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    

    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        startButton.textContent = 'Start';
        return;
    }

    timer = setInterval(() => {
        
        sec++;

        if (sec>59) {
            sec=0;
            min++;

            
        }
        if(min>59){
            hour++;
            min = 0;
        }
        
   

        updateTimerDisplay(hour,min, sec);

    }, 1000);

    isRunning = true;
    startButton.textContent = 'Stop';
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', ()=>{
    min=0;
    sec=0;
    updateTimerDisplay(hour,min,sec);
    clearInterval(timer)
});

