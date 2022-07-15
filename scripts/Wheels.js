//_Imports
import { getWheels } from "./database.js";
import {setWheels} from "./database.js"
let wheels = getWheels();

//__Create and export a function to generate a select element with child option elements as HTML representation of each object in the corresponding array.

export const Wheels = () => {
    let html = ""

    html += '<select id="wheel">'
    html += '<option value="0">Select a wheel option</option>'

    const arrayOfOptions = wheels.map( (wheel) => {
            return `<option value="${wheel.id}">${wheel.type}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
};

//__Add Event Listener to React When Options Are Chosen

document.addEventListener(
    "change",
    (event) => {
        let itemClicked = event.target
        if (itemClicked.id === 'wheel') {
            setWheels(parseInt(event.target.value))
        }
    }
);