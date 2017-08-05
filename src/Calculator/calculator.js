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
