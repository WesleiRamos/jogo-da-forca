const game = (word, maxAttempts = 6) => {

  return {    
    rightAttempts: [ ],
    wrongAttempts: [ ],

    status: STATUS.RUNNING,

    isGameRunning() {
      return this.status === STATUS.RUNNING
    },

    isGameWon() {
      return this.status === STATUS.WON
    },

    try(letter) {
      if (letter.length !== 1 && !this.isGameRunning())
        return

      if (this.wrongAttempts.includes(letter))
        return      
    }
  }
}

