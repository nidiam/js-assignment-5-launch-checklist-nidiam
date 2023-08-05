// Write your JavaScript code here!

window.addEventListener("load", function() {
    window.alert("All fields required");
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
    const formResponse = document.querySelector("form") 
    formResponse.addEventListener("submit", function (event) {
        event.preventDefault();
    //  TO DO: get all inputs from each input filled --create variable that matches the function (form submission) definition and assign values to each variable
        // Call form submission function and pass all required variables through it 
        const formResponse = document.querySelector("pilot")  
        formResponse.addEventListener("submit", function () {
            
        });
    });
});