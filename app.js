const displayMinutes = document.querySelector('.min');
const displaySeconds = document.querySelector('.sec');
const startPauseBtn = document.querySelector('.start-pause');
const resetBtn = document.querySelector('.reset');
let min = displayMinutes.textContent;
let sec = displaySeconds.textContent;
let timerIntervalId;

function updateStartPauseBtn() {
  const timerMode = startPauseBtn.dataset.mode;
  
  if( timerMode === 'active') {
    startPauseBtn.dataset.mode = 'inactive';
    startPauseBtn.textContent = 'Start';
  } else {
    startPauseBtn.dataset.mode = 'active';
    startPauseBtn.textContent = 'Pause';
  }
}

function disableResetBtn(state) {
  resetBtn.disabled = state;
}

function startTimer() {
  
  timerIntervalId = setInterval(updateTimerText, 1000);
  updateStartPauseBtn(); 
  disableResetBtn(false);
}

function pauseTimer() {
  clearInterval(timerIntervalId);
  updateStartPauseBtn();
}

function resetTimer() {
  const timerMode = startPauseBtn.dataset.mode;

  clearInterval(timerIntervalId);
  sec = 0;
  min = 25;
  formatSingleDigits();
  displayTime();
  disableResetBtn(true);
}

function displayTime() {
  displaySeconds.textContent = sec;
  displayMinutes.textContent = min;
} 

function formatSingleDigits() {
  if (sec < 0) {
    sec = 59;
    min--;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  if (min < 1 && sec === 59) {
    min = "0" + min;
  }
}

function updateTimerText() {
  if (+min === 0 && +sec === 1) {
    clearInterval(timerIntervalId);
  }

  sec--;
  formatSingleDigits();
  displayTime();
}

function timerHandler() {
  const timerMode = startPauseBtn.dataset.mode;
  
  if (timerMode === 'inactive') {
    startTimer();
  } else {
    pauseTimer();
  }
}

startPauseBtn.addEventListener('click', timerHandler);
resetBtn.addEventListener('click', resetTimer);