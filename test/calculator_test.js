var expect = require('chai').expect;

describe('calculate', () => {
    let PowerCalculator = require('../src/Calculator/calculator').PowerCalculator;
    let calculator = new PowerCalculator();

    it('should return 1 if a number is raised to the 0th power', () => {
        expect(calculator.calculate(15, 0)).to.equal(1);
    });

    it('should return the base if a number is raised to the 1st power', () => {
        expect(calculator.calculate(15, 1)).to.equal(15);
    });

    it('should return the proper calculation when a base is raised by any exponent', () => {
        expect(calculator.calculate(2, 3)).to.equal(8);
    });
});