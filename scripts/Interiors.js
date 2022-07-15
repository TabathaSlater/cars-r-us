//_Imports
import { getInterior } from "./database.js"
import {setInterior} from "./database.js"
let interiors = getInterior();

//__Create and export a function to generate a select element with child option elements as HTML representation of each object in the corresponding array.

export const Interiors = () => {
    let html = ""

    html += '<select id="interior">'
    html += '<option value="0">Select an interior package</option>'

    const arrayOfOptions = interiors.map( (interior) => {
            return `<option value="${interior.id}">${interior.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
};

//__Add Event Listener to React When Options Are Chosen

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id === 'interior') {
           setInterior(parseInt(event.target.value))
            }
        }
);