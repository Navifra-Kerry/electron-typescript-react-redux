import { ActionTypes } from '../actions/actionTypes';
import { AnyAction } from 'redux';
const initialstae = {
    Message: '',
};

export const reducer = (state = { ...initialstae }, action: AnyAction) => {
    switch (action.type) {
        case ActionTypes.INIT_APP:
            return { ...state, Message: 'Good Hack!' };
        default:
            return state;
    }
};
