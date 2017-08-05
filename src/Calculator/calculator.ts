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