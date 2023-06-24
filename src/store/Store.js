import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from './allReducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
