// Write your JavaScript code here!


window.addEventListener("load", function() {
   
    let form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
   form.addEventListener("submit", function(event) {
    event.preventDefault();
    const pilot = document.querySelector("input[name=pilotName]").value;
    const copilot = document.querySelector("input[name=copilotName]").value;
    const fuelLevel = Number(document.querySelector("input[name=fuelLevel]").value);
    const cargoLevel = Number(document.querySelector("input[name=cargoMass]").value);
      
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
        });
    
         
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
// TO DO:  define variable assign it to data returned by pick planet function (listed planets )the my function
       let planets = pickPlanet(listedPlanets);
       console.log(planets);
       addDestinationInfo(document, planets.name, planets.diameter, planets.star, planets.distance, planets.moons, planets.image);
       
    });
    
           

    });