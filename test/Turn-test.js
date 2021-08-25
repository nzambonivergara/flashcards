const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card, turn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to take in a user\'s guess', () => {
    expect(turn.userAnswer).to.be.a('string');
    expect(turn.userAnswer).to.equal('pug');
  });

  it('should return the user\'s guess', () => {
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return a different guess', () => {
    turn = new Turn('capybara', card);

    expect(turn.userAnswer).to.equal('capybara');
    expect(turn.returnGuess()).to.equal('capybara');
  });

  it('should be able to take in the current card in play', () => {
    expect(turn.currentCard).to.be.an.instanceof(Card);
    expect(turn.currentCard).to.equal(card);
  });

  it('should return the current card', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate whether the user\'s answer is correct', () => {
    expect(turn.evaluateGuess()).to.be.false;

    const turn2 = new Turn('sea otter', card);

    expect(turn2.evaluateGuess()).to.be.true;
  });

  it('should provide feedback to the user if guess is incorrect', () => {
    expect(turn.evaluateGuess()).to.be.false;
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

  it('should provide feedback to the user if guess is correct', () => {
    turn = new Turn('sea otter', card);

    expect(turn.evaluateGuess()).to.be.true;
    expect(turn.giveFeedback()).to.equal('correct!');
  });
})
