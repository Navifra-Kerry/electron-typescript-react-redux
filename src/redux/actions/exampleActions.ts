import { Dispatch } from 'redux';
import { ActionTypes } from './actionTypes';
import { createPayloadAction, IPayloadAction, createAction } from './actionCreators';

export default interface IExampleActions {
    initialize();
}

export function initialize(): (dispatch: Dispatch) => Promise<void> {
    return (dispatch: Dispatch) => {
        dispatch(initializeAction());
        return Promise.resolve();
    };
}

export const initializeAction = createAction(ActionTypes.INIT_APP);
