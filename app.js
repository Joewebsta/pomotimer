const displayMinutes = document.querySelector('.min');
const displaySeconds = document.querySelector('.sec');
const startPauseBtn = document.querySelector('.start-pause');
var intervalId;

function pauseTimer() {
  startPauseBtn.setAttribute('data-mode', 'inactive');
  startPauseBtn.textContent = 'Start';
}

function startTimer() {
  startPauseBtn.setAttribute('data-mode', 'active');
  startPauseBtn.textContent = 'Pause';
}

function toggleTimer() {
  let sec = displaySeconds.textContent;
  let min = displayMinutes.textContent;
  const timerMode = startPauseBtn.getAttribute(['data-mode']);

  if (timerMode === 'inactive') {
    
    startTimer(); 

    intervalId = setInterval(() => {
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
    
  } else {
    clearInterval(intervalId);
    pauseTimer();
  }
}

startPauseBtn.addEventListener('click', toggleTimer);