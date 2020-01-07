import React from "react";

const CHANGE_NAVBAR = 'CHANGE_NAVBAR';


const initialState = {
    isOpenNavBar: false,
    sectionsMenu: ['main', 'skills', 'projects', 'contacts'],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAVBAR: {
            return {...state, isOpenNavBar: action.isOpenNavBar}
        }
        default:
            return state
    }
}

export const changeNavBarAC = (isOpenNavBar) => ({type: CHANGE_NAVBAR, isOpenNavBar})

export default reducer;
