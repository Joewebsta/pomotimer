function countdownFrom(seconds) {
  console.log(seconds);

  setInterval(() => {    
    seconds--;
    console.log(seconds);
  }, 1000)
}

countdownFrom(60);