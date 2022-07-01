/*
1d: Only initials
Challenge: Write a function that takes an array of names (always <firstname> <surname> format) and returns an array of initials for each person.
Example: ["Ash Ketchum", "Lucy Heartfilia", "Yugi Moto"] -> ["A.K.", "L.H.", "Y.M."]
*/
// function: onlyInitials
// parameters: nameArr, array of strings
// returns: array of strings
/**
 * Takes an array of names (always <firstname> <surname> format) and returns an array of initials for each person.
 * @param {string[]} nameArr - array of names
 * @returns {string[]} - array of initials for each name in nameArr
 */

function onlyInitials(nameArr) {
    return initialArr;
}

console.log(`onlyInitials(["Amadeus Bach", "Ludwig Mendelssohn"]) returns: `, onlyInitials(["Amadeus Bach", "Ludwig Mendelssohn"]), `should return: ["A.B.", "L.M."]`);
console.log(`onlyInitials([]) returns: `, onlyInitials([]), `should return: []`);
console.log(`onlyInitials(["Zeno Zeno"]) returns: `, onlyInitials(["Zeno Zeno"]), `should return: [Z.Z.]`);
console.log(`onlyInitials(["Batman"]) returns: `, onlyInitials(["Batman"]), `should return: ["B."]`);
