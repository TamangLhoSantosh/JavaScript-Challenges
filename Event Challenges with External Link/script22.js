(function(){
    "use strict";

    const para = document.querySelector('p');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function(){
        para.style.color='green';
    });
}());