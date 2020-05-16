const initialState = [{
    name: 'Chainsaw',
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
    // switch (action.type) {
    //     case TOGGLE_LOADER:
    //         state = { ...state, isLoaderShow: action.payload };
    //         break;
    // }
    return state;
}

export default models;