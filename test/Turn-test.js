const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let turn;
  let card;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  })

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be able to take in a user\'s guess', () => {
    expect(turn.userAnswer).to.equal('pug');
  });

  it('should return the user\'s guess', () => {
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should be able to take in the current card in play', () => {
    expect(turn.currentCard).to.equal(card);
  });

  it('should return the current card', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate whether the user\'s answer is correct', () => {
    expect(turn.evaluateGuess()).to.equal(false);

    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('sea otter', card2);

    expect(turn2.evaluateGuess()).to.equal(true);
  });

  it('should provide feedback to the user if guess is incorrect', () => {
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('Incorrect answer!');
  });

  it('should provide feedback to the user if guess is correct', () => {
    const card2 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn2 = new Turn('sea otter', card2);

    expect(turn2.evaluateGuess()).to.equal(true);
    expect(turn2.giveFeedback()).to.equal('Correct answer!');
  });
})
