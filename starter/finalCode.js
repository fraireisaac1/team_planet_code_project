// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
let gravityFactors = require('./utils/earthGravityFactors.js');
// Define a function to show user factors based on input type and value
function showUserFactors(factorType, factorSystem, factorMeasurement, factorValue) {
    // Initialize an object to hold the results
    const factors = {};
    // Declare a variable to hold the unit of measurement
    // Iterate over each item in the gravityFactors object
    for (let planet in gravityFactors) {
        // Calculate the factor multiplied by the input value and round
        factors[planet] = parseFloat((factorValue * gravityFactors[planet]).toFixed(2));
    }
    // Switch case to determine the measurement unit based on factor type
    const factorTypes = [undefined, "jump", "weight", "pushups"];
    // const measurementTypes = [undefined, "cm", { "metric": "kg", "imperial": "lbs" }, "repetitions"];
    const measurementTypes = {
        "1": [undefined, "cm", "kg", "repetitions"],
        "2": [undefined, "in", "lbs", "repetitions"]
    };
    // Iterate over the results and log each one
    for (let planet in factors) {
        let savedVar = parseInt(factorType);
        console.log(`Your ${factorTypes[savedVar]} on ${planet} is ${factors[planet]} ${measurementTypes[factorSystem][savedVar]}.`);
    }
}
//console.log(showUserFactors('jump', 150));

// Define a function to get user inputs for factor and value
function getUserInput() {
    // Prompt the user to enter the type of factor they want to calculate
    // Prompt the user to enter which type of system they want to measure in
    // Prompt the user to enter which measurement they desire
    // Prompt the user to enter the numerical value
    let factorType;
    let factorSystem;
    let factorMeasurement;
    let factorValue;
    // Call the showUserFactors function with the user inputs and the gravity
    while (true) {
        console.log(`Enter what type you want to measure (enter "1" for jump, "2" for weight, or "3" for pushups)...`);
        factorType = prompt(`>> `);
        if (parseInt(factorType) > 3 || parseInt(factorType) < 1) {
            console.log(`You made a mistake.`);
        } else { break; }
    }
    while (true) {
        console.log(`Enter what type of system you want to measure in (enter "1" for metric, or "2" for imperial)...`);
        factorSystem = prompt(`>> `);
        if (parseInt(factorSystem) > 2 || parseInt(factorSystem) < 1) {
            console.log(`You made a mistake.`);
        } else { break; }
    }
    while (true) {
        console.log(`Enter what type of measurement you desire (enter "1" for distance, or "2" for mass)...`);
        factorMeasurement = prompt(`>> `);
        if (parseInt(factorMeasurement) > 2 || parseInt(factorMeasurement) < 1) {
            console.log(`You made a mistake.`);
        } else { break; }
    }
    while (true) {
        console.log(`Enter the value of that factor on Earth as a number.`);
        factorValue = prompt(`>> `);
        if (isNaN(parseInt(factorValue))) {
            console.log(`You made a mistake.`);
        } else { break; }
    }
    showUserFactors(factorType, factorSystem, factorMeasurement, factorValue);

}
//Expose getUserInput globally
global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;