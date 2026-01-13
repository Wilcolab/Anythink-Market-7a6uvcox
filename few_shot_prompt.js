function toCamelCase(str) {
    return str
        .split(/[-_\s]+/) // Split by hyphens, underscores, or spaces
        .map((word, index) => {
            // First word stays lowercase, rest are capitalized
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .filter(word => word.length > 0)
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber
function addNumbers(a, b) {
    if (a === null || a === undefined || b === null || b === undefined) {
        throw new Error('Inputs cannot be null or undefined');
    }
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both inputs must be numbers');
    }
    
    return a + b;
}

// Test cases
console.log(addNumbers(5, 3));           // 8
console.log(addNumbers(10, -5));         // 5
console.log(addNumbers(0, 0));           // 0

// Error cases
try {
    addNumbers('5', 3);                  // Throws error
} catch (e) {
    console.log(e.message);
}

try {
    addNumbers(5, null);                 // Throws error
} catch (e) {
    console.log(e.message);
}