// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
let gravityFactors = require('./utils/earthGravityFactors.js');
let alienGravityFactors = require('./utils/alienGravityFactors.js');
let factorGalaxy;
// Define a function to show user factors based on input type and value
function showUserFactors(factorType, factorSystem, factorValue, factorGalaxy) {
    // Initialize an object to hold the results
    const factors = {};
    // Declare a variable to hold the unit of measurement
    // Iterate over each item in the gravityFactors object
    let galaxy = (factorGalaxy == 1) ? gravityFactors : alienGravityFactors;
    for (let planet in galaxy) {
        // Calculate the factor multiplied by the input value and round
        if (factorType != 2) {
            factors[planet] = parseFloat((factorValue / galaxy[planet]).toFixed(2));
        } else {
            factors[planet] = parseFloat((factorValue * galaxy[planet]).toFixed(2));
        }
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
    let factorSystem = 1;
    let factorValue;
    // Call the showUserFactors function with the user inputs and the gravity
    while (true) {
        console.log(`Enter what type you want to measure (enter "1" for jump, "2" for weight, or "3" for pushups)...`);
        factorType = prompt(`>> `);
        if (parseFloat(factorType) > 3 || parseFloat(factorType) < 1 || isNaN(factorType)) {
            console.log(`You made a mistake.`);
        } else { break; }
    }

    if (factorType != 3) {
        while (true) {
            console.log(`Enter what type of system you want to measure in (enter "1" for metric, or "2" for imperial)...`);
            factorSystem = prompt(`>> `);
            if (parseFloat(factorSystem) > 2 || parseFloat(factorSystem) < 1 || isNaN(factorType)) {
                console.log(`You made a mistake.`);
            } else { break; }
        }
    }
    while (true) {
        console.log(`Enter the value of that factor on Earth as a number.`);
        factorValue = prompt(`>> `);
        if (isNaN(factorValue)) {
            console.log(`You made a mistake.`);
        } else { break; }
    }
    while (true) {
        console.log(`Enter which galaxy you want to measure in (enter "1" for the milky way, or enter "2" for andromeda)...`);
        factorGalaxy = prompt(`>> `);
        if (parseFloat(factorGalaxy) > 2 || parseFloat(factorGalaxy) < 1 || isNaN(factorType)) {
            console.log(`You made a mistake.`);
        } else { break; }
    }
    showUserFactors(factorType, factorSystem, factorValue, factorGalaxy);

}
//Expose getUserInput globally
global.getUserInput = getUserInput;
getUserInput();