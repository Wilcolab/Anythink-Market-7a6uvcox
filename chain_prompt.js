// ============================================================================
// CHAIN-OF-THOUGHT PROMPT: KEBAB-CASE CONVERTER
// ============================================================================

/*
STEP 1: Explain what kebab-case is, with 2–3 examples
-------------------------------------------------------
Kebab-case (also known as dash-case or hyphen-case) is a naming convention 
where words are:
- All lowercase
- Separated by hyphens (-)

Examples:
  "Hello World"       → "hello-world"
  "User Profile Page" → "user-profile-page"
  "API_END_POINT"     → "api-end-point"
*/

/*
STEP 2: Design the logic for converting a string into kebab-case
-----------------------------------------------------------------
To convert any string to kebab-case, we need to handle:

1. Uppercase letters:
   - Convert all uppercase letters to lowercase
   - Add a hyphen before uppercase letters that are part of camelCase/PascalCase
   - Example: "userName" → "user-name"

2. Spaces:
   - Replace all spaces with hyphens
   - Example: "user name" → "user-name"

3. Underscores:
   - Replace all underscores with hyphens
   - Example: "user_name" → "user-name"

4. Special characters:
   - Remove or replace special characters (keep only letters, numbers, and hyphens)
   - Example: "user@name!" → "user-name"

Algorithm:
1. Insert hyphens before uppercase letters (for camelCase detection)
2. Convert entire string to lowercase
3. Replace spaces, underscores, and special characters with hyphens
4. Remove multiple consecutive hyphens
5. Trim leading and trailing hyphens
*/

/*
STEP 3: Write a JavaScript function named toKebabCase
------------------------------------------------------
*/

/**
 * Converts a string to kebab-case format.
 * 
 * @param {string} str - The input string to convert
 * @returns {string} The converted string in kebab-case format
 */
function toKebabCase(str) {
    return str
        // Insert hyphen before uppercase letters (for camelCase/PascalCase)
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        // Convert to lowercase
        .toLowerCase()
        // Replace spaces, underscores, and non-alphanumeric characters with hyphens
        .replace(/[\s_]+/g, '-')
        // Remove special characters (keep only letters, numbers, and hyphens)
        .replace(/[^a-z0-9-]/g, '-')
        // Replace multiple consecutive hyphens with a single hyphen
        .replace(/-+/g, '-')
        // Remove leading and trailing hyphens
        .replace(/^-+|-+$/g, '');
}

/*
STEP 4: Add example inputs and outputs to demonstrate the function works
-------------------------------------------------------------------------
*/

console.log('=== Kebab-Case Conversion Examples ===\n');

// Basic examples
console.log('Input: "Hello World"');
console.log('Output:', toKebabCase('Hello World'));              // hello-world
console.log();

console.log('Input: "User Profile Page"');
console.log('Output:', toKebabCase('User Profile Page'));        // user-profile-page
console.log();

console.log('Input: "API_END_POINT"');
console.log('Output:', toKebabCase('API_END_POINT'));            // api-end-point
console.log();

// CamelCase and PascalCase
console.log('Input: "userName"');
console.log('Output:', toKebabCase('userName'));                 // user-name
console.log();

console.log('Input: "getUserProfile"');
console.log('Output:', toKebabCase('getUserProfile'));           // get-user-profile
console.log();

// Underscore separated
console.log('Input: "user_profile_settings"');
console.log('Output:', toKebabCase('user_profile_settings'));    // user-profile-settings
console.log();

// Mixed formats
console.log('Input: "First Name (Required)"');
console.log('Output:', toKebabCase('First Name (Required)'));    // first-name-required
console.log();

// With numbers
console.log('Input: "version2Update"');
console.log('Output:', toKebabCase('version2Update'));           // version2-update
console.log();

// Edge cases
console.log('Input: "   spaces   everywhere  "');
console.log('Output:', toKebabCase('   spaces   everywhere  ')); // spaces-everywhere
console.log();

console.log('Input: "Special!@#$Characters"');
console.log('Output:', toKebabCase('Special!@#$Characters'));    // special-characters
