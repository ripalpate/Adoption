import { petsBuilder,pets } from "../components/petComponent.js";

// function to filter pets by type
const sortPets= (e)=> {
    const type= e.target.id;
    if(type==="all") {
        petsBuilder(pets);
    } else {
        const filteredpets = pets.filter(x=>x.type === type);
        petsBuilder(filteredpets);
    }
}

// function for type buttos on click
const sortEvents = () => {
    const allButton = document.getElementById('all');
    const catButton = document.getElementById('cat');
    const dogButton = document.getElementById('dog');
    const dinoButton = document.getElementById('dino');
    allButton.addEventListener('click', sortPets);
    catButton.addEventListener('click', sortPets);
    dogButton.addEventListener('click', sortPets);
    dinoButton.addEventListener('click', sortPets);
}

export{sortEvents};