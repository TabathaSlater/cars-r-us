//imports
import { carFactory } from "./car-factory.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = carFactory()
}

renderAllHTML()

//_______Custom Event Listener

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
});