const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let cards, deck, round;

  beforeEach(() => {
    cards = [
      new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'),
      new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder'),
      new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
    ];
    deck = new Deck(cards)
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck of cards', () => {
    expect(round.deck).to.be.an('array');
    expect(round.deck).to.equal(deck.cards);
    expect(round.deck[1]).to.equal(deck.cards[1]);
  });

  it('should keep track of the number of turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('should have a current card assigned to the first card in the deck', () => {
    expect(round.currentCard).to.equal(round.deck[0])
  });

  it('should be able to store the cards that were guessed incorrectly', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should be able to store the cards that were guessed correctly', () => {
    expect(round.correctGuesses).to.deep.equal([]);
  });

  describe('Round functionality', () => {
    it('should be able to return the current card', () => {
      expect(round.returnCurrentCard()).to.equal(round.currentCard);
    });

    it('should be able to increment the turns everytime', () => {
      round.takeTurn();
      round.takeTurn();

      expect(round.turns).to.equal(2);
    });

    it('should evaluate the user\'s guess', () => {
      expect(round.takeTurn('sea otter')).to.equal('correct!');
      expect(round.takeTurn('pug')).to.equal('incorrect!')
    });

    it('should store the card\'s id in the correct guesses property', () => {
      round.takeTurn('sea otter');
      round.takeTurn('pug');

      expect(round.correctGuesses[0]).to.be.a('number');
      expect(round.correctGuesses.length).to.equal(1);
    });

    it('should store the card\'s id in the incorrect guesses property', () => {
      round.takeTurn('sea otter');
      round.takeTurn('pug');

      expect(round.incorrectGuesses[0]).to.be.a('number');
      expect(round.incorrectGuesses.length).to.equal(1);
    });

    it('should be able to caculate the percent of correct answers', () => {
      round.takeTurn('sea otter');
      round.takeTurn('pug');
      const percentCorrect = round.calculatePercentCorrect();

      expect(percentCorrect).to.equal(50);
    });

    it.only('should log the final message to end the Round', () => {
      let called, argument;
      console.log = function() {
        called = true;
        argument = arguments[0];
      };

      round.takeTurn('sea otter');
      round.takeTurn('pug');
      const percentCorrect = round.calculatePercentCorrect();
      round.endRound();

      expect(called).to.be.true;
      expect(argument).to.equal(`** Round over! ** You answered ${percentCorrect}% of the questions correctly!`);
    });
  });
})
