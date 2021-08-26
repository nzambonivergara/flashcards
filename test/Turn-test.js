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

  it('should store a user\'s guess', () => {
    expect(turn.userAnswer).to.be.a('string');
    expect(turn.userAnswer).to.equal('pug');
  });

  it('should return the user\'s guess', () => {
    const userGuess = turn.returnGuess();

    expect(userGuess).to.equal('pug');
  });

  it('should be able to return a different guess', () => {
    turn = new Turn('capybara', card);

    expect(turn.userAnswer).to.equal('capybara');
    expect(turn.returnGuess()).to.equal('capybara');
  });

  it('should store the current card in play', () => {
    expect(turn.currentCard).to.be.an.instanceof(Card);
    expect(turn.currentCard).to.equal(card);
  });

  it('should be able to return the current card', () => {
    const currentCard = turn.returnCard();

    expect(currentCard).to.equal(card);
  });

  it('should be able to return a different card', () => {
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
    turn = new Turn('appendix', card2);

    expect(turn.currentCard).to.equal(card2);
    expect(turn.returnCard()).to.equal(card2);
  });

  it('should evaluate whether the user\'s answer is correct', () => {
    expect(turn.evaluateGuess()).to.be.false;

    const turn2 = new Turn('sea otter', card);

    expect(turn2.evaluateGuess()).to.be.true;
  });

  it('should provide feedback if guess is incorrect', () => {
    const guessEvaluation = turn.evaluateGuess();
    const feedback = turn.giveFeedback();

    expect(guessEvaluation).to.be.false;
    expect(feedback).to.equal('incorrect!');
  });

  it('should provide feedback if guess is correct', () => {
    turn.userAnswer = 'sea otter';
    const guessEvaluation = turn.evaluateGuess();
    const feedback = turn.giveFeedback();

    expect(guessEvaluation).to.be.true;
    expect(feedback).to.equal('correct!');
  });
})
