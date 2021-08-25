const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.currentCard = this.deck[this.turns];
    this.incorrectGuesses = [];
    this.correctGuesses = []
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(userGuess) {
    let turn = new Turn(userGuess, this.currentCard);

    if (turn.evaluateGuess()) {
      this.correctGuesses.push(this.currentCard.id);
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
    }

    this.turns++;
    this.currentCard = this.deck[this.turns];

    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return this.correctGuesses.length / this.turns * 100;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
