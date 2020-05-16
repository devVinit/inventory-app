const initialState = [{
    name: 'Chainsaw',
    creationDate: new Date(),
},{
    name: 'BullDozer',
    creationDate: new Date(),
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