export class PowerCalculator {
    // Constructor
    public constructor() {}
    
    // Class Variables
    public static calculator: PowerCalculator = new PowerCalculator();
    
    // Class Methods
    public calculate(base: number, exponent: number): number {
        if (exponent >= 0) {
            let result = 1;
            
            for (let i = 0; i < exponent; i++) {
                result *= base;
            }
            
            return result;
        }
    }
}

// Tests until mocha setup
let calculator = new PowerCalculator();
console.log(calculator.calculate(15, 0)) // raised to the power of 0 is 1 [PASS]
console.log(calculator.calculate(15, 1)) // raised to the power of 1 is itself [PASS]
console.log(calculator.calculate(2, 3)) // any arbitrary base and exponent should return correct result [PASS]