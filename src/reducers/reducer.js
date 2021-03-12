import React from "react";

const CHANGE_NAVBAR = 'CHANGE_NAVBAR';
const CHANGE_THEME = 'CHANGE_THEME';


export let initialState = {
    isOpenNavBar: false,
    sectionsMenu: ['main', 'skills', 'projects', 'contacts'],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAVBAR: {
            return {...state, isOpenNavBar: action.isOpenNavBar}
        }
        // case CHANGE_THEME: {
        //     return {...state, changesTheme: action.changeTheme}
        // }
        default:
            return state
    }
}

export const changeNavBarAC = (isOpenNavBar) => ({type: CHANGE_NAVBAR, isOpenNavBar})
// export const changedThemeAC = (changeTheme) => ({type: CHANGE_THEME, changeTheme})

export default reducer;
