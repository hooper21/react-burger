import { ACTION_TYPES } from "../action-types";
import { TAccountActions } from "../actions/account";
import { TUser } from '../../utils/types'

type TAccountState = {
    user: TUser | null,
    loading: boolean,
    error: string | null,
};


const initialState: TAccountState = {
    user: null,
    loading: false,
    error: null,
};

export const accountReducer = (state = initialState, action: TAccountActions) => {

    switch (action.type) {
        
        case ACTION_TYPES.USER_REQUEST_SENT:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ACTION_TYPES.USER_REQUEST_FAILED:
            return {
                ...state,
                loading: false,
                error: action.error,
            };


        case ACTION_TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                user: (action.user) ? { ...state.user, ...action.user} : null,
                loading: false,
                error: null,
            };
            
        case ACTION_TYPES.LOGOUT_USER:
            return {
                ...state,
                user: null,
                loading: false,
                error: null,
            };
        
        case ACTION_TYPES.REGISTER_SUCCESS:
            return {
                ...state,
                user: (action.user) ? { ...state.user, ...action.user} : null,
                loading: false,
                error: null,
            };
        
        case ACTION_TYPES.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        
        case ACTION_TYPES.GET_USER_INFO_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
            };
        
        case ACTION_TYPES.SET_USER_INFO_SUCCESS:
            return {
                user: (action.user) ? { ...state.user, ...action.user} : null,
                loading: false,
                error: null,
            };

        default:
            return state;

    };

};
