new Vue({
  el: '#app',

  data: { 
    numClicks: 0,
    active: false,
    secs: 10,
    GameOver: 'Click Here!',
    highscore: 0,
    Finished: 'High Score: 0',
  },

  mounted:function() {

    setInterval(() => {
      if(this.active){
      this.secs -= 1;
      if(this.secs == 0){
        this.active = false;
        this.GameOver = 'Game Over!!';
        if (this.numClicks > this.highscore) {
          this.highscore = this.numClicks;
        }
        if (this.numClicks < 10) {
          this.Finished = 'Seriously dude?';
        }
        else if (this.numClicks < 20) {
          this.Finished = 'Are you using your nose or something?';
        }
        else if (this.numClicks < 30) {
          this.Finished = 'Not too shabby... for my grandma!';
        }
        else if (this.numClicks < 40) {
          this.Finished = 'Come on, I think you can still do better!';
        }
        else if (this.numClicks < 50) {
          this.Finished = 'You did okay. B-.';
        }   
        else if (this.numClicks < 60) {
          this.Finished = 'Not too shabby!';
        }   
        else if (this.numClicks < 70) {
          this.Finished = 'Hmmm.. yeah I\'m a bit impressed';
        }   
        else if (this.numClicks < 80) {
          this.Finished = 'Holy smokes you\'ve got quite the finger!';
        }   
        else if (this.numClicks < 90) {
          this.Finished = 'You are the computer mouse god!';
        }   
        
    }
}

 }, 1000);


  },
  
  methods: {
      updateCount: function () {
          if (this.secs != 0 ) {
          this.numClicks += 1; 
          }
          if (this.secs == 10) {
          this.active = true;   
          }
      },

      reset: function () {
        this.numClicks = 0;
        this.secs = 10;
        this.active = false;
        this.Finished = 'High Score: ' + this.highscore;
        this.GameOver = 'Click Here!';
      },

      startInterval: function () {
        setInterval(() => {
             this.secs += 1
        }, 1000);
  }
}

})