// Welcome to JavaScript Obfuscator!
// Paste your JavaScript code here and click "Process Obfuscation"

function calculateSum(a, b) {
    const result = a + b;
    console.log('The sum is:', result);
    return result;
}

const multiply = (x, y) => {
    return x * y;
};

class Calculator {
    constructor() {
        this.history = [];
    }
    
    add(a, b) {
        const result = a + b;
        this.history.push(`${a} + ${b} = ${result}`);
        return result;
    }
}

// Example usage
const calc = new Calculator();
calc.add(5, 3);
calculateSum(10, 20);