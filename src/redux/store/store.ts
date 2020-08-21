import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from '../reducers';
import reduxThunk from 'redux-thunk';

const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const middleware = [reduxThunk];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
