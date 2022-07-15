import { getTechnology } from "./database.js";
import {setTechnology} from "./database.js"
let techs = getTechnology();

//__Create and export a function to generate a select element with child option elements as HTML representation of each object in the corresponding array.

export const Technologies = () => {
    let html = ""

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = techs.map( (tech) => {
            return `<option value="${tech.id}">${tech.tech}</option>`
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
        if (itemClicked.id === 'tech') {
         setTechnology(parseInt(event.target.value))
            }
        }
);