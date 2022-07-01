// 1b: Invert numbers
// Challenge: Write a function that takes an array of numbers, and returns an array with the same numbers, but signs flipped.
// Example: [1, -3, 2, 8, -10] -> [-1, 3, -2, -8, 10]

/**
 * Takes an array of numbers and returns an array with the same numbers, but signs flipped.
 * @param {number[]} numArray - array of numbers 
 * @returns {number[]} - array of numbers from numArray with signs flipped
 */
function invertNumbers(numArray) {
    let invertedArray = numArray.map(invertNum);
    return invertedArray;
}

function invertNum(number) {
    return number* (-1);
}

console.log('linvertNumbers([-1, 0, 1]) returns:', invertNumbers([-1, 0, 1]), '; should return: [1, 0, -1]');
console.log('linvertNumbers([]) returns:', invertNumbers([]), '; should return: []');
console.log('linvertNumbers([266.5, -24]) returns:', invertNumbers([266.5, -24]), '; should return: [-266.5, 24]');
console.log('linvertNumbers([5, 5, 5, -5]) returns:', invertNumbers([5, 5, 5, -5]), '; should return: [-5, -5, -5, 5]');

