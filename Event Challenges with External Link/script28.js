(function(){
    "use strict";
    
    const mouse = document.querySelector('div');
    const change = document.querySelector('h1')

    mouse.addEventListener('mouseover', function(){
        change.className="big";
    });

    mouse.addEventListener('mouseout', function(){
        change.removeAttribute("class");
    });
}());