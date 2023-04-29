(function(){
    "use strict";
    
    const bodyTag =document.querySelector('body');

    window.addEventListener('keydown', function(event){

        let keyPressed = event.key;

        switch(keyPressed){
            case "b": bodyTag.className='one';break;
            case "v": bodyTag.className='two';break;
            case "c": bodyTag.className='three';break;
            case "f": bodyTag.className='four';break;
            case "g": bodyTag.className='five';break;
            default: alert('You didn\'press one of the specified key!');
        }
    });
}());