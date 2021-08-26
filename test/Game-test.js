const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');


describe('Game', () => {
  let cardsData, cards, game;

  beforeEach(() => {
    cardsData = [{
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }, {
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    }];
    cards = cardsData.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    });
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', () => {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have no cards as a default', () => {
    expect(game.cards).to.be.an('array');
    expect(game.cards).to.deep.equal([]);
  });

  it('should have an empty deck as a default', () => {
    expect(game.deck).to.be.an('object');
    expect(game.deck).to.deep.equal({});
  });

  it('should store the currrent Round, which is empty by default', () => {
    expect(game.currentRound).to.be.an('object');
    expect(game.currentRound).to.deep.equal({});
  });

  describe('helper functions for the start method functionality', () => {
    beforeEach(() => {
      game.createCards();
      game.createDeck();
      game.createRound();
    });

    it('should have a method that creates cards', () => {
      expect(game.cards[0]).to.be.an.instanceof(Card);
      expect(game.cards[0]).to.deep.equal(cards[0]);
    });

    it('should  have a method that creates a Deck', () => {
      expect(game.deck).to.be.an.instanceof(Deck);
      expect(game.deck.cards[1]).to.deep.equal(cards[1]);
    });

    it('should have a method that starts a new Round using the deck', () => {
      expect(game.currentRound).to.be.an.instanceof(Round);
      expect(game.currentRound.turns).to.equal(0);
    });
  });
})
