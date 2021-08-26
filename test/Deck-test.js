const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', () => {
  let cards, deck;

  beforeEach(() => {
    cards = [
      new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter'),
      new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder'),
      new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
    ]
    deck = new Deck(cards);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', () => {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store an array of card objects', () => {
    expect(deck.cards).to.be.an('array');
    expect(deck.cards[0]).to.be.an.instanceof(Card);
    expect(deck.cards).to.equal(cards);
  });

  it('should be able to count the cards', () => {
    const numberOfCards = deck.countCards()
    
    expect(numberOfCards).to.equal(deck.cards.length);
  });
})
