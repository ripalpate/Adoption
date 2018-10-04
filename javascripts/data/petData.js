function executeThisCodeAfterFileLoaded (){
    const data = JSON.parse(this.responseText);
    console.log(this.responseText);
}
function executeThisCodeIfXhrFails() {
    
}

const getPets = () => {
    let myrequest = new XMLHttpRequest();
    myrequest.addEventListener('load', executeThisCodeAfterFileLoaded);
    myrequest.addEventListener('error', executeThisCodeIfXhrFails);
    myrequest.open('GET', './db/pets.json');
    myrequest.send();
}
export{getPets};