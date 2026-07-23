// 4-payment.test.js
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi (stub version)', () => {
  it('should use a stub for Utils.calculateNumber and log correct total', () => {
    // Stub Utils.calculateNumber → retourne toujours 10
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy sur console.log
    const spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // Vérifier que le stub est appelé correctement
    expect(stub.calledOnce).to.be.true;
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;

    // Vérifier que console.log affiche le bon message
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith('The total is: 10')).to.be.true;

    // Restaurer les fonctions
    stub.restore();
    spy.restore();
  });
});

