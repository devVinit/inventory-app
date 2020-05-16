const initialState = [{
    name: 'Chainsaw',
    description: 'Some description',
    creationDate: new Date(),
    inventoryId: 0,
    fields: [
        {
            name: 'Model Number',
            description: 'To vweify model number',
            dataType: 'text'
        },
        {
            name: 'Build Number',
            description: 'To vweify build number',
            dataType: 'text'
        }
    ]
}, {
    name: 'BullDozer',
    description: 'Some description',
    creationDate: new Date(),
    inventoryId: 1,
    fields: [
        {
            "name": "Orientation",
            "dataType": "text",
            "value": "hello"
          },
          {
              "name": "Height",
              "dataType": "text",
              "value": "hello2"
          }
    ]
}];

const models = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MODEL":
            state.push({
                inventoryId: state.length,
                creationDate: new Date(),
                ...action.payload
            });
            return [...state];
        default:
            return state;
    }
}

export default models;