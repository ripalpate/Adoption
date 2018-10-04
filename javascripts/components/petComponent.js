import { printToDom } from "../helpers/util.js";

let pets= [];

const setPets = (newArray) => {
    pets = newArray;
}

const getPetz = () => {
    return pets;
}

const petsBuilder =(petsArray) => {
    let domString = '';
    petsArray.forEach((pet)=>{
    domString +=`<div class="card border-success mb-3 col-3 pet-card" id="${pet.id}">`;
    domString +=    `<div class="card-header bg-transparent border-success">${pet.name}</div>`;
    domString +=    `<div class="card-body text-success">`;
    domString +=        `<img src="${pet.imageUrl}" alt="${pet.name}" width="200px" height="250px">`
    domString +=        `<h5 class="card-title">${pet.color}</h5>`;
    domString +=        `<p class="card-text">${pet.specialSkill}</p>`;
    domString +=    `</div>`;
    domString +=    `<div class="card-footer bg-transparent border-success">${pet.type}</div>`
    domString +=`</div>`;
});
    printToDom(domString);
}

export{petsBuilder,setPets, getPetz};