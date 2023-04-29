(function(){
    "use strict";

    const divT = document.getElementsByTagName('div');
    const btn = document.querySelector('button');
    

    btn.addEventListener('click', function(){
        const newP = document.createElement('p')
        const cont = document.createTextNode('This is a new paragraph.')

        newP.appendChild(cont);
        divT[0].appendChild(newP);
    });
}());