import {setPets, petsBuilder, getPetz} from "../components/petComponent.js";

function executeThisCodeAfterFileLoaded (){
    const data = JSON.parse(this.responseText);
    setPets(data.pets);
    petsBuilder(getPetz());
}
function executeThisCodeIfXhrFails() {
    console.log('error');
}

const getPets = () => {
    let myrequest = new XMLHttpRequest();
    myrequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myrequest.addEventListener('error', executeThisCodeIfXhrFails);
    myrequest.open('GET', './db/pets.json');
    myrequest.send();
}
export{getPets};