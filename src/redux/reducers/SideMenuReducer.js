const initialState = {
    isShowSideNenuBar: false
};

const sideMenuBar = (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return { ...state, isShowSideNenuBar: action.payload };
        default:
            return state;
    }
}

export default sideMenuBar;