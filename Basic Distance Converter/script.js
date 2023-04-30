(function(){
    "use strict";

    document.getElementById('convert').addEventListener('submit', function(event){

        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        const myDiv = document.getElementById('answer');
    
        if (distance){

            const conversion = (distance * 1.60934).toFixed(3);

            myDiv.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers. </h2>`;
    
        }
        else{
            myDiv.innerHTML = '<h2>Please enter a valid distance.</h2>';
        }
    });
}());