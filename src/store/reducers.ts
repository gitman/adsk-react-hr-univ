import { ActionTypes, IAppState } from './types';

const initialState:IAppState = {
    modalShowing: false,
    showLoginForm: true,
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

export const modalShowing = (state=initialState.modalShowing, action:any):boolean => {
    switch (action.type) {
        case ActionTypes.SHOW_MODAL:
            return true;
        case ActionTypes.HIDE_MODAL:
            return false;
        default:
            return state;
        }
}