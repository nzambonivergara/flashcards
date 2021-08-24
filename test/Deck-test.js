const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let deck;
  let cards;

  beforeEach(() => {
    cards = [
      new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'),
      new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder'),
      new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
    ]
    deck = new Deck(cards);
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should take in an array of cards', () => {
    expect(deck.cards).to.equal(cards);
  });

  it('should count the cards', () => {
    expect(deck.countCards()).to.equal(deck.cards.length);
  });
})
