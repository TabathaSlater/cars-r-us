// __Imports______________

import {Technologies} from "./Technologies.js"
import {paintColors} from "./Paints.js"
import {Interiors} from "./Interiors.js"
import {Wheels} from "./Wheels.js"

// This is where the HTML is assembled

document.addEventListener(
    "click",
    (event) => {
        const itemClicked = event.target
        if (itemClicked.id === 'orderButton') {
            addCustomOrder()
        }
    }
)

export const carFactory = () => {
    return `
        <h1>Cars-r-Us</h1>

        <article class="choices">
            <section class="choices__paint options">
                <h2>Paint</h2>
                ${paintColors()}
            </section>
            <section class="choices__interior options">
                <h2>Interior</h2>
                ${Interiors()}
            </section>
            <section class="choices__technology options">
                <h2>Technology</h2>
                ${Technologies()}
            </section>
            <section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        `
};
        // <article class="customOrders">
        //     <h2>Custom Car</h2>
        //     ${}
        // </article>
