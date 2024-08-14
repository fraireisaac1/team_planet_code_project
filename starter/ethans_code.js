// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require('./gravityFactors.js');
// Define a function to show user factors based on input type and value
function userFactors(userFactor, userValue) {
    // Initialize an object to hold the results
    const factors = {}
    // Declare a variable to hold the unit of measurement
    // Iterate over each item in the gravityFactors object
    for (let factor in gravityFactors) {
        // Calculate the factor multiplied by the input value and round it to two decimals
        factors[factor] = parseFloat((userValue * gravityFactors[factor]).toFixed(2))
        // Switch case to determine the measurement unit based on factor type
        // Iterate over the results and log each one
    }

    for (let factor in factors) {
        console.log(`your ${userFactor} is ${factors[factor]} on ${factor}`);
    }
}
// Define a function to get user inputs for factor type and value
function getUserInputs() {
    // Prompt the user to enter the type of factor they want to calculate
    console.log("Enter the type of factor you want to calculate");
    const userFactor = prompt(">");
    // Prompt the user to enter the numerical value of the 
    console.log("Enter the value of the respective factor on earth");
    const factorValue = prompt(">");
    // Call the showUserFactors function with the user inputs and the gravity 
    userFactors(userFactor.toLowerCase(), factorValue);
}
// Expose getUserFactors globally
global.getUserFactors = getUserInputs;