import { getPaint, getInterior, getTechnology, getWheels, getCustomOrders } from "./database.js"

//__________________________________________________
// code to generate html based on customer order

const buildOrderListItem = (order) => {

    //__________PaintPricing_________________
    const paints = getPaint()

// Remember that the function you pass to find() must return true/false
const foundPaint = paints.find(
    (paint) => {
        return paint.id === order.paintId
    }
);
    //____________InteriorPricing____________________

const interiors = getInterior()

const foundInterior = interiors.find(
    (interior) => {
        return interior.id === order.interiorId
    }
    );

    //_________TechPricing_______________________

    const technologies = getTechnology()

    const foundTechnology = technologies.find(
       (tech) => {
        return tech.id === order.technologyId
       }   
    );

    //_________WheelPricing_________________________

    const wheels = getWheels()

    const foundWheels = wheels.find(
       (wheel) => {
        return wheel.id === order.wheelId
       }   
    );


    //_______________TotalCost_____________________

    const totalCost = foundPaint.price + foundInterior.price + foundTechnology.price + foundWheels.price
        const costString = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        });

    //___________________________________________
    return `<li>
        Order #${order.id} cost ${costString}.
    </li>`
};

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
