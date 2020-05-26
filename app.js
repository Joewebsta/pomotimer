const displayMinutes = document.querySelector('.min');
const displaySeconds = document.querySelector('.sec');
const startStopBtn = document.querySelector('.start-stop');

function startStopTimer() {
  let sec = displaySeconds.textContent;
  let min = displayMinutes.textContent;
  
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