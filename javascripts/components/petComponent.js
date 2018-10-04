import { printToDom } from "../helpers/util.js";

const pets= [
    {
        "id": "pet1",
        "name": "Dusty",
        "color": "Green",
        "specialSkill": "Gives sincere apologies.",
        "type": "cat",
        "imageUrl": "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
      },
      {
        "id": "pet2",
        "name": "Trouble",
        "color": "Poop-Colored",
        "specialSkill": "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
        "type": "dino",
        "imageUrl": "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg"
      },
      {
        "id": "pet3",
        "name": "Whiskers",
        "color": "Yellow",
        "specialSkill": "Can prove he is a real man by drinking whiskey.",
        "type": "dino",
        "imageUrl": "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
      }
];
const petsBuilder =() => {
    let domString = '';
    pets.forEach((pet)=>{
    domString +=`<div class="card border-success mb-3">`;
    domString +=    `<div class="card-header bg-transparent border-success">${pet.name}</div>`;
    domString +=    `<div class="card-body text-success">`;
    domString +=        `<img src="${pet.imageUrl}" alt="${pet.name}">`
    domString +=        `<h5 class="${pet.color}"</h5>`;
    domString +=        `<p class="card-text">${pet.specialSkill}</p>`;
    domString +=    `</div>`;
    domString +=    `<div class="card-footer bg-transparent border-success">${pet.type}</div>`
    domString +=`</div>`;
});
    printToDom(domString);
}

export{petsBuilder};