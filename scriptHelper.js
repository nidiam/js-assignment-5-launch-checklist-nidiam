// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    let doc = document.getElementById("missionTarget");
    doc.innerHTML = `
    
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name:${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}"> `
   
}
function validateInput(testInput) {
    if (testInput == "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields required");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Needs to be a string");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Needs to be a number");
    } else if (fuelLevel < 10000 && cargoLevel < 10000) {
        faultyItems.style.visibility = "visible"
        launchStatus.style.color = "#C7254E"
        launchStatus.innerHTML = "Shuttle not ready for launch"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`
        fuelStatus.innerHTML = "Fuel level too low for launch"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
    
    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
        faultyItems.style.visibility = "visible"
        launchStatus.style.color = "#C7254E"
        launchStatus.innerHTML = "Shuttle not ready for launch"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
    
    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        faultyItems.style.visibility = "visible"
        launchStatus.style.color = "#C7254E"
        launchStatus.innerHTML = "Shuttle not ready for launch"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`
        fuelStatus.innerHTML = "Fuel level too low for launch"
        cargoStatus.innerHTML = "Cargo mass too heavy for launch"
    
    } else if (fuelLevel >= 10000 && cargoLevel < 10000) {
        faultyItems.style.visibility = "visible"
        launchStatus.style.color = "#419F6A"
        launchStatus.innerHTML = "Shuttle is ready for launch"
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch`
        fuelStatus.innerHTML = "Fuel level high enough for launch"
        cargoStatus.innerHTML = "Cargo mass low enough for launch"
        }
    
    }

  

async function myFetch() {
    let listedPlanetsResponse = await fetch("https://handlers.education.launchcode.org/static/planets.json") 
    let planetsReturned = await listedPlanetsResponse.json()
    return planetsReturned;
    }
        
 

function pickPlanet(listedPlanets) { 
  let index = Math.floor( Math.random() * listedPlanets.length)
   return listedPlanets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
