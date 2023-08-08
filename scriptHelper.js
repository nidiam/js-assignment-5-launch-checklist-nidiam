// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput == "") {
        return "empty";
    } else if (isNaN(testInput)) {
        return "not a number";
    } else if (!isNaN(testInput)) {
        return "is a number";
    } else if (testInput < 10000) {
        return "not enough fuel";
    } else if (testInput > 1000) {
        return "too much cargo";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "empty" || validateInput(copilot) === "empty" || validateInput(fuelLevel) === "empty" || validateInput(cargoLevel) === "empty") {
        alert("All fields required");
    } else if (validateInput(pilot) === "is a number" || validateInput(copilot) === "is a number") {
        alert("Needs to be a string");
    } else if (validateInput(fuelLevel) === "not a number" || validateInput(cargoLevel) === "not a number") {
        alert("Needs to be a number");
    } else if (validateInput(fuelLevel) === "not enough fuel") {
        alert("hello");
    } else if(validateInput (cargoLevel) === "too much cargo") {
        alert("too much")
    }
    
    // to do --check all forms are filled,--if not add window alert saying "all fields required"  make sure correct data type  
    // validate all correct type--set up an else if i.e if (validateInput) pilot == is a number == 
    // final else statement going into fuel levels and cargo levels --nested if else blocks
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
