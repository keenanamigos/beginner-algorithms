"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PowerCalculator {
    // Constructor
    constructor() { }
    // Class Methods
    calculate(base, exponent) {
        if (exponent >= 0) {
            let result = 1;
            for (let i = 0; i < exponent; i++) {
                result *= base;
            }
            return result;
        }
    }
}
// Class Variables
PowerCalculator.calculator = new PowerCalculator();
exports.PowerCalculator = PowerCalculator;
