const initialState = [{
    inventoryId: 0,
    data: [
        [
            {
              "name": "modelNumber",
              "dataType": "text",
              "value": "hello"
            },
            {
                "name": "modelNumber",
                "dataType": "text",
                "value": "hello2"
            }
        ]
    ],
},{
    inventoryId: 1,
    data: [
        [
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
    ],
}];

const inventories = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_INVENTORY":
            state.push(action.payload);
            return [...state];
        case "ADD_INVENTORY_BY_ID":
            const currentInventoryAddIndex = state.findIndex(inventory => parseInt(inventory.inventoryId) === parseInt(action.payload.inventoryId));
            state[currentInventoryAddIndex].data.unshift(action.payload.values);
            return [...state];
        case "UPDATE_INVENTORY_BY_ID":
            const currentInventoryUpdateIndex = state.findIndex(inventory => parseInt(inventory.inventoryId) === parseInt(action.payload.inventoryId));
            state[currentInventoryUpdateIndex].data[action.payload.inventoryModelIndex] = action.payload.values;
            return [...state];
        case "DELETE_INVENTORY_BY_ID_FROM_INDEX":
            const currentInventoryDeleteIndex = state.findIndex(inventory => parseInt(inventory.inventoryId) === parseInt(action.payload.inventoryId));
            state[currentInventoryDeleteIndex].data.splice(action.payload.inventoryModelIndex, 1);
            return [...state];
        default:
            return state;
    }
}

export default inventories;