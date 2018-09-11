import { ActionTypes, IAppState } from './types';

const initialState:IAppState = {
    showLoginForm: true,
    showUserData: false,
    userData: {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      username: ''
    }
}

export const showLoginForm = (state=initialState.showLoginForm, action:any):boolean => {
    switch (action.type) {
    case ActionTypes.TOGGLE_LOGIN_FORM:
        return !state;
    case ActionTypes.HIDE_LOGIN_FORM:
        return false;
    default:
        return state;
    }
}

export const userData = (state=initialState.userData, action:any):any => {
    switch (action.type) {
    case ActionTypes.SET_USER_DATA:
        return action.payload;
    default:
        return state;
    }
}

export const showUserData = (state=initialState.showUserData, action:any):boolean => {
    switch (action.type) {
        case ActionTypes.SHOW_USER_DATA:
            return true;
        case ActionTypes.HIDE_USER_DATA:
            return true;
        default:
            return state;
        }
}