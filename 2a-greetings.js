// Challenge: Write a function that takes an array of names, and returns an array with a greeting for each of those names: 'Hello, <name>!'.
// Example: ['Ash', 'Beth', 'Ciara'] -> ['Hello, Ash!', 'Hello, Beth!', 'Hello, Ciara!'] 

// function: greetings()
// parameters: nameArray, string array
// returns: string array

/**
 * Takes an array of names, and returns an array with a greeting for each of those names: 'Hello, <name>!'.
 * @param {string[]} nameArray - array of names 
 * @returns {string[]} - greetings to each name in nameArray
 */
function greetings(nameArray) {
    let greetingsArray = nameArray.map(greetName);
    return greetingsArray;
}

function greetName(name) {
    let greeting = `Hello, ${name}!`;
    return greeting;
}

console.log(`greetings(['Gabe', 'Hetty', 'Ines', 'Jake']) returns: `, greetings(['Gabe', 'Hetty', 'Ines', 'Jake']), `should return: ['Hello, Gabe!', 'Hello, Hetty!', 'Hello, Ines!', 'Hello, Jake!']`);
console.log(`greetings(['Tianyi']) returns: `, greetings(['Tianyi']), `should return: ['Hello, Tianyi!'] `);
console.log(`greetings([]) returns: `, greetings([]), `should return: []`); // assumption: if there is nobody to greet, do not greet

