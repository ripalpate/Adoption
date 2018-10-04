import { petsBuilder } from "../components/petComponent.js";

const sortPets= ()=> {
    if(type==="All") {
        petsBuilder(pets);
    } else {
        const filterpets = pets.filter(x=>x.type === type);
        petsBuilder(filterpets);
    }
}

const sortEvents = () => {
    const allButton = document.getElementById('All');
    const catButton = document.getElementById('Cats');
    const dogButton = document.getElementById('Dogs');
    const dinoButton = document.getElementById('Dinos');
    allButton.addEventListener('click', sortPets);
    catButton.addEventListener('click', sortPets);
    dogButton.addEventListener('click', sortPets);
    dinoButton.addEventListener('click', sortPets);
}

export{sortEvents};