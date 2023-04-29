(function(){
    "use strict";

    const paras = document.getElementsByTagName('p');
    const btn = document.querySelector('button');

    btn.addEventListener('click', function(){
        for (let eachPara of paras){
            eachPara.style.color='green';
        }
    });
}());