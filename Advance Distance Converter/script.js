(function(){
    "use strict";

    let conversion = 'Kilometer';
    const heading = document.querySelector('h1');
    const para = document.querySelector('p');
    const convert = document.getElementById('convert');
    const answer = document.getElementById('answer');

    document.addEventListener('keydown', function(event){
        if(event.key==="k" || event.key==="K"){
            conversion = 'Kilometer';

            heading.innerHTML='MILES TO KILOMETER CONVERTER';
            para.innerHTML='Type in a number of miles and click the button to convert the distance to kilometers.';

        }
        else if(event.key==="m" || event.key==="M"){
            conversion = 'Mile';

            heading.innerHTML='KILOMETER TO MILES CONVERTER';
            para.innerHTML='Type in a number of kilometers and click the button to convert the distance to miles.';
        }
    });

    convert.addEventListener('submit', function(event){
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);

        if (distance){
            if (conversion==='Kilometer'){
                const converted = (distance * 1.609344).toFixed(3);
                answer.innerHTML=`<h2>${distance} miles is convertes to ${converted} kilometers.</h2>`;
            }
            else if (conversion==='Mile'){
                const converted = (distance * 0.621371).toFixed(3);
                answer.innerHTML=`<h2>${distance} kilometers is convertes to ${converted} miles.</h2>`;
            }
        }
        else{
            answer.innerHTML = '<h2>Enter valid number.</h2>'
        }
    });
}());