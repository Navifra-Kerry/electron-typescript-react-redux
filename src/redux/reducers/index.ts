import { combineReducers } from 'redux';
import * as exampleReducer from './exampleReducer';

export default combineReducers({
    example: exampleReducer.reducer,
});
