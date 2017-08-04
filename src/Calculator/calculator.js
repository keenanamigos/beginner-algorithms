"use strict";
exports.__esModule = true;
var PowerCalculator = (function () {
    // Constructor
    function PowerCalculator() {
    }
    // Class Methods
    PowerCalculator.prototype.calculate = function (base, exponent) {
        if (exponent >= 0) {
            var result = 1;
            for (var i = 0; i < exponent; i++) {
                result *= base;
            }
            return result;
        }
    };
    // Class Variables
    PowerCalculator.calculator = new PowerCalculator();
    return PowerCalculator;
}());
exports.PowerCalculator = PowerCalculator;
// Tests until mocha setup
var calculator = new PowerCalculator();
console.log(calculator.calculate(15, 0)); // raised to the power of 0 is 1 [PASS]
console.log(calculator.calculate(15, 1)); // raised to the power of 1 is itself [PASS]
console.log(calculator.calculate(2, 3)); // any arbitrary base and exponent should return correct result [PASS]
