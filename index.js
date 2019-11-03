


class StopWatch {
  constructor() {
    this.$startBtn = document.getElementById('start-btn');
    this.$stopBtn = document.getElementById('stop-btn');
    this.$resetBtn = document.getElementById('reset-btn');
    this.$display = document.getElementById('display');

    this.timerId;
    this.timeSeconds = 0;

    this.setEventListeners()
  }


  setEventListeners() {
    const self = this

    this.switchBtns(true)

    this.$startBtn.addEventListener('click', function() {
      self.startTimer()
    });

    this.$stopBtn.addEventListener('click', function() {
      self.stopTimer()
    });
    
    // this.$resetBtn.addEventListener('click', function() {
    //   self.resetTimer();
    // })
  }


  startTimer() {
    // this.$startBtn.disabled = 'true'
    this.switchBtns(false)


    this.$startBtn.style.display='none'
    const self = this

    this.timerId = setInterval(function() {
      self.timeSeconds++;
      self.displayTimerString();
    }, 1000)
  }

  stopTimer() {
    this.switchBtns(true)

    clearInterval(this.timerId)
    this.$startBtn.disabled = ''
  }

  // resetTimer() {
  //   this.timeSeconds = 0;
  //   this.$display.textContent = '00:00'
  // }

  displayTimerString() {
    const strSeconds = ('00' + this.timeSeconds).slice(-2)
    const strMinutes = ('00' + Math.floor(this.timeSeconds / 60,0)).slice(-2)
    this.$display.textContent = `${strMinutes}:${strSeconds}`
  }

  switchBtns(flag) {
    // true => startBtnを可視化
    // false => stopBtnを可視化

    if(flag) {
      this.$startBtn.style.display = 'inline'
      this.$stopBtn.style.display = 'none'
    } else {
      this.$startBtn.style.display = 'none'
      this.$stopBtn.style.display = 'inline'
    }
  }

}

new StopWatch()