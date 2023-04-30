(function(){
    "use strict";

    const detailFrom = document.querySelector('#destination_details_form');

    detailFrom.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event){
        event.preventDefault();

        // extract the value from each form fields
        const destName = event.target.elements['name'].value;
        const destLocation = event.target.elements['location'].value;
        const destPhoto = event.target.elements['photo'].value;
        const destDescription = event.target.elements['description'].value;

        // clear out the form fields
        for(let i = 0; i < detailFrom.length -1; i++){
            detailFrom.elements[i].value = "";
        }

        // run a funcition that creates a new card
        const destCard = createDestinationCard(destName, destLocation, destPhoto, destDescription);

        // if needed, change the header at the top of the destination list
        const wishListContainer = document.getElementById('destination_container');

        if (wishListContainer.children.length===0){
            document.getElementById('title').innerHTML = "My Wish List.";
        }

        // add the card
        wishListContainer.appendChild(destCard);
    }

    function createDestinationCard(name, location, photoURL, description){
        const card = document.createElement('div');
        card.className = 'card';

        const image = document.createElement('img');
        image.setAttribute('alt', name);
        
        if (photoURL.length === 0){
            image.setAttribute('src', "images/signpost.jpg");
        }
        else{
            image.setAttribute('src', photoURL);
        }
        card.appendChild(image);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        
        const cardTitle = document.createElement('h3');
        cardTitle.innerHTML = name;
        cardBody.appendChild(cardTitle);

        const cardSubTitle = document.createElement('h3');
        cardSubTitle.innerHTML = location;
        cardBody.appendChild(cardSubTitle);

        if (description !==0){
            const cardDescription = document.createElement('p');
            cardDescription.innerHTML = description;
            cardBody.appendChild(cardDescription);
        }

        const cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerHTML = 'Remove';
        cardDeleteBtn.addEventListener('click', removeDestination)
        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;
    }

    function removeDestination(event){
        let card = event.target.parentElement.parentElement;
        card.remove();
    }
}());