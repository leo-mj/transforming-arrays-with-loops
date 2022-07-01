/*
1c: Count strings
Challenge: Write a function that takes an array of strings, and returns an array with the number of characters in each string.
Example: ["one", "two", "three", "four"] -> [3, 3, 5, 4]
*/
/*
function: countStrings
parameters: stringArr, array of strings
returns: array of numbers
*/
/**
 * Takes an array of strings, and returns an array with the number of characters in each string.
 * @param {string[]} stringArr - array of strings
 * @returns {number[]} - array with the length of each string in stringArr
 */

function countStrings(stringArr) {
    return lengthArr;
}

// test cases:
console.log(`countStrings([]) returns: `, countStrings([]), `should return: [0]`);
console.log(`countStrings(["I", "am", "Leo"]) returns: `, countStrings(["I", "am", "Leo"]), `should return: [1, 2, 3]`);
console.log(`countStrings(["Who", "", "Who"]) returns: `, countStrings(["Who", "", "Who"]), `should return: [3, 0, 3]`);
console.log(`countStrings([" ", "1"]) returns: `, countStrings([" ", "1"]), `should return: [1, 1]`);
