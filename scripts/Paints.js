//__Imports_____________________
import { getPaint } from "./database.js";
import { setPaint } from "./database.js";
const paints = getPaint();
//_build and export a function to generate a select element that has child elements as HTML representations of each object in the corresponding array.

export const paintColors = () => {
    let html = ""

    html += '<select id="paint">'
    html += '<option value="0">Select a paint color</option>'

    const arrayOfOptions = paints.map( (paint) => {
            return `<option value="${paint.id}">${paint.color}</option>`
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
        if (event.target.id === "paint") {
            setPaint(parseInt(event.target.value))
            
        }
    }
);