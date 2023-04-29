(function(){
    "use strict";
    
    let i = 1;
    const divT = document.getElementsByTagName('div');
    const btn = document.querySelector('button');
    

    btn.addEventListener('click', function(){
        i ++;
        const newP = document.createElement('p')
        const cont = document.createTextNode('This is paragraph ' + i +'.')

        newP.appendChild(cont);
        divT[0].appendChild(newP);
    });

    const btn_remove = document.getElementsByTagName('button')[1];

    btn_remove.addEventListener('click', function(){
        
        const paras = document.getElementsByTagName('p');
        
        if (i === 1){
            alert('You are trying to delete last paragraph.');
        }
        else{
            i --;
            divT[0].removeChild(paras[paras.length - 1]);
        }
    });
}());