const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  let card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  let turn = new Turn('pug', card);

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should be able to take in a user\'s guess', () => {
    expect(turn.userAnswer).to.equal('pug');
  });

  it('should return the user\'s guess', () => {
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return a different guess', () => {
    const turn2 = new Turn('capybara', card);

    expect(turn2.userAnswer).to.equal('capybara');
    expect(turn2.returnGuess()).to.equal('capybara');
  });

  it('should be able to take in the current card in play', () => {
    expect(turn.currentCard).to.equal(card);
  });

  it('should return the current card', () => {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate whether the user\'s answer is correct', () => {
    expect(turn.evaluateGuess()).to.be.false;

    const turn3 = new Turn('sea otter', card);

    expect(turn3.evaluateGuess()).to.be.true;
  });

  it('should provide feedback to the user if guess is incorrect', () => {
    expect(turn.evaluateGuess()).to.be.false;
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

  it('should provide feedback to the user if guess is correct', () => {
    const turn4 = new Turn('sea otter', card);

    expect(turn4.evaluateGuess()).to.be.true;
    expect(turn4.giveFeedback()).to.equal('correct!');
  });
})
