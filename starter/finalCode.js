// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
let gravityFactors = require('./utils/earthGravityFactors.js');
// Define a function to show user factors based on input type and value
function showUserFactors(factorType, factorUnit) {
    // Initialize an object to hold the results
    const factors = {};
    // Declare a variable to hold the unit of measurement
    let measurement;
    // Iterate over each item in the gravityFactors object
    for (let planet in gravityFactors) {
        // Calculate the factor multiplied by the input value and round
        factors[planet] = parseFloat((factorUnit * gravityFactors[planet]).toFixed(2));
    }
    // Switch case to determine the measurement unit based on factor type
    switch (factorType) {
        case "jump":
            measurement = 'cm';
            break;
        case "weight":
            measurement = 'kg';
            break;
        default:
            measurement = 'units';
    }
    // Iterate over the results and log each one
    for (let planet in factors) {
        console.log(`Your ${factorType} on ${planet} is ${factors[planet]}${measurement}.`);
    }
}
//console.log(showUserFactors('jump', 150));

// Define a function to get user inputs for factor and value
function getUserInput() {
    // Prompt the user to enter which solar system they want to measure in
    console.log(`Enter the solar system you want to measure in (please enter "milky way" or "andromeda")...`);
    const galaxyType = prompt(`>> `);
    // Prompt the user to enter the type of factor they want to calculate
    console.log(`Enter what you want to measure (please enter "weight" or "jump")...`);
    const factorType = prompt(`>> `);
    // Prompt the user to enter the numerical value
    console.log(`Enter the value of that factor on Earth as a number.`);
    const factorValue = prompt(`>> `);
    // Call the showUserFactors function with the user inputs and the gravity
    showUserFactors(factorType.toLowerCase(), factorValue);
}
//Expose getUserInput globally
global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;