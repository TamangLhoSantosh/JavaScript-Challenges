(function(){

    "use strict";

    const myImages = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
    let currentImage = 0;
    
    document.getElementById('next').onclick = function(){
        currentImage ++;
        if (currentImage > myImages.length-1){
            currentImage = 0;
        }
    
        document.getElementById('myimage').src = myImages[currentImage];
        
    };
    
    const imgTag = document.querySelector('img');
    
    document.getElementById('previous').addEventListener("click", function(){
        currentImage --;
        if (currentImage < 0){
            currentImage = myImages.length-1;
        }
        imgTag.setAttribute('src', myImages[currentImage]);
    });

}());