class Turn {
  constructor(userAnswer, card) {
    this.userAnswer = userAnswer;
    this.currentCard = card;
  }

  returnGuess() {
    return this.userAnswer;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    if (this.currentCard.correctAnswer === this.userAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  }
}

module.exports = Turn;
