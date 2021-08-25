const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.cards = [];
    this.deck = {};
    this.currentRound = {};
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    this.cards = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    });

    this.deck = new Deck(this.cards);

    this.currentRound = new Round(this.deck);

    this.printMessage(this.deck, this.currentRound);

    this.printQuestion(this.currentRound);
  }
}

module.exports = Game;
