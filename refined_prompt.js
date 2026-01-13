/**
 * Converts a string to camelCase format.
 * 
 * Splits the input string by hyphens, underscores, or whitespace, then concatenates
 * the words together with the first word in lowercase and subsequent words capitalized.
 * 
 * @param {string} str - The input string to convert. Can contain hyphens, underscores, or spaces as delimiters.
 * @returns {string} The converted string in camelCase format.
 * 
 * @example
 * toCamelCase('first name');        // Returns 'firstName'
 * toCamelCase('user_id');           // Returns 'userId'
 * toCamelCase('SCREEN_NAME');       // Returns 'screenName'
 * toCamelCase('mobile-number');     // Returns 'mobileNumber'
 */

/**
 * Converts a string to dot.case format.
 * 
 * Splits the input string by hyphens, underscores, or whitespace, then joins
 * the words with dots, converting all characters to lowercase.
 * 
 * @param {string} str - The input string to convert. Can contain hyphens, underscores, or spaces as delimiters.
 * @returns {string} The converted string in dot.case format.
 * 
 * @example
 * toDotCase('first name');        // Returns 'first.name'
 * toDotCase('user_id');           // Returns 'user.id'
 * toDotCase('SCREEN_NAME');       // Returns 'screen.name'
 * toDotCase('mobile-number');     // Returns 'mobile.number'
 */
function toCamelCase(str) {
    return str
        .split(/[-_\s]+/)
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Test cases
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber
function toDotCase(str) {
    return str
        .split(/[-_\s]+/)
        .map(word => word.toLowerCase())
        .join('.');
}

// Test cases
console.log(toDotCase('first name'));        // first.name
console.log(toDotCase('user_id'));           // user.id
console.log(toDotCase('SCREEN_NAME'));       // screen.name
console.log(toDotCase('mobile-number'));     // mobile.number