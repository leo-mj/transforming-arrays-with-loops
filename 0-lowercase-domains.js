// function name: lowerCaseArray
// parameters:
//   - inputArray: array of strings
// returns: array of strings
/**
 * Takes an array of strings representing domain names, in mixed case, and returns an array of the domain names in all-lowercase.
 * @param {string[]} inputArray - array of strings in mixed case
 * @returns {string[]} - array of strings in lower case
 */



function lowerCasesArray(inputArray) {
    let outputArray = [];
    for (let string of inputArray) {
        let lowerCaseStr = string.toLowerCase();
        outputArray.push(lowerCaseStr);
    }
    return outputArray;
}

// test cases:
console.log('lowerCasesArray(["Hello", "how", "are", "you?"]) returns:', lowerCasesArray(["Hello", "how", "are", "you?"]), '; should return: ["hello", "how", "are", "you?"');
console.log('lowerCasesArray([]) returns:', lowerCasesArray([]), '; should return: []');
console.log('lowerCasesArray(["hi"]) returns:', lowerCasesArray(["hi"]), '; should return: ["hi"] ');
