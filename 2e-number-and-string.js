/*
1e: Number and string
Challenge: Write a function that takes an array of numbers and returns an array of plain objects, with properties:
asNumber - the original number
asString - a string representation of the number
Example: [4, -3.2] -> [{ asNumber: 4, asString: '4' }, { asNumber: -3.2, asString: '-3.2' }]
*/
// function: numAndStr
// parameters: inputNums, array of numbers
// returns: array of plain objects

/**
 * Takes an array of numbers and returns an array of plain objects.
 * @param {number[]} inputNums - array of numbers
 * @returns {object[]} - array of objects that have as properties: asNumber - each number from inputNums,
asString - a string representation of the number
 */

function numAndStr(inputNums) {
    let numStrArray = inputNums.map(createObj);
    return numStrArray;
}

function createObj(num) {
    let numObject = { asNumber: num, asString: `${num}`};
    return numObject;
}

console.log(`numAndStr([]) returns: `, numAndStr([]), `should return: []`);
console.log(`numAndStr([1]) returns: `, numAndStr([1]), `should return: [{ asNumber: 1, asString: '1' }]`);
console.log(`numAndStr([-1, 0, 1]) returns: `, numAndStr([-1, 0, 1]), `should return: [{ asNumber: -1, asString: '-1' }, { asNumber: 0, asString: '0' }, { asNumber: 1, asString: 1 }]`);
console.log(`numAndStr([-1.1, 0, 1.1]) returns: `, numAndStr([-1.1, 0, 1.1]), `should return: [{ asNumber: -1.1, asString: '-1.1' }, { asNumber: 0, asString: '0' }, { asNumber: 1.1, asString: 1.1 }]`);
