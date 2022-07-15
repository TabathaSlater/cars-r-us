const database = {
    paint: [{
        id: 1,
        color: "Silver",
        price: 10
    },{
        id: 2,
        color: "Midnight Blue",
        price: 30
    },{
        id: 3,
        color: "Firebrick Red",
        price: 50
    },{
        id: 4,
        color: "Spring Green",
        price: 70
    }],
    interior: [{
        id: 1,
        type: "Beige Fabric",
        price: 20
    },{
        id: 2,
        type: "Charcoal Fabric",
        price: 20
    },{
        id: 3,
        type: "White Leather",
        price: 50
    },{
        id: 4,
        type: "Black Leather",
        price: 50
    }],
    technology: [{
        id: 1,
        tech: "Basic Package",
        price: 0
    },{
        id: 2,
        tech: "Navigation Package",
        price: 90
    },{
        id: 3,
        tech: "Visibility Package",
        price: 50
    },{
        id: 4,
        tech: "Ultra Package",
        price: 115
    }],
    wheels: [{
        id: 1,
        type: '17-inch Pair Radial',
        price: 10
    },{
        id: 2,
        type: "17-inch Pair Radial black",
        price: 15
    },{
        id: 3,
        type: "18-inch Pair Spoke Silver",
        price: 25
    },{
        id: 4,
        type: "18-inch Pair Spoke Black",
        price: 45
    }],
    orderBuilder: {},
    customOrders: [
        {
            id: 1,
            paintId: 1,
            interiorId: 1,
            technologyId: 1,
            wheelId: 1
        }
    ]
};


//__Exports________________________

export const getPaint = () => {
    return database.paint.map(paint => ({...paint}))
};

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
};

export const getTechnology = () => {
    return database.technology.map(technology => ({...technology}))
};

export const getWheels = () => {
    return database.wheels.map(wheels => ({...wheels}))
};

export const getOrderBuilder = () => {
    return database.orderBuilder.map(orderBuilder => ({...orderBuilder}))
};

export const getCustomOrders = () => {
    return database.customOrders.map(customOrders => ({...customOrders}))
};

//_____Setter functions to pass object id to order object in database
export const setPaint = (id) => {
    database.orderBuilder.paintId = id
};

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
};

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
};

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
};

//_Function to take temporary choices being stored in order builder and make permanent

export const addCustomOrder = () => {
    // Copy the current state of user choices
    const newOrder = {...database.orderBuilder}

    //add a new primary key to the object
    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id + 1

    //add a timestamp
    newOrder.timestamp = Date.now()

    //add new order object to custom orders state
    database.customOrders.push(newOrder)

    //reset the temp state for user choices
    database.orderBuilder = {}

    //broadcast a notification that the permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
};