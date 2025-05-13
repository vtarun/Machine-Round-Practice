(function (){
  const startCounterBtn = document.getElementById('startCounter');
  const resetCounterBtn = document.getElementById('resetCounter');
  const hours = document.querySelector('.hours');
  const minutes = document.querySelector('.minutes');
  const seconds = document.querySelector('.seconds');

  let counterInterval = null;

  function resetCounter() {
    hours.value = '';
    minutes.value = '';
    seconds.value = '';
    clearInterval(counterInterval);
  }

  function startCounter() {
    if(counterInterval) return;

    counterInterval = setInterval(function(){
        hours.value -= 1;
    }, 1000);
  }

  startCounterBtn.addEventListener('click', function() {
    startCounter();
  });

  resetCounterBtn.addEventListener('click', function() {
    resetCounter();
  });
  
})()






