const displayMinutes = document.querySelector('.min');
const displaySeconds = document.querySelector('.sec');
const startStopBtn = document.querySelector('.start-stop');


function pauseTimer() {
  startStopBtn.setAttribute('data-mode', 'active');
  startStopBtn.textContent = 'Pause';
}

function startTimer() {
    startStopBtn.setAttribute('data-mode', 'inactive');
    startStopBtn.textContent = 'Start';
}

function startStopTimer() {
  let sec = displaySeconds.textContent;
  let min = displayMinutes.textContent;
  
  const timerMode = startStopBtn.getAttribute(['data-mode']);
  (timerMode === 'inactive') ? pauseTimer() : startTimer();
  
  
  setInterval(() => {
    sec--;

    if (sec < 0) {
      sec = 59;
      min--;
    }

    if (sec >= 0 && sec < 10) {
      sec = "0" + sec;
    }
    
    displaySeconds.textContent = sec;
    displayMinutes.textContent = min;
  }, 1000);

}

startStopBtn.addEventListener('click', startStopTimer);