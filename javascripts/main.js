import { petsBuilder } from "./components/petComponent.js";
import { getPets } from "./data/petData.js";

const initializeApp = () => {
    getPets();

}

initializeApp();