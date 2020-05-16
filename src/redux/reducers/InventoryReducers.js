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
    data: [],
}];

const inventories = (state = initialState, action) => {
    // switch (action.type) {
    //     case TOGGLE_LOADER:
    //         state = { ...state, isLoaderShow: action.payload };
    //         break;
    // }
    return state;
}

export default inventories;