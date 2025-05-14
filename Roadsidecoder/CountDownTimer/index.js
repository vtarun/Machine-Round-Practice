(function (){
  const startCounterBtn = document.getElementById('startCounter');
  const resetCounterBtn = document.getElementById('resetCounter');
  const stopCounterBtn = document.getElementById('stopCounter');
  const hours = document.querySelector('.timer__input--hours');
  const minutes = document.querySelector('.timer__input--minutes');
  const seconds = document.querySelector('.timer__input--seconds');

  let counterInterval = null;

  function resetCounter() {
    hours.value = '';
    minutes.value = '';
    seconds.value = '';
    clearInterval(counterInterval);
  }

  function adjustCounter() {
    if(seconds.value > 60){
      minutes.value += 1;
      seconds.value = parseInt(seconds.value) - 60;
    }

    if(minutes.value > 60){
      hours.value += 1;
      seconds.value = parseInt(minutes.value) - 60;
    }
  }

  function timer(){
    if(seconds.value != 0){
        seconds.value = `${seconds.value > 10  ? '' : '0'}${seconds.value - 1}`
      }
      else if(minutes.value != 0 && seconds.value == 0){
        seconds.value = 59;
        minutes.value = `${minutes.value > 10  ? '' : '0'}${minutes.value - 1}`
      }
      else if(hours.value != 0 && minutes.value == 0){
        hours.value = `${hours.value > 10  ? '' : '0'}${hours.value - 1}`
        minutes.value = 60;
      }
  }

  function startCounter() {
    
    if(hours.value == 0 && minutes.value == 0 && seconds.value == 0){
        resetCounter();
        return;
    }

    startCounterBtn.style.display = "none";
    stopCounterBtn.style.display = "initial";

    counterInterval = setInterval(function(){
      timer();
    }, 1000);

  }

  startCounterBtn.addEventListener('click', function() {
    adjustCounter();
    startCounter();
  });

  stopCounterBtn.addEventListener('click', function() {
    stopCounterBtn.style.display = "none";
    startCounterBtn.style.display = "initial";
    clearInterval(counterInterval);
  });

  resetCounterBtn.addEventListener('click', function() {
    resetCounter();
  });

})()






