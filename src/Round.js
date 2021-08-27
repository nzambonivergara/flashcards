const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.currentCard = this.deck[0];
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
    return Math.floor(this.correctGuesses.length / this.turns * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    this.checkScore();
  }

  checkScore() {
    if (this.calculatePercentCorrect() < 90) {
      const Game = require('./Game');
      const game = new Game();
      console.log('Oh no! You scored less than 90%... Let\'s try again!')
      game.start();
    }
  }
}

module.exports = Round;
